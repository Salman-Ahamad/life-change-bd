"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { LoginForm } from "@/components";
import { loginBanner } from "@/lib/assets";
import { CommonText } from "@/universal";
import { useSession } from "next-auth/react";

const Login: FC = () => {
  const { data: session } = useSession();
  console.log(session);

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
