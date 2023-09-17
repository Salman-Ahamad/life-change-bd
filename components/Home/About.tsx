"use client";

import { avatar, books, time } from "@/public/assets";
import { Container, MainContainer } from "@/universal";
import Image from "next/image";
import { FC } from "react";

export const About: FC = () => (
  <MainContainer>
    <Container>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 lg:gap-14 mt-[30px]  lg:-mt-20">
        <div className="bg-black w-full lg:w-96 h-28 lg:h-40 flex justify-start items-center gap-10 text-white p-[30px] rounded-xl">
          <Image
            src={books}
            className="w-[50px] h-[50px] lg:w-[104px] lg:h-[107px]"
            alt=""
          />
          <p className="text-2xl">
            6+ <br className="hidden lg:block" /> courses
          </p>
        </div>
        <div className="bg-black w-full lg:w-96 h-28 lg:h-40 flex justify-start items-center gap-10 text-white p-[30px] rounded-xl">
          <Image
            src={avatar}
            className="w-[50px] h-[50px] lg:w-[104px] lg:h-[107px]"
            alt=""
          />
          <p className="text-2xl">
            Expert <br className="hidden lg:block" />
            mentors
          </p>
        </div>
        <div className="bg-black w-full lg:w-96 h-28 lg:h-40 flex justify-start items-center gap-10 text-white p-[30px] rounded-xl">
          <Image
            src={time}
            className="w-[50px] h-[50px] lg:w-[104px] lg:h-[107px]"
            alt=""
          />
          <p className="text-2xl">
            Life time <br className="hidden lg:block" />
            access
          </p>
        </div>
      </div>
      <p className="text-xl lg:text-4xl text-center w-full max-w-6xl mx-auto mt-14 mb-4">
        The Main objective of this setup is how to develop Skill&rsquo;s on
        digital marketing And how to generate revenue on it
      </p>
    </Container>
  </MainContainer>
);
