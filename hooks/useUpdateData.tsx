import { Axios, loadingToast } from "@/utils";
import { toast } from "react-toastify";

export const updateData = (
  apiUrl: string,
  updatedData: object,
  toastOf: boolean = false
) => {
  const id = !toastOf && toast.loading("Profile Updating...");

  Axios.patch(apiUrl, updatedData)
    .then(({ data }) => {
      if (data.data) id && loadingToast(id, data.message, "success");
    })
    .catch(({ response }) =>
      id
        ? loadingToast(id, response.data.message, "error")
        : toast.error(response.data.message)
    );
};
