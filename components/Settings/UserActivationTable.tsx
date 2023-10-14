"use client";

import { IDataTableWithImage } from "@/interface";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const UserActivationTable: React.FC<IDataTableWithImage> = ({
  title,
  tableData,
}) => {
  const [areAllChecked, setAllChecked] = useState<boolean>(false);
  let [checkedItems, setCheckedItems] = useState([]);
  let [checkedStatus, setCheckedIStatus] = useState({});

  console.log(checkedItems);

  // set or unset all checkbox items
  const handleAllCheckedItems = () => {
    setAllChecked(!areAllChecked);

    if (areAllChecked) {
      setCheckedItems([]);
      //   checkedStatus[`checkbox${idx}`] = !areAllChecked;
      //   setCheckedIStatus({ ...checkedStatus });
    } else {
      //   tableData.forEach((item, idx) => {
      //     checkedItems.push({ id: item.id });
      //     // setCheckedIStatus({});
      //   });

      const newCheckedItems = tableData.map((item) => ({ id: item.id }));
      setCheckedItems(newCheckedItems);
    }
  };

  useEffect(() => {
    // Set the checked status immediately after setting the state
    const newCheckedStatus = {};
    tableData.forEach((item, idx) => {
      newCheckedStatus[`checkbox${idx}`] = checkedItems.some(
        (checkedItem) => checkedItem.id === item.id
      );
    });
    setCheckedIStatus(newCheckedStatus);
  }, [checkedItems, tableData]);

  // Update checked value
  const handleCheckboxChange = (e, id) => {
    e.preventDefault();

    setAllChecked(false);
    // Check if the item with the given id is already in the checkedItems array
    const isItemChecked = checkedItems.some(
      (checkedItem) => checkedItem.id === id
    );
    // // If the item is already checked, remove it; otherwise, add it to the checkedItems array
    // if (isItemChecked) {
    //   setCheckedItems(
    //     checkedItems.filter((checkedItem) => checkedItem.id !== id)
    //   );
    // } else {
    //   setCheckedItems([...checkedItems, { id }]);
    // }

    // If the item is already checked, remove it; otherwise, add it to the checkedItems array
    if (isItemChecked) {
      setCheckedItems((prevItems) =>
        prevItems.filter((checkedItem) => checkedItem.id !== id)
      );
    } else {
      setCheckedItems((prevItems) => [...prevItems, { id }]);
    }
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 py-8">
        <div className="items-start justify-between md:flex">
          <div className="max-w-lg">
            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
              {title}
            </h3>
          </div>
          <div className="mt-3 md:mt-0"></div>
        </div>
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-gray-50 text-gray-600 font-medium border-b">
              <tr>
                <th className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                  <div>
                    <input
                      type="checkbox"
                      id="checkbox-all-items"
                      className="checkbox-item peer hidden"
                      checked={areAllChecked}
                      onChange={handleAllCheckedItems}
                    />
                    <label
                      htmlFor="checkbox-all-items"
                      className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                    ></label>
                  </div>
                  User
                </th>
                <th className="py-3 px-6">Phone</th>
                <th className="py-3 px-6">Email</th>
                <th className="py-3 px-6">Deposit</th>
                <th className="py-3 px-6">Status</th>
                <th className="py-3 px-6"></th>
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y">
              {tableData.map((item, idx) => (
                <tr key={idx}>
                  <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                    <div>
                      <input
                        type="checkbox"
                        id={`checkbox-${idx}`}
                        name={`checkbox-${idx}`}
                        className="checkbox-item peer hidden"
                        checked={checkedStatus[`checkbox${idx}`]}
                        onChange={(e) => handleCheckboxChange(e, item?.id)}
                        // checked={checkedItems.some(
                        //   (checkedItem) => checkedItem.id === item.id
                        // )}
                      />
                      <label
                        htmlFor={`checkbox-${idx}`}
                        className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                      ></label>
                    </div>
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
                    {item.balance || "inactive"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.status}</td>
                  <td className="text-right px-6 whitespace-nowrap">
                    <button
                      onClick={() => console.log("Edit Button Clicked")}
                      className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg"
                    >
                      Activate User
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
