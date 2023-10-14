"use client";

import { NextPage } from "next";
import { useState } from "react";

import { Header, PageHeader } from "@/components";
import { IUser } from "@/interface";
import { navData } from "@/lib";
import { RefTable } from "@/components/Settings/RefTable";

const UserManagement: NextPage = () => {
  const [data, setData] = useState<IUser[] | null>(null);

  return (
    <>
      <Header navData={navData.refList} />
      <PageHeader
        title="Reference List (Inactive)"
        notice="Last 3 Month Outbound"
        setData={setData}
      />
      {data !== null && data.length !== 0 && (
        <RefTable
          tableData={data}
          tableHeaders={["No", "id", "Name", "Joining Time"]}
          dataProperties={["id", "firstName", "createdAt", "phone"]}
          message="Message"
        />
      )}
    </>
  );
};

export default UserManagement;
