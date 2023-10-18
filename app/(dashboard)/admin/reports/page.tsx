"use client";

import { DataTable, Header, PageHeader } from "@/components";
import { useCurrentUser, useGetData } from "@/hooks";
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
  useGetData("/all-ref?inactiveBonus=true", setData);

  const user = useCurrentUser();

  // TODO: Change the approach
  if (user?.role === UserRole.inactive) {
    redirect("/inactive");
  } else if (user?.role === UserRole.active) {
    redirect("/active/user");
  }

  return (
    <>
      <Header navData={navData} />
      <PageHeader title="Reports" notice="Last 3 Month Outbound" />
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
