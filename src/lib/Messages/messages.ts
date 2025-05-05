import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSKEY,
  },
});

export const sendMessageToAmin = async (
  email: string,
  message: string,
  name: string
) => {
  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "New message from " + name,
    text: `${message} \n \n ${email}`,
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return {
      success: true,
      message: "Message sent successfully",
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: "Message not sent",
    };
  }
};
