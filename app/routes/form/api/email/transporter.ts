import nodemailer from "nodemailer";

// Create a transporter using SMTP
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: 'ehteshamsheikh598@gmail.com',
    pass: 'gfzf zwxk rdkf jvvq',
  },
});
