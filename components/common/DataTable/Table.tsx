"use client";

import { IAllRefer } from "@/interface";
import { FC } from "react";

export interface ITHeader {
  title: string;
}

const THeader = ({ title }: ITHeader) => (
  <th className="py-3 px-6 capitalize">{title}</th>
);

const Tbody = ({ title }: ITHeader) => (
  <td className="px-6 py-4 whitespace-nowrap">{title}</td>
);

export interface ITable {
  title?: string;
  tableHeaders: string[];
  dataProperties: string[];
  tableData: IAllRefer[];
}

export const Table: FC<ITable> = ({
  title,
  tableHeaders,
  dataProperties,
  tableData,
}) => {
  return (
    <div className="max-w-screen-xl mx-auto p-4 md:p-8">
      {title && (
        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl max-w-lg">
          {title}
        </h3>
      )}

      <div className="mt-8 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              {tableHeaders
                ? tableHeaders.map((header, idx) => (
                    <THeader key={idx} title={header} />
                  ))
                : dataProperties.map((header, idx) => (
                    <THeader key={idx} title={header} />
                  ))}
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {tableData.map(({ referUser }, idx) => (
              <tr key={idx}>
                {dataProperties.map((item, i) =>
                  item === "firstName" ? (
                    <Tbody
                      key={i}
                      title={`${referUser[item]} ${referUser["lastName"]}`}
                    />
                  ) : (
                    <Tbody key={i} title={referUser[item]} />
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
