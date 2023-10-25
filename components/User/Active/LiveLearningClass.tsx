"use client";

import { GoogleMeetLink } from "@/components";
import { useGetData } from "@/hooks";
import { IAppConfig, ICourse } from "@/interface";
import { Title } from "@/universal";
import { useState } from "react";
import { ActivePageCard, DataRow } from ".";

export const LiveLearningClass = () => {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [appConfig, setAppConfig] = useState<IAppConfig>();
  useGetData("/config", setAppConfig, true);
  useGetData("/courses", setCourses, true);

  return (
    <ActivePageCard title="">
      <div className="pb-6 hover:bg-gray-100 flex items-center justify-center gap-4 w-full border-b-2">
        <Title variant="H5">Welcome Class</Title>
        <GoogleMeetLink meetId={appConfig?.support.welcomeClass || ""}>
          Join Class
        </GoogleMeetLink>
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
