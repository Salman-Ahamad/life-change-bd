import { Axios, loadingToast } from "@/utils";
import { toast } from "react-toastify";

export const updateData = (
  apiUrl: string,
  updatedData: object,
  toastOf: boolean = false
) => {
  const id = !toastOf && toast.loading("Updating...🔃");

  Axios.patch(apiUrl, updatedData)
    .then(({ data }) => {
      console.log(
        "🚀 ~ file: useUpdateData.tsx:13 ~ .then ~ data:",
        data.message
      );
      if (data.data)
        id ? loadingToast(id, data.message, "success") : console.log("somossa");
    })
    .catch(({ response }) => {
      console.log("🚀 ~ file: useUpdateData.tsx:16 ~ response:", response);
      return id
        ? loadingToast(id, response.data.message || "Error❌", "error")
        : toast.error(response.data.message || "Error❌");
    });
};
