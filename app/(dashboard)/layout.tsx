import { FC } from "react";

import { IChildren } from "@/interface";

const layout: FC<IChildren> = ({ children }) => (
  <main>
    {/* <Header navData={commonNavItems} /> */}
    {children}
    {/* <Footer /> */}
  </main>
);

export default layout;
