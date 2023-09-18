"use client";

import { banner, bnsLogo } from "@/lib/assets";
import {
  BackgroundImg,
  Button,
  CommonText,
  Container,
  Title,
} from "@/universal";
import Image from "next/image";
import { FC } from "react";

export const Hero: FC = () => (
  <BackgroundImg
    img={banner}
    className="h-auto pb-5 lg:pb-0 lg:h-screen"
    overflow
  >
    <Container className="w-full lg:h-screen flex flex-col justify-center items-start pt-5 lg:pt-0">
      <Image src={bnsLogo} className="2xl:-ml-20" alt="" />
      <div className="flex flex-col justify-center items-start gap-4 mt-1.5">
        <Title variant="H1" className="text-white text-[30px]">
          MY BUSINESS UNION
        </Title>
        <CommonText className="max-w-[640px] text-white text-base lg:text-xl">
          It is a learning and earning process by using your valuable free time
          at home through your smart phone only It is a very easy process and
          you can learn this process on your own mother tongue and you can earn
          from our community with selling some Courses Services or goods..
        </CommonText>

        <div className="flex justify-center lg:justify-start items-center gap-1.5 w-full">
          <Button>Login</Button>
          <Button>SignUp</Button>
        </div>
      </div>
    </Container>
  </BackgroundImg>
);
