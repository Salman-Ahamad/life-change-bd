"use client";

import { IUser } from "@/interface";
import { Axios, loadingToast } from "@/utils";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState<IUser | undefined>();

  useEffect(() => {
    const id = toast.loading("Profile Updating... 🔃");

    Axios.get(`/user`)
      .then(({ data }) => {
        loadingToast(id, data.message, "success");
        setCurrentUser(data.data);
      })
      .catch(({ response }) => {
        loadingToast(id, response.data.message, "warning");
        setCurrentUser(undefined);
      });
  }, []);

  return currentUser;
};
