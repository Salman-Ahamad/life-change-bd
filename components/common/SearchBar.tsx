"use client";

import { ISearchBar } from "@/interface";
import { Button, Container } from "@/universal";
import { getLastThreeMonths } from "@/utils";
import { Types } from "mongoose";
import { FC, useState } from "react";
import { toast } from "react-toastify";

export const SearchBar: FC<ISearchBar> = ({ setSearchData }) => {
  const [selectYear, setSelectYear] = useState<string>("");
  const [selectMonth, setSelectMonth] = useState<string>("");
  const [searchId, setSearchId] = useState<string>("");
  const currentYear = new Date().getFullYear();

  const years = Array.from({ length: 3 }, (_, index) => currentYear - index);
  const lastThreeMonths = getLastThreeMonths();

  const handleSubmit = () => {
    if (searchId) {
      if (Types.ObjectId.isValid(searchId)) {
        toast.success("id thik ase");
      } else {
        toast.error("id thik nai");
      }
    } else if (selectYear && selectMonth) {
      toast.success("year and month diase");
    } else {
      toast.error("please provide date or user id");
    }
    setSearchData({ year: selectYear, month: selectMonth, id: searchId });
    setSelectYear("");
    setSelectMonth("");
    setSearchId("");
  };

  return (
    <Container className="my-5">
      <p className="text-center text-gray-500 mb-1">
        Search by Year and Month Or User Id!
      </p>
      <section className="flex justify-center items-center gap-3 lg:gap-5 flex-wrap">
        <select
          value={selectYear}
          onChange={(e) => setSelectYear(e.target.value)}
          className="focus:outline-none border border-primary p-2 rounded-md w-[47%] sm:w-auto"
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
          className="focus:outline-none border border-primary p-2 rounded-md w-[47%] sm:w-auto"
        >
          <option value="">Select Month</option>
          {lastThreeMonths.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={searchId}
          placeholder="User Id"
          onChange={(e) => setSearchId(e.target.value)}
          className="p-2 outline-none border border-primary rounded-md text-base w-full sm:w-auto"
        />
        <Button
          variant="secondary"
          className="py-2.5 px-5 w-full md:w-auto"
          onClick={handleSubmit}
        >
          Search
        </Button>
      </section>
    </Container>
  );
};
