"use client";

import { eventsData } from "@/lib/data";
import { Container, MainContainer, Title } from "@/universal";
import { FC } from "react";

export const UpComingEvents: FC = () => (
  <MainContainer bgColor="black">
    <Container className="text-white pt-8">
      <Title variant="H1">UPCOMING EVENTS</Title>
      <p>
        MY BUSINESS UNION PLATFORM GIVES YOU A CORPORATE ENVIRONMENT AND
        HELPFULL DIGITAL MARKETING COMMUNITY
      </p>
      <div>
        <ul>
          {eventsData.map(({ date, title }, idx) => (
            <li
              key={idx}
              className="w-full md:w-[510px] h-20 py-16 flex justify-start items-center gap-12 border-b-2"
            >
              <p className="w-16 text-3xl font-bold">{date}</p>
              <p className="text-xl font-normal">{title}</p>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </MainContainer>
);
