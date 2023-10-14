"use client";

import { getDataFn } from "@/hooks";
import { ISearchBar } from "@/interface";
import { Button, Container } from "@/universal";
import { getLastThreeMonths } from "@/utils";
import { Types } from "mongoose";
import { FC, useState } from "react";
import { toast } from "react-toastify";

export type IMonth =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December;";

function createDate(year: number, month: number): Number {
  // JavaScript months are 0-based, so we subtract 1 from the provided month
  // to get the correct month value for the Date constructor
  const date = new Date(year, month - 1);

  // Validate if the provided month and year result in a valid date
  // if (isNaN(date.getTime())) {
  //   return null; // Invalid date, return null
  // }

  return date.getTime();
}

function getMonthNumber(month: IMonth): number {
  const monthMap: { [key: string]: number } = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
  };

  return monthMap[month];
}
export interface IFiledDate {
  year: string;
  month: string;
  id: Types.ObjectId | string;
}
export const SearchBar: FC<ISearchBar> = ({ setData }) => {
  const [filedData, setFiledData] = useState<IFiledDate>({
    year: "",
    month: "",
    id: "",
  });
  const filterDate = getLastThreeMonths();

  const handleSubmit = async () => {
    if (filedData.id) {
      if (Types.ObjectId.isValid(filedData.id)) {
        await getDataFn(`/all-ref/1?id=${filedData.id}`, setData);
      } else {
        toast.error("Invalid user id 🚨");
      }
    } else if (filedData.year && filedData.year) {
      const month = getMonthNumber(filedData.month as IMonth);
      const date = createDate(Number(filedData.year), month);

      if (date) {
        await getDataFn(`/all-ref/1?date=${date}`, setData);
      } else {
        toast.error("Invalid date. Please provide valid year and month.");
      }
    } else {
      toast.error("Please Provide filter Data 🚨");
    }

    setFiledData({ year: "", month: "", id: "" });
  };

  return (
    <Container className="my-5">
      <p className="text-center text-gray-500 mb-1">
        Search by Year and Month Or User Id!
      </p>
      <section className="flex justify-center items-center gap-3 lg:gap-5 flex-wrap">
        <select
          value={filedData.year}
          onChange={(e) => setFiledData({ ...filedData, year: e.target.value })}
          className="focus:outline-none border border-primary p-2 rounded-md w-[47%] sm:w-auto"
        >
          <option value="">Choose Year</option>
          {filterDate.years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <select
          value={filedData.month}
          onChange={(e) =>
            setFiledData({ ...filedData, month: e.target.value })
          }
          className="focus:outline-none border border-primary p-2 rounded-md w-[47%] sm:w-auto"
        >
          <option value="">Select Month</option>
          {filterDate.mounts.reverse().map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={String(filedData.id)}
          placeholder="User Id"
          onChange={(e) => setFiledData({ ...filedData, id: e.target.value })}
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
