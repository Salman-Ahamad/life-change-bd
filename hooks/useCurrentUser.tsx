"use client";

import { IUser } from "@/interface";
import { useState } from "react";
import { useGetData } from ".";

export const useCurrentUser: () => IUser | undefined = () => {
  const [currentUser, setCurrentUser] = useState<IUser | undefined>();
  useGetData("/user", setCurrentUser);

  return currentUser;
};
