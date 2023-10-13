"use client";

import React from "react";

export interface IDataTable {
  title?: string;
  tableHeaders?: string[];
  dataProperties: string[];
  tableData: Record<string, any>[];
}
export const DataTable: React.FC<IDataTable> = ({
  title,
  tableHeaders,
  dataProperties,
  tableData,
}) => {
  return (
    <div className="max-w-screen-xl mx-auto p-4 md:p-8">
      <div className="max-w-lg">
        <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">{title}</h3>
      </div>
      <div className="mt-8 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              {tableHeaders
                ? tableHeaders.map((header, idx) => (
                    <th key={idx} className="py-3 px-6">
                      {header}
                    </th>
                  ))
                : dataProperties
                ? dataProperties.map((header, idx) => (
                    <th key={idx} className="py-3 px-6">
                      {header}
                    </th>
                  ))
                : Object.entries(tableData[0]).map(([key, value]) => (
                    <th key={key} className="py-3 px-6 capitalize">
                      {key}
                    </th>
                  ))}
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {tableData.map((item, idx) => (
              <tr key={idx}>
                {dataProperties
                  ? dataProperties.map((key, i) => (
                      <td key={i} className="px-6 py-4 whitespace-nowrap">
                        {item[key]}
                      </td>
                    ))
                  : Object.entries(item).map(([key, value]) => (
                      <td key={key} className="px-6 py-4 whitespace-nowrap">
                        {value}
                      </td>
                    ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
