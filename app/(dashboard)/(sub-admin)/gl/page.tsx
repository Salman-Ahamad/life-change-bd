"use client";

import { Header } from "@/components";
import { RefTable } from "@/components/Settings/RefTable";
import { createData, useCurrentUser, useGetData } from "@/hooks";
import { IActionFn, INavItem, IUser } from "@/interface";
import { Button, Container, Label, Title } from "@/universal";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";

const navData: INavItem[] = [
  {
    label: <AiOutlineHome className="text-2xl" />,
    link: "/gl",
  },
  {
    label: "Inactive",
    link: "/gl/inactive",
  },
  {
    label: "Trainer",
    link: "/gl/trainer",
  },
  {
    label: "Profile",
    link: "/gl/profile",
  },
  {
    label: "Photo Zone",
    link: "/photo-zone",
  },
];

const SubAdmin: FC = () => {
  const [students, setStudents] = useState<IUser[]>([]);
  const [userId, setUserId] = useState("");
  const [open, setOpen] = useState(false);
  const user = useCurrentUser(true);

  useGetData(`/user/gl?id=${user?.userId}`, setStudents, true);

  const handleRequest = () => {
    createData("/request", {
      to: "230001", // Admin Id
      userId: userId,
      seniorId: user?.userId,
    });
    setUserId("");
  };

  const handleAddTrainer = ({ id, user }: IActionFn) => {
    console.log("🚀 ~ file: page.tsx:51 ~ handleAddTrainer ~ id:", user);
    setOpen(true);
  };

  return (
    <main>
      <PopUp open={open} setOpen={setOpen} />
      <Header navData={navData} />
      <Title variant="H3" className="capitalize py-6">
        Welcome to Life Change Bd
      </Title>
      <Container>
        <div className="flex flex-col justify-center items-start gap-1 mb-5 w-fit mx-auto">
          <Label className="text-sm lg:text-sm ml-2">
            Request New Active User
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

        <Title variant="H4" className="capitalize -mb-5">
          Student List (Active User)
        </Title>
        {students && students?.length !== 0 && (
          <RefTable
            tableData={students}
            tableHeaders={["No", "id", "Name", "Joining Time"]}
            dataProperties={["userId", "firstName", "createdAt", "phone"]}
            message="Message"
            actionFn={handleAddTrainer}
            actionBtn={<Button variant="accent">Add Trainer</Button>}
          />
        )}
      </Container>
    </main>
  );
};

export default SubAdmin;

export const PopUp: FC<{
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ open: visible, setOpen }) => {
  const [userId, setUserId] = useState("");

  const handleAddTrainer = () => {};

  return (
    <section
      className={`${
        visible ? "flex" : "hidden"
      } absolute w-screen h-screen justify-center items-center bg-black bg-opacity-50`}
    >
      <div className="w-fit h-fit p-5 rounded-lg shadow-lg relative bg-white">
        <div
          onClick={() => setOpen(false)}
          className="absolute top-2 right-2 cursor-pointer"
        >
          ❌
        </div>
        <div className="flex flex-col justify-center items-center gap-1 w-fit mx-auto">
          <div className="flex flex-col justify-center items-center gap-2.5">
            <Label className="font-semibold">Add Trainer</Label>
            <input
              type="text"
              value={userId}
              placeholder="Trainer ID"
              onChange={(e) => setUserId(e.target.value)}
              className="focus:outline-none border border-primary px-1.5 py-0.5 rounded-md sm:w-auto"
            />
          </div>
          <Button
            variant="secondary"
            disabled={userId.length === 0}
            onClick={handleAddTrainer}
            className="disabled:opacity-40 w-full"
          >
            Add
          </Button>
        </div>
      </div>
    </section>
  );
};
