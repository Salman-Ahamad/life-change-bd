import Link from "next/link";
import React, { useState } from "react";
import Brand from "../Brand/Brand";

const nav = [
  { title: "Home", path: "/" },
  { title: "About", path: "/" },
  { title: "Contact", path: "/" },
  { title: "Courses", path: "/" },
];

const Nav = () => {
  const [state, setState] = useState(false);

  return (
    <nav className="items-center py-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
      <div className="flex justify-between items-center">
        <Brand />
        {/* Mobile Menu */}
        <button
          className="text-gray-500 outline-none md:hidden"
          onClick={() => setState(!state)}
        >
          {state ? (
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
        className={`flex-1 justify-between mt-12 md:flex md:mt-0 ${
          state ? "" : "hidden"
        }`}
      >
        <li className="order-2 pb-5 md:pb-0">
          <Link
            href="/"
            className="py-3 px-6 rounded-md shadow-md text-white text-center"
          >
            Sign In
          </Link>
        </li>
        <div className="order-1 flex-1 justify-center items-center space-y-5 md:flex md:space-x-6 md:space-y-0">
          {nav.map((item, idx) => (
            <li className="text-gray-500 hover:text-indigo-600" key={idx}>
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
