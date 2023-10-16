"use client";

import { faqsList } from "@/lib/data";
import { Container, Label, MainContainer, Title } from "@/universal";
import { FC } from "react";
import { FaqsCard } from "./FaqsCard";
import Link from "next/link";

export const FAQ: FC = () => (
  <MainContainer className="my-10 lg:my-20">
    <Container className="text-center flex flex-col justify-center items-center gap-5 lg:gap-10">
      <Title variant="H1" className="text-3xl md:text-4xl">
        FREQUENTLY ASKED QUESTIONS (F&Q)
      </Title>
      <Label className="max-w-2xl">
        Answered all frequently asked questions, Still confused? feel free to{" "}
        <Link href="/contact">contact us</Link>.
      </Label>
      <div className="mt-2 w-full md:max-w-5xl mx-auto">
        {faqsList.map(({ ...faq }, idx) => (
          <FaqsCard key={idx} {...faq} />
        ))}
      </div>
    </Container>
  </MainContainer>
);
