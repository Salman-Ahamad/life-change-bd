"use client";

import { Header, SearchBar } from "@/components";
import { RefTable } from "@/components/Settings/RefTable";
import { createData, useCurrentUser } from "@/hooks";
import { INavItem, IUser } from "@/interface";
import { Button, Container, Label, Title } from "@/universal";
import { FC, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";

const navData: INavItem[] = [
  {
    label: <AiOutlineHome className="text-2xl" />,
    link: "/sgl",
  },
  // {
  //   label: "Count",
  //   link: "/sgl/count",
  // },
  {
    label: "Profile",
    link: "/sgl/profile",
  },
  {
    label: "Photo Zone",
    link: "/photo-zone",
  },
];

const SubAdmin: FC = () => {
  const [students, setStudents] = useState<IUser[] | null>(null);
  const [userId, setUserId] = useState("");
  // const [open, setOpen] = useState(false);
  // const [selectUser, setSelectUser] = useState<IUser>();

  const user = useCurrentUser(true);

  const handleRequest = () => {
    createData("/request", {
      to: "230001", // Admin Id
      userId: userId,
      seniorId: user?.userId,
    });
    setUserId("");
  };

  // const handleAddTrainer = ({ user }: IActionFn) => {
  //   setSelectUser(user);
  //   setOpen(true);
  // };

  return (
    <main>
      {/* {selectUser && <PopUp open={open} setOpen={setOpen} user={selectUser} />} */}
      <Header navData={navData} />
      <Title variant="H3" className="capitalize py-6">
        Welcome to Life Change Bd
      </Title>
      <Container>
        <div className="flex flex-col justify-center items-start gap-1 mb-5 w-fit mx-auto">
          <Label className="text-sm lg:text-sm ml-2">
            Request New Group Leader
          </Label>
          <div className="flex justify-center items-center gap-1">
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="focus:outline-none border border-primary px-1.5 py-0.5 rounded-md sm:w-auto"
            />
            <Button
              variant="secondary"
              disabled={userId.length === 0}
              onClick={handleRequest}
              className="disabled:opacity-40"
            >
              Request
            </Button>
          </div>
        </div>

        <SearchBar setData={setStudents} onlyActive />

        <Title variant="H4" className="capitalize -mb-5">
          Group Leader List
        </Title>
        {students && students?.length !== 0 && (
          <RefTable
            tableData={students}
            tableHeaders={["No", "id", "Name", "Joining Time"]}
            dataProperties={["userId", "firstName", "createdAt", "phone"]}
            message="Message"
            // actionFn={handleAddTrainer}
            // actionBtn={<Button variant="accent">Add Trainer</Button>}
          />
        )}
      </Container>
    </main>
  );
};

export default SubAdmin;
