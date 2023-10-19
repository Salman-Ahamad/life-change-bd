"use client";

import { NextPage } from "next";
import { useState } from "react";

import { DataTable, Header, PageHeader } from "@/components";
import { INavItem, IUser } from "@/interface";
import { BackButton } from "@/universal";

const navData: INavItem[] = [
  {
    label: <BackButton className="text-2xl" />,
    link: "/admin",
  },
];

const Student: NextPage = () => {
  const [data, setData] = useState<IUser[] | null>(null);

  return (
    <>
      <Header navData={navData} />
      <PageHeader title="Students" notice="" setData={setData} />
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

export default Student;
