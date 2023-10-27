"use client";

import { Header } from "@/components";
import { updateData } from "@/hooks";
import { INavItem, ISlugParams } from "@/interface";
import { BackButton, Button, Container, Title } from "@/universal";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { useState } from "react";

const navData: INavItem[] = [
  {
    label: <BackButton className="text-2xl" />,
    link: "/active",
  },
];

export interface IAssignmentId extends ISlugParams {
  params: {
    slug: string;
    id: string;
  };
}

const AssignmentId: NextPage<IAssignmentId> = ({ params }) => {
  const [url, setUrl] = useState("");
  const id = params.id;
  const router = useRouter();

  const handlePostUrl = () =>
    updateData("/assignment/resubmit", {
      id,
      postLink: url,
    }).then(() => router.back());

  return (
    <main>
      <Header navData={navData} />
      <Container>
        <div className="flex justify-center items-center flex-col gap-5 my-8">
          <Title variant="H4" className="capitalize">
            Submit updated URL
          </Title>

          <div>
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
      </Container>
    </main>
  );
};

export default AssignmentId;
