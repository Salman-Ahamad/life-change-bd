import { IToastType } from "@/interface";
import { Id, toast } from "react-toastify";

export const loadingToast = (
  id: Id,
  message: string,
  type: IToastType,
  autoClose?: number,
  isLoading?: boolean
) =>
  toast.update(id, {
    render: message,
    type: type,
    autoClose: autoClose || 5000,
    isLoading: isLoading || false,
  });
