"use client";

import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineExternalLink } from "react-icons/hi";

import { GoogleMeetLink, Header, THeader, Tbody } from "@/components";
import { createData, getDataFn, useGetData } from "@/hooks";
import { IAssignment, ICourse, ISlugParams } from "@/interface";
import { navData } from "@/lib";
import { Button, Container, Title } from "@/universal";
import { BiEditAlt } from "react-icons/bi";

const Assignment: NextPage<ISlugParams> = ({ params }) => {
  const [data, setData] = useState<ICourse | undefined>();
  const [assignment, setAssignment] = useState<IAssignment[] | undefined>();
  const [url, setUrl] = useState("");

  const { slug } = params;

  useGetData(`/courses/${slug}`, setData, true);

  useEffect(() => {
    if (data?.id) getDataFn(`/assignment/${data?.id}`, setAssignment, true);
  }, [data?.id]);

  const handlePostUrl = () =>
    createData("/assignment", {
      courseId: data?.id,
      postLink: url,
    }).then(() => setUrl(""));

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

            {assignment && assignment.length !== 0 && (
              <div>
                <Title variant="H4" className="capitalize">
                  List of Previous URL&rsquo;s
                </Title>
                <table className="w-full">
                  <thead className="bg-gray-600 text-gray-50 font-medium border-b rounded-t-md">
                    <tr>
                      <THeader label="No" />
                      <THeader label="Url" />
                      <THeader label="Status" />
                      {assignment.map(
                        (as, i) =>
                          as.status === "reject" && (
                            <THeader key={i} label="Action" />
                          )
                      )}
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 divide-y">
                    {assignment.map((assignment, idx) => (
                      <tr key={idx}>
                        <Tbody label={String(idx + 1)} />
                        <Tbody
                          label={
                            <Link
                              href={assignment.postLink}
                              target="_blank"
                              className="flex justify-center items-center gap-1 bg-gray-200 px-2 py-0.5 rounded-md"
                            >
                              Open <HiOutlineExternalLink />
                            </Link>
                          }
                        />
                        <Tbody key={idx} label={assignment.status} />
                        {assignment.status === "reject" && (
                          <Tbody
                            key={idx}
                            label={
                              <Button
                                variant="secondary"
                                className="bg-sky-400 hover:bg-sky-500 transition-all delay-200 px-4"
                              >
                                <BiEditAlt />
                              </Button>
                            }
                          />
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

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
                onClick={handlePostUrl}
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
