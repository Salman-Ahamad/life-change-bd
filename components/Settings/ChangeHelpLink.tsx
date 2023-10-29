"use client";

import { updateData } from "@/hooks";
import { Button } from "@/universal";
import { FC, useState } from "react";

export const ChangeHelpLink: FC<{ help: string }> = ({ help }) => {
  const [helpLink, setHelpLink] = useState<string>("");

  return (
    <div className="flex items-end justify-center w-full">
      <div className="flex flex-col gap-1">
        <label className="pl-1.5">
          Help Link: <span className="font-bold">{help ? help : ""}</span>
        </label>
        <div className="flex gap-2.5">
          <input
            type="text"
            onChange={(e) => setHelpLink(e.target.value)}
            className="outline-none text-black text-base md:text-lg max-w-xs border border-primary rounded-[5px] py-1 px-2"
          />
          <Button
            variant="secondary"
            className="py-[7px] lg:py-2.5 px-3"
            onClick={() => {
              updateData("/config", { "support.help": helpLink });
              setHelpLink("");
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
