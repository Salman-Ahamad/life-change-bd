"use client";

import { updateData, useCurrentUser, useGetData } from "@/hooks";
import { ICourse } from "@/interface";
import { Button, Title } from "@/universal";
import { FC, useState } from "react";

export const ChangeMeetingLink: FC<{ courseSlug: string }> = ({
  courseSlug,
}) => {
  const [course, setCourse] = useState<ICourse>();
  const [meetLink, setMeetLink] = useState<string>("");

  useGetData(`courses/${courseSlug}`, setCourse, true);

  const user = useCurrentUser(true);

  const handleChangeMeetingLink = async () => {
    updateData(`courses/${courseSlug}`, { meetingId: meetLink }).then(() =>
      window.location.reload()
    );
  };

  return (
    <section className="flex items-end justify-center">
      <div className="flex flex-col gap-1">
        <Title variant="H3" className="pb-12">
          Current Link: {meetLink}
        </Title>
        <label className="pl-1.5">Meet Link</label>
        <div className="flex gap-2.5">
          <input
            type="text"
            onChange={(e) => setMeetLink(e.target.value)}
            className="outline-none text-black text-base md:text-lg max-w-xs border border-primary rounded-[5px] py-1 px-2"
          />
          <Button
            variant="secondary"
            className="py-[7px] lg:py-2.5 px-3"
            onClick={() => {
              handleChangeMeetingLink();
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </section>
  );
};
