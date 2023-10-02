import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  try {
    const body = await req.json(); // Parse the request body as JSON

    if (!body.email) {
      // Return a 400 Bad Request response if 'email' is missing in the request body.
      return NextResponse.error({
        status: 400,
        message: "Email is missing in the request body",
      });
    }

    const { email, subject, message } = body;

    const data = await resend.emails.send({
      from: fromEmail,
      to: ["tiwari.ks@northeastern.edu", email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thanks for getting in touch!</p>
          <p>A new message is submitted:</p>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.error({ status: 500, message: error.message });
  }
}




