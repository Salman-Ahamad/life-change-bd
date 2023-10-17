"use client";

import { useCurrentUser } from "@/hooks";
import { Button } from "@/universal";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";

const Navbar: FC = () => {
  const user = useCurrentUser();

  return (
    <div className="py-2 px-4 bg-white shadow-md flex justify-between items-center top-0 sticky z-50">
      <Link href="/user/photo-zone/profile" className="flex items-center gap-2">
        <Image
          src={user?.image || ""}
          width={40}
          height={40}
          className="w-10 h-10 cursor-pointer rounded-full"
          alt={user?.firstName || ""}
        />
        <p className="text-xl font-semibold px-4">{user && user?.firstName}</p>

        <div className="relative hidden sm:block">
          <AiOutlineSearch className="absolute text-[20px] top-[10px] left-[10px] text-gray-500" />
          <input
            className="bg-[#F0F2F5] p-2 rounded-full pl-9 outline-none placeholder:text-gray-500"
            type="text"
            placeholder="Search"
          />
        </div>
      </Link>

      <div className="hidden lg:flex items-center gap-[100px] text-[30px] text-gray-500">
        <Link href="/active/user" className="relative flex gap-4">
          <AiFillHome className="text-primary" />
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="secondary" className="rounded-lg" onClick={signOut}>
          LogOut
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
