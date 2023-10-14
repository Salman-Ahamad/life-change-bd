"use client";

import { NextPage } from "next";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { Header, PageHeader } from "@/components";
import { ISearchData, IUser } from "@/interface";
import { navData } from "@/lib";
import { Axios, loadingToast } from "@/utils";

const RefList: NextPage = () => {
  const [searchData, setSearchData] = useState<ISearchData | {}>({});
  const [data, setData] = useState<IUser[] | null>(null);

  // useEffect(() => {
  //   const id = toast.loading("Loading... 🔃");
  //   let searchparams = "";
  //   if ((searchData as ISearchData).id) {
  //     searchparams = `id=${(searchData as ISearchData).id}`;
  //   } else if ((searchData as ISearchData).date) {
  //     searchparams = `date=${(searchData as ISearchData).date}`;
  //   }
  //   if (
  //     searchparams.length > 0 ||
  //     (searchData as ISearchData).id ||
  //     (searchData as ISearchData).date
  //   ) {
  //     Axios.get(`/all-ref/1?${searchparams}`)
  //       .then(({ data }) => {
  //         loadingToast(id, data.message, "success");
  //         setData(data.data);
  //       })
  //       .catch(({ response }) => {
  //         loadingToast(id, response.data.message, "error");
  //         setData(null);
  //       });
  //   }
  // }, [searchData]);

  if (data) {
    console.log("🚀 ~ file: page.tsx:42 ~ refData:", data);
  }

  return (
    <>
      <Header navData={navData.refList} />
      <PageHeader
        title="Reference List (Inactive)"
        notice="Last 3 Month Outbound"
        setSearchData={setSearchData}
        setData={setData}
      />
    </>
  );
};

export default RefList;
