"use client";

import { IRefTable, IUser } from "@/interface";
import { FC } from "react";
import { THeader, Tbody, WhatsAppLink } from "..";
import Link from "next/link";

export const RefTable: FC<IRefTable> = ({
  tableHeaders,
  dataProperties,
  tableData,
  message,
  actionBtn,
  setActionId,
}) => {
  const handleAction = (referUserId: string) => {
    setActionId && setActionId(referUserId);
  };

  return (
    <div className="max-w-screen-lg mx-auto p-4 md:p-8">
      <div className="mt-8 shadow-sm border rounded-lg overflow-x-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              {tableHeaders
                ? tableHeaders.map((header, idx) => (
                    <THeader key={idx} label={header} />
                  ))
                : dataProperties.map((header, idx) => (
                    <THeader key={idx} label={header} />
                  ))}
              {message && <THeader label={message} />}
              {actionBtn && <THeader label="Action" />}
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {tableData.map((referUser, idx) => (
              <tr key={idx}>
                <Tbody key={idx} label={String(idx + 1)} />
                {dataProperties.map((item, i) => {
                  switch (item) {
                    case "firstName":
                      return (
                        <Tbody
                          key={i}
                          label={`${referUser[item]} ${referUser["lastName"]}`}
                        />
                      );
                    case "createdAt":
                      const date = new Date(
                        referUser[item]
                      ).toLocaleDateString();
                      return <Tbody key={i} label={date} />;

                    case "phone":
                      return (
                        <Tbody
                          key={i}
                          label={
                            <WhatsAppLink
                              btnText={message || "Message"}
                              phoneNo={referUser[item]}
                            />
                          }
                        />
                      );
                    default:
                      return (
                        <Tbody
                          key={i}
                          label={referUser[item as keyof IUser] as string}
                          href={`/user/${referUser.id}`}
                        />
                      );
                  }
                })}
                {actionBtn && (
                  <td
                    className="px-2.5 py-1.5"
                    onClick={() => handleAction(referUser.id)}
                  >
                    {actionBtn}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
