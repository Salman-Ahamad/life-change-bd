"use client";

import { Container, Title } from "@/universal";
import Image from "next/image";
import { useEffect, useState } from "react";

const Page = ({ params }: any) => {
  const { slug } = params;
  const [course, setCourse] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:3000/api/courses");
      const courses = await data.json();
      const [course] = await courses.filter((c: any) => c.courseSlug === slug);
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
