"use client";

import React from "react";
import { Header } from "@/components/User/PhotoZone";

const page = () => {
  return (
    <>
      <Header />
      <main className="w-full mx-auto max-w-screen-2xl min-h-screen py-8 flex gap-12">
        {/* Left sidebar  */}
        <aside className="flex w-0 md:w-64 lg:w-96"></aside>
        {/* Main Site  */}
        <div className="flex flex-col gap-4">
          <article className="p-4 w-full flex-grow border rounded-md">
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores,
              fugit repellat cupiditate voluptates repellendus, laboriosam
              quisquam nulla eos eaque commodi pariatur necessitatibus quaerat
              aperiam, vel nostrum inventore delectus eum cum!
            </p>
          </article>
        </div>
        {/* Right sidebar  */}
        <aside className="flex w-0 md:w-64 lg:w-96"></aside>
      </main>
    </>
  );
};

export default page;
