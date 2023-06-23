import * as nodemailer from 'nodemailer';

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const body = await request.json();

    const message = {
        from: body.email,
        to: process.env.NEXT_PUBLIC_SMTP_EMAIL,
        subject: 'Contato Site 366',
        html: `<p>Nome: ${body.name}</p><p>E-mail: ${body.email}</p><p>Celular: ${body.phone}</p><p>Mensagem: ${body.message}</p>`,
    };

    const transporter = nodemailer.createTransport({
        // @ts-ignore
        host: process.env.NEXT_PUBLIC_SMTP_HOST,
        service: process.env.NEXT_PUBLIC_SMTP_SERVICE,
        port: parseInt(process.env.NEXT_PUBLIC_SMTP_PORT || '465', 10),
        secure: process.env.NEXT_PUBLIC_SMTP_SECURE,
        auth: {
            user: process.env.NEXT_PUBLIC_SMTP_EMAIL,
            pass: process.env.NEXT_PUBLIC_SMTP_PASS,
        },
    });

    try {
        transporter.sendMail(message);
    } catch (err) {
        return NextResponse.json({ status: 400 });
    }

    return NextResponse.json({ status: 200 });
}
