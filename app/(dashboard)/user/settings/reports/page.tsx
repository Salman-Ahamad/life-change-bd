"use client";

import { DataTable, Header, PageHeader } from "@/components";
import { useCurrentUser, useGetData } from "@/hooks";
import { IUser } from "@/interface";
import { UserRole, navData } from "@/lib";
import { Title } from "@/universal";
import { redirect } from "next/navigation";
import { useState } from "react";

const Report = () => {
  const [data, setData] = useState<IUser[] | null>(null);
  useGetData("/all-ref?collectInactive=true", setData);

  const user = useCurrentUser();

  // TODO: Change the approach
  if (user?.role === UserRole.inactive) {
    redirect("/inactive");
  } else if (user?.role === UserRole.active) {
    redirect("/user/active");
  }

  return (
    <>
      <Header navData={navData.settings} />
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
