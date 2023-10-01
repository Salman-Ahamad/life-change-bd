"use client";

import { CompanyName } from "@/components/common/Brand";
import { avatar, books, time } from "@/lib/assets";
import { CommonText, Container, Title } from "@/universal";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  const { data: session } = useSession();
  console.log(session);

  return (
    <Container className="mt-10 min-h-screen">
      <Title variant="H1">About Us</Title>

      <div className="flex flex-col justify-center items-center gap-2.5 text-start mt-10">
        <CommonText>
          <CompanyName /> is a Bangladeshi trusted online platform. It is a
          learning and earning process by using your valuable free time at home
          through your smart phone only It is a very easy process and you can
          learn this process on your own mother tongue and you can earn from our
          community with selling some Courses Services or product also. Here you
          make your career smoothly.
        </CommonText>
      </div>
      <div className="flex flex-col justify-center items-center gap-2.5 text-start mt-10">
        <CommonText>
          <CompanyName /> is a platform where you will be able to enhance your
          performance through learning As you show your talents on Facebook,
          Youtbube,Instagram and TikTok etc like that you could able to show
          your talents in <CompanyName /> E-learning Platform as it is a digital
          marketing platform where you can learn. Besides learning you will be
          able to improve your work ability or performance.
        </CommonText>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5 lg:gap-14 mt-16">
        <Link
          href="/courses"
          className="bg-black w-full lg:w-96 h-28 lg:h-40 flex justify-start items-center gap-10 text-white p-[30px] rounded-xl"
        >
          <Image
            src={books}
            className="w-[50px] h-[50px] lg:w-[104px] lg:h-[107px]"
            alt=""
          />
          <p className="text-2xl">
            10+ <br className="hidden lg:block" /> courses
          </p>
        </Link>
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
    </Container>
  );
};

export default About;
