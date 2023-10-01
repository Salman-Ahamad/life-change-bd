"use client";

import { courses } from "@/lib/data";
import { Container, MainContainer, Title } from "@/universal";
import { FC } from "react";
import { ImageCard } from "..";

export const PopularCourses: FC = () => (
  <MainContainer bgColor="black">
    <Container className="text-white pt-16 pb-2">
      <Title variant="H1" className="mb-12 text-center">
        Popular Courses
      </Title>
      <div className="flex justify-center items-center flex-wrap gap-5 pb-16 md:pb-0 md:-mb-36">
        {[courses[0], courses[4], courses[5], courses[9]].map((course, idx) => (
          <ImageCard
            key={idx}
            fees={course.price}
            href={course.href}
            thumbnail={course.img}
            title={course.title}
          />
        ))}
      </div>
    </Container>
  </MainContainer>
);
