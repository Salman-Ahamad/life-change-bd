import { IFooterData, INavData } from "@/interface";
import { facebook, pinterest, twitter } from "@/lib/assets";
import { BackButton } from "@/universal";
import { AiOutlineHome } from "react-icons/ai";

export const navData: INavData = {
  common: [
    {
      label: "Home",
      link: "/",
    },
    {
      label: "About",
      link: "/about",
    },
    {
      label: "Contact",
      link: "/contact",
    },
    {
      label: "Courses",
      link: "/courses",
    },
  ],
  inActive: [
    {
      label: <AiOutlineHome className="text-2xl" />,
      link: "/user/active",
    },
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
      label: "Photo Zone",
      link: "/user/photo-zone",
    },
    {
      label: "Video Zone",
      link: "/user/video-zone",
    },
  ],
  active: [
    {
      label: <AiOutlineHome className="text-2xl" />,
      link: "/user/active",
    },
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
      link: "/user/video-zone",
    },
    {
      label: "Settings",
      link: "/user/settings",
    },
  ],
  profile: [
    {
      label: <BackButton className="text-2xl" />,
      link: "/user/active",
    },
    {
      label: "Edit Profile",
      link: "/user/active/profile/edit",
    },
    {
      label: "Change Password",
      link: "/user/change-password",
    },
    {
      label: "Passbook",
      link: "/user/passbook",
    },
    {
      label: "Withdrawal",
      link: "/user/active/withdrawal",
    },
    {
      label: "Photo Zone",
      link: "/user/ref-list",
    },
  ],
  profileEdit: [
    {
      label: <BackButton className="text-2xl" />,
      link: "/user/active",
    },
  ],
  withdrawal: [
    {
      label: <AiOutlineHome className="text-2xl" />,
      link: "/user/active",
    },
    {
      label: "Profile",
      link: "/user/active/profile",
    },
    {
      label: "Courses",
      link: "/user/courses",
    },
    {
      label: "Reference",
      link: "/user/ref-list",
    },
  ],
  courses: [
    {
      label: <BackButton className="text-2xl" />,
      link: "/user/active",
    },
  ],
  messages: [
    {
      label: <AiOutlineHome className="text-2xl" />,
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
      label: <AiOutlineHome className="text-2xl" />,
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
      link: "/user/courses",
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
      label: <AiOutlineHome className="text-2xl" />,
      link: "/user/active",
    },
  ],
  refList: [
    {
      label: <BackButton className="text-2xl" />,
      link: "/user/active",
    },
    {
      label: "My Reference",
      link: "/user/ref-list/my-ref",
    },
    {
      label: "Passbook",
      link: "/user/passbook",
    },
    {
      label: "Send Wish",
      link: "/user/ref-list/send-wish",
    },
  ],
  myRef: [
    {
      label: <BackButton className="text-2xl" />,
      link: "/user/ref-list",
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
      label: <AiOutlineHome className="text-2xl" />,
      link: "/user/active",
    },
    {
      label: "Passbook",
      link: "/user/passbook",
    },
  ],
  settings: [
    {
      label: <BackButton className="text-2xl" />,
      link: "/user/active",
    },
    {
      label: "User Management",
      link: "/user/settings/user-management",
    },
    {
      label: "Reports",
      link: "/user/settings/reports",
    },
    {
      label: "Team Management",
      link: "/user/settings/team-management",
    },
    {
      label: "Student",
      link: "/user/settings/student",
    },
  ],
};

export const footerItems: IFooterData = {
  title: "COMPANY",
  policy: [
    {
      title: "Careers",
      href: "/careers",
    },
    {
      title: "Contact Us",
      href: "/contact",
    },
    {
      title: "Terms and conditions",
      href: "/terms-conditions",
    },
    {
      title: "Privacy Policy",
      href: "/privacy-policy",
    },
  ],
  option: [
    {
      title: "OFFICE ADDRESS",
      text: "Kansat, chapainowabgonj,Rajshahi",
    },
    {
      copyright: `Copyright © 2019 - ${new Date().getFullYear()} Life Change Bd® All rights reserved.`,
    },
  ],
  socialIcons: [
    { icon: facebook, href: "#" },
    { icon: twitter, href: "#" },
    { icon: pinterest, href: "#" },
  ],
};
