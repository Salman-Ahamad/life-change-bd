"use client";

import { FC } from "react";

import { IPageHeader } from "@/interface";
import { CommonText, Title } from "@/universal";
import { SearchBar } from ".";

export const PageHeader: FC<IPageHeader> = ({
  title,
  notice,
  setSearchData,
  setData,
}) => (
  <>
    <Title variant="H3" className="capitalize mt-10">
      {title}
    </Title>
    <CommonText className="w-full bg-primary bg-opacity-50 text-center py-2 text-base lg:text-lg mt-1.5">
      {notice}
    </CommonText>
    {setSearchData && setData && (
      <SearchBar setSearchData={setSearchData} setData={setData} />
    )}
  </>
);
