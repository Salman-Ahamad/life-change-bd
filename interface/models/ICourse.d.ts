import { StaticImageData } from "next/image";
import { IId } from ".";

export type ICourseStatus = "active" | "inactive" | "running" | "completed";

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
  // others
  price: string;
  duration: string;
  meetingId?: string;
}

export interface ICourse extends ICourseSchema, IId {
  meetingId: string;
}
