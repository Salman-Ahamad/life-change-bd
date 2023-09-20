"use client";

import { meetingilustration, plus } from "@/lib/assets";
import { Button, MainContainer } from "@/universal";
import Image from "next/image";
import React, { FC } from "react";

export const Meeting: FC = () => {
  return (
    <MainContainer bgColor="black">
      <div className="px-4 text-white lg:py-36 lg:flex lg:items-center lg:justify-between">
        <Image
          src={meetingilustration}
          className="w-full lg:w-[530px] xl:w-[630px] sm:px-3 lg:order-2"
          alt="Meeting Illustration"
        />
        <div className="pt-[30px] sm:px-3 lg:order-1">
          <div className="pt-8 flex flex-col items-center">
            <h3 className="pt-5 pb-5 mb-5 font-medium text-3xl sm:text-4xl lg:text-5xl">
              Active Meeting Link
            </h3>
            <Button
              variant="secondary"
              className="font-medium text-2xl p-3 pr-12 flex justify-between items-center gap-6 rounded-xl"
            >
              <Image src={plus} className="w-12 h-12" alt="join meeting" />
              Join Meeting
            </Button>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};
