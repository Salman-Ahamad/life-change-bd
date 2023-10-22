"use client";

import { GoogleMeetLink, WhatsAppLink } from "@/components";
import { IChildrenWithTitle } from "@/interface";
import { googleMeet } from "@/lib/assets";
import { Button, Title } from "@/universal";
import Image from "next/image";
import { FC } from "react";
import { MeetingLink } from ".";

export const ActivePageCard: FC<IChildrenWithTitle> = ({ title, children }) => {
  return (
    <div className="shadow-lg border p-4 h-fit space-y-2.5">
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
}
export const DataRow: FC<IDataRow> = ({
  title,
  btnText = "Message",
  icon,
  phoneNo,
  meetLink,
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
      ) : (
        <Button variant="secondary">Start soon</Button>
      )}
    </div>
  );
};
