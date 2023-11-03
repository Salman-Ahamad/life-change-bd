"use client";

import { Header } from "@/components";
import { RefTable } from "@/components/Settings/RefTable";
import { useGetData } from "@/hooks";
import { INavItem, IUser } from "@/interface";
import { BackButton, Container, Title } from "@/universal";
import { useState } from "react";

const navData: INavItem[] = [
  {
    label: <BackButton className="text-2xl" />,
    link: "/trainer",
  },
];

const SubAdmin = () => {
  const [students, setStudents] = useState<IUser[]>([]);
  useGetData(`/user/trainer`, setStudents);

  return (
    <main>
      <Header navData={navData} />
      <Title variant="H3" className="capitalize py-6">
        Welcome to Life Change Bd
      </Title>
      <Container>
        <Title variant="H4" className="capitalize -mb-5">
          Trainer List
        </Title>
        {students && students?.length !== 0 && (
          <RefTable
            tableData={students}
            tableHeaders={["No", "id", "Name", "Joining Time"]}
            dataProperties={["userId", "firstName", "createdAt", "phone"]}
            message="Message"
            slugUrl="/admin/user-management/student/"
          />
        )}
      </Container>
    </main>
  );
};

export default SubAdmin;
