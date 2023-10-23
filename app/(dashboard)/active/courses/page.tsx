"use client";

import { Header } from "@/components";
import { useGetData } from "@/hooks";
import { ICourse, INavItem } from "@/interface";
import { BackButton, LinkButton } from "@/universal";
import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

const navData: INavItem[] = [
  {
    label: <BackButton className="text-2xl" />,
    link: "/active",
  },
];

const Courses: NextPage = () => {
  const [courses, setCourses] = useState<ICourse[] | null>();

  useGetData("/courses", setCourses, true);

  return (
    <>
      <Header navData={navData} />
      <section className="py-12">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
          <ul className="grid gap-x-8 gap-y-10 mt-8 sm:grid-cols-2 lg:grid-cols-3">
            {courses
              ? courses.map(({ image, title, status, slug }, i) => (
                  <li
                    className="mx-auto group sm:max-w-sm shadow-md rounded-lg"
                    key={i}
                  >
                    <div>
                      <Image
                        src={image}
                        alt={title}
                        width={320}
                        height={208}
                        className="rounded-t-lg object-fit w-80 h-52 bg-black"
                      />

                      <div className="space-y-2 p-2">
                        <h3 className="text-lg text-gray-800 duration-150 font-semibold">
                          {title}
                        </h3>
                      </div>
                      <div className="w-full flex justify-end items-end">
                        <LinkButton
                          href={`/active/courses/${slug}`}
                          variant="secondary"
                          className="m-4 border-t"
                        >
                          {status}
                        </LinkButton>
                      </div>
                    </div>
                  </li>
                ))
              : Array.from(Array(6).keys()).map((el) => (
                  <section key={el} className="w-full max-w-sm mx-auto">
                    <div className="animate-pulse">
                      <div className="space-y-5 py-1">
                        <div className="h-52 bg-slate-500 rounded" />
                        <div className="h-8 bg-slate-300 rounded" />
                        <div className="flex justify-between items-center">
                          <div />
                          <div className="w-32 h-8 bg-slate-500 rounded" />
                        </div>
                      </div>
                    </div>
                  </section>
                ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Courses;
