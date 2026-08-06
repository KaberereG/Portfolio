import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { isRateLimited } from '@/app/lib/rateLimit';

export async function POST(request: NextRequest) {
    try {
        const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown';

        if (isRateLimited(ip)) {
            return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
        }
        const { platform, scope, designStyle, timeline, clientEmail, clientMessage, website, blueprint } = await request.json();

        // Honeypot tripped — pretend success so bots don't learn to skip this field
        if (website) {
            return NextResponse.json({ success: true });
        }

        if (!platform || !scope || !designStyle || !timeline || !clientEmail) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"${process.env.SMTP_USER}" <${process.env.SMTP_USER}>`,
            replyTo: clientEmail,
            to: process.env.CONTACT_TO_EMAIL,
            subject: `[Project] ${scope || 'project inquiry'} from ${clientEmail}`,
            text: `From: ${clientEmail}

            Platform: ${platform}
            Scope: ${scope}
            Design Style: ${designStyle}
            Timeline: ${timeline}

            Blueprint:
            - Architecture: ${blueprint?.arch ?? 'N/A'}
            - Database: ${blueprint?.database ?? 'N/A'}
            - DevOps: ${blueprint?.devops ?? 'N/A'}
            - Estimate: ${blueprint?.estimate ?? 'N/A'}

            Message:
            ${clientMessage || 'No additional details provided.'}`,
                        html: `
            <p><strong>From:</strong> ${clientEmail}</p>
            <p><strong>Platform:</strong> ${platform || 'Platform'}</p>
            <p><strong>Scope:</strong> ${scope || 'Scope'}</p>
            <p><strong>Design Style:</strong> ${designStyle || 'Design Style'}</p>
            <p><strong>Timeline:</strong> ${timeline || 'Timeline'}</p>
            <hr/>
            <p><strong>Generated Blueprint</strong></p>
            <ul>
            <li><strong>Architecture:</strong> ${blueprint?.arch ?? 'N/A'}</li>
            <li><strong>Database:</strong> ${blueprint?.database ?? 'N/A'}</li>
            <li><strong>DevOps:</strong> ${blueprint?.devops ?? 'N/A'}</li>
            <li><strong>Estimate:</strong> ${blueprint?.estimate ?? 'N/A'}</li>
            </ul>
            <hr/>
            <p><strong>Message:</strong></p>
            <p>${(clientMessage || 'No additional details provided.').replace(/\n/g, '<br/>')}</p>
        `,
            });

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Project error:', error)
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }
}