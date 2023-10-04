import { Button } from "@/universal";
import getCourses from "@/utils/actions/getCourses";
import React from "react";

const TestComponent = async () => {
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
