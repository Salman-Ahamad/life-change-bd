import React from "react";
import { RiVideoAddFill } from "react-icons/ri";
import { BiSearch, BiEdit } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import Contact from "./Contact";

const RightSidebar = () => {
  return (
    <div className="fixed hidden xl:block top-16 right-0 w-[300px] mt-6 px-4 h-screen overflow-y-scroll">
      <div>
        <div className="mt-4">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-gray-600 text-[18px]">
              Contact List
            </h1>
            <div className="flex gap-4">
              <RiVideoAddFill className="text-gray-600" />
              <BiSearch />
              <BsThreeDots />
            </div>
          </div>

          <Contact />

          <div className="bg-gray-300 h-[44px] w-[44px] grid place-items-center text-[26px] rounded-full fixed right-0 bottom-0 mr-8 mb-8">
            <BiEdit />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
