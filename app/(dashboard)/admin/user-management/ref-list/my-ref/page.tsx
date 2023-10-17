"use client";

import { Types } from "mongoose";
import { useState } from "react";
import { toast } from "react-toastify";

import { DataTable, Header, PageHeader } from "@/components";
import { updateData, useGetData } from "@/hooks";
import { INavItem, IUser } from "@/interface";
import { BackButton, Button, Title } from "@/universal";

const navData: INavItem[] = [
  {
    label: <BackButton className="text-2xl" />,
    link: "/admin",
  },
];

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
      <Header navData={navData} />
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
