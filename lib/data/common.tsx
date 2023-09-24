import { IFooterData, INavData } from "@/interface";
import { BackButton } from "@/universal";

export const navData: INavData = {
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
  ],
  profile: [
    {
      label: <BackButton className="text-2xl" />,
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
  ],
  courses: [
    {
      label: <BackButton className="text-2xl" />,
      link: "/user/active",
    },
  ],
  instantRedeem: [
    {
      label: "Home",
      link: "/user/active",
    },
    {
      label: "Request/History",
      link: "/user/redeem-list",
    },
  ],
  messages: [
    {
      label: "Home",
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
  ],
  notification: [
    {
      label: <BackButton className="text-2xl" />,
      link: "/user/active",
    },
    {
      label: "Memo",
      link: "/user/notification/memo",
    },
    {
      label: "Message",
      link: "/user/messages",
    },
  ],
  memo: [
    {
      label: <BackButton className="text-2xl" />,
      link: "/user/notification",
    },
    {
      label: "Home",
      link: "/user/active",
    },
  ],
  passbook: [
    {
      label: <BackButton className="text-2xl" />,
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
  ],
  paymentMethod: [
    {
      label: <BackButton className="text-2xl" />,
      link: "/user/active/withdrawal",
    },
    {
      label: "Profile",
      link: "/user/active/profile",
    },
  ],
  redeemList: [
    {
      label: "Home",
      link: "/user/active",
    },
    {
      label: "Instant Redeem Home",
      link: "/user/instant-redeem",
    },
  ],
  refList: [
    {
      label: <BackButton className="text-2xl" />,
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
  ],
  joining: [
    {
      label: <BackButton className="text-2xl" />,
      link: "/user/ref-list",
    },
    {
      label: "Meeting Joining",
      link: "/user/ref-list/send-wish",
    },
  ],
  meeting: [
    {
      label: <BackButton className="text-2xl" />,
      link: "/user/active",
    },
  ],
  sendWish: [
    {
      label: <BackButton className="text-2xl" />,
      link: "/user/ref-list",
    },
  ],
  transferPoints: [
    {
      label: "Home",
      link: "/user/active",
    },
    {
      label: "Passbook",
      link: "/user/passbook",
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