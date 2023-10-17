"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { FC, useEffect } from "react";

import { LoginForm } from "@/components";
import { UserRole, loginBanner } from "@/lib";
import { CommonText } from "@/universal";

const Login: FC = () => {
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user) {
      if (session.user.role === UserRole.inactive) redirect("/inactive");
      if (session.user.role === UserRole.active) redirect("/user/active");
      if (session.user.role === UserRole.admin) signOut();
      if (session.user.role === UserRole.consultant) signOut();
      if (session.user.role === UserRole.controller) signOut();
      if (session.user.role === UserRole.gl) signOut();
      if (session.user.role === UserRole.teacher) signOut();
    }
  }, [session]);

  return (
    <main className="h-screen flex justify-between items-center">
      <section className="w-full px-5 lg:px-0 lg:w-[50vw] max-w-[370px] mx-auto">
        <LoginForm />

        <Link href="/forgot-password">
          <CommonText className="mt-2.5 text-orange-400">
            Forgot password?
          </CommonText>
        </Link>

        <CommonText className="text-center mt-5">
          Don&rsquo;t have an account?&nbsp;
          <Link href="/signup" className="text-primary">
            Register here
          </Link>
        </CommonText>
      </section>

      <Image
        src={loginBanner}
        className="h-screen w-full md:w-[50vw] hidden md:block"
        alt=""
      />
    </main>
  );
};

export default Login;
