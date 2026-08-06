import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject,message } = await request.json();

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