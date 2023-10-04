import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";
import { Axios, loadingToast } from ".";
import { toast } from "react-toastify";

export default async function sendEmail({ email, emailType, userId }: any) {
  try {
    // create a hased token
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      const id = toast.loading("Profile Updating...");

      await Axios.patch("/user", {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      })
        .then(({ data }) => {
          if (data.data) {
            loadingToast(id, data.message, "success");
          }
        })
        .catch(({ response }) => {
          loadingToast(id, response.data.message, "error");
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
    console.log("Error: ", error);

    // throw new Error(error.message);
  }
}
