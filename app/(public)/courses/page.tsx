"use client";

import { courses } from "@/lib/data";
import { Button } from "@/universal";
import Image from "next/image";
import Link from "next/link";

const Courses = () => (
  <>
    <section className="py-12">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <ul className="grid gap-x-8 gap-y-24 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((items, key) => (
            <li
              className="mx-auto group sm:max-w-sm shadow-md rounded-lg"
              key={key}
            >
              <div>
                <Image
                  src={items.img}
                  alt={items.title}
                  className="rounded-t-lg object-cover w-80 h-52"
                />

                <div className="space-y-2 p-2">
                  <h3 className="text-lg text-gray-800 duration-150 font-semibold">
                    {items.title}
                  </h3>
                </div>
                <div className="m-4 pt-4 border-t items-end text-right">
                  <Link
                    href={items.href}
                    className="text-sm text-white text-center font-sora font-semibold transition-all delay-75 px-3 py-1.5 bg-accent hover:bg-primary rounded"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </>
);

export default Courses;
