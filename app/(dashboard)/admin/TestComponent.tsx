import { Button } from "@/universal";
import createCourse from "@/utils/actions/creteCourse";
import getCourses from "@/utils/actions/getCourses";
import React from "react";

const TestComponent = async () => {
  // createCourse();
  const courses = await getCourses();
  console.log(courses);

  return (
    <div>
      <p>Add new course</p>
      <Button variant="secondary">Create Course</Button>
    </div>
  );
};

export default TestComponent;
