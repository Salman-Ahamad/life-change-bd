"use client";

import { ISearchBar } from "@/interface";
import { Container } from "@/universal";
import { getLastThreeMonths } from "@/utils";
import { FC, useState } from "react";

export const SearchBar: FC<ISearchBar> = ({ setSearchData }) => {
  const [selectYear, setSelectYear] = useState<string>("");
  const [selectMonth, setSelectMonth] = useState<string>("");
  const [searchId, setSearchId] = useState<string>("");
  const currentYear = new Date().getFullYear();

  const years = Array.from({ length: 3 }, (_, index) => currentYear - index);
  const lastThreeMonths = getLastThreeMonths();

  const handleSubmit = () => {
    setSearchData({ year: selectYear, month: selectMonth, id: searchId });
    setSelectYear("");
    setSelectMonth("");
    setSearchId("");
  };

  return (
    <Container className="my-5">
      <section className="flex justify-center items-center gap-5">
        <select
          value={selectYear}
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
          value={selectMonth}
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
            value={searchId}
            placeholder="User Id"
            onChange={(e) => setSearchId(e.target.value)}
            className="py-2 px-2 border-none outline-none rounded-md"
          />
          <button
            onClick={handleSubmit}
            className="bg-primary hover:bg-secondary transition-all delay-100 px-2.5 text-white"
          >
            Search
          </button>
        </div>
      </section>
    </Container>
  );
};
