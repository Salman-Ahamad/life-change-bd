"use client";

import { courseInfoData } from "@/lib/data";
import { Container, MainContainer, Title } from "@/universal";
import { FC } from "react";
import { ImageCard } from "./ImageCard";

export const PopularCourses: FC = () => (
  <MainContainer bgColor="black">
    <Container className="text-white pt-16 pb-2">
      <Title variant="H1" className="mb-12">
        Popular Courses
      </Title>
      <div className="justify-center items-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3 md:-mb-36">
        {courseInfoData.map((course, idx) => (
          <ImageCard key={idx} {...course} />
        ))}
      </div>
    </Container>
  </MainContainer>
);
