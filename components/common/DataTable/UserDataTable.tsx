"use client";

import { IDataTable, IDataTableWithImage } from "@/interface";
import { Button } from "@/universal";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const UserDataTable: React.FC<IDataTableWithImage> = ({
  title,
  tableData,
}) => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-8">
        <div className="items-start justify-between md:flex">
          <div className="max-w-lg">
            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
              {title}
            </h3>
          </div>
          <div className="mt-3 md:mt-0">
            <Button variant="secondary">Add New</Button>
          </div>
        </div>
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
                <th className="py-3 px-6">Username</th>
                <th className="py-3 px-6">Phone</th>
                <th className="py-3 px-6">Email</th>
                <th className="py-3 px-6">Salary</th>
                <th className="py-3 px-6"></th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {tableData.map((item, idx) => (
                <tr key={idx}>
                  <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                    <Image
                      src={item.image}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full"
                      alt={item.firstName}
                    />
                    <div>
                      <span className="block text-gray-700 text-sm font-medium">
                        {item.firstName} {item.lastName}
                      </span>
                      <span className="block text-gray-700 text-xs">
                        {item.email}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.position}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {item.balance}
                  </td>
                  <td className="text-right px-6 whitespace-nowrap">
                    <button
                      onClick={() => console.log("Edit Button Clicked")}
                      className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => console.log("Delete Button Clicked")}
                      className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
