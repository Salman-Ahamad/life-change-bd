"use client";

import { IFaqList } from "@/interface";
import { FC, useRef, useState } from "react";

export const FaqsCard: FC<IFaqList> = ({ a, q }) => {
  const answerElRef = useRef<HTMLDivElement | null>(null);

  const [state, setState] = useState(false);
  const [answerH, setAnswerH] = useState("0px");

  const handleOpenAnswer = () => {
    const answerElH =
      (answerElRef.current?.childNodes[0] as HTMLDivElement)?.offsetHeight || 0;
    setState(!state);
    setAnswerH(`${answerElH + 20}px`);
  };

  return (
    <div
      className="space-y-3 overflow-hidden border-b"
      onClick={handleOpenAnswer}
    >
      <h4 className="cursor-pointer py-5 flex items-center justify-between text-lg text-gray-700 font-medium">
        {q}
        {state ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 12H4"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        )}
      </h4>
      <div
        ref={answerElRef}
        className="duration-300"
        style={state ? { height: answerH } : { height: "0px" }}
      >
        <div>
          <p className="text-gray-500">{a}</p>
        </div>
      </div>
    </div>
  );
};
