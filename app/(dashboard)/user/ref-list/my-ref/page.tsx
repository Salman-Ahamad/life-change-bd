"use client";

import { Header, PageHeader, RefTable } from "@/components";
import { updateData, useGetData } from "@/hooks";
import { IAllRefer } from "@/interface";
import { navData } from "@/lib/data";
import { Button } from "@/universal";
import { Types } from "mongoose";
import { useState } from "react";
import { toast } from "react-toastify";

const MyReference = () => {
  const [refData, setRefData] = useState<IAllRefer[] | []>([]);
  const [refetch, setRefetch] = useState(false);
  useGetData("/all-ref", setRefData, refetch);

  const handleUpdate = (id: string) => {
    console.log("🚀 ~ file: page.tsx:19 ~ handleUpdate ~ id:", id);
    if (Types.ObjectId.isValid(id)) {
      updateData(`/all-ref/${id}`, {});
      setRefetch(true);
    } else {
      toast.error("Invalid Id");
    }
  };

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
        setActionId={handleUpdate}
        actionBtn={
          <Button variant="secondary" className="text-xs">
            Collect Money
          </Button>
        }
      />
    </>
  );
};

export default MyReference;
