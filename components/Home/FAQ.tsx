"use client";

import { faqsList } from "@/lib/data";
import { Container, MainContainer, Title } from "@/universal";
import { FC } from "react";
import { FaqsCard } from "./FaqsCard";

export const FAQ: FC = () => (
  <MainContainer>
    <Container>
      <Title variant="H1">Frequently Asked Questions</Title>
      <p className="text-gray-600 max-w-lg mx-auto text-lg">
        Answered all frequently asked questions, Still confused? feel free to
        contact us.
      </p>
      <div className="mt-14 w-full md:max-w-5xl mx-auto">
        {faqsList.map(({ ...faq }, idx) => (
          <FaqsCard key={idx} {...faq} />
        ))}
      </div>
    </Container>
  </MainContainer>
);
