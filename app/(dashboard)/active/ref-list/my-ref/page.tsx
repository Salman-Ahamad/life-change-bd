"use client";

import { useState } from "react";

import { DataTable, Header, PageHeader } from "@/components";
import { updateData, useGetData } from "@/hooks";
import { IActionFn, INavItem, IUser } from "@/interface";
import { BackButton, Button, Title } from "@/universal";

const navData: INavItem[] = [
  {
    label: <BackButton className="text-2xl" />,
    link: "/active/ref-list",
  },
];

const MyReference = () => {
  const [refData, setRefData] = useState<IUser[] | null>(null);
  useGetData("/all-ref?inactiveBonus=false", setRefData, true);

  const handleCollectMoney = async ({ id }: IActionFn) => {
    await updateData(`/all-ref/${id}`, {}).then(() => window.location.reload());
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
          actionFn={handleCollectMoney}
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
