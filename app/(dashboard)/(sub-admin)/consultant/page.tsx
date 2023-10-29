"use client";

import { Header, THeader, Tbody } from "@/components";
import { updateData, useGetData } from "@/hooks";
import { IAssignment, IAssignmentStatus, INavItem } from "@/interface";
import { Button, Container, Title } from "@/universal";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaWindowClose } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { TiTick } from "react-icons/ti";

const navData: INavItem[] = [
  {
    label: <AiOutlineHome className="text-2xl" />,
    link: "/consultant",
  },
  {
    label: "Profile",
    link: "/consultant/profile",
  },
  {
    label: "Photo Zone",
    link: "/photo-zone",
  },
];

const SubAdmin = () => {
  const [assignments, setAssignments] = useState<IAssignment[]>([]);

  // useGetData("/assignment", setAssignments, true);

  const handleUpdate = (id: string, status: IAssignmentStatus) =>
    updateData("/assignment", {
      id,
      status,
    }).then(() => window.location.reload());

  return (
    <main>
      <Header navData={navData} />
      <Title variant="H3" className="capitalize py-6">
        Welcome to Life Change Bd
      </Title>
      <Container>
        <Title variant="H4" className="capitalize">
          Assignments List
        </Title>
        {assignments?.length !== 0 && (
          <table className="w-full max-w-xl mx-auto mt-5 rounded-t-md overflow-hidden">
            <thead className="bg-success text-gray-50 font-medium">
              <tr>
                <THeader label="No" />
                <THeader label="User Id" />
                <THeader label="Course" />
                <THeader label="Url" />
                <THeader label="Status" />
                <THeader label="Action" />
              </tr>
            </thead>
            <tbody className="text-gray-600 divide-y text-center">
              {assignments.map(
                ({ courseId, id, postLink, status, userId }, i) => (
                  <tr key={id}>
                    <Tbody label={String(i + 1)} />
                    <Tbody label={userId?.userId} />
                    <Tbody label={courseId?.title} />
                    <Tbody
                      label={
                        <Link
                          href={postLink}
                          target="_blank"
                          className="flex justify-center items-center gap-1 bg-gray-200 px-2 py-0.5 rounded-md w-fit mx-auto"
                        >
                          Open <HiOutlineExternalLink />
                        </Link>
                      }
                    />
                    <Tbody label={status} />

                    <Tbody
                      label={
                        <div className="flex gap-1.5">
                          <Button
                            onClick={() => handleUpdate(id, "accept")}
                            variant="secondary"
                            className="bg-sky-400 hover:bg-sky-500 transition-all delay-200 px-1 py-1 flex gap-0.5 justify-center items-center rounded-md text-xs"
                          >
                            Accept&nbsp;
                            <TiTick />
                          </Button>
                          <Button
                            onClick={() => handleUpdate(id, "reject")}
                            variant="secondary"
                            className="bg-red-400 hover:bg-red-500 transition-all delay-200 px-1 py-1 flex gap-0.5 justify-center items-center rounded-md text-xs"
                          >
                            Reject&nbsp;
                            <FaWindowClose />
                          </Button>
                        </div>
                      }
                    />
                  </tr>
                )
              )}
            </tbody>
          </table>
        )}
      </Container>
    </main>
  );
};

export default SubAdmin;
