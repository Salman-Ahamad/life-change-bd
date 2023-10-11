"use client";

import { Header } from "@/components";
import { navData } from "@/lib/data";
import { CommonText, Container, Title } from "@/universal";
import { getLastThreeMonths } from "@/utils";
import { NextPage } from "next";
import { useState } from "react";

const RefList: NextPage = () => {
  const [selectYear, setSelectYear] = useState<string>("");
  const [selectMonth, setSelectMonth] = useState<string>("");
  const currentYear = new Date().getFullYear();

  const years = Array.from({ length: 3 }, (_, index) => currentYear - index);

  // Usage example
  const lastThreeMonths = getLastThreeMonths();
  console.log("🚀 ~ file: page.tsx:24 ~ lastThreeMonths:", lastThreeMonths);

  return (
    <>
      <Header navData={navData.refList} />
      <Title variant="H3" className="capitalize mt-10">
        Reference List (Inactive)
      </Title>
      <CommonText className="w-full bg-primary bg-opacity-50 text-center py-2 text-base lg:text-lg mt-1.5">
        Last 3 Month Outbound Data: 0
      </CommonText>
      <Container className="my-5">
        <div className="flex justify-center items-center">
          <select
            onChange={(e) => setSelectYear(e.target.value)}
            className="focus:outline-none border border-primary px-2 py-2 rounded-md"
          >
            <option value="">Choose Year</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <select
            onChange={(e) => setSelectMonth(e.target.value)}
            className="focus:outline-none border border-primary px-2 py-2 rounded-md"
          >
            <option value="">Select Month</option>
            {lastThreeMonths.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </Container>
    </>
  );
};

export default RefList;
