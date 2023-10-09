import { Axios, loadingToast } from "@/utils";
import { toast } from "react-toastify";

export const updateData = (apiUrl: string, updatedData: object) => {
  const id = toast.loading("Profile Updating...");
  Axios.patch(apiUrl, updatedData)
    .then(({ data }) => {
      if (data.data) {
        loadingToast(id, data.message, "success");
      }
    })
    .catch(({ response }) => {
      loadingToast(id, response.data.message, "error");
    });
};
