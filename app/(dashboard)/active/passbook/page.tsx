"use client";

import { useState } from "react";

import { DataTable, Header, PageHeader } from "@/components";
import { useGetData } from "@/hooks";
import { INavItem, IUser, IWithdrawal } from "@/interface";
import { BackButton, Button, Title } from "@/universal";
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
  const [passbookDebitData, setPassbookDebitData] = useState<
    IWithdrawal[] | null
  >(null);
  const [dataType, setDataType] = useState<string>("credit");

  useGetData("/all-ref/?collectInactive=true", setPassbookData);
  useGetData("/withdrawal/passbook", setPassbookDebitData);

  return (
    <>
      <Header navData={navData} />
      <PageHeader title="Passbook" notice="Last 3 Month Outbound" />
      <div className="flex justify-center gap-4 py-6">
        <Button onClick={() => setDataType("credit")} variant="secondary">
          Credit History
        </Button>
        <Button onClick={() => setDataType("debit")} variant="secondary">
          Debit History
        </Button>
      </div>
      {passbookData === null ? (
        <Title variant="H4" className="text-center capitalize my-10">
          Loading... Please wait 🔃
        </Title>
      ) : dataType === "credit" && passbookData?.length !== 0 ? (
        <DataTable
          tableData={passbookData}
          tableHeaders={["Date", "id", "Name", "Joining Time"]}
          dataProperties={["createdAt", "firstName", "createdAt", "phone"]}
          message="Message"
        />
      ) : dataType === "debit" && passbookDebitData ? (
        <DataTable
          tableData={passbookDebitData}
          tableHeaders={["no", "Date", "amount", "method", "Number", "status"]}
          dataProperties={["createdAt", "amount", "method", "number", "status"]}
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
