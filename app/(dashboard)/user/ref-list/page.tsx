"use client";

import { NextPage } from "next";
import { useState } from "react";

import { DataTable, Header, PageHeader } from "@/components";
import { IUser } from "@/interface";
import { navData } from "@/lib";

const RefList: NextPage = () => {
  const [data, setData] = useState<IUser[] | null>(null);
  console.log("🚀 ~ file: page.tsx:12 ~ data:", data);

  return (
    <>
      <Header navData={navData.refList} />
      <PageHeader
        title="Reference List (Inactive)"
        notice="Last 3 Month Outbound"
        setData={setData}
      />
      {data !== null && data.length !== 0 && (
        <DataTable
          tableData={data}
          tableHeaders={["No", "id", "Name", "Joining Time"]}
          dataProperties={["userId", "firstName", "createdAt", "phone"]}
          message="Message"
        />
      )}
    </>
  );
};

export default RefList;
