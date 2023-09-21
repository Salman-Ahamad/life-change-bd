import { bulletList, close } from "@/lib/assets";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useState } from "react";

const navData = [
  { label: "Profile", link: "/" },
  { label: "Courses", link: "/" },
  { label: "References", link: "/" },
  { label: "Earn Reward Points", link: "/" },
  { label: "Instant Redeem", link: "/" },
  { label: "Messages", link: "/" },
  { label: "Transfer Points", link: "/" },
  { label: "Photo Zone", link: "/" },
  { label: "Video Zone", link: "/" },
  { label: "Logout", link: "/" },
];

export const Header: FC = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <header className="bg-sky-600 sticky top-0 z-50">
      <nav className="mx-auto px-4 py-3 items-center justify-between text-white lg:flex md:px-8 overflow-clip">
        <div className="w-full flex justify-between lg:hidden">
          {/* <Logo /> */}
          <p className="">Current Page</p>

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
          <div className="flex flex-col lg:flex-row justify-center lg:justify-center items-start lg:items-center gap-5 py-5 lg:py-0">
            {navData.map(({ label, link }, idx) => (
              <Link
                key={idx}
                href={link}
                className="text-white hover:text-sky-500 text-sm font-normal transition-all ease-in-out delay-75"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};
