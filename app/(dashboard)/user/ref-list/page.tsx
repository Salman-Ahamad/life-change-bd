"use client";

import { Header } from "@/components";
import { navData } from "@/lib/data";
import { CommonText, Container, Title } from "@/universal";

const RefList = () => (
  <>
    <Header navData={navData.refList} />
    <Title variant="H3" className="capitalize mt-10">
      Reference List (Inactive)
    </Title>
    <CommonText className="w-full bg-primary bg-opacity-50 text-center py-2 text-base lg:text-lg mt-1.5">
      Last 3 Month Outbound Data: 0
    </CommonText>
    <Container className="mb-10">{/*  */}</Container>
  </>
);

export default RefList;
