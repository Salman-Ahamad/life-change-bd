"use client";

import { Header } from "@/components/User/Active";
import { Button } from "@/universal";
import React from "react";

const courses = [
  {
    title: "A Quick Guide to WordPress Hosting",
    img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    href: "#",
    status: "Finished",
  },
  {
    title: "7 Promising VS Code Extensions Introduced in 2022",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    href: "#",
    status: "Running",
  },
  {
    title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
    img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    href: "#",
    status: "Enroll Now",
  },
];

const Courses = () => {
  return (
    <>
      <Header navData={[{ label: "Back", link: "/user/active" }]} />
      <section className="py-12">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
          <ul className="grid gap-x-8 gap-y-10 mt-8 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((items, key) => (
              <li className="w-full mx-auto group sm:max-w-sm" key={key}>
                <a href={items.href}>
                  <img
                    src={items.img}
                    loading="lazy"
                    alt={items.title}
                    className="w-full rounded-lg"
                  />
                  <div className="mt-3 space-y-2">
                    <h3 className="text-lg text-gray-800 duration-150 group-hover:text-indigo-600 font-semibold">
                      {items.title}
                    </h3>
                    <Button variant="accent">{items.status}</Button>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Courses;
