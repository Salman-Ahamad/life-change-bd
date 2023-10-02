"use client";

import { IUser } from "@/interface";
import { Axios, loadingToast } from "@/utils";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const useCurrentUser = () => {
  const { user } = useSession().data || {};
  const [currentUser, setCurrentUser] = useState<IUser | undefined>();

  useEffect(() => {
    const id = toast.loading("Profile Updating...");

    Axios.get(`/user`, {
      headers: {
        role: user?.role,
        id: user?.id,
      },
    })
      .then(({ data }) => {
        loadingToast(id, data.message, "success");
        setCurrentUser(data.data);
      })
      .catch(({ response }) => {
        loadingToast(id, response.data.message, "warning");
        setCurrentUser(undefined);
      });
  }, [user?.id, user?.role]);

  return currentUser;
};
