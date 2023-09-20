import React, { FC } from "react";

import { IChildren } from "@/interface";

import { commonNavItems } from "@/lib/data";
import { Footer, Header } from "@/components";

const layout: FC<IChildren> = ({ children }) => {
  return (
    <>
      <Header navData={commonNavItems} />
      {children}
      <Footer />
    </>
  );
};

export default layout;
