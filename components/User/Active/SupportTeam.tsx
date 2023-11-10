"use client";

import { useGetData } from "@/hooks";
import { IGlTrainer, ILabel } from "@/interface";
import { FC, useState } from "react";
import { ActivePageCard, DataRow } from ".";

export const SupportTeam: FC<ILabel> = ({ label }) => {
  const [data, setData] = useState<IGlTrainer>();
  useGetData("/config/support", setData, true);

  return (
    <ActivePageCard title="Life change Support Team">
      <DataRow
        title="My Group Leader"
        phoneNo={data?.gl?.phone}
        btnText="Message"
      />
      <DataRow
        title="My Trainer"
        phoneNo={data?.trainer?.phone}
        btnText="Message"
      />

      <DataRow
        title="Support WhatsApp Group"
        groupLink={label}
        btnText="Join"
      />
    </ActivePageCard>
  );
};
