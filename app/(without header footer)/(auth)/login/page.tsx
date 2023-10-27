"use client";

import { signIn, signOut, useSession } from "next-auth/react";
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
      if (session.user.role === UserRole.active) redirect("/active");
      if (
        session.user.role !== UserRole.inactive ||
        session.user.role !== UserRole.active
      )
        signOut();
    }
  }, [session]);

  return (
    <main className="h-screen flex justify-between items-center">
      <section className="w-full px-5 lg:px-0 lg:w-[50vw] max-w-[370px] mx-auto">
        <LoginForm />

        <p
          onClick={() => signIn("google", { callbackUrl: "/forgot-password" })}
          className="mt-2.5 text-orange-400 cursor-pointer w-40"
        >
          Forgot password?
        </p>

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
