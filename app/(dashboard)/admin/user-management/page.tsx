"use client";

import { Header, PageHeader } from "@/components";
import { RefTable } from "@/components/Settings/RefTable";
import { INavItem, IUser } from "@/interface";
import { BackButton } from "@/universal";
import { NextPage } from "next";
import { useState } from "react";

const navData: INavItem[] = [
  {
    label: <BackButton className="text-2xl" />,
    link: "/admin",
  },
  {
    label: "Send Wish",
    link: "/admin/user-management/send-wish",
  },
];

const UserManagement: NextPage = () => {
  const [data, setData] = useState<IUser[] | null>(null);

  return (
    <>
      <Header navData={navData} />
      <PageHeader
        title="User Management"
        notice="Last 3 Month Outbound"
        setData={setData}
        // onlyActive
      />
      {data !== null && data.length !== 0 && (
        <RefTable
          tableData={data}
          tableHeaders={["No", "id", "Name", "Joining Time"]}
          dataProperties={["userId", "firstName", "createdAt", "phone"]}
          message="Message"
          slugUrl="/admin/user-management/student/"
        />
      )}
    </>
  );
};

export default UserManagement;
