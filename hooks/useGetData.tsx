"use client";

import { Axios, loadingToast } from "@/utils";
import { Dispatch, SetStateAction, useEffect } from "react";
import { toast } from "react-toastify";

export interface IUseGetData {
  apiUrl: string;
  dataType: any;
}

export type IGetType = "user";

const dataType = {
  user: "",
};

export const useGetData = (
  apiUrl: string,
  setData: Dispatch<SetStateAction<any>>
) => {
  useEffect(() => {
    const id = toast.loading("Loading... 🔃");

    Axios.get(apiUrl)
      .then(({ data }) => {
        loadingToast(id, data.message, "success");
        setData(data.data);
      })
      .catch(({ response }) => {
        loadingToast(id, response.data.message, "warning");
        setData(undefined);
      });
  }, [apiUrl, setData]);
};
