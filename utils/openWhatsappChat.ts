export const openWhatsappChat = (
  phoneNo?: string,
  message?: string,
  groupLink?: string
) => {
  const messageToSend = encodeURIComponent(message || "");
  const url = phoneNo
    ? `https://wa.me/+88${phoneNo}?text=${messageToSend}`
    : groupLink
    ? `https://chat.whatsapp.com/${groupLink}`
    : "";
  // const url = `https://chat.whatsapp.com/your-group-link`;

  window.open(url, "_blank");
};
