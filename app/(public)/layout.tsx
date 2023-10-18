import { FC } from "react";

import { Footer, Navbar } from "@/components";
import { IChildren, INavItem } from "@/interface";
import { AiOutlineHome } from "react-icons/ai";

const navData: INavItem[] = [
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
];

const PublicLayout: FC<IChildren> = ({ children }) => (
  <main>
    <Navbar navData={navData} />
    {children}
    <Footer />
  </main>
);

export default PublicLayout;
