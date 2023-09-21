"use client";

import { PolicySection } from "@/components/PrivacyPolicy/PolicySection";
import { privacyPolicyData } from "@/lib/data";
import { BackButton, CommonText, Container, Title } from "@/universal";

const PrivacyPolicy = () => (
  <Container className="max-w-3xl lg:px-12 py-10 lg:py-16 mx-auto relative">
    <BackButton className="absolute top-10 lg:top-16 left-1.5 lg:left-12 text-2xl cursor-pointer" />
    <Title variant="H3" className="capitalize pb-10">
      Privacy and Policy
    </Title>

    {privacyPolicyData.map((item, idx) => (
      <PolicySection
        key={idx}
        className=""
        title={item.title}
        content={item.content}
      />
    ))}

    <Title variant="H4" className="capitalize mt-10">
      Contact Us
    </Title>

    <CommonText className="text-justify">
      If you have any questions or suggestions about my Privacy Policy, do not
      hesitate to contact me at
      <br /> 👇👇👇👇👇 <br />
      <strong>
        <a href="mailto:lifechangebd4@gmail.com">lifechangebd4@gmail.com</a>
      </strong>
    </CommonText>
  </Container>
);

export default PrivacyPolicy;
