"use client";

import { IRefTable } from "@/interface";
import { FC } from "react";
import { THeader, Tbody, WhatsAppLink } from "..";

export const RefTable: FC<IRefTable> = ({
  tableHeaders,
  dataProperties,
  tableData,
  message,
  actionBtn,
  setActionId,
}) => {
  const handleAction = (referUserId: string, refId: string) => {
    setActionId && setActionId(referUserId, refId);
    // setActionId && setActionId(referUserId);
  };
  return (
    <div className="max-w-screen-md mx-auto p-4 md:p-8">
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
            {tableData.map(({ referUser, id }, idx) => (
              <tr key={idx}>
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
                      return <Tbody key={i} label={referUser[item]} />;
                  }
                })}

                {actionBtn && (
                  <td
                    className="px-2.5 py-1.5"
                    onClick={() => handleAction(referUser.id, id)}
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
