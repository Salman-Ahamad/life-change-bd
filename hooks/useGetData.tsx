"use client";

import { Axios, loadingToast } from "@/utils";
import { Dispatch, SetStateAction, useEffect } from "react";
import { toast } from "react-toastify";

export const useGetData = (
  apiUrl: string,
  setData: Dispatch<SetStateAction<any>>,
  refetch?: boolean
) =>
  useEffect(() => {
    const id = toast.loading("Loading... 🔃");

    Axios.get(apiUrl)
      .then(({ data }) => {
        loadingToast(id, data.message, "success");
        setData(data.data);
      })
      .catch(({ response }) => {
        loadingToast(id, response.data.message, "error");
        setData(undefined);
      });
  }, [apiUrl, setData, refetch]);
