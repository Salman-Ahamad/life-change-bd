"use client";

import { Header } from "@/components";
import { UserActivationTable } from "@/components/Settings";
import { useCurrentUser } from "@/hooks";
import { IUserDataForDataTable } from "@/interface";
import { navData } from "@/lib";
import { Title } from "@/universal";
import React from "react";

const tableItems: IUserDataForDataTable[] = [
  {
    id: "1",
    image:
      "http://res.cloudinary.com/djlpbc9dz/image/upload/v1697183246/upload/dfbaurmzjogt9235nqkp.jpg",
    firstName: "Liam",
    email: "liamjames@example.com",
    phone: "+1 (555) 000-000",
    lastName: "James",
    balance: 1000,
    status: "active",
  },
  {
    id: "2",
    image:
      "http://res.cloudinary.com/djlpbc9dz/image/upload/v1697172180/upload/nylfnq5gmnbxqbazb5ac.jpg",
    firstName: "Olivia",
    email: "oliviaemma@example.com",
    phone: "+1 (555) 000-000",
    lastName: "Emma",
    balance: 900,
    status: "inactive",
  },
  {
    id: "3",
    image:
      "http://res.cloudinary.com/djlpbc9dz/image/upload/v1697172180/upload/nylfnq5gmnbxqbazb5ac.jpg",
    firstName: "William",
    email: "william.benjamin@example.com",
    phone: "+1 (555) 000-000",
    lastName: "Benjamin",
    balance: 800,
    status: "inactive",
  },
];

const UserManagement = () => {
  const user = useCurrentUser();
  const userRoll = user?.role || "inactive";

  return (
    <main className="">
      <Header navData={navData.settings} />
      <Title variant="H2" className="pt-8">
        User Management
      </Title>

      {/* This section will use for manage user activation */}
      <section className="container mx-auto">
        <UserActivationTable title="User Activation" tableData={tableItems} />
      </section>

      {/* This section will use for manage user activation */}
      <section className="container mx-auto">
        <Title variant="H4" className="text-start">
          Deposit Fund
        </Title>
      </section>
    </main>
  );
};

export default UserManagement;
