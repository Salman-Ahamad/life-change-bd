"use client";

import React, { FC } from "react";
import { Button } from "@/universal";

interface IWaDeepLink {
  phoneNo?: string;
  message?: string;
  groupLink?: string;
}

export const WhatsAppLink: FC<IWaDeepLink> = ({
  phoneNo,
  message,
  groupLink,
}) => {
  // Component or Button click handler
  const openWhatsappChat = () => {
    const messageToSend = encodeURIComponent(message || "");
    const url = phoneNo
      ? `https://wa.me/${phoneNo}?text=${messageToSend}`
      : groupLink
      ? `https://chat.whatsapp.com/${groupLink}`
      : "";
    // const url = `https://chat.whatsapp.com/your-group-link`;

    window.open(url, "_blank");
  };

  return (
    <Button variant="secondary" onClick={openWhatsappChat}>
      Send WA Message
    </Button>
  );
};
