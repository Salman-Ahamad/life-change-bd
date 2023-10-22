"use client";

import { updateData, useCurrentUser, useGetData } from "@/hooks";
import { Button } from "@/universal";
import { FC, useState } from "react";

export const ChangeMeetingLink: FC<{ courseId: string }> = ({ courseId }) => {
  const [meetLink, setMeetLink] = useState<string>("");

  useGetData(`courses/${courseId}`, setMeetLink);

  const user = useCurrentUser(true);

  const handleChangeMeetingInlk = async () => {
    updateData(`courses/${courseId}`, { meetingId: meetLink }, true);
  };

  return (
    <section className="flex items-end justify-center">
      <div className="flex flex-col gap-1">
        <label className="pl-1.5">Meet Link</label>
        <div className="flex gap-2.5">
          <input
            type="text"
            value={meetLink || ""}
            onChange={(e) => setMeetLink(e.target.value)}
            className="outline-none text-black text-base md:text-lg max-w-xs border border-primary rounded-[5px] py-1 px-2"
          />
          <Button
            variant="secondary"
            className="py-[7px] lg:py-2.5 px-3"
            onClick={() => {
              handleChangeMeetingInlk();
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </section>
  );
};
