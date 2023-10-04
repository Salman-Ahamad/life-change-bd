"use client";

import { useGetData } from "@/hooks";
import { ICourse, ISlugParams } from "@/interface";
import { CommonText, Container, Title } from "@/universal";
import Image from "next/image";
import { useState } from "react";

const SingleCourses = ({ params }: ISlugParams) => {
  const { slug } = params;
  const [course, setCourse] = useState<ICourse | undefined>();
  useGetData(`/courses/${slug}`, setCourse);

  const { title, description, image, learn, footerDes } = course || {};

  return (
    <Container className="mt-10 min-h-screen">
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2 pt-10">
          <Title variant="H2">
            {title || (
              <div className="animate-pulse mx-auto">
                <div className="w-2/3 h-8 bg-slate-300 rounded" />
              </div>
            )}
          </Title>

          <Title variant="H4" className="capitalize text-start mt-10">
            Course Details
          </Title>

          <div className="mt-3 w-[90%]">
            {description ? (
              <CommonText>{description}</CommonText>
            ) : (
              <div className="animate-pulse mx-auto">
                <div className="w-full h-40 bg-slate-300 rounded" />
              </div>
            )}
          </div>
        </div>
        <div className="col-span-1">
          {image && title ? (
            <Image
              src={image}
              alt={title}
              width={400}
              height={400}
              className="max-w-3xl w-[400px] h-[400px] object-cover mx-auto rounded-xl"
            />
          ) : (
            <div className="animate-pulse mx-auto">
              <div className="w-[400px] h-[400px] bg-slate-300 rounded-xl" />
            </div>
          )}
        </div>
      </div>

      <div>
        <Title variant="H4" className="capitalize text-start mt-20 font-medium">
          📕 What will you learn
        </Title>

        <div className="mt-5 space-y-2.5">
          {learn ? (
            learn.map((item) => (
              <p key={item} className="mb-2 flex items-center">
                📝 {item}
              </p>
            ))
          ) : (
            <div className="animate-pulse mx-auto space-y-3">
              <div className="w-80 h-6 bg-slate-400 rounded" />
              <div className="w-80 h-6 bg-slate-300 rounded" />
              <div className="w-80 h-6 bg-slate-400 rounded" />
            </div>
          )}
        </div>

        <CommonText className="my-10 mt-20 text-center">
          {footerDes ? footerDes : ""}
        </CommonText>
      </div>
    </Container>
  );
};

export default SingleCourses;
