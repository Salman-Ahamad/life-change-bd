"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState<any>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();
      console.log(data);

      setCourses(data);
    };

    fetchCourses();
  }, []);
  return (
    <>
      <section className="py-12">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
          <ul className="grid gap-x-8 gap-y-24 mt-8 sm:grid-cols-2 lg:grid-cols-3">
            {courses &&
              courses.map((items: any, key: number) => (
                <li
                  className="mx-auto group sm:max-w-sm shadow-md rounded-lg"
                  key={key}
                >
                  <div>
                    <Image
                      src={items.courseImage}
                      alt={items.courseName}
                      className="rounded-t-lg object-cover w-80 h-52"
                    />

                    <div className="space-y-2 p-2">
                      <h3 className="text-lg text-gray-800 duration-150 font-semibold">
                        {items.courseName}
                      </h3>
                    </div>
                    <div className="m-4 pt-4 border-t items-end text-right">
                      <Link
                        href={`/courses/${items.courseSlug}`}
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
};

export default Courses;
