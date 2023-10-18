"use client";

import { useState } from "react";

import { DataTable, Header, PageHeader } from "@/components";
import { useGetData } from "@/hooks";
import { INavItem, IUser } from "@/interface";
import { BackButton, Title } from "@/universal";
import { AiOutlineHome } from "react-icons/ai";

const navData: INavItem[] = [
  {
    label: <BackButton className="text-2xl" />,
    link: "/active/user/profile",
  },
  {
    label: <AiOutlineHome className="text-2xl" />,
    link: "/active",
  },
];

const Passbook = () => {
  const [passbookData, setPassbookData] = useState<IUser[] | null>(null);
  useGetData("/all-ref/?inactiveBonus=true", setPassbookData);

  return (
    <>
      <Header navData={navData} />
      <PageHeader title="Passbook" notice="Last 3 Month Outbound" />
      {passbookData === null ? (
        <Title variant="H4" className="text-center capitalize my-10">
          Loading... Please wait 🔃
        </Title>
      ) : passbookData?.length !== 0 ? (
        <DataTable
          tableData={passbookData}
          tableHeaders={["No", "id", "Name", "Joining Time"]}
          dataProperties={["userId", "firstName", "createdAt", "phone"]}
          message="Message"
        />
      ) : (
        <Title variant="H3" className="text-center capitalize my-10">
          Passbook data not found 😒
        </Title>
      )}
    </>
  );
};

export default Passbook;
