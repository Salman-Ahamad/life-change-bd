"use client";

import { servicesData } from "@/lib/data";
import { CommonText, Container, MainContainer, Title } from "@/universal";
import { FC } from "react";
import { ImageCard } from "..";

export const OurServices: FC = () => (
  <MainContainer>
    <Container className="mt-6 md:mt-60">
      <Title variant="H1" className="mb-12">
        Our Services
      </Title>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5">
        {servicesData.map((service, idx) => (
          <ImageCard key={idx} {...service} cardWidth="2/1" />
        ))}
      </div>
    </Container>
  </MainContainer>
);
