"use client";

import { Header, PageHeader, RefTable } from "@/components";
import { useGetData } from "@/hooks";
import { IAllRefer } from "@/interface";
import { navData } from "@/lib/data";
import { useState } from "react";

const MyReference = () => {
  const [refData, setRefData] = useState<IAllRefer[] | []>([]);
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
        tableHeaders={["id", "Name", "email", "Joining Time"]}
        dataProperties={["id", "firstName", "email", "createdAt"]}
      />
    </>
  );
};

export default MyReference;
