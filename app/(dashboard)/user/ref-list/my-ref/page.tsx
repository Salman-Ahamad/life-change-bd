"use client";

import { Types } from "mongoose";
import { useState } from "react";
import { toast } from "react-toastify";

import { Header, PageHeader, RefTable } from "@/components";
import { updateData, useGetData } from "@/hooks";
import { IAllRefer } from "@/interface";
import { navData } from "@/lib/data";
import { Button, Title } from "@/universal";

const MyReference = () => {
  const [refData, setRefData] = useState<IAllRefer[] | null>(null);
  useGetData("/all-ref?collectInactive=false", setRefData);

  const handleUpdate = async (id: string, refId: string) => {
    if (Types.ObjectId.isValid(id)) {
      await updateData(`/all-ref/${id}`, {}).then(() =>
        window.location.reload()
      );
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
      {refData === null ? (
        <Title variant="H4" className="text-center capitalize my-10">
          Loading... Please wait 🔃
        </Title>
      ) : (
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
      )}
    </>
  );
};

export default MyReference;
