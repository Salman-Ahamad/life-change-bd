"use client";

import React, { FC, useState } from "react";
import Link from "next/link";
import Brand from "../Brand/Brand";
import { Button } from "@/universal";

const Nav: FC = () => {
  const nav = [
    { title: "Home", path: "/" },
    { title: "About", path: "/" },
    { title: "Contact", path: "/" },
    { title: "Courses", path: "/" },
  ];

  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  return (
    <nav className="items-center py-5 md:py-4 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:justify-between md:space-x-6">
      <div className="w-full flex md:justify-between items-center gap-14">
        <div className="w-full flex justify-between md:justify-start items-center">
          <Brand />
          {/* Mobile Menu | hidden in desktop version*/}
          <button
            className="text-gray-500 outline-none md:hidden"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            {toggleMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
        <ul
          className={`flex-1 justify-between mt-12 md:flex md:gap-4 md:mt-0 ${
            toggleMenu ? "" : "hidden"
          }`}
        >
          <li className="order-2 pb-5 md:pb-0 md:flex md:items-center gap-4">
            <Button>SubAdmin Login</Button>
          </li>
          <li className="order-3 pb-5 md:pb-0 md:flex md:items-center gap-4">
            <Button>Admin Login</Button>
          </li>
          <div className="order-1 flex-1 justify-center items-center space-y-5 md:flex md:space-x-6 md:space-y-0">
            {nav.map((item, idx) => (
              <li
                className="text-white hover:text-indigo-500 text-2xl font-normal transition-all ease-in-out delay-75"
                key={idx}
              >
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
