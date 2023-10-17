"use client";

import React, { useState } from "react";
import { ActivePageCard, DataRow } from ".";
import { useGetData } from "@/hooks";
import { ICourse, ICourseData } from "@/interface";

export const LiveLearningClass = () => {
  const [courses, setCourses] = useState<ICourse[]>([]);
  useGetData("/courses", setCourses, true);

  console.log(courses);

  return (
    <ActivePageCard title="Join Live Training Class">
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
