"use client";

import { ProfileInputProps } from "@/interface";
import { ChangeEvent, FC } from "react";

export const InputField: FC<ProfileInputProps> = ({
  label,
  name,
  defaultValue,
  onChange,
  selectOption,
  onlyText,
}) => (
  <div className="text-lg py-1 grid grid-cols-8 w-full">
    <span className="font-semibold pl-2 col-span-3">{label}&nbsp;</span>
    {onlyText ? (
      <p className="pl-1.5 bg-gray-100 rounded-sm col-span-5">{defaultValue}</p>
    ) : selectOption ? (
      <select
        className="outline-none pl-1.5 bg-gray-100 rounded-sm col-span-5"
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          onChange(e.target.value)
        }
        defaultValue={defaultValue}
        defaultChecked={true}
      >
        <option value={defaultValue}>{defaultValue}</option>

        {selectOption.map(
          (option) =>
            option !== defaultValue && (
              <option key={option} value={option}>
                {option}
              </option>
            )
        )}
      </select>
    ) : (
      <input
        type="text"
        name={name}
        defaultValue={defaultValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        className="outline-none pl-1.5 bg-gray-100 rounded-sm col-span-5"
      />
    )}
    {}
  </div>
);
