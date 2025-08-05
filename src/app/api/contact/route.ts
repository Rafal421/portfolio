import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Verify reCAPTCHA
async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      {
        method: "POST",
      }
    );
    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error("Recaptcha verification failed:", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, recaptchaToken } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: "Please verify you are human" },
        { status: 400 }
      );
    }
    const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
    if (!isRecaptchaValid) {
      return NextResponse.json({ error: "Invalid recaptcha" }, { status: 400 });
    }

    // Configure nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number.parseInt(process.env.SMTP_PORT || "465"),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM_EMAIL,
      to: process.env.SMTP_TO_EMAIL,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: 'Inter', sans-serif; max-width: 600px; margin: 0 auto; background-color: #1a1a1a; border-radius: 12px; overflow: hidden; border: 1px solid #2a2a2a; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);">
          <div style="padding: 30px; text-align: center; background-color: #252525; border-bottom: 1px solid #333333;">
            <h2 style="color: #ffffff; font-size: 28px; margin-bottom: 10px; font-weight: bold;">
              New Contact Form Submission
            </h2>
            <p style="color: #a0a0a0; font-size: 16px;">
              You've received a new message from your portfolio website.
            </p>
          </div>

          <div style="padding: 30px; background-color: #1a1a1a;">
            <div style="background-color: #2a2a2a; padding: 25px; border-radius: 8px; margin-bottom: 25px; border: 1px solid #333333;">
              <h3 style="color: #8b5cf6; font-size: 20px; margin-top: 0; margin-bottom: 15px; font-weight: bold;">
                Contact Details
              </h3>
              <p style="color: #e0e0e0; margin-bottom: 10px; font-size: 15px;">
                <strong>Name:</strong> <span style="color: #a0a0a0;">${name}</span>
              </p>
              <p style="color: #e0e0e0; margin-bottom: 10px; font-size: 15px;">
                <strong>Email:</strong> <span style="color: #a0a0a0;">${email}</span>
              </p>
              <p style="color: #e0e0e0; margin-bottom: 0; font-size: 15px;">
                <strong>Subject:</strong> <span style="color: #a0a0a0;">${subject}</span>
              </p>
            </div>

            <div style="background-color: #2a2a2a; padding: 25px; border-radius: 8px; border: 1px solid #333333;">
              <h3 style="color: #8b5cf6; font-size: 20px; margin-top: 0; margin-bottom: 15px; font-weight: bold;">
                Message
              </h3>
              <p style="line-height: 1.8; color: #e0e0e0; font-size: 15px;">
                ${message.replace(/\n/g, "<br>")}
              </p>
            </div>
          </div>

          <div style="padding: 20px; text-align: center; background-color: #252525; border-top: 1px solid #333333; font-size: 13px; color: #6c757d; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px;">
            <p style="margin: 0;">
              This email was sent from your portfolio contact form at <span style="color: #a0a0a0;">${new Date().toLocaleString()}</span>.
            </p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message:
        ${message}
        Sent at: ${new Date().toLocaleString()}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
