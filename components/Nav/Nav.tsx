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
    <nav className="relative items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6 md:justify-between">
      <div className="flex justify-between">
        <Brand />

        {/* Mobile Button */}
        <button
          className="text-white outline-none md:hidden"
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
        className={`flex-1 justify-between mt-12 md:text-sm md:font-medium md:flex md:mt-0 ${
          toggleMenu
            ? "absolute inset-x-0 px-4 border-b bg-black md:border-none md:static"
            : "hidden"
        }`}
      >
        <div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12">
          {nav.map((item, idx) => (
            <li
              className="text-white hover:text-indigo-500 text-2xl font-normal transition-all ease-in-out delay-75"
              key={idx}
            >
              <a href={item.path}>{item.title}</a>
            </li>
          ))}
        </div>
        <div className="flex gap-4">
          <li className="order-2 py-5 md:py-0">
            <Link
              href="/"
              className="py-2 px-5 rounded-lg font-medium text-white text-center hover:bg-indigo-500 active:bg-indigo-500 duration-150 block md:py-3 md:inline border"
            >
              SubAdmin Login
            </Link>
          </li>
          <li className="order-2 py-5 md:py-0">
            <Link
              href="/"
              className="py-2 px-5 rounded-lg font-medium text-white text-center hover:bg-indigo-500 active:bg-indigo-500 duration-150 block md:py-3 md:inline border"
            >
              Admin Login
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
