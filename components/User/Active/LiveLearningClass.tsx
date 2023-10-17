"use client";

import React, { useState } from "react";
import { ActivePageCard, DataRow, MeetingLink } from ".";
import { useGetData } from "@/hooks";
import { ICourse, ICourseData } from "@/interface";
import { GoogleMeetLink } from "@/components";
import { Title } from "@/universal";

export const LiveLearningClass = () => {
  const [courses, setCourses] = useState<ICourse[]>([]);
  useGetData("/courses", setCourses, true);

  console.log(courses);

  return (
    <ActivePageCard title="">
      <div className="pb-6 hover:bg-gray-100 flex items-center justify-center gap-4 w-full border-b-2">
        <Title variant="H5">Welcome Class</Title>
        <GoogleMeetLink meetId="">Join Class</GoogleMeetLink>
      </div>

      {courses ? (
        <>
          {courses.map((course, idx) => (
            <DataRow
              key={idx}
              title={course.title}
              meetLink={course.meetingId || ""}
              btnText="Join Class"
              icon
            />
          ))}
        </>
      ) : (
        <p></p>
      )}

      <DataRow title="Lead Generation Class" btnText="ViewClass" icon />
    </ActivePageCard>
  );
};
