"use server";

import nodemailer from "nodemailer";

type SendMail = {
  name: string;
  email: string;
  message: string;
};

const sendMail = async ({ name, email, message }: SendMail): Promise<void> => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 465,
    secure: process.env.NODE_ENV === "production",
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.USER_PASSWORD,
    },
  });

  await transporter.sendMail(
    {
      from: email,
      to: process.env.USER_EMAIL,
      subject: "Mail From Portfolio Visitor!",
      html: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email From Portfolio Visitor!</title>
  </head>
  <body style="margin: 0; padding: 0; font-family: Arial, sans-serif">
    <table
      width="100%"
      border="0"
      cellpadding="0"
      cellspacing="0"
      style="background-color: #000000; padding: 20px"
    >
      <tr>
        <td>
          <table
            width="600"
            border="0"
            cellpadding="0"
            cellspacing="0"
            align="center"
            style="background-color: #ffffff; padding: 20px; border-radius: 5px"
          >
            <!-- Header -->
            <tr>
              <td align="center" style="padding-bottom: 20px">
                <h1 style="font-size: 24px; color: #333333">
                  Mail From Portfolio Visitor!
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 30px; color: #333333">
                <p style="font-size: 16px; line-height: 1.6">
                  <strong>Name: ${name}</strong>
                </p>
                <p style="font-size: 16px; line-height: 1.6">
                  <strong>Email: ${email}</strong>
                </p>
                <p style="font-size: 16px; line-height: 1.6">
                  <b>Message: ${message}</b>
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`,
    },
    (error) => {
      if (error) {
      }
    }
  );
};

export default sendMail;
