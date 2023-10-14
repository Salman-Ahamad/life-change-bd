"use client";

import { updateData } from "@/hooks";
import { Button } from "@/universal";
import { FC, useState } from "react";

export const ChangeBaseFee: FC = () => {
  const [baseFee, setBaseFee] = useState(0);

  return (
    <section className="flex gap-5 items-end justify-center">
      <div>
        <label>Base Fee: </label>
        <input
          type="number"
          onChange={(e) => setBaseFee(Number(e.target.value))}
          className="outline-none text-black text-base md:text-lg w-full max-w-xs border border-primary rounded-[5px] py-1 px-2"
        />
      </div>
      <Button
        variant="secondary"
        className="py-[7px] lg:py-2.5 px-3"
        onClick={() => updateData("/config", { baseFee: baseFee })}
      >
        Save
      </Button>
    </section>
  );
};
