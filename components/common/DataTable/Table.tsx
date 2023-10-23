"use client";

import { IRefTable, IUser } from "@/interface";
import { UserRole } from "@/lib";
import { FC } from "react";
import { SendWishMessage, THeader, Tbody, WhatsAppLink } from "..";

export const DataTable: FC<IRefTable> = ({
  tableHeaders,
  dataProperties,
  tableData,
  message,
  actionBtn,
  rejectBtn,
  setActionId,
  UpdateSendWish,
  extraHed,
  extraProperties,
}) => {
  const handleAction = (id: string, isReject?: boolean) => {
    setActionId && setActionId(id, isReject);
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
              {extraHed &&
                extraHed.map((item) => <THeader key={item} label={item} />)}
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {tableData?.map((referUser, idx) => (
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
                            UpdateSendWish ? (
                              <SendWishMessage
                                btnText={message || "Message"}
                                phoneNo={referUser[item]}
                                userId={referUser.id}
                                data={{ "settings.sendWish": true }}
                                message={`

Hi...${referUser.firstName} ${referUser.lastName}

আপনার স্টুডেন্ট আইডি:${referUser.id}

আমি কনসালটেন্ট মিটিং এর জন্য আপনার আবেদনপত্র পেয়েছি

আমি আপনাকে ফ্রিতে বিস্তারিত জানিয়ে দিবো।এবং আরো কাজের বিষয়ে জানার জন্য আপনাকে একটা কনসালটেন্ট মিটিং এ জইন করতে হবে।

              বাংলাদেশ মিটিং সময়

              11:00am       2:30pm
              5:00pm        7:00pm
              9:00pm

উপরের সময় গুলো থেকে আপনার ফ্রি সময় টা বলুন যে সময় আপনি মিটিং এ জইন করতে পারবেন।

আমি আপনার কনসালটেন্ট
From
Lifechange Bd e-learning platform
                              
                              `}
                              />
                            ) : (
                              <WhatsAppLink
                                btnText={message || "Message"}
                                phoneNo={referUser[item]}
                              />
                            )
                          }
                        />
                      );
                    default:
                      return (
                        <Tbody
                          key={i}
                          label={referUser[item as keyof IUser] as string}
                        />
                      );
                  }
                })}

                {actionBtn && (
                  <td
                    className="px-2.5 py-1.5"
                    onClick={() => handleAction(referUser._id)}
                  >
                    {actionBtn}
                  </td>
                )}
                {rejectBtn && (
                  <td
                    className="px-2.5 py-1.5"
                    onClick={() => handleAction(referUser._id, true)}
                  >
                    {rejectBtn}
                  </td>
                )}
                {extraProperties &&
                  extraProperties?.map((item, i) => (
                    <td key={i} className="px-2.5">
                      {(referUser.role === UserRole.active && 120) ||
                        (referUser.role === UserRole.inactive && 1)}
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
