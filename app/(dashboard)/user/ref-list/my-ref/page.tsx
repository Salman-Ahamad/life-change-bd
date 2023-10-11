"use client";

import { Header, PageHeader, RefTable } from "@/components";
import { useGetData } from "@/hooks";
import { IAllRefer } from "@/interface";
import { navData } from "@/lib/data";
import { Button } from "@/universal";
import { useState } from "react";

const MyReference = () => {
  const [refData, setRefData] = useState<IAllRefer[] | []>([]);
  useGetData("/all-ref", setRefData);

  return (
    <>
      <Header navData={navData.myRef} />
      <PageHeader
        title="My Reference Joining Info"
        notice="Last 3 Month Outbound"
      />
      <RefTable
        tableData={refData}
        tableHeaders={["id", "Name", "Joining Time"]}
        dataProperties={["id", "firstName", "createdAt", "phone"]}
        message="Message"
        actionBtn={
          <Button variant="secondary" className="text-xs">
            Collect Mony
          </Button>
        }
      />
    </>
  );
};

export default MyReference;
