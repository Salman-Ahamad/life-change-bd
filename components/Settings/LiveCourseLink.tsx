"use client";

import { updateData } from "@/hooks";
import { Button } from "@/universal";
import { FC, useState } from "react";

export const LiveCourseLink: FC = () => {
  const [courseId, setCourseId] = useState("");
  const [meetingId, setMeetingId] = useState("");

  return (
    <section className="flex gap-5 items-end justify-center">
      <div>
        <div>
          <label className="pl-1.5">Course Id: </label>
          <input
            type="text"
            onChange={(e) => setCourseId(e.target.value)}
            className="outline-none text-black text-base md:text-lg w-full max-w-xs border border-primary rounded-[5px] py-1 px-2"
          />
        </div>
        <div>
          <label className="pl-1.5">Meeting Id: </label>
          <input
            type="text"
            onChange={(e) => setMeetingId(e.target.value)}
            className="outline-none text-black text-base md:text-lg w-full max-w-xs border border-primary rounded-[5px] py-1 px-2"
          />
        </div>
      </div>
      <Button
        variant="secondary"
        className="py-[7px] lg:py-2.5 px-3"
        onClick={() =>
          updateData(`/courses/${courseId}`, { meetingId: meetingId })
        }
      >
        Save
      </Button>
    </section>
  );
};
