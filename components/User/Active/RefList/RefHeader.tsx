"use client";

import { Container } from "@/universal";
import { getLastThreeMonths } from "@/utils";
import { FC, useState } from "react";

export interface IRefHeader {}

export const RefHeader: FC<IRefHeader> = ({}) => {
  const [selectYear, setSelectYear] = useState<string>("");
  const [selectMonth, setSelectMonth] = useState<string>("");
  const currentYear = new Date().getFullYear();

  const years = Array.from({ length: 3 }, (_, index) => currentYear - index);
  const lastThreeMonths = getLastThreeMonths();
  return (
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
            className="py-2 px-2 border-none outline-none rounded-md"
          />
          <button className="bg-primary hover:bg-secondary transition-all delay-100 px-2.5 text-white">
            Search
          </button>
        </div>
      </section>
    </Container>
  );
};
