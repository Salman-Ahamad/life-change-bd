"use client";

import React, { useState } from "react";
import { IAllRefer } from "@/interface";
import { updateData, useGetData } from "@/hooks";
import { Types } from "mongoose";
import { toast } from "react-toastify";
import { DataTable, Header, PageHeader, RefTable } from "@/components";
import { navData } from "@/lib";
import { Button, Title } from "@/universal";

const Report = () => {
  //   const [reportData, setReportData] = useState<[] | null>(null);
  //   useGetData("/all-ref?collectInactive=false", setRefData);

  const handleUpdate = async (id: string, refId: string) => {
    console.log("Update Clicked");

    // if (Types.ObjectId.isValid(id)) {
    //   await updateData(`/all-ref/${id}`, {}).then(() =>
    //     window.location.reload()
    //   );
    // } else {
    //   toast.error("Invalid Id");
    // }
  };

  const reportData = [
    {
      id: "sfsadfdsf7sa79",
      firstName: "Amir",
      createdAt: Date.now(),
      phone: "1234567890",
      deposited: 500,
    },
  ];

  return (
    <>
      <Header navData={navData.settings} />
      <PageHeader title="Reports" notice="Last 3 Month Outbound" />
      {reportData === null ? (
        <Title variant="H4" className="text-center capitalize my-10">
          Loading... Please wait 🔃
        </Title>
      ) : (
        <DataTable
          tableHeaders={["id", "Name", "Joining Time", "Deposited"]}
          dataProperties={[
            "id",
            "firstName",
            "createdAt",
            "phone",
            "deposited",
          ]}
          tableData={reportData}
        />
      )}
    </>
  );
};

export default Report;
