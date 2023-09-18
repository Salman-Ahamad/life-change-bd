"use client";

import { bnsLogo, facebook, pinterest, twitter } from "@/lib/assets";
import { CommonText, MainContainer } from "@/universal";
import Image from "next/image";
import { FC } from "react";
import { AppDownload } from ".";

export const Footer: FC = () => (
  <footer>
    <MainContainer bgColor="black" className="text-white py-20">
      <section className="flex flex-col justify-start items-start gap-5 px-5 2xl:px-0">
        <Image src={bnsLogo} alt="" />

        <CommonText className="text-white max-w-sm">
          The automated process starts as soon as your clothes go into the
          machine.
        </CommonText>

        <div className="flex justify-center items-center gap-2.5">
          {[facebook, twitter, pinterest].map((icon, i) => (
            <Image key={i} src={icon} className="w-10" alt="" />
          ))}
        </div>

        <AppDownload />
      </section>
    </MainContainer>
  </footer>
);
