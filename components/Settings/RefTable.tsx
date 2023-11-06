"use client";

import { updateData, useCurrentUser } from "@/hooks";
import { IActionFn, IRefTable, IUser } from "@/interface";
import { UserRole } from "@/lib";
import { Button } from "@/universal";
import { FC } from "react";
import { THeader, Tbody, WhatsAppLink } from "..";

export const RefTable: FC<IRefTable> = ({
  slugUrl,
  message,
  actionFn,
  tableData,
  actionBtn,
  messageDone,
  tableHeaders,
  dataProperties,
}) => {
  const user = useCurrentUser(true);
  const handleAction = (props: IActionFn) => {
    actionFn && actionFn(props);
  };

  const handleMessageDone = (id: string) => {
    updateData(`/user/${id}`, {
      "settings.sendMessage": new Date(),
    }).then(() => window.location.reload());
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
              {messageDone && <THeader label="Message Done" />}
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
                    case "activates":
                      const activates = referUser.settings.activates
                        ? new Date(
                            referUser.settings.activates
                          ).toLocaleDateString()
                        : "-";
                      return (
                        <Tbody
                          key={i}
                          label={activates}
                          className={
                            !referUser.settings.activates
                              ? "text-center pr-10"
                              : ""
                          }
                        />
                      );

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
                      if (user?.role === UserRole.admin) {
                        return (
                          <Tbody
                            key={i}
                            label={referUser[item as keyof IUser] || "-"}
                            href={
                              slugUrl
                                ? `${slugUrl}${referUser.id}`
                                : `/user/${referUser.id}`
                            }
                          />
                        );
                      } else {
                        return (
                          <Tbody
                            key={i}
                            label={
                              (referUser[item as keyof IUser] as string) || "-"
                            }
                          />
                        );
                      }
                  }
                })}
                {actionBtn && (
                  <td
                    className="px-2.5 py-1.5"
                    onClick={() =>
                      handleAction({ id: referUser.id, user: referUser })
                    }
                  >
                    {actionBtn}
                  </td>
                )}
                {messageDone && (
                  <td
                    className="px-2.5 py-1.5"
                    onClick={() => handleMessageDone(referUser.id)}
                  >
                    <Button
                      variant="secondary"
                      disabled={referUser.settings.sendMessage ? true : false}
                      className="disabled:cursor-not-allowed disabled:opacity-75"
                    >
                      Done
                    </Button>
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
