"use client";

import { ChangeEvent, FC } from "react";

export interface ProfileInputProps {
  label: string;
  name: string;
  defaultValue: string;
  onChange: (value: any) => void;
  selectOption?: string[];
}

export const InputField: FC<ProfileInputProps> = ({
  label,
  name,
  defaultValue,
  onChange,
  selectOption,
}) => {
  return (
    <div className="text-lg py-1 grid grid-cols-2 w-[98%]">
      <span className="font-semibold pl-2">{label}&nbsp;</span>
      {selectOption ? (
        <select
          className="outline-none pl-1.5 bg-gray-100 rounded-sm"
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            onChange(e.target.value)
          }
          // value={defaultValue}
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
          className="outline-none pl-1.5 bg-gray-100 rounded-sm"
        />
      )}
    </div>
  );
};
