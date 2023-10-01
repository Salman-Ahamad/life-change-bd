import React from "react";
import type { Metadata } from "next";
import { courses } from "@/lib/data";
import { Container, Title } from "@/universal";
import { NextPage } from "next";
import Image from "next/image";

interface ParamsProps {
  params: {
    slug: string;
  };
}

// This will redirect to 404 page
export const dynamicParams = false;

export function generateStaticParams() {
  const slugs = courses.map((course) => ({
    slug: course.href.replace("/courses/", ""),
  }));

  console.log("Sluggs List Amir:", slugs);

  return courses.map((course) => ({
    slug: course.href.replace("/courses/", ""),
  }));
}

export function generateMetadata({ params }: ParamsProps): Metadata {
  const [course] = courses.filter(
    (course) => course.href === `/courses/${params.slug}`
  );

  return {
    title: course?.title,
    description: `${course?.title} - Life Change BD: It’s an Bangladeshi trusted online platform. It is a learning and earning process by using your valuable free time at home through your smart phone only It is a very easy process and you can learn this process on your own mother tongue and you can earn from our community with selling some Courses Services or product also. Here you make your career smoothly.`,
  };
}

const page: NextPage<ParamsProps> = ({ params }) => {
  const slug = params.slug;

  const [course] = courses.filter(
    (course) => course.href === `/courses/${slug}`
  );

  return (
    <Container className="mt-10 min-h-screen">
      <Title variant="H2" className="">
        {course.title}
      </Title>

      <div className="w-full mx-auto">
        <Image
          src={course.img}
          alt={course.title}
          className="max-w-3xl w-full h-80 object-cover mx-auto py-8"
        />
      </div>

      <div dangerouslySetInnerHTML={{ __html: course.content as string }}></div>
    </Container>
  );
};

export default page;
