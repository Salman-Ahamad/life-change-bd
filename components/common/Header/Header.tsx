"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

import { INav } from "@/interface";
import { bulletList, close } from "@/lib/assets";
import { Button, MainContainer } from "@/universal";
import { signOut } from "next-auth/react";

export const Header: FC<INav> = ({ navData }) => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <MainContainer
      bgColor={toggle ? "black" : "secondary"}
      className="relative"
    >
      <nav className="relative items-center py-5 px-4 xl:px-4 mx-auto  xl:flex xl:gap-4 xl:justify-between">
        <div className="flex justify-between">
          <div className="block xl:hidden" />
          <button
            onClick={() => setToggle((prv: boolean) => !prv)}
            className="block xl:hidden"
          >
            {toggle ? (
              <Image src={close} alt="" className="h-6 w-6" />
            ) : (
              <Image src={bulletList} alt="" className="h-6 w-6" />
            )}
          </button>
        </div>

        <div
          className={`flex-1 justify-between xl:text-sm xl:font-medium xl:flex xl:mt-0 ${
            toggle
              ? "absolute inset-x-0 border-b bg-black xl:border-none xl:static z-50"
              : "hidden"
          }`}
        >
          <div className="w-full flex flex-col xl:flex-row justify-center items-start xl:justify-between xl:items-center gap-5 xl:gap-2 py-5 xl:py-0 px-5 lg:px-10 xl:px-0">
            <div className="flex flex-col xl:flex-row justify-center items-start xl:justify-start xl:items-center gap-5 xl:gap-3">
              {navData.map(({ label, link }, idx) => (
                <Link
                  key={idx}
                  href={link}
                  className="text-white hover:text-info text-base font-normal text-center transition-all ease-in-out delay-75"
                >
                  {label}
                </Link>
              ))}
            </div>
            <Button variant="secondary" onClick={() => signOut()}>
              Log Out
            </Button>
          </div>
        </div>
      </nav>
    </MainContainer>
  );
};
