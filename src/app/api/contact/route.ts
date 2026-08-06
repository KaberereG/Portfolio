import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { isRateLimited } from '@/app/lib/rateLimit';

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown';

    if (isRateLimited(ip)) {
        return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }
    const { name, email, subject,message, website } = await request.json();
    
    // Honeypot tripped — pretend success so bots don't learn to skip this field
    if (website){
        return NextResponse.json({ success: true });
    }

    if (!name || !email || !message){
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
        from : `"${name}" <${process.env.SMTP_USER}>`, 
        replyTo: email, 
        to: process.env.CONTACT_TO_EMAIL, 
        subject: `[Portfolio] ${subject || 'General Connection'}`, 
        text: `From: ${name} <${email}>\n\n${message}`, 
        html: `
        <p><strong>From:</strong> ${name} (${email})</p>
        <p><strong>Subject:</strong> ${subject || 'General Connection'}</p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return NextResponse.json({success : true});   

    }catch (error){
        console.error('Contact form error:', error)
        return NextResponse.json({error: 'Failed to send message'}, {status: 500});
    }
}