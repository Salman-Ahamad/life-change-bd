"use client";

import { useGetData } from "@/hooks";
import { ICourse } from "@/interface";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState<ICourse[] | null>(null);
  useGetData("/courses", setCourses);

  return (
    <section className="py-12">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <ul className="grid gap-x-8 gap-y-24 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses
            ? courses.map(({ image, title, slug }, key: number) => (
                <li
                  className="mx-auto group sm:max-w-sm shadow-md rounded-lg"
                  key={key}
                >
                  <div>
                    <Image
                      src={image}
                      alt={title}
                      width={320}
                      height={208}
                      className="rounded-t-lg object-cover w-80 h-52"
                    />

                    <div className="space-y-2 p-2">
                      <h3 className="text-lg text-gray-800 duration-150 font-semibold">
                        {title}
                      </h3>
                    </div>
                    <div className="m-4 pt-4 border-t items-end text-right">
                      <Link
                        href={`/courses/${slug}`}
                        className="text-sm text-white text-center font-sora font-semibold transition-all delay-75 px-3 py-1.5 bg-accent hover:bg-primary rounded"
                      >
                        View Details
                      </Link>
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
  );
};

export default Courses;
