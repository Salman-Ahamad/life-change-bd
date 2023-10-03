import { StaticImageData } from "next/image";

export type ICourseStatus = "active" | "inactive" | "running" | "completed";

export type ICourse = {
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
};
