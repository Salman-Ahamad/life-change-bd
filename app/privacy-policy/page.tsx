"use client";

import { MainTitle } from "@/components/PrivacyPolicy";
import { PolicySection } from "@/components/PrivacyPolicy/PolicySection";
import { privacyPolicyData } from "@/lib/data";
import { Container } from "@/universal";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <Container>
      <div className="max-w-3xl px-12 pb-16 mx-auto">
        <MainTitle>Privacy and Policy</MainTitle>

        {privacyPolicyData.map((item, idx) => (
          <PolicySection
            key={idx}
            className=""
            title={item.title}
            content={item.content}
          />
        ))}

        <MainTitle>Contact Us</MainTitle>

        <div className="pb-4 text-lg">
          <div className="text-justify">
            <p className="text-justify mb-[14px]">
              If you have any questions or suggestions about my Privacy Policy,
              do not hesitate to contact me at
              <br />
              👇👇👇👇👇
              <br />
              <strong>
                <a href="mailto:lifechangebd4@gmail.com">
                  lifechangebd4@gmail.com
                </a>
              </strong>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PrivacyPolicy;
