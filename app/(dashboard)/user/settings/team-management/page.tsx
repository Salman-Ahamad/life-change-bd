"use client";

import { Header, UserDataTable } from "@/components";
import { IDataTableWithImage, IUserDataForDataTable } from "@/interface";
import { navData } from "@/lib";
import { Button } from "@/universal";
import Image from "next/image";
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
  },
];

const TeamManagement: React.FC = () => {
  return (
    <main>
      <Header navData={navData.settings} />
      <UserDataTable title="Controller" tableData={tableItems} />
      <UserDataTable title="Consultant" tableData={tableItems} />
    </main>
  );
};

export default TeamManagement;
