import { Dispatch, SetStateAction } from "react";

export const copyToClipboard = async (
  inputText: string,
  setIsCopied: Dispatch<SetStateAction<boolean>>
) => {
  try {
    await navigator.clipboard.writeText(inputText);
    setIsCopied(true);

    // You can add additional logic or UI changes upon successful copy
  } catch (err) {
    console.error("Unable to copy to clipboard", err);
    // Handle error if copying fails
  }
};
