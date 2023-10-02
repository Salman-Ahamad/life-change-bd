export type ICourseStatus = "active" | "inactive" | "completed";

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
