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
  console.log(data);

  return (
    <>
      <Header navData={navData} />
      <PageHeader
        title="User Management"
        notice="All user management List"
        setData={setData}
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
