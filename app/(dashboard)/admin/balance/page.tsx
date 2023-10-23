"use client";

import { Header } from "@/components";

import { BalanceManagement } from "@/components/Admin";
import { INavItem } from "@/interface";
import { BackButton, Container } from "@/universal";

const adminNav: INavItem[] = [
  {
    label: <BackButton className="text-2xl" />,
    link: "/active",
  },
];

const Balance = () => {
  return (
    <main>
      <Header navData={adminNav} />

      <Container className="flex flex-col justify-center items-center">
        <BalanceManagement />
      </Container>
    </main>
  );
};

export default Balance;
