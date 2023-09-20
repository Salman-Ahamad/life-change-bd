"use client";

import { Input } from "@/components";

const Test = () => (
  <div className="font-sans antialiased bg-grey-lightest">
    <div className="w-full bg-grey-lightest pt-[4rem]">
      <div className="container mx-auto py-8">
        <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
          <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">
            Register for a free account
          </div>
          <div className="py-4 px-8">
            <div className="flex mb-4">
              <div className="w-1/2 mr-1">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="first_name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="first_name"
                  type="text"
                  placeholder="Your first name"
                />
                {/* <Input
                  type="text"
                  name="first_name"
                  placeholder="Your first name"
                /> */}
              </div>
              <div className="w-1/2 ml-1">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="last_name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="last_name"
                  type="text"
                  placeholder="Your last name"
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="email"
                type="email"
                placeholder="Your email address"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="password"
                type="password"
                placeholder="Your secure password"
              />
              <p className="text-grey text-xs mt-1">At least 6 characters</p>
            </div>
            <div className="flex items-center justify-between mt-8">
              <button
                className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <p className="text-center my-4">
          <a
            href="#"
            className="text-grey-dark text-sm no-underline hover:text-grey-darker"
          >
            I already have an account
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default Test;
