"use client";

import { DataTable, Header, PageHeader } from "@/components";
import { useCurrentUser } from "@/hooks";
import { INavItem, IUser } from "@/interface";
import { UserRole } from "@/lib";
import { BackButton, Title } from "@/universal";
import { redirect } from "next/navigation";
import { useState } from "react";

const navData: INavItem[] = [
  {
    label: <BackButton className="text-2xl" />,
    link: "/active",
  },
];

const Report = () => {
  const [data, setData] = useState<IUser[] | null>(null);

  const user = useCurrentUser(true);

  // TODO: Change the approach
  if (user?.role === UserRole.inactive) {
    redirect("/inactive");
  } else if (user?.role === UserRole.active) {
    redirect("/active/user");
  }

  return (
    <>
      <Header navData={navData} />
      <PageHeader
        title="Reports"
        notice="Active User Report"
        setData={setData}
        onlyActive
      />
      {data === null ? (
        <Title variant="H4" className="text-center capitalize my-10">
          Loading... Please wait 🔃
        </Title>
      ) : (
        <DataTable
          tableHeaders={["no", "id", "Name", "Joining Time", "Message"]}
          dataProperties={["userId", "firstName", "createdAt", "phone"]}
          tableData={data}
        />
      )}
    </>
  );
};

export default Report;
