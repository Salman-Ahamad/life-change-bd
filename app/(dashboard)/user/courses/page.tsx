/* eslint-disable @next/next/no-img-element */
"use client";

import { Header } from "@/components";
import { courses, navData } from "@/lib/data";
import { Button } from "@/universal";
import Image from "next/image";
import Link from "next/link";

const Courses = () => (
  <>
    <Header navData={navData.courses} />
    <section className="py-12">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <ul className="grid gap-x-8 gap-y-10 mt-8 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((items, key) => (
            <li className="w-full mx-auto group sm:max-w-sm" key={key}>
              <Link href={items.href}>
                <Image
                  src={items.img}
                  width={380}
                  height={200}
                  loading="lazy"
                  alt={items.title}
                  className="w-full rounded-lg"
                />
                <div className="mt-3 space-y-2">
                  <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                    {items.title}
                  </h3>
                  {/* <Button variant="accent">{items.status}</Button> */}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </>
);

export default Courses;
