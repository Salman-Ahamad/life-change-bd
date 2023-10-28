"use client";

import { DataTable, Header } from "@/components";
import { useGetData } from "@/hooks";
import { INavItem, IUser } from "@/interface";
import { Button, Container, Title } from "@/universal";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";

const navData: INavItem[] = [
  {
    label: <AiOutlineHome className="text-2xl" />,
    link: "/controller",
  },
  {
    label: "Profile",
    link: "/controller/profile",
  },
  {
    label: "Photo Zone",
    link: "/photo-zone",
  },
];

const SubAdmin = () => {
  const [inactiveUsers, setInactiveUsers] = useState<IUser[]>([]);
  const filterableUsers = inactiveUsers.filter(
    ({ settings }) => !settings.consultant
  );

  useGetData("/user/inactive", setInactiveUsers, true);

  const handleUpdate = (id: string) => {
    console.log("🚀 ~ file: page.tsx:32 ~ handleUpdate ~ User Id ~ id:", {
      id,
    });
  };

  return (
    <main>
      <Header navData={navData} />
      <Title variant="H3" className="capitalize py-6">
        Welcome to Life Change Bd
      </Title>
      <Container>
        <Title variant="H4" className="capitalize -mb-5">
          Inactive User List
        </Title>
        {filterableUsers.length !== 0 && (
          <DataTable
            tableData={filterableUsers}
            tableHeaders={["No", "id", "Name", "Joining Time"]}
            dataProperties={["userId", "firstName", "createdAt"]}
            actionFn={handleUpdate}
            actionBtn={
              <Button variant="secondary" className="text-xs">
                Add
              </Button>
            }
          />
        )}
      </Container>
    </main>
  );
};

export default SubAdmin;
