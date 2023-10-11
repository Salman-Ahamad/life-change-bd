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
  const lastThreeMonths = getLastThreeMonths();

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
        <section className="flex justify-center items-center gap-5">
          <select
            onChange={(e) => setSelectYear(e.target.value)}
            className="focus:outline-none border border-primary p-2 rounded-md"
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
            className="focus:outline-none border border-primary p-2 rounded-md"
          >
            <option value="">Select Month</option>
            {lastThreeMonths.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
          <div className="flex border border-primary rounded-md text-base">
            <input
              type="text"
              placeholder="User Id"
              className="py-2 px-1 border-none outline-none rounded-md"
            />
            <button className="bg-primary hover:bg-secondary transition-all delay-100 px-2.5 text-white">
              Search
            </button>
          </div>
        </section>
      </Container>
    </>
  );
};

export default RefList;
