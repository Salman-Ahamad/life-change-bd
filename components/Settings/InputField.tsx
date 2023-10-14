"use client";

// components/ProfileInput.tsx
import React, { ChangeEvent, FC } from "react";

interface ProfileInputProps {
  label: string;
  name: string;
  defaultValue: string | undefined;
  onChange: (value: string) => void;
}

export const InputField: FC<ProfileInputProps> = ({
  label,
  name,
  defaultValue,
  onChange,
}) => {
  return (
    <div className="text-lg py-1">
      <span className="font-semibold pl-2">{label}&nbsp;</span>
      <input
        type="text"
        name={name}
        defaultValue={defaultValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        className="outline-none pl-1.5 bg-gray-100 rounded-sm"
      />
    </div>
  );
};
