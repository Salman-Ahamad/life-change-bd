"use client";

import { eventsData } from "@/lib/data";
import { Container, Label, MainContainer, Title } from "@/universal";
import { FC } from "react";

export const UpComingEvents: FC = () => (
  <MainContainer bgColor="black" className="py-10 lg:py-20">
    <Container className="text-white text-center flex flex-col justify-center items-center gap-5 lg:gap-8">
      <Title variant="H1">UPCOMING EVENTS</Title>
      <Label>
        LIFE CHANGE BD PLATFORM GIVES YOU A CORPORATE ENVIRONMENT AND HELPFULL
        DIGITAL MARKETING COMMUNITY
      </Label>
      <div className="">
        {eventsData.map(({ date, title }, idx) => (
          <div
            key={idx}
            className="w-full max-w-[510px] border-b-2 grid grid-cols-4 py-5 items-center"
          >
            <p className="w-16 text-2xl lg:text-3xl font-bold col-span-1">
              {date}
            </p>
            <p className="text-base md:text-lg lg:text-xl font-poppins text-start col-span-3">
              {title}
            </p>
          </div>
        ))}
      </div>
    </Container>
  </MainContainer>
);
