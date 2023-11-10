"use client";

import { NextPage } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HiOutlineExternalLink } from "react-icons/hi";

import { GoogleMeetLink, Header, THeader, Tbody } from "@/components";
import { createData, getDataFn, useGetData } from "@/hooks";
import { IAssignment, ICourse, INavItem, ISlugParams } from "@/interface";
import { BackButton, Button, Container, LinkButton, Title } from "@/universal";
import { is24HoursEarlier } from "@/utils";
import { BiEditAlt } from "react-icons/bi";
import { toast } from "react-toastify";

const navData: INavItem[] = [
  {
    label: <BackButton className="text-2xl" />,
    link: "/active",
  },
];

const Assignment: NextPage<ISlugParams> = ({ params }) => {
  const [course, setCourse] = useState<ICourse | undefined>();
  const [assignments, setAssignments] = useState<IAssignment[]>([]);
  const [lastAssignment, setLastAssignment] = useState<string | Date>("");
  const [Action, setAction] = useState(false);
  const [url, setUrl] = useState<string>("");

  const { slug } = params;

  useGetData(`/courses/${slug}`, setCourse, true);

  useEffect(() => {
    if (course?.id !== undefined) {
      getDataFn(`/assignment/${course?.id}`, setAssignments, true);
      getDataFn(
        `/assignment/last-one?id=${course?.id}`,
        setLastAssignment,
        true
      );
    }
  }, [course?.id]);

  useEffect(() => {
    if (assignments) {
      assignments?.map((as) => as.status === "reject" && setAction(true));
    }
  }, [assignments]);

  const handlePostUrl = () => {
    if (assignments && course) {
      const result = is24HoursEarlier(lastAssignment as Date);

      if (assignments?.length < course?.assignments) {
        if (result) {
          createData("/assignment", {
            courseId: course?.id,
            assignment:
              (assignments?.length !== 0 && assignments?.length + 1) || 1,
            postLink: url,
          }).then(() => {
            window.location.reload();
            setUrl("");
          });
        } else {
          toast.error(
            "The input date is not 24 hours earlier than the current time."
          );
        }
      } else {
        toast.info("Already all assignments Submitted!");
      }
    }
  };

  return (
    <main>
      <Header navData={navData} />
      <Container>
        {course ? (
          <div className="flex justify-center items-center flex-col gap-8 my-8">
            <Title variant="H2" className="capitalize">
              {course?.title}
            </Title>
            <GoogleMeetLink meetId={course?.meetingId || ""}>
              Watch Video
            </GoogleMeetLink>

            {assignments && assignments.length !== 0 && (
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
                      {Action && <THeader label="Action" />}
                    </tr>
                  </thead>
                  <tbody className="text-gray-600 divide-y">
                    {assignments.map((assignment, i) => (
                      <tr key={assignment.id}>
                        <Tbody label={String(i + 1)} />
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
                        <Tbody label={assignment.status} />
                        {assignment.status === "reject" && (
                          <Tbody
                            label={
                              <LinkButton
                                href={`/active/courses/${slug}/${assignment.id}`}
                                variant="secondary"
                                className="bg-sky-400 hover:bg-sky-500 transition-all delay-200 px-4"
                              >
                                <BiEditAlt />
                              </LinkButton>
                            }
                          />
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {assignments && assignments?.length < course?.assignments && (
              <div>
                <Title variant="H4" className="capitalize mb-5">
                  Submit new URL
                </Title>

                <div className="flex flex-col md:flex-row justify-center items-center gap-2">
                  <input
                    type="url"
                    value={url}
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
            )}
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
