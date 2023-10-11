"use client";

import { Header, Table } from "@/components";
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
      <Table
        tableData={refData}
        tableHeaders={["id", "Name", "email"]}
        dataProperties={["id", "firstName", "email"]}
      />
    </>
  );
};

export default MyReference;
