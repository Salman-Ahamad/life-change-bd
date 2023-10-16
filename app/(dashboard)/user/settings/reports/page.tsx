"use client";

import { DataTable, Header, PageHeader } from "@/components";
import { useGetData } from "@/hooks";
import { IUser } from "@/interface";
import { navData } from "@/lib";
import { Title } from "@/universal";
import { useState } from "react";

const Report = () => {
  const [data, setData] = useState<IUser[] | null>(null);
  useGetData("/all-ref?collectInactive=true", setData);

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
