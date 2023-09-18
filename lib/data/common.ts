import { IFooterData, ILinkLabel } from "@/interface";

export const commonNavItems: ILinkLabel[] = [
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
];

export const footerItems: IFooterData = {
  title: "COMPANY",
  policy: [
    "Careers",
    "Contact Us",
    "Terms and conditions",
    "Privacy Policy",
    "cancellation and refund policy",
  ],
  option: [
    {
      title: "VIRTUAL OFFICE ADDRESS",
      text: "We work DLF Forum, Cybercity, phase lll, gurugram, Haryana 122002.",
    },
    {
      title: "HEAD OFFICE ADDRESS",
      text: "55B MIRZA GHALIB STREET PARK STREET, Kol - 16",
    },
    {
      copyright: `Copyright © 2019 - ${new Date().getFullYear()} My Business Union® All rights reserved.`,
    },
  ],
};
