import { Button } from "@/universal";
import { signOut } from "next-auth/react";
import React from "react";

export const LogOut = () => {
  return <Button onClick={() => signOut()}>LogOut</Button>;
};
