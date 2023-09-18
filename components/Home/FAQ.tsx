"use client";

import { faqsList } from "@/lib/data";
import { FC } from "react";
import { FaqsCard } from "./FaqsCard";

export const FAQ: FC = () => (
  <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
    <div className="space-y-3 text-center">
      <h1 className="text-3xl text-gray-800 font-semibold">
        Frequently Asked Questions
      </h1>
      <p className="text-gray-600 max-w-lg mx-auto text-lg">
        Answered all frequently asked questions, Still confused? feel free to
        contact us.
      </p>
    </div>
    <div className="mt-14 w-full md:max-w-5xl mx-auto">
      {faqsList.map(({ ...faq }, idx) => (
        <FaqsCard key={idx} {...faq} />
      ))}
    </div>
  </section>
);
