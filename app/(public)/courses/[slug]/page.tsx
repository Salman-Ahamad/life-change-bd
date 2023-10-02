"use client";

import React, { useEffect, useState } from "react";
import { Container, Title } from "@/universal";
import Image from "next/image";

const Page = ({ params }) => {
  const { slug } = params;
  const [course, setCourse] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:3000/api/courses");
      const courses = await data.json();

      const [course] = await courses.filter((c) => c.courseSlug === slug);

      setCourse(course);
    };

    fetchData();
  }, [slug]);

  return (
    <Container className="mt-10 min-h-screen">
      <Title variant="H2" className="">
        {course.courseName}
      </Title>

      <div className="w-full mx-auto">
        <Image
          src={course.courseImage}
          alt={course.courseName}
          className="max-w-3xl w-full h-80 object-cover mx-auto py-8"
        />
      </div>

      <div
        dangerouslySetInnerHTML={{ __html: course.courseDescription as string }}
      ></div>
    </Container>
  );
};

export default Page;
