"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FC, useEffect } from "react";

import { LoginForm } from "@/components";
import { UserRole, loginBanner } from "@/lib";
import { CommonText } from "@/universal";

const AdminLogin: FC = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      if (session.user.role !== UserRole.admin) {
        signOut();
        // redirect("/user/active")
      } else {
        redirect("/user/active");
      }
    }
  }, [session]);

  return (
    <main className="h-screen flex justify-between items-center">
      <section className="w-full px-5 lg:px-0 lg:w-[50vw] max-w-[370px] mx-auto">
        <LoginForm />
      </section>
    </main>
  );
};

export default AdminLogin;
