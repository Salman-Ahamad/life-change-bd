"use client";

import { DataTable, Header, PageHeader } from "@/components";
import { updateData, useCurrentUser, useGetData } from "@/hooks";
import { IUser, IUserDataForDataTable } from "@/interface";
import { UserRole, navData } from "@/lib";
import { Button, Title } from "@/universal";
import { Types } from "mongoose";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const tableItems: IUserDataForDataTable[] = [
  {
    id: "1",
    image:
      "http://res.cloudinary.com/djlpbc9dz/image/upload/v1697183246/upload/dfbaurmzjogt9235nqkp.jpg",
    firstName: "Liam",
    email: "liamjames@example.com",
    phone: "+1 (555) 000-000",
    lastName: "James",
    balance: 1000,
  },
  {
    id: "2",
    image:
      "http://res.cloudinary.com/djlpbc9dz/image/upload/v1697172180/upload/nylfnq5gmnbxqbazb5ac.jpg",
    firstName: "Olivia",
    email: "oliviaemma@example.com",
    phone: "+1 (555) 000-000",
    lastName: "Emma",
    balance: 900,
  },
  {
    id: "3",
    image:
      "http://res.cloudinary.com/djlpbc9dz/image/upload/v1697172180/upload/nylfnq5gmnbxqbazb5ac.jpg",
    firstName: "William",
    email: "william.benjamin@example.com",
    phone: "+1 (555) 000-000",
    lastName: "Benjamin",
    balance: 800,
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
    redirect("/user/active");
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
      <Header navData={navData.settings} />
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
