"use client";

import { FC, useState } from "react";
import { toast } from "react-toastify";

import { getDataFn, useCurrentUser } from "@/hooks";
import { IFiledDate, ISearchBar } from "@/interface";
import { UserRole } from "@/lib";
import { Button, Container } from "@/universal";
import { createDate } from "@/utils";

export const SearchBar: FC<ISearchBar> = ({
  setData,
  onlyActive,
  onlyInactive,
}) => {
  const [userType, setUserType] = useState<"all" | "student">("all");
  const [filedData, setFiledData] = useState<IFiledDate>({
    date: "",
    month: "",
    id: "",
  });

  const user = useCurrentUser(true);

  const handleSubmit = async () => {
    if (filedData.id) {
      await getDataFn(
        `/all-ref?id=${filedData.id}&isActive=${
          onlyActive ? true : false
        }&isStudent=${
          (userType === "student" && true) || (onlyInactive && true) || false
        }`,
        setData
      );
    } else if (filedData.month || filedData.date) {
      const date = filedData.date
        ? createDate(0, 0, filedData.date as Date)
        : new Date(filedData.month as Date).getTime();

      if (date) {
        const url = `/all-ref?date=${date}&singleDate=${
          filedData.date ? true : false
        }&isActive=${onlyActive ? true : false}&isStudent=${
          (userType === "student" && true) || (onlyInactive && true) || false
        }`;
        await getDataFn(url, setData);
      } else {
        toast.error("Invalid date. Please provide valid year and month.");
      }
    } else {
      toast.error("Please Provide filter Data 🚨");
    }
    setFiledData({ date: "", month: "", id: "" });
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
        <input
          type="month"
          onChange={(e) =>
            setFiledData({ ...filedData, month: e.target.value })
          }
          className="focus:outline-none border border-primary p-2 rounded-md w-full sm:w-auto cursor-pointer"
        />
        <input
          type="date"
          onChange={(e) =>
            setFiledData({ ...filedData, date: e.target.valueAsDate })
          }
          className="focus:outline-none border border-primary p-2 rounded-md w-full sm:w-auto cursor-pointer"
        />
        <input
          type="text"
          value={String(filedData.id)}
          placeholder="User Id"
          onChange={(e) => setFiledData({ ...filedData, id: e.target.value })}
          className="p-2 outline-none border border-primary rounded-md text-base w-full sm:w-auto cursor-pointer"
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
