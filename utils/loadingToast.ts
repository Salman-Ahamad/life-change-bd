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
    position: "bottom-center",
    autoClose: autoClose || 5000,
    isLoading: isLoading || false,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: false,
  });
