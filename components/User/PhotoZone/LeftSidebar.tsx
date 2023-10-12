"use client";

import React from "react";

import LeftSidebarLink from "./LeftSidebarLink";
import { useSession } from "next-auth/react";

const LeftSidebar = () => {
  const { data: session } = useSession();

  return (
    <aside className="px-4 fixed mt-5 hidden lg:block">
      <div className="flex flex-col gap-2">
        <LeftSidebarLink
          image={session?.user?.image}
          text={session?.user?.name}
        />

        {/* Extra link section */}
        {/* <LeftSidebarLink image="/save.png" text="Saved" />
        <LeftSidebarLink image="/pages.png" text="Pages" /> */}

        {/* Extra item if needed: This is for show more button */}
        {/* <div className="flex items-center gap-3 w-[300px] py-2 pl-1 cursor-pointer hover:bg-gray-300">
          <div className="bg-gray-300 h-[30px] w-[30px] grid place-items-center rounded-full">
            <BsChevronDown />
          </div>
          <h1 className="text-[16px] font-medium">See More</h1>
        </div> */}

        <p className="text-[14px] text-gray-500 mt-2 fixed bottom-4">
          Privacy · Terms · Advertising · Ad choices · <br /> Cookies · Meta ©
          2022
        </p>
      </div>
    </aside>
  );
};

export default LeftSidebar;
