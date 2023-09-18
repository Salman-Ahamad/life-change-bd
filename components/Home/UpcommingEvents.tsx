"use client";

import { Container, MainContainer, Title } from "@/universal";
import React, { FC } from "react";

export const UpcommingEvents: FC = () => {
  const events = [
    { date: "19 FEB", title: "WE HELD FREE TRAINING FOR DIGITAL MARKETING" },
    {
      date: "02 MAR",
      title: "WE HELD FREE TRAINING FOR BASIC SHARE MARKET KNOWLEDGE",
    },
    {
      date: "20 MAR",
      title: "WE HELD FREE TRAINING FOR BASIC CRYPTOCURRENCY KNOWLEDGE",
    },
  ];
  return (
    <MainContainer bgColor="black">
      <Container className="text-white pt-8">
        <Title variant="H1">UPCOMING EVENTS</Title>
        <p>
          MY BUSINESS UNION PLATFORM GIVES YOU A CORPORATE ENVIRONMENT AND
          HELPFULL DIGITAL MARKETING COMMUNITY
        </p>
        <div>
          <ul>
            {events.map((event, idx) => (
              <li
                key={idx}
                className="w-full md:w-[510px] h-20 py-16 flex justify-start items-center gap-12 border-b-2"
              >
                <p className="w-16 text-3xl font-bold">{event.date}</p>
                <p className="text-xl font-normal">{event.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </MainContainer>
  );
};
