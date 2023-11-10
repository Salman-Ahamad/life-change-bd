"use client";

import { updateData } from "@/hooks";
import { ISendWish, IWaDeepLink, IWaShareLink } from "@/interface";
import { Button } from "@/universal";
import { openWhatsappChat } from "@/utils";
import { FC } from "react";
import { FaShareSquare } from "react-icons/fa";

export const WhatsAppLink: FC<IWaDeepLink> = ({
  phoneNo,
  btnText,
  message,
  groupLink,
}) => {
  return (
    <Button
      variant="secondary"
      onClick={() => openWhatsappChat(phoneNo, message, groupLink)}
    >
      {btnText}
    </Button>
  );
};

export const SendWishMessage: FC<ISendWish> = ({
  phoneNo,
  btnText,
  message,
  groupLink,
  data,
  userId,
}) => {
  const handleSendWish = () => {
    updateData(`/send-wish?id=${userId}`, {
      ...data,
    }).then(() => openWhatsappChat(phoneNo, message, groupLink));
  };
  return (
    <Button variant="secondary" onClick={handleSendWish}>
      {btnText}
    </Button>
  );
};

export const ShareReferLink: FC<IWaShareLink> = ({
  phoneNo,
  btnText,
  message,
  groupLink,
  userId,
}) => {
  const handleSendWish = () => {
    const referalLink = `https://lifechangebd.com/signup?referral=${userId}`;
    openWhatsappChat(phoneNo, referalLink, groupLink);
  };
  return (
    <Button
      variant="secondary"
      onClick={handleSendWish}
      className="flex gap-2 justify-center items-center md:py-2 w-full"
    >
      {btnText}
      <FaShareSquare className="" />
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
