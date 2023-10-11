"use client";

import { Header } from "@/components";
import { DataTable } from "@/components/common/DataTable";
import { navData } from "@/lib/data";

const tableItems = [
  {
    name: "Liam James",
    email: "liamjames@example.com",
    position: "Software engineer",
    salary: "$100K",
  },
  {
    name: "Olivia Emma",
    email: "oliviaemma@example.com",
    position: "Product designer",
    salary: "$90K",
  },
  {
    name: "William Benjamin",
    email: "william.benjamin@example.com",
    position: "Front-end developer",
    salary: "$80K",
  },
  {
    name: "Henry Theodore",
    email: "henrytheodore@example.com",
    position: "Laravel engineer",
    salary: "$120K",
  },
  {
    name: "Amelia Elijah",
    email: "amelia.elijah@example.com",
    position: "Open source manager",
    salary: "$75K",
  },
];

const Meeting = () => (
  <>
    <Header navData={navData.meeting} />
    <DataTable
      title="Team Members"
      tableHeaders={["Name", "Email", "Position"]}
      dataProperties={["name", "position", "salary", "email"]}
      tableData={tableItems}
    />
  </>
);

export default Meeting;
