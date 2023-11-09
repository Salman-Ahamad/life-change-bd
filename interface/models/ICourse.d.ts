import { StaticImageData } from "next/image";
import { IId } from ".";

export type ICourseStatus = "enroll" | "running" | "complete";

export interface ICourseSchema {
  title: string;
  slug: string;
  image: StaticImageData;
  video: string;
  learn: string[];
  description: string;
  footerDes?: string;
  status: ICourseStatus;
  enrolled: string[];
  certificates: string[];
  assignments: number;
  // others
  price: string;
  duration: string;
  meetingId?: string;
}

export interface ICourse extends ICourseSchema, IId {
  meetingId: string;
}
