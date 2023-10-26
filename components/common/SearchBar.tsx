"use client";

import { FC, useState } from "react";
import { toast } from "react-toastify";

import { getDataFn, useCurrentUser } from "@/hooks";
import { IFiledDate, IMonth, ISearchBar } from "@/interface";
import { UserRole } from "@/lib";
import { Button, Container } from "@/universal";
import { createDate, getLastThreeMonths, getMonthNumber } from "@/utils";

export const SearchBar: FC<ISearchBar> = ({ setData, onlyActive }) => {
  const [userType, setUserType] = useState<"all" | "student">("all");
  const [filedData, setFiledData] = useState<IFiledDate>({
    date: "",
    monthDate: "",
    year: "",
    month: "",
    id: "",
  });
  const filterDate = getLastThreeMonths();
  const user = useCurrentUser(true);

  const handleSubmit = async () => {
    if (filedData.id) {
      await getDataFn(
        `/all-ref?id=${filedData.id}&isActive=${
          onlyActive ? true : false
        }&isStudent=${userType === "student" ? true : false}`,
        setData
      );
    } else if (
      (filedData.year && filedData.month) ||
      filedData.monthDate ||
      filedData.date
    ) {
      const month = getMonthNumber(filedData.month as IMonth);
      const date = filedData.date
        ? createDate(0, 0, filedData.date as Date)
        : new Date(filedData.monthDate as Date).getTime();
      // : createDate(Number(filedData.year), month);

      if (date) {
        const url = `/all-ref?date=${date}&singleDate=${
          filedData.date ? true : false
        }&isActive=${onlyActive ? true : false}&isStudent=${
          userType === "student" ? true : false
        }`;
        await getDataFn(url, setData);
      } else {
        toast.error("Invalid date. Please provide valid year and month.");
      }
    } else {
      toast.error("Please Provide filter Data 🚨");
    }
    setFiledData({ date: "", year: "", month: "", id: "", monthDate: "" });
  };

  const handleDate = (dateProps: string) => {
    const date = new Date(dateProps);
    console.log("🚀 ~ file: SearchBar.tsx:54 ~ handleDate ~ date:", { date });
  };

  return (
    <Container className="my-5">
      {user?.role === UserRole.admin && (
        <div className="flex justify-center items-center mb-2">
          <Button
            variant="accent"
            className={`rounded-r-none border border-accent border-r-none ${
              userType !== "all" && "bg-white text-black hover:text-white"
            }`}
            onClick={() => setUserType("all")}
          >
            All User
          </Button>
          <Button
            variant="accent"
            onClick={() => setUserType("student")}
            className={`rounded-l-none border border-accent border-l-none ${
              userType !== "student" && "bg-white text-black hover:text-white"
            }`}
          >
            Student
          </Button>
        </div>
      )}
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
          type="month"
          onChange={(e) =>
            setFiledData({ ...filedData, monthDate: e.target.value })
          }
          className="focus:outline-none border border-primary p-2 rounded-md w-full sm:w-auto"
        />
        <input
          type="date"
          onChange={(e) =>
            setFiledData({ ...filedData, date: e.target.valueAsDate })
          }
          className="focus:outline-none border border-primary p-2 rounded-md w-full sm:w-auto"
        />
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
