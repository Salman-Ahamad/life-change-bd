"use client";

import { Header, SearchBar } from "@/components";
import { INavItem, IUser } from "@/interface";
import { BackButton, Container, Title } from "@/universal";
import { FC, useState } from "react";

const navData: INavItem[] = [
  {
    label: <BackButton />,
    link: "/trainer",
  },
];

const SubAdmin: FC = () => {
  const [students, setStudents] = useState<IUser[] | null>(null);

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
          className="capitalize -mb-5 flex flex-col justify-center items-center gap-3.5"
        >
          Reference Count
          <span className="bg-info bg-opacity-40 py-1 px-3.5  rounded-full ring ring-success text-gray-950 font-extrabold w-fit text-center">
            {Number(students) || 0}
          </span>
        </Title>
      </Container>
    </main>
  );
};

export default SubAdmin;
