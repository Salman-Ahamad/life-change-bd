import { FC } from "react";

import { Footer, Navbar } from "@/components";
import { IChildren, INavItem } from "@/interface";
import { AiOutlineHome } from "react-icons/ai";

const navData: INavItem[] = [
  {
    label: <AiOutlineHome className="text-2xl" />,
    link: "/user/active",
  },
  {
    label: "Profile",
    link: "/inactive/profile",
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
];

const PublicLayout: FC<IChildren> = ({ children }) => (
  <main>
    <Navbar navData={navData} />
    {children}
    <Footer />
  </main>
);

export default PublicLayout;
