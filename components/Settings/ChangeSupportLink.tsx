"use client";

import { updateData } from "@/hooks";
import { Button } from "@/universal";
import { FC, useState } from "react";

export const ChangeSupportLink: FC<{ meeting: string; whatsApp: string }> = ({
  meeting,
  whatsApp,
}) => {
  const [meetingLink, setMeetingSupportLink] = useState<string>("");
  const [whatsAppSupportLink, setWhatsAppSupportLink] = useState<string>("");

  return (
    <div className="space-y-5 flex flex-col">
      <div className="flex flex-col gap-1 items-center">
        <label className="pl-1.5">
          Support Meeting Link:{" "}
          <span className="font-bold">{meeting ? meeting : ""}</span>
        </label>
        <div className="flex gap-2.5">
          <input
            type="text"
            onChange={(e) => setMeetingSupportLink(e.target.value)}
            className="outline-none text-black text-base md:text-lg max-w-xs border border-primary rounded-[5px] py-1 px-2"
          />
          <Button
            variant="secondary"
            className="py-[7px] lg:py-2.5 px-3"
            onClick={() => {
              updateData("/config", { "support.meeting": meetingLink });
              setMeetingSupportLink("");
              window.location.reload();
            }}
          >
            Save
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-1 items-center">
        <label className="pl-1.5">
          Support WhatsApp Link:{" "}
          <span className="font-bold">{whatsApp ? whatsApp : ""}</span>
        </label>
        <div className="flex gap-2.5">
          <input
            type="text"
            onChange={(e) => {
              setWhatsAppSupportLink(e.target.value);
            }}
            className="outline-none text-black text-base md:text-lg max-w-xs border border-primary rounded-[5px] py-1 px-2"
          />
          <Button
            variant="secondary"
            className="py-[7px] lg:py-2.5 px-3"
            onClick={() => {
              updateData(
                "/config",
                { "support.whatsApp": whatsAppSupportLink },
                true
              );
              setWhatsAppSupportLink("");
              window.location.reload();
            }}
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
};
