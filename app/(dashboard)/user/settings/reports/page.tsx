"use client";

import { DataTable, Header, PageHeader } from "@/components";
import { updateData, useGetData } from "@/hooks";
import { IUser } from "@/interface";
import { navData } from "@/lib";
import { Title } from "@/universal";
import { Types } from "mongoose";
import { useState } from "react";
import { toast } from "react-toastify";

const Report = () => {
  const [data, setData] = useState<IUser[] | null>(null);
  useGetData("/all-ref/1?collectInactive=true", setData);

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
      <Header navData={navData.settings} />
      <PageHeader title="Reports" notice="Last 3 Month Outbound" />
      {data === null ? (
        <Title variant="H4" className="text-center capitalize my-10">
          Loading... Please wait 🔃
        </Title>
      ) : (
        <DataTable
          tableHeaders={["no", "id", "Name", "Joining Time", "Message"]}
          dataProperties={["id", "firstName", "createdAt", "phone"]}
          tableData={data}
        />
      )}
    </>
  );
};

export default Report;
