import { FC } from "react";

import { IChildren } from "@/interface";

const layout: FC<IChildren> = ({ children }) => <main>{children}</main>;

export default layout;
