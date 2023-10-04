// import nodemailer from "nodemailer";
import { User } from "@/models";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    // create a hased token
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    console.log("Email: ", email);
    console.log("Email Type: ", emailType);
    console.log("hashedToken: ", hashedToken);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    // const transporter = nodemailer.createTransport({
    //   service: "gmail",
    //   //   port:2333,
    //   auth: {
    //     user: process.env.MAIL_ID,
    //     pass: process.env.MAIL_PASSWORD,
    //   },
    // });

    // const mailOptions = {
    //   from: process.env.MAIL_ID,
    //   to: email,
    //   subject:
    //     emailType === "VERIFY" ? "Verify your email" : "Reset your password",
    //   html: `<p>Click <a href="${
    //     process.env.BASE_URL
    //   }/verifyemail?token=${hashedToken}">here</a> to ${
    //     emailType === "VERIFY" ? "verify your email" : "reset your password"
    //   }
    //         or copy and paste the link below in your browser. <br> ${
    //           process.env.BASE_URL
    //         }/verifyemail?token=${hashedToken}
    //         </p>`,
    // };

    // const mailresponse = await transporter.sendMail(mailOptions);
    // return mailresponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
