"use client";

import { NextPage } from "next";
import { useState } from "react";

import { Header, PageHeader } from "@/components";
import { RefTable } from "@/components/Settings/RefTable";
import { IUser } from "@/interface";
import { UserRole, navData } from "@/lib";
import { useCurrentUser } from "@/hooks";
import { redirect } from "next/navigation";

const UserManagement: NextPage = () => {
  const [data, setData] = useState<IUser[] | null>(null);

  const user = useCurrentUser();

  // TODO: Change the approach
  if (user?.role === UserRole.inactive) {
    redirect("/inactive");
  } else if (user?.role === UserRole.active) {
    redirect("/user/active");
  }

  return (
    <>
      <Header navData={navData.refList} />
      <PageHeader
        title="User Management"
        notice="Last 3 Month Outbound"
        setData={setData}
      />
      {data !== null && data.length !== 0 && (
        <RefTable
          tableData={data}
          tableHeaders={["No", "id", "Name", "Joining Time"]}
          dataProperties={["userId", "firstName", "createdAt", "phone"]}
          message="Message"
        />
      )}
    </>
  );
};

export default UserManagement;
