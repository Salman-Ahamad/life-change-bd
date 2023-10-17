"use client";

import { Header } from "@/components";
import { SearchUser } from "@/components/Settings";
import { useCurrentUser } from "@/hooks";
import { UserRole, navData } from "@/lib";
import { Title } from "@/universal";
import { redirect } from "next/navigation";
import React, { use } from "react";

const Students = () => {
  const user = useCurrentUser();
  const userRoll = user?.role || "inactive";

  // TODO: Change the approach
  if (user?.role === UserRole.inactive) {
    redirect("/inactive");
  } else if (user?.role === UserRole.active) {
    redirect("/user/active");
  }

  return (
    <main>
      <Header navData={navData.settings} />
      <Title variant="H2" className="pt-8">
        Students Setting
      </Title>
      <SearchUser role={userRoll} />
    </main>
  );
};

export default Students;
