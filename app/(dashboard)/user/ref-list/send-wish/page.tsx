"use client";

import { Header, PageHeader, RefTable } from "@/components";
import { useGetData } from "@/hooks";
import { IAllRefer } from "@/interface";
import { navData } from "@/lib/data";
import { Title } from "@/universal";
import { useState } from "react";

const SendWish = () => {
  const [sendWishData, setSendWish] = useState<IAllRefer[] | null>(null);
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
        <RefTable
          tableData={sendWishData}
          tableHeaders={["id"]}
          dataProperties={["id", "phone"]}
          message="SendWish"
        />
      )}
    </>
  );
};

export default SendWish;
