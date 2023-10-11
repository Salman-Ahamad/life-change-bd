"use client";

import { IAllRefer } from "@/interface";
import { Button } from "@/universal";
import { FC } from "react";

export interface ITHeader {
  title: string;
}

export interface IRefTable {
  tableHeaders: string[];
  dataProperties: string[];
  tableData: IAllRefer[];
}

const THeader = ({ title }: ITHeader) => (
  <th className="p-2.5 capitalize text-center">{title}</th>
);

const Tbody = ({ title }: ITHeader) => (
  <td className="px-2.5 py-3 whitespace-nowrap">{title}</td>
);

export const RefTable: FC<IRefTable> = ({
  tableHeaders,
  dataProperties,
  tableData,
}) => {
  return (
    <div className="max-w-screen-md mx-auto p-4 md:p-8">
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
              <THeader title="Message" />
              <THeader title="Collect Mony" />
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {tableData.map(({ referUser }, idx) => (
              <tr key={idx}>
                {dataProperties.map((item, i) => {
                  switch (item) {
                    case "firstName":
                      return (
                        <Tbody
                          key={i}
                          title={`${referUser[item]} ${referUser["lastName"]}`}
                        />
                      );
                    case "createdAt":
                      const date = new Date(
                        referUser[item]
                      ).toLocaleDateString();
                      return <Tbody key={i} title={date} />;

                    default:
                      return <Tbody key={i} title={referUser[item]} />;
                  }
                })}
                <td className="px-2.5">
                  <Button variant="accent">Message</Button>
                </td>
                <td className="px-2.5 py-1.5">
                  <Button variant="secondary" className="text-xs lg:text-sm">
                    Collect Mony
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
