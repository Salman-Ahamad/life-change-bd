"use client";

import { useSession } from "next-auth/react";

import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import SingleStory from "./SingleStory";
import Link from "next/link";

const Story = () => {
  const recentImage = [
    {
      title: "Bill Gates",
      img: "/bill_gates.jpg",
      postImg: "bg-[url(/building.jpg)]",
    },
    {
      title: "Elon Musk",
      img: "/elon_musk.jpg",
      postImg: "bg-[url(/gaming_mouse.jpg)]",
    },

    {
      title: "Elon Musk",
      img: "/elon_musk.jpg",
      postImg: "bg-[url(/gaming_mouse.jpg)]",
    },
    {
      title: "Bill Gates",
      img: "/bill_gates.jpg",
      postImg: "bg-[url(/building.jpg)]",
    },
    {
      title: "Elon Musk",
      img: "/elon_musk.jpg",
      postImg: "bg-[url(/gaming_mouse.jpg)]",
    },
  ];

  const { data: session } = useSession();

  return (
    <div className="px-4 bg-white rounded-[17px] shadow-md">
      <div className="flex gap-[10px] mt-5 pb-5 overflow-x-scroll scrollbar-hide">
        <div className="w-28 shadow-md rounded-[15px] pb-2 shrink-0">
          <Image
            width={112}
            height={144}
            className="w-28 h-36 rounded-t-[15px] object-cover"
            src={session?.user?.image || ""}
            alt={session?.user?.name || ""}
          />
          <div>
            <div className="bg-primary w-9 h-9 rounded-full grid place-items-center text-[24px] text-white mx-auto -mt-[20px] relative outline outline-[6px] outline-white">
              <AiOutlinePlus />
            </div>
            <Link
              href="/user/photo-zone/create"
              className="text-center mt-2 font-medium"
            >
              Create Story
            </Link>
          </div>
        </div>
        {recentImage.map(({ title, img, postImg }, index) => {
          return (
            <SingleStory
              key={index}
              title={title}
              img={img}
              postImg={postImg}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Story;
