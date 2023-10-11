"use client";

import { Button } from "@/universal";
import { FC } from "react";

interface IWaDeepLink {
  phoneNo: string;
  btnText: string;
  message?: string;
  groupLink?: string;
}

export const WhatsAppLink: FC<IWaDeepLink> = ({
  phoneNo,
  btnText,
  message,
  groupLink,
}) => {
  // Component or Button click handler
  const openWhatsappChat = () => {
    const messageToSend = encodeURIComponent(message || "");
    const url = phoneNo
      ? `https://wa.me/+88${phoneNo}?text=${messageToSend}`
      : groupLink
      ? `https://chat.whatsapp.com/${groupLink}`
      : "";
    // const url = `https://chat.whatsapp.com/your-group-link`;

    window.open(url, "_blank");
  };

  return (
    <Button variant="secondary" onClick={openWhatsappChat}>
      {btnText}
    </Button>
  );
};

// `

// Hi...Md Nuralam Hossen

// আপনার স্টুডেন্ট আইডি:5177425

// আমি কনসালটেন্ট মিটিং এর জন্য আপনার আবেদনপত্র পেয়েছি

// আমি আপনাকে ফ্রিতে বিস্তারিত জানিয়ে দিবো।এবং আরো কাজের বিষয়ে জানার জন্য আপনাকে একটা কনসালটেন্ট মিটিং এ জইন করতে হবে।

//               বাংলাদেশ মিটিং সময়

//               11:00am       2:30pm

//               5:00pm          7:00pm
//                            9:00pm
// উপরের সময় গুলো থেকে আপনার ফ্রি সময় টা বলুন যে সময় আপনি মিটিং এ জইন করতে পারবেন।

// আমি আপনার কনসালটেন্ট
// From
// Lifechange Bd e-learning platform

// `
