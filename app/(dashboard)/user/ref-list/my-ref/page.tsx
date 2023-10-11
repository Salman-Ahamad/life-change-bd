"use client";

import { Header, PageHeader, RefTable } from "@/components";
import { useGetData } from "@/hooks";
import { IAllRefer } from "@/interface";
import { navData } from "@/lib/data";
import { useState } from "react";

const MyReference = () => {
  const [refData, setRefData] = useState<IAllRefer[] | []>([]);
  console.log("🚀 ~ file: page.tsx:11 ~ MyReference ~ refData:", refData);
  useGetData("/all-ref", setRefData);

  return (
    <>
      <Header navData={navData.myRef} />
      <PageHeader
        title="My Reference Joining Info"
        notice="Last 3 Month Outbound"
      />
      <RefTable
        tableData={refData}
        tableHeaders={["id", "Name", "Joining Time"]}
        dataProperties={["id", "firstName", "createdAt", "phone"]}
      />
    </>
  );
};

export default MyReference;
