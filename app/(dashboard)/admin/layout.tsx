import { FC } from "react";

import { IChildren } from "@/interface";

const AdminLayout: FC<IChildren> = ({ children }) => {
  return <main>{children}</main>;
};

export default AdminLayout;
