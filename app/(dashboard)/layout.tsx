import { FC } from "react";

import { IChildren } from "@/interface";

const DashboardLayout: FC<IChildren> = ({ children }) => (
  <main>{children}</main>
);

export default DashboardLayout;
