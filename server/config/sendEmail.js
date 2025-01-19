// send mail with nodemailer
import { Resend } from "resend";
import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer";

var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "19ef880ed4a76d",
    pass: "e4567d91c7d2c6",
  },
});

const sendEmailWithNodemailer = async ({ sendTo, subject, html }) => {
  // send mail with defined transport object
  const info = await transport.sendMail({
    from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>',
    to: sendTo, // list of receivers
    subject: subject, // Subject line
    text: "Hello world?", // plain text body
    html: html, // html body
  });
};

export default sendEmailWithNodemailer;

// send mail with resend email
if (!process.env.RESEND_API) {
  console.log("Provide RESEND_API in side the .env file");
}

const resend = new Resend(process.env.RESEND_API);

const sendEmail = async ({ sendTo, subject, html }) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "Binkeyit <noreply@amitprajapati.co.in>",
      to: sendTo,
      subject: subject,
      html: html,
    });

    if (error) {
      return console.error({ error });
    }

    return data;
  } catch (error) {
    console.log(error);
  }
};

export { sendEmail, sendEmailWithNodemailer };
