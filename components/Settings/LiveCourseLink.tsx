"use client";

import { updateData } from "@/hooks";
import { Button } from "@/universal";
import { FC, useState } from "react";

export const LiveCourseLink: FC = () => {
  const [courseId, setCourseId] = useState("");
  const [meetingId, setMeetingId] = useState("");

  return (
    <section className="flex flex-col items-end justify-center">
      <div className="flex flex-col gap-1">
        <label className="pl-1.5">Course Id</label>
        <div className="flex gap-2.5">
          <input
            type="text"
            onChange={(e) => setCourseId(e.target.value)}
            className="outline-none text-black text-base md:text-lg max-w-xs border border-primary rounded-[5px] py-1 px-2"
          />
          <div className="w-[58px]" />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className="pl-1.5">Meeting Id</label>
        <div className="flex gap-2.5">
          <input
            type="text"
            onChange={(e) => setMeetingId(e.target.value)}
            className="outline-none text-black text-base md:text-lg max-w-xs border border-primary rounded-[5px] py-1 px-2"
          />
          <Button
            variant="secondary"
            className="py-[7px] lg:py-2.5 px-3"
            onClick={() =>
              updateData(`/courses/${courseId}`, { meetingId: meetingId })
            }
          >
            Save
          </Button>
        </div>
      </div>
    </section>
  );
};
