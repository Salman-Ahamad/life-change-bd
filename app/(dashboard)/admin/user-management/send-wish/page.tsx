"use client";

import { DataTable, Header, PageHeader } from "@/components";
import { useGetData } from "@/hooks";
import { INavItem, IUser } from "@/interface";
import { BackButton, Title } from "@/universal";
import { useState } from "react";

const navData: INavItem[] = [
  {
    label: <BackButton className="text-2xl" />,
    link: "/admin",
  },
];

const SendWish = () => {
  const [sendWishData, setSendWish] = useState<IUser[] | null>(null);
  useGetData("/send-wish", setSendWish);

  return (
    <>
      <Header navData={navData} />
      <PageHeader title="Send Wish" notice="Last 3 Month Outbound" />
      {sendWishData === null ? (
        <Title variant="H4" className="text-center capitalize my-10">
          Loading... Please wait 🔃
        </Title>
      ) : (
        <DataTable
          tableData={sendWishData}
          tableHeaders={["no", "id", "Name"]}
          dataProperties={["userId", "firstName", "phone"]}
          message="SendWish"
          UpdateSendWish
        />
      )}
    </>
  );
};

export default SendWish;
