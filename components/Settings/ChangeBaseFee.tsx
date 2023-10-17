"use client";

import { updateData } from "@/hooks";
import { Button } from "@/universal";
import { FC, useState } from "react";

export const ChangeBaseFee: FC = () => {
  const [baseFee, setBaseFee] = useState(0);

  return (
    <section className="flex items-end justify-center">
      <div className="flex flex-col gap-1">
        <label className="pl-1.5">Base Fee </label>
        <div className="flex gap-2.5">
          <input
            type="number"
            onChange={(e) => setBaseFee(Number(e.target.value))}
            className="outline-none text-black text-base md:text-lg max-w-xs border border-primary rounded-[5px] py-1 px-2"
          />
          <Button
            variant="secondary"
            className="py-[7px] lg:py-2.5 px-3"
            onClick={() => updateData("/config", { baseFee: baseFee })}
          >
            Save
          </Button>
        </div>
      </div>
    </section>
  );
};
