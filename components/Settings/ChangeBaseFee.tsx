"use client";

import { Button } from "@/universal";
import { Axios } from "@/utils";
import React, { useState } from "react";

export const ChangeBaseFee: React.FC = () => {
  const [baseFee, setBaseFee] = useState(0);

  const updateBaseFee = async () => {
    const fetchUpdateBaseFee = await Axios.post("", {});
    console.log("Base FEE updated");
  };

  return (
    <section className="w-full max-w-3xl mx-auto px-4 mt-20">
      {/* Search User by Id Input box */}
      <div className="flex gap-5 items-center">
        <p>Update Base Fee: </p>
        <input
          type="text"
          onChange={(e) => setBaseFee(Number(e.target.value))}
          className="outline-none text-black text-base md:text-lg w-full max-w-xs border border-primary rounded-[5px] py-1 px-2"
        />
        <Button variant="secondary" onClick={() => updateBaseFee()}>
          Update Base Fee
        </Button>
      </div>
    </section>
  );
};
