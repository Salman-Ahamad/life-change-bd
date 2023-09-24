"use client";

import { CompanyName } from "@/components/common/Brand";
import { bulletList, close } from "@/lib/assets";
import { Button } from "@/universal";
import Image from "next/image";
import { FC, useState } from "react";
import { AvatarSmall } from "./Avatar";

export const Header: FC = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <header className="w-full bg-gray-50 sticky top-0 z-50 shadow-md">
      <nav className="w-full mx-auto max-w-screen-2xl px-4 py-3 items-center justify-between lg:flex md:px-8">
        <div className="w-full flex justify-between">
          {/* Logo */}
          <p className="">
            <CompanyName />
          </p>

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
          className={`w-full lg:flex justify-between lg:text-sm lg:font-medium lg:mt-0 ${
            toggleMenu
              ? "absolute inset-x-0 px-4 border-b bg-black lg:border-none lg:static z-50"
              : "hidden"
          }`}
        >
          <div className="w-full flex flex-col lg:flex-row justify-end items-start lg:items-center gap-5 py-5 lg:py-0">
            <Button variant="secondary">Home Page</Button>
            <AvatarSmall />
          </div>
        </div>
      </nav>
    </header>
  );
};
