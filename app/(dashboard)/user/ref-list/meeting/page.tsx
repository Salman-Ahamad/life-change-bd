"use client";

import { Header } from "@/components";
import { DataRow } from "@/components/User/Active";
import { useGetData } from "@/hooks";
import { navData } from "@/lib/data";
import { useState } from "react";

const Meeting = () => {
  const [data, setData] = useState();
  useGetData("/config", setData);
  console.log(data);

  return (
    <>
      <Header navData={navData.meeting} />
      <div className="max-w-lg mx-auto py-8">
        <DataRow title="Meeting Tittle" btnText="Join Class" />
      </div>
      {/* 

      Meet Url
      Start at
      Duration
      Topics/ meeting title
      access

      */}
    </>
  );
};

export default Meeting;
