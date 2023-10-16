"use client";

import { Types } from "mongoose";
import { useState } from "react";
import { toast } from "react-toastify";

import { DataTable, Header, PageHeader } from "@/components";
import { updateData, useGetData } from "@/hooks";
import { IUser } from "@/interface";
import { navData } from "@/lib/data";
import { Button, Title } from "@/universal";

const MyReference = () => {
  const [refData, setRefData] = useState<IUser[] | null>(null);
  useGetData("/all-ref?collectInactive=false", setRefData);

  const handleUpdate = async (id: string) => {
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
        <DataTable
          tableData={refData}
          tableHeaders={["no", "id", "Name", "Joining Time"]}
          dataProperties={["userId", "firstName", "createdAt", "phone"]}
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
