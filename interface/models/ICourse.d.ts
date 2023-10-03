import { StaticImageData } from "next/image";

export type ICourseStatus = "active" | "inactive" | "running" | "completed";

export type ICourse = {
  courseName: string;
  courseCode: string;
  courseSlug: string;
  courseImage: string;
  courseDescription: string;
  coursePrice: number;
  courseDuration: number;
  courseStatus: ICourseStatus;
  enrolled: string[];
  certificates: string[];
};

export type ICourse1 = {
  title: string;
  slug: string;
  image: StaticImageData;
  video: string;
  learn: string[];
  description: string;
  status: ICourseStatus;
  enrolled: string[];
  certificates: string[];
  // others
  price: string;
  duration: string;
};
