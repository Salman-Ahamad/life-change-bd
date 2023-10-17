"use client";

import { DataTable, Header, PageHeader } from "@/components";
import { updateData, useCurrentUser, useGetData } from "@/hooks";
import { INavItem, IUser } from "@/interface";
import { UserRole } from "@/lib";
import { Button, Title } from "@/universal";
import { Types } from "mongoose";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { toast } from "react-toastify";

const adminNav: INavItem[] = [
  {
    label: <AiOutlineHome className="text-2xl" />,
    link: "/admin",
  },
  {
    label: "User Management",
    link: "/admin/user-management",
  },
  {
    label: "Reports",
    link: "/admin/reports",
  },
  {
    label: "Action",
    link: "/admin/action",
  },
  {
    label: "Student",
    link: "/admin/student",
  },
];

const Action: React.FC = () => {
  const [data, setData] = useState<IUser[] | null>(null);
  useGetData("/withdrawal", setData);

  const user = useCurrentUser();

  // TODO: Change the approach
  if (user?.role === UserRole.inactive) {
    redirect("/inactive");
  } else if (user?.role === UserRole.active) {
    redirect("/active/user");
  }

  const handleAction = (id: string) => {
    if (Types.ObjectId.isValid(id)) {
      updateData("/withdrawal", { id, status: "complete" }).then(() =>
        window.location.reload()
      );
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
