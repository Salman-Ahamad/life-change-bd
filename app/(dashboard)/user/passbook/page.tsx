"use client";

import { useState } from "react";

import { Header, PageHeader, DataTable } from "@/components";
import { useGetData } from "@/hooks";
import { IUser } from "@/interface";
import { navData } from "@/lib/data";
import { Title } from "@/universal";

const Passbook = () => {
  const [passbookData, setPassbookData] = useState<IUser[] | null>(null);
  useGetData("/all-ref?collectInactive=true", setPassbookData);

  return (
    <>
      <Header navData={navData.passbook} />
      <PageHeader title="Passbook" notice="Last 3 Month Outbound" />
      {passbookData === null ? (
        <Title variant="H4" className="text-center capitalize my-10">
          Loading... Please wait 🔃
        </Title>
      ) : passbookData.length !== 0 ? (
        <DataTable
          tableData={passbookData}
          tableHeaders={["No", "id", "Name", "Joining Time"]}
          dataProperties={["id", "firstName", "createdAt", "phone"]}
          message="Message"
        />
      ) : (
        <Title variant="H3" className="text-center capitalize my-10">
          Passbook data not found 😒
        </Title>
      )}
    </>
  );
};

export default Passbook;
