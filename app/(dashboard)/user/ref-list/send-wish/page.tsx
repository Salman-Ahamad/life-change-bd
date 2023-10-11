"use client";

import { Header, PageHeader, RefTable } from "@/components";
import { useGetData } from "@/hooks";
import { IAllRefer } from "@/interface";
import { navData } from "@/lib/data";
import { useState } from "react";

const SendWish = () => {
  const [refData, setRefData] = useState<IAllRefer[] | []>([]);
  useGetData("/all-ref", setRefData);

  return (
    <>
      <Header navData={navData.sendWish} />
      <PageHeader title="Send Wish" notice="Last 3 Month Outbound" />
      <RefTable
        tableData={refData}
        tableHeaders={["id"]}
        dataProperties={["id", "phone"]}
        message="SendWish"
      />
    </>
  );
};

export default SendWish;
