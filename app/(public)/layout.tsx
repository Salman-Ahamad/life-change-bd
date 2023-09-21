import { FC } from "react";

import { Footer, Navbar } from "@/components";
import { IChildren } from "@/interface";
import { commonNavItems } from "@/lib/data";

const layout: FC<IChildren> = ({ children }) => (
  <main>
    <Navbar navData={commonNavItems} />
    {children}
    <Footer />
  </main>
);

export default layout;
