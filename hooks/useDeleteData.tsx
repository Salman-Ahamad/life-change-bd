"use client";

import { Axios, loadingToast } from "@/utils";
import { toast } from "react-toastify";

export const deleteData = async (
  apiUrl: string,
  updatedData?: object,
  toastOf: boolean = false
) => {
  const id = !toastOf && toast.loading("Deleting...🔃");

  Axios.delete(apiUrl, updatedData)
    .then(({ data }) => {
      if (data.data) id && loadingToast(id, data.message, "success");
    })
    .catch(({ response }) =>
      id
        ? loadingToast(id, response.data.message || "Error❌", "error")
        : toast.error(response.data.message || "Error❌")
    );
};
