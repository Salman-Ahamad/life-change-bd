"use client";

import { Button } from "@/universal";
import { copyToClipboard } from "@/utils";
import { FC, useState } from "react";

export const CopyToClipboard: FC<{
  buttonText?: string;
  inputText: string;
}> = ({ buttonText = "Copy to clipboard", inputText }) => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <div>
      {isCopied ? (
        "Copied!"
      ) : (
        <Button
          variant="secondary"
          onClick={() => copyToClipboard(inputText, setIsCopied)}
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
};
