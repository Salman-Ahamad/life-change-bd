"use client";

import { LoginForm } from "@/components";
import { UserRole } from "@/lib";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { FC, useEffect } from "react";

const AdminLogin: FC = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      if (session.user.role !== UserRole.admin) {
        signOut();
      } else {
        redirect("/admin");
      }
    }
  }, [session]);

  return (
    <main className="h-screen flex justify-between items-center">
      <section className="w-full px-5 lg:px-0 lg:w-[50vw] max-w-[370px] mx-auto">
        <LoginForm title="Admin login" />
      </section>
    </main>
  );
};

export default AdminLogin;
