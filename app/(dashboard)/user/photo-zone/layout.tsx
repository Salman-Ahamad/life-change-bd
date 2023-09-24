import { FC } from "react";

import { IChildren } from "@/interface";
import Navbar from "@/components/User/PhotoZone/NavBar";

const layout: FC<IChildren> = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

export default layout;
