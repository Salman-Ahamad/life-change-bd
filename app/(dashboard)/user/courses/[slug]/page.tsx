"use client";

import { NextPage } from "next";
import { useState } from "react";

import { GoogleMeetLink, Header } from "@/components";
import { useGetData } from "@/hooks";
import { ICourse, ISlugParams } from "@/interface";
import { navData } from "@/lib";
import { Button, Container, Title } from "@/universal";

const Assignment: NextPage<ISlugParams> = ({ params }) => {
  const [data, setData] = useState<ICourse | undefined>();
  const [url, setUrl] = useState("");
  const { slug } = params;
  useGetData(`/courses/${slug}`, setData);

  return (
    <main>
      <Header navData={navData.courses} />
      <Container>
        {data ? (
          <div className="flex justify-center items-center flex-col gap-8 my-8">
            <Title variant="H2" className="capitalize">
              {data?.title}
            </Title>
            <GoogleMeetLink meetId={data?.meetingId || ""}>
              Watch Video
            </GoogleMeetLink>

            <div>
              <Title variant="H4" className="capitalize">
                List of Previous URL&rsquo;s
              </Title>
            </div>

            <div>
              <Title variant="H4" className="capitalize mb-5">
                Submit new URL
              </Title>

              <input
                type="url"
                onChange={(e) => setUrl(e.target.value)}
                className="outline-none text-black text-base md:text-lg max-w-xs border border-primary rounded-[5px] py-1 px-2"
              />

              <Button
                className="ml-2.5 py-[7px] lg:py-2.5 px-3"
                variant="secondary"
              >
                Post Url
              </Button>
            </div>
          </div>
        ) : (
          <section className="max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-6 my-10">
              <div className="flex-1 space-y-5 py-1 my-auto mt-2.5">
                <div className="h-7 bg-slate-500 rounded" />
                <div className=" w-40 h-7 bg-slate-300 rounded mx-auto" />
                <div className=" w-40 h-7" />
                <div className=" w-40 h-7 bg-slate-500 rounded mx-auto" />
                <div className="h-7 bg-slate-300 rounded" />
              </div>
            </div>
          </section>
        )}
      </Container>
    </main>
  );
};

export default Assignment;
