import { FC } from "react";

import { Footer, Header } from "@/components";
import { IChildren } from "@/interface";
import { commonNavItems } from "@/lib/data";

const layout: FC<IChildren> = ({ children }) => (
  <main>
    {/* <Header navData={commonNavItems} /> */}
    {children}
    {/* <Footer /> */}
  </main>
);

export default layout;
