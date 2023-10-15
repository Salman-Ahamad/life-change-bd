"use client";

import { useGetData } from "@/hooks";
import { FC, useState } from "react";
import { ActivePageCard, DataRow } from ".";
export interface IGlConsultant {
  gl: {
    phone: string;
  };
  consultant: {
    phone: string;
  };
}
export const SupportTeam: FC<{ support: string }> = ({ support }) => {
  const [data, setData] = useState<IGlConsultant>();
  useGetData("/config/support", setData);

  if (data)
    return (
      <ActivePageCard title="Life change Support Team">
        <DataRow
          title="My Consultant"
          phoneNo={data.consultant.phone}
          btnText="WhatsApp"
        />
        <DataRow title="My Group Leader" phoneNo={data.gl.phone} />
        <DataRow title="Life Change BD Support" phoneNo={support} />
      </ActivePageCard>
    );
};
