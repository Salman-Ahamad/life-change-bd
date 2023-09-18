"use client";

import { Container, MainContainer, Title } from "@/universal";
import React, { FC } from "react";
import { ImageCard } from "./ImageCard";

export const OurServices: FC = () => {
  const services = [
    {
      title: "Online Health Consultation with MBBS or BHMS or BDS Doctor",
      fees: "100 (INR)",
      thumbnail: "/assets/service/image1.jpg",
      href: "/",
    },
    {
      title: "Online Astrology Consultation",
      fees: "1100 (INR)",
      thumbnail: "/assets/service/image2.jpg",
      href: "/",
    },
  ];
  return (
    <MainContainer>
      <Container>
        <Title variant="H1" className="mb-12 mt-6 md:mt-60">
          Our Services
        </Title>
        <div className="justify-center items-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0">
          {services.map((service, idx) => (
            <ImageCard key={idx} item={service} />
          ))}
        </div>
        <div className="my-10">
          <Title variant="H3">Online Health Consultation</Title>
          <p>
            You may avail online consultancy with doctors on My Business
            Union.Normal medicines can be provided by the doctors if it is
            necessity. Doctors will not give any prescribed medication without
            any visual treatment. Only online consultancy will be provided for
            on behalf of the doctors on My Business Union. For this consultation
            the person will come to know about their own disease and could
            discussed with the doctors in this regards. The doctor will counsel
            on the best place to get treatment,the specialist doctor of that
            particular diseases and guide you the further necessary stpes. By
            the counsel of doctors on My Business Union you would able to get
            best treatment for your disease. All guidance will be provided
            verbally. You can be completely cured by taking the right treatment
            from the right place on the advice of the doctors on My Business
            Union.
          </p>
        </div>
        <div className="my-10">
          <Title variant="H3">Online Astrology Consultation</Title>
          <p>
            My Business Union astro consultancy offers you astrology consultancy
            in online i.e. your fortune is forecasted by reading the lines of
            your palm through online.My Business Union astro consultancy will
            listen all your problems and will come up the most proper solution
            in natural way and just generic advice. You may discussed about your
            concern related to your inner world, personality traits, love life,
            finances, professional life, marriage, marriage partners, parents,
            children, siblings, and friends in online consultancy and ask
            questions related to this issues and avail a guidance for remedial
            for this issues in your life. No rudraksha and maduli etc, are given
            or sold in online astro consultancy on My Business Union. This
            consultation will give you a stress free life in future.
          </p>
        </div>
      </Container>
    </MainContainer>
  );
};
