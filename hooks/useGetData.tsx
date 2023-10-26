"use client";

import { Axios, loadingToast } from "@/utils";
import { Dispatch, SetStateAction, useEffect } from "react";
import { toast } from "react-toastify";

export const useGetData = (
  apiUrl: string,
  setData: Dispatch<SetStateAction<any>>,
  toastOf: boolean = false
) =>
  useEffect(() => {
    const id = !toastOf && toast.loading("Loading...🔃");

    Axios.get(apiUrl)
      .then(({ data }) => {
        setData(data.data);
        if (data.data) id && loadingToast(id, data.message, "success");
      })
      .catch(({ response }) => {
        setData(undefined);
        id
          ? loadingToast(id, response.data.message || "Error❌", "error")
          : toast.error(response.data.message || "Error❌");
      });
  }, [apiUrl, setData, toastOf]);

export const getDataFn = async (
  apiUrl: string,
  setData: Dispatch<SetStateAction<any>>,
  toastOf: boolean = false
) => {
  const id = !toastOf && toast.loading("Loading...🔃");

  Axios.get(apiUrl, {
    headers: {
      "Cache-Control": "no-store", // Adding this header to disable caching
    },
  })
    .then(({ data }) => {
      setData(data.data);
      if (data.data) id && loadingToast(id, data.message, "success");
    })
    .catch(({ response }) => {
      setData(null);
      id
        ? loadingToast(id, response.data.message || "Error❌", "error")
        : toast.error(response.data.message || "Error❌");
    });
};
