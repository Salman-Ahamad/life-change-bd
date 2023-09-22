import { IFooterData, INaveData } from "@/interface";

export const navData: INaveData = {
  common: [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About",
      link: "/",
    },
    {
      label: "Contact",
      link: "/",
    },
    {
      label: "Courses",
      link: "/",
    },
  ],
  inActive: [
    {
      label: "Profile",
      link: "/",
    },
    {
      label: "Courses",
      link: "/",
    },
    {
      label: "Referances",
      link: "/",
    },
    {
      label: "Collect Points",
      link: "/",
    },
    {
      label: "Earn Reward Points",
      link: "/",
    },
    {
      label: "Redeem Reward Points",
      link: "/",
    },
    {
      label: "Messages",
      link: "/",
    },
    {
      label: "Redeem Partner Training Class",
      link: "/",
    },
    {
      label: "Photo Zone",
      link: "/",
    },
  ],
  active: [
    {
      label: "Profile",
      link: "/user/active/profile",
    },
    {
      label: "Courses",
      link: "/user/courses",
    },
    {
      label: "References",
      link: "/user/ref-list",
    },
    {
      label: "Instant Redeem",
      link: "/user/instant-redeem",
    },
    {
      label: "Messages",
      link: "/user/messages",
    },
    {
      label: "Transfer Points",
      link: "/user/transfer-points",
    },
    {
      label: "Photo Zone",
      link: "/user/photo-zone",
    },
    {
      label: "Video Zone",
      link: "/player",
    },
    {
      label: "Logout",
      link: "/user/",
    },
  ],
  profile: [
    {
      label: "Back",
      link: "/user/active",
    },
    {
      label: "Withdrawal",
      link: "/user/active/withdrawal",
    },
    {
      label: "Points",
      link: "/courses",
    },
    {
      label: "Edit Profile",
      link: "/user/ref-list",
    },
    {
      label: "Document Verification",
      link: "/user/ref-list",
    },
    {
      label: "Passbook",
      link: "/user/ref-list",
    },
    {
      label: "Redeem List/hist",
      link: "/user/ref-list",
    },
    {
      label: "Instant Redeem",
      link: "/user/ref-list",
    },
    {
      label: "Photo Zone",
      link: "/user/ref-list",
    },
    {
      label: "Logout",
      link: "/user/",
    },
  ],
  withdrawal: [
    {
      label: "Profile",
      link: "/user/active/profile",
    },
    {
      label: "Change Payment Method",
      link: "/user/payment-method",
    },
    {
      label: "Passbook",
      link: "/user/passbook",
    },
    {
      label: "Redeem List/hist",
      link: "/user/redeem-list",
    },
    {
      label: "Instant Redeem",
      link: "/user/instant-redeem",
    },
    {
      label: "Logout",
      link: "/user/",
    },
  ],
  courses: [
    {
      label: "Back",
      link: "/user/active",
    },
  ],
  instantRedeem: [
    {
      label: "Homepage",
      link: "/user/active",
    },
    {
      label: "Request/History",
      link: "/user/redeem-list",
    },
    {
      label: "Logout",
      link: "/user/",
    },
  ],
  messages: [
    {
      label: "Homepage",
      link: "/user/active",
    },
    {
      label: "Profile",
      link: "/user/active/profile",
    },
    {
      label: "Notification",
      link: "/user/notification",
    },
    {
      label: "Logout",
      link: "/user/",
    },
  ],
  notification: [
    {
      label: "Back",
      link: "/user/active",
    },
    {
      label: "Memo",
      link: "/user/notification/memo",
    },
    {
      label: "Message",
      link: "/user/message",
    },
    {
      label: "Logout",
      link: "/user/",
    },
  ],
  memo: [
    {
      label: "Back",
      link: "/user/notification",
    },
    {
      label: "Homepage",
      link: "/user/active",
    },
  ],
  passbook: [
    {
      label: "Back",
      link: "/user/active",
    },
    {
      label: "Profile",
      link: "/user/active/profile",
    },
    {
      label: "Courses",
      link: "/courses",
    },
    {
      label: "Reference",
      link: "/user/ref-list",
    },
    {
      label: "Logout",
      link: "/user/",
    },
  ],
  paymentMethod: [
    {
      label: "Back",
      link: "/user/active/withdrawal",
    },
    {
      label: "Profile",
      link: "/user/active/profile",
    },
    {
      label: "Logout",
      link: "/user/",
    },
  ],
  redeemList: [
    {
      label: "Homepage",
      link: "/user/active",
    },
    {
      label: "Instant Redeem Home",
      link: "/user/instant-redeem",
    },
    {
      label: "Logout",
      link: "/user/",
    },
  ],
  refList: [
    {
      label: "Back",
      link: "/user/active",
    },
    {
      label: "Meeting Joining",
      link: "/user/ref-list/meeting",
    },
    {
      label: "Passbook",
      link: "/user/passbook",
    },
    {
      label: "Reference Joining",
      link: "/user/ref-list/joining",
    },
    {
      label: "Send Wish",
      link: "/user/ref-list/send-wish",
    },
    {
      label: "Logout",
      link: "/user/",
    },
  ],
  joining: [
    {
      label: "Back",
      link: "/user/ref-list",
    },
    {
      label: "Meeting Joining",
      link: "/user/ref-list/send-wish",
    },
  ],
  meeting: [
    {
      label: "Back",
      link: "/user/active",
    },
  ],
  sendWish: [
    {
      label: "Back",
      link: "/user/ref-list",
    },
  ],
  transferPoints: [
    {
      label: "Homepage",
      link: "/user/active",
    },
    {
      label: "Passbook",
      link: "/user/passbook",
    },
    {
      label: "Logout",
      link: "/user/",
    },
  ],
};

export const footerItems: IFooterData = {
  title: "COMPANY",
  policy: ["Careers", "Contact Us", "Terms and conditions", "Privacy Policy"],
  option: [
    {
      title: "VIRTUAL OFFICE ADDRESS",
      text: "We work DLF Forum, Cybercity, phase lll, gurugram, Haryana 122002.",
    },
    {
      title: "OFFICE ADDRESS",
      text: "Kansat, chapainowabgonj,Rajshahi",
    },
    {
      copyright: `Copyright © 2019 - ${new Date().getFullYear()} Life Change Bd® All rights reserved.`,
    },
  ],
};
