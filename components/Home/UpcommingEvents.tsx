"use client";

import { Container, Title } from "@/universal";
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
    <div className="bg-sky-600">
      <Container className="text-white pt-28">
        <Title
          variant="H1"
          className="text-center text-4xl md:text-[42px] font-normal md:font-medium pb-8"
        >
          UPCOMING EVENTS
        </Title>
        <p className="text-lg md:text-2xl font-normal">
          MY BUSINESS UNION PLATFORM GIVES YOU A CORPORATE ENVIRONMENT AND
          HELPFULL DIGITAL MARKETING COMMUNITY
        </p>
        <div>
          <ul>
            {events.map((event, idx) => (
              <li
                key={idx}
                className={`w-full md:w-[510px] min-h-20 py-16 flex justify-start items-center gap-4 sm:gap-8 md:gap-16 ${
                  idx === events.length - 1 ? "" : "border-b-2"
                }`}
              >
                <p className="w-16 text-3xl md:text-4xl font-bold">
                  {event.date}
                </p>
                <p className="text-lg md:text-3xl font-normal">{event.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};
