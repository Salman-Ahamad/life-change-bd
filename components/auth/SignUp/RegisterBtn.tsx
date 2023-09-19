"use client";

import { Button } from "@/universal";
import { FC } from "react";

export const RegisterBtn: FC<{ disabled: boolean }> = ({ disabled }) => (
  <div className="flex flex-col justify-center items-center mt-2.5">
    <Button
      variant="primary"
      className="bg-primary disabled:bg-opacity-70 disabled:cursor-not-allowed "
      type="submit"
      disabled={disabled}
    >
      Next
    </Button>
  </div>
);
