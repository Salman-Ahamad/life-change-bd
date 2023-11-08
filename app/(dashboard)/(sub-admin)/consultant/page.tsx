"use client";

import { Header, SearchBar } from "@/components";
import { RefTable } from "@/components/Settings/RefTable";
import { createData, useCurrentUser, useGetData } from "@/hooks";
import { INavItem, IUser } from "@/interface";
import { Button, Container, Label, Title } from "@/universal";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";

const navData: INavItem[] = [
  {
    label: <AiOutlineHome className="text-2xl" />,
    link: "/consultant",
  },
  {
    label: "Count",
    link: "/consultant/count",
  },
  {
    label: "Profile",
    link: "/consultant/profile",
  },
  {
    label: "Photo Zone",
    link: "/photo-zone",
  },
];

const SubAdmin = () => {
  const [students, setStudents] = useState<IUser[] | null>(null);
  const [userId, setUserId] = useState("");
  const user = useCurrentUser(true);

  useGetData(`/user/consultant?id=${user?.userId}`, setStudents);

  const handleRequest = () => {
    createData("/request", {
      to: "230174", // Controller Id
      userId: userId,
      seniorId: user?.userId,
    });
    setUserId("");
  };

  return (
    <main>
      <Header navData={navData} />
      <Title variant="H3" className="capitalize py-6">
        Welcome to Life Change Bd
      </Title>
      <Container>
        <div className="flex flex-col justify-center items-start gap-1 mb-5 w-fit mx-auto">
          <Label className="text-sm lg:text-sm ml-2">
            Request New Inactive User
          </Label>
          <div className="flex justify-center items-center gap-1 flex-col sm:flex-row">
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="focus:outline-none border border-primary px-1.5 py-0.5 rounded-md w-full sm:w-auto"
            />
            <Button
              variant="secondary"
              disabled={userId.length === 0}
              onClick={handleRequest}
              className="disabled:opacity-40 w-full sm:w-auto"
            >
              Request
            </Button>
          </div>
        </div>

        <SearchBar setData={setStudents} />

        <Title variant="H4" className="capitalize -mb-5">
          Inactive User List
        </Title>
        {students && students?.length !== 0 && (
          <RefTable
            tableData={students}
            tableHeaders={["No", "id", "Name", "Joining Time"]}
            dataProperties={["userId", "firstName", "createdAt", "phone"]}
            message="Message"
            messageDone
          />
        )}
      </Container>
    </main>
  );
};

export default SubAdmin;
