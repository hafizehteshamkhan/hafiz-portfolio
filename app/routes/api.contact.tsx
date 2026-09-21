import React from "react";
import { transporter } from "~/routes/form/api/email/transporter";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  try {
    await transporter.sendMail({
      from: `${email}`,
      to: "ehteshamsheikh598@gmail.com",
      subject: "FrontEnd email by portfolio",
      html: `<b>Name: ${name}</b>
        <br/>
        <b>Email: ${email}</b>
        <br/>
        <b>Message: ${message}</b>
        `,
    });

    return { success: true };
  } catch (err) {
    console.error("Error while sending mail:", err);
    return { success: false };
  }
};

export default function apiContact() {
  return <div>api.contact</div>;
}
