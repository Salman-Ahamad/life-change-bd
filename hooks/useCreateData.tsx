import { Axios, loadingToast } from "@/utils";
import { toast } from "react-toastify";

export const createData = async (
  apiUrl: string,
  createdData: object,
  toastOf: boolean = false
) => {
  const id = !toastOf && toast.loading("Creating...🔃");

  Axios.post(apiUrl, createdData)
    .then(({ data }) => {
      if (data.data) id && loadingToast(id, data.message, "success");
    })
    .catch(({ response }) =>
      id
        ? loadingToast(id, response.data.message || "Error❌", "error")
        : toast.error(response.data.message || "Error❌")
    );
};
