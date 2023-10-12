"use client";

import { NextPage } from "next";
import { useState } from "react";

import { Header, PageHeader } from "@/components";
import { ISearchData } from "@/interface";
import { navData } from "@/lib";

const RefList: NextPage = () => {
  const [searchData, setSearchData] = useState<ISearchData | {}>({});

  return (
    <>
      <Header navData={navData.refList} />
      <PageHeader
        title="Reference List (Inactive)"
        notice="Last 3 Month Outbound"
        setSearchData={setSearchData}
      />
    </>
  );
};

export default RefList;
