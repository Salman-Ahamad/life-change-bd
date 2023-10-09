"use client";

import { Button } from "@/universal";
import React, { FC, useState } from "react";

export const CopyToClipboard: FC<{
  buttonText?: string;
  inputText: string;
}> = ({ buttonText = "Copy to clipboard", inputText }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(inputText);
      setIsCopied(true);
      // You can add additional logic or UI changes upon successful copy
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
      // Handle error if copying fails
    }
  };

  return (
    <div>
      {isCopied ? (
        "Copied!"
      ) : (
        <Button variant="secondary" onClick={copyToClipboard}>
          {buttonText}
        </Button>
      )}
    </div>
  );
};
