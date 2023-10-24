import { NextRequest, NextResponse } from "next/server";
import { createTransport } from "nodemailer";

export async function POST(req: NextRequest, res: NextResponse) {
  const requestBody = await req.json();
  const { title, formDescription } = requestBody;

  var transport = createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const toHostMailData = {
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
    subject: "問い合わせがありました",
    text: `以下の内容でサイトにお問い合わせがありました\nタイトル: ${title}\n内容: ${formDescription}`,
  };

  transport.sendMail(toHostMailData, (err, info) => {
    if (err) console.log(err);
    else console.log(info);
  });
}
