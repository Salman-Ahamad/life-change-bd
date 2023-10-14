"use client";

import { DataTable, Header, PageHeader } from "@/components";
import { useGetData } from "@/hooks";
import { IChildren, IUser } from "@/interface";
import { navData } from "@/lib/data";
import { Title } from "@/universal";
import { useState } from "react";

const SendWish = () => {
  const [sendWishData, setSendWish] = useState<IUser[] | null>(null);
  useGetData("/all-ref", setSendWish);

  return (
    <>
      <Header navData={navData.sendWish} />
      <PageHeader title="Send Wish" notice="Last 3 Month Outbound" />
      {sendWishData === null ? (
        <Title variant="H4" className="text-center capitalize my-10">
          Loading... Please wait 🔃
        </Title>
      ) : (
        <DataTable
          tableData={sendWishData}
          tableHeaders={["no", "id", "Name"]}
          dataProperties={["id", "firstName", "phone"]}
          message="SendWish"
          UpdateSendWish
        />
      )}
    </>
  );
};

export default SendWish;
