"use client";

import { DataTable, Header, PageHeader } from "@/components";
import { updateData, useCurrentUser, useGetData } from "@/hooks";
import { INavItem, IUser } from "@/interface";
import { BackButton, Button, Title } from "@/universal";
import { Types } from "mongoose";
import React, { useState } from "react";
import { toast } from "react-toastify";

const adminNav: INavItem[] = [
  {
    label: <BackButton className="text-2xl" />,
    link: "/admin",
  },
];

const Action: React.FC = () => {
  const [data, setData] = useState<IUser[] | null>(null);
  useGetData("/withdrawal", setData);

  const user = useCurrentUser(true);

  const handleAction = (id: string, isReject?: boolean) => {
    if (Types.ObjectId.isValid(id)) {
      if (!isReject) {
        console.log("Accepted");

        updateData("/withdrawal", { id, status: "complete" }).then(() =>
          window.location.reload()
        );
      } else {
        updateData("/withdrawal", { id, status: "reject" }).then(() =>
          window.location.reload()
        );
      }
    } else {
      toast.error("Invalid Id");
    }
  };

  return (
    <main>
      <Header navData={adminNav} />
      <PageHeader
        title="My Reference Joining Info"
        notice="Last 3 Month Outbound"
      />
      {data === null ? (
        <Title variant="H4" className="text-center capitalize my-10">
          Loading... Please wait 🔃
        </Title>
      ) : data !== undefined ? (
        <DataTable
          tableData={data}
          tableHeaders={["no", "id", "amount", "method", "status"]}
          dataProperties={["userId", "amount", "method", "status"]}
          setActionId={handleAction}
          actionBtn={
            <Button variant="secondary" className="text-xs">
              Accept
            </Button>
          }
          rejectBtn={
            <Button variant="secondary" className="text-xs bg-red-500">
              Reject
            </Button>
          }
        />
      ) : (
        <Title variant="H4" className="text-center capitalize my-10">
          Data Not Found 😒🚨
        </Title>
      )}
    </main>
  );
};

export default Action;
