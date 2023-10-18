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
  useGetData("/config/support", setData, true);

  console.log("Support WA", { support });

  if (data)
    return (
      <ActivePageCard title="Life change Support Team">
        <DataRow
          title="My Group Leader"
          phoneNo={data.gl.phone}
          btnText="WhatsApp"
        />
        <DataRow
          title="My Trainer"
          phoneNo={data.consultant.phone}
          btnText="WhatsApp"
        />

        <DataRow
          title="Support WhatsApp Group"
          phoneNo={support}
          btnText="Join"
        />
      </ActivePageCard>
    );
};
