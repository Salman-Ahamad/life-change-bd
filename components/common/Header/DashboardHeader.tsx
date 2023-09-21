"use client";

import { FC, useState } from "react";
import { INav } from "@/interface";
import { MainContainer } from "@/universal";
import Image from "next/image";
import { bulletList, close } from "@/lib/assets";
import Link from "next/link";

export const DashboardHeader: FC<INav> = ({ navData }) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <MainContainer bgColor="black" className="relative">
      <nav className="relative items-center py-5 px-4 mx-auto sm:px-8 lg:flex lg:space-x-6 lg:justify-between">
        <div className="flex justify-between ">
          {/* Mobile Button */}
          <button
            onClick={() => setToggleMenu((prv: boolean) => !prv)}
            className="block lg:hidden"
          >
            {toggleMenu ? (
              <Image src={close} alt="" className="h-6 w-6" />
            ) : (
              <Image src={bulletList} alt="" className="h-6 w-6" />
            )}
          </button>
        </div>

        <div
          className={`flex-1 justify-between lg:text-sm lg:font-medium lg:flex lg:mt-0 ${
            toggleMenu
              ? "absolute inset-x-0 px-4 border-b bg-black lg:border-none lg:static z-50"
              : "hidden"
          }`}
        >
          <div className="flex flex-col lg:flex-row justify-center lg:justify-center items-start lg:items-center gap-10 lg:gap-14 py-20 lg:py-0">
            {navData.map(({ label, link }, idx) => (
              <Link
                key={idx}
                href={link}
                className="text-white hover:text-sky-500 text-2xl font-normal text-center transition-all ease-in-out delay-75"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex gap-4 pb-10 lg:pb-0 flex-col sm:flex-row"></div>
        </div>
      </nav>
    </MainContainer>
  );
};
