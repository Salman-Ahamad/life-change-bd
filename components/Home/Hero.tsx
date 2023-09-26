"use client";

import { banner, banner2, bnsLogo } from "@/lib/assets";
import {
  BackgroundImg,
  CommonText,
  Container,
  LinkButton,
  Title,
} from "@/universal";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FC } from "react";

export const Hero: FC = () => {
  const { data: sessions } = useSession();

  return (
    <BackgroundImg
      img={banner2}
      className="h-auto pb-5 lg:pb-0 lg:h-screen"
      overflow
      overlay
    >
      <Container className="w-full lg:h-screen flex flex-col justify-center items-start pt-5 lg:pt-0">
        <Image src={bnsLogo} className="2xl:-ml-20" alt="" />
        <div className="flex flex-col justify-center items-start gap-4 mt-1.5">
          <Title variant="H1" className="text-white text-[30px] text-left">
            WELCOME TO LIFE CHANGE E-LEARNING PLATFORM
          </Title>
          <CommonText className="max-w-[640px] text-white text-base lg:text-xl">
            It’s an Bangladeshi trusted online platform. It is a learning and
            earning process by using your valuable free time at home through
            your smart phone only It is a very easy process and you can learn
            this process on your own mother tongue and you can earn from our
            community with selling some Courses Services or product also. Here
            you make your career smoothly.
          </CommonText>

          <div className="flex justify-center lg:justify-start items-center gap-1.5 w-full">
            {sessions?.user ? (
              <LinkButton href="/user/active">Dashboard</LinkButton>
            ) : (
              <>
                <LinkButton href="/login">Login</LinkButton>
                <LinkButton href="/signup">SignUp</LinkButton>
              </>
            )}
          </div>
        </div>
      </Container>
    </BackgroundImg>
  );
};
