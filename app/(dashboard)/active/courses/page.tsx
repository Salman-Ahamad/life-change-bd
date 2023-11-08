"use client";

import { Header } from "@/components";
import { useGetData } from "@/hooks";
import { ICourse, INavItem, IUserCourse } from "@/interface";
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
  const [courses, setCourses] = useState<ICourse[] | null>(null);
  const [courseStatus, setCourseStatus] = useState<IUserCourse | null>(null);

  useGetData("/courses", setCourses);
  useGetData("/courses/status", setCourseStatus, true);

  const handleStatus = (slug: string, no: number) => {
    if (courseStatus && courses)
      switch (slug) {
        case "sahih-holy-quran":
          if (courseStatus?.sahihHolyQuran < no) {
            return "running";
          } else if (courseStatus?.sahihHolyQuran === no) {
            return "complete";
          } else {
            return "enroll";
          }
        case "photo-editing":
          if (
            courseStatus?.photoEditing < no &&
            courseStatus.sahihHolyQuran === courses[0].assignments
          ) {
            return "running";
          } else if (courseStatus?.photoEditing === no) {
            return "complete";
          } else {
            return "enroll";
          }
        case "video-editing":
          if (
            courseStatus?.videoEditing < no &&
            courseStatus.photoEditing === courses[1].assignments
          ) {
            return "running";
          } else if (courseStatus?.videoEditing === no) {
            return "complete";
          } else {
            return "enroll";
          }
        case "lead-generation":
          if (
            courseStatus?.leadGeneration < no &&
            courseStatus.videoEditing === courses[2].assignments
          ) {
            return "running";
          } else if (courseStatus?.leadGeneration === no) {
            return "complete";
          } else {
            return "enroll";
          }
        case "digital-marketing":
          if (
            courseStatus?.digitalMarketing < no &&
            courseStatus.leadGeneration === courses[3].assignments
          ) {
            return "running";
          } else if (courseStatus?.digitalMarketing === no) {
            return "complete";
          } else {
            return "enroll";
          }
        case "graphic-design":
          if (
            courseStatus?.graphicDesign < no &&
            courseStatus.digitalMarketing === courses[4].assignments
          ) {
            return "running";
          } else if (courseStatus?.graphicDesign === no) {
            return "complete";
          } else {
            return "enroll";
          }
        case "people-management":
          if (
            courseStatus?.peopleManagement < no &&
            courseStatus.graphicDesign === courses[5].assignments
          ) {
            return "running";
          } else if (courseStatus?.peopleManagement === no) {
            return "complete";
          } else {
            return "enroll";
          }
        case "facebook-marketing":
          if (
            courseStatus?.facebookMarketing < no &&
            courseStatus.peopleManagement === courses[6].assignments
          ) {
            return "running";
          } else if (courseStatus?.facebookMarketing === no) {
            return "complete";
          } else {
            return "enroll";
          }
        case "mail-marketing":
          if (
            courseStatus?.mailMarketing < no &&
            courseStatus.facebookMarketing === courses[7].assignments
          ) {
            return "running";
          } else if (courseStatus?.mailMarketing === no) {
            return "complete";
          } else {
            return "enroll";
          }
        case "youtube-content-creating":
          if (
            courseStatus?.youTubeContentCreating < no &&
            courseStatus.mailMarketing === courses[8].assignments
          ) {
            return "running";
          } else if (courseStatus?.youTubeContentCreating === no) {
            return "complete";
          } else {
            return "enroll";
          }

        default:
          return "enroll";
      }
  };

  return (
    <>
      <Header navData={navData} />
      <section className="py-12">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
          <ul className="grid gap-x-8 gap-y-10 mt-8 sm:grid-cols-2 lg:grid-cols-3">
            {courses
              ? courses.map(({ image, title, slug, assignments }, i) => (
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

                      <h3 className="text-lg text-gray-800 duration-150 font-semibold p-2">
                        {title}
                      </h3>

                      <div className="w-full flex justify-end items-end">
                        {slug !== "sahih-holy-quran" && (
                          <LinkButton
                            variant="secondary"
                            href={`/active/courses/${slug}`}
                            disabled={
                              handleStatus(slug, assignments) === "enroll"
                            }
                            className="m-4 border-t disabled:opacity-80 disabled:cursor-not-allowed"
                          >
                            {handleStatus(slug, assignments) || "Loading..."}
                          </LinkButton>
                        )}
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
