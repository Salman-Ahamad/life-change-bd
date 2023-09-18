"use client";

import { Container, MainContainer, Title } from "@/universal";
import React, { FC } from "react";
import { ImageCard } from "./ImageCard";

export const PopularCourses: FC = () => {
  const courseInfo = [
    {
      title: "Digital Marketing",
      fees: "Fees - 1300 (INR) (fluctuate over time)",
      thumbnail: "/assets/course/courses1.jpeg",
      href: "/",
    },
    {
      title: "Basic Share market Knowledge",
      fees: "Fees - 1000 (INR) for India",
      thumbnail: "/assets/course/courses6.jpeg",
      href: "/",
    },
    {
      title: "Spoken English Courses",
      fees: "Fees - 1000 (INR) for India",
      thumbnail: "/assets/course/lead_generaation.jpg",
      href: "/",
    },
  ];
  return (
    <MainContainer bgColor="black">
      <Container className="text-white pt-16 pb-2">
        <Title variant="H1" className="mb-12">
          Popular Courses
        </Title>
        <div className="justify-center items-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3 md:-mb-36">
          {courseInfo.map((course, idx) => (
            <ImageCard key={idx} item={course} />
          ))}
        </div>
      </Container>
    </MainContainer>
  );
};
