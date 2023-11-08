"use client";

import { GoogleMeetLink, WhatsAppLink } from "@/components";
import { IChildrenWithTitle } from "@/interface";
import { googleMeet } from "@/lib/assets";
import { Button, Title } from "@/universal";
import Image from "next/image";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

export const ActivePageCard: FC<IChildrenWithTitle> = ({
  icon,
  time,
  title,
  children,
  className,
}) => {
  return (
    <div
      className={twMerge("shadow-lg border p-4 h-fit space-y-2.5", className)}
    >
      {time && (
        <div className="text-center text-sm text-white font-semibold w-full bg-secondary p-2 rounded ">
          Join Live Learning Training Classes BD Time : ( 8am to 10pm)
        </div>
      )}

      {icon && (
        <Image
          src={googleMeet}
          alt="Google Meet Icon"
          className="w-10 h-8 pr-2"
        />
      )}
      <Title variant="H5" className="pb-4 capitalize">
        {title}
      </Title>
      {children}
    </div>
  );
};

export interface IDataRow {
  title: string;
  btnText?: string;
  icon?: boolean;
  phoneNo?: string;
  meetLink?: string;
  groupLink?: string;
}
export const DataRow: FC<IDataRow> = ({
  title,
  btnText = "Message",
  icon,
  phoneNo,
  meetLink,
  groupLink,
}) => {
  return (
    <div className="flex justify-between items-center gap-2.5 py-2 hover:bg-gray-100">
      {icon && (
        <Image
          src={googleMeet}
          alt="Google Meet Icon"
          className="w-7 h-7 pr-2"
        />
      )}
      <p>{title}</p>
      {meetLink ? (
        <GoogleMeetLink meetId={meetLink}>Join Class</GoogleMeetLink>
      ) : phoneNo ? (
        <WhatsAppLink btnText={btnText} phoneNo={phoneNo as string} />
      ) : groupLink ? (
        <WhatsAppLink btnText={btnText} groupLink={groupLink as string} />
      ) : (
        <Button variant="secondary">Start soon</Button>
      )}
    </div>
  );
};
