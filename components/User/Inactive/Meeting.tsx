"use client";

import { meetingilustration, plus } from "@/lib/assets";
import { Button, Container, MainContainer, Title } from "@/universal";
import Image from "next/image";
import { FC } from "react";

export const Meeting: FC = () => (
  <MainContainer bgColor="black" className="-mt-24 pt-12">
    <Container className="py-12 lg:py-36 text-white flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-16">
      <Image
        src={meetingilustration}
        className="w-full max-w-[530px] lg:max-w-[630px] lg:w-[530px] xl:w-[630px] sm:px-3 lg:order-2"
        alt="Meeting Illustration"
      />
      <div className="flex flex-col gap-2.5 items-center lg:order-1">
        <Title variant="H3" className="font-medium capitalize">
          Active Meeting Link
        </Title>
        <Button
          variant="secondary"
          className="font-medium text-xl lg:text-2xl p-3 pr-12 flex justify-between items-center gap-6 rounded-xl bg-primary lg:bg-accent"
        >
          {/* TODO: Add Link */}
          <Image src={plus} className="w-12 h-12" alt="join meeting" />
          Join Meeting
        </Button>
      </div>
    </Container>
  </MainContainer>
);
