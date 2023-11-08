"use client";

import { Header, SearchBar } from "@/components";
import { INavItem } from "@/interface";
import { BackButton, Container, Title } from "@/universal";
import { FC, useState } from "react";

const navData: INavItem[] = [
  {
    label: <BackButton className="text-2xl" />,
    link: "/consultant",
  },
];

const SubAdmin: FC = () => {
  const [students, setStudents] = useState<{
    active: number;
    inactive: number;
  } | null>(null);

  return (
    <main>
      <Header navData={navData} />
      <Title variant="H3" className="capitalize py-6">
        Welcome to Life Change Bd
      </Title>
      <Container>
        <SearchBar setData={setStudents} count />

        <Title
          variant="H4"
          className="capitalize flex flex-col justify-center items-center gap-3.5"
        >
          Reference Count
        </Title>
        <div className="flex flex-col justify-center items-center">
          <div className="flex gap-3.5 text-xl mt-5 font-semibold">
            Active -
            <p className="bg-info bg-opacity-40 py-1 px-3.5  rounded-full ring ring-success text-gray-950 font-extrabold w-fit text-center">
              {students?.active! || 0}
            </p>
          </div>
          <div className="flex gap-3.5 text-xl mt-5 font-semibold">
            Inactive -
            <p className="bg-info bg-opacity-40 py-1 px-3.5  rounded-full ring ring-success text-gray-950 font-extrabold w-fit text-center">
              {students?.inactive! || 0}
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default SubAdmin;
