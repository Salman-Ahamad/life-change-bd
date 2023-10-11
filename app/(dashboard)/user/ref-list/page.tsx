"use client";

import { NextPage } from "next";
import { useState } from "react";

import { Header } from "@/components";
import { RefHeader } from "@/components/User/Active";
import { Table } from "@/components/common/DataTable/Table";
import { useGetData } from "@/hooks";
import { IAllRefer } from "@/interface";
import { navData } from "@/lib/data";
import { CommonText, Title } from "@/universal";

const RefList: NextPage = () => {
  const [refData, setRefData] = useState<IAllRefer[] | []>([]);
  useGetData("/all-ref", setRefData);

  return (
    <>
      <Header navData={navData.refList} />
      <Title variant="H3" className="capitalize mt-10">
        Reference List (Inactive)
      </Title>
      <CommonText className="w-full bg-primary bg-opacity-50 text-center py-2 text-base lg:text-lg mt-1.5">
        Last 3 Month Outbound Data: 0
      </CommonText>
      <RefHeader />
      <Table
        tableData={refData}
        tableHeaders={["id", "Name", "email"]}
        dataProperties={["id", "firstName", "email"]}
      />
    </>
  );
};

export default RefList;
