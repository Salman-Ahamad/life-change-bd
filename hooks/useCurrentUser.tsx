"use client";

import { IUser } from "@/interface";
import { useState } from "react";
import { useGetData } from ".";

export const useCurrentUser: (toastOf?: boolean) => IUser | undefined = (
  toastOf
) => {
  const [currentUser, setCurrentUser] = useState<IUser | undefined>();
  useGetData("/user", setCurrentUser, toastOf);

  return currentUser;
};
