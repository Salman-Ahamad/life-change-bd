"use client";

import Image from "next/image";
import { AiOutlinePlus } from "react-icons/ai";
import SingleStory from "./SingleStory";
import React, { useState } from "react";
import { IPostWithAuthor } from "@/interface";
import { CreatePost } from "@/components";
import { useCurrentUser } from "@/hooks";

const Story: React.FC<{ recentStory: IPostWithAuthor[] }> = ({
  recentStory,
}) => {
  const user = useCurrentUser(true);
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className="px-4 bg-white rounded-[17px] shadow-md">
      <div className="flex gap-[10px] mt-5 pb-5 overflow-x-scroll scrollbar-hide">
        <div className="w-28 shadow-md rounded-[15px] pb-2 shrink-0">
          <CreatePost show={showCreateModal} setShow={setShowCreateModal} />
          <Image
            width={112}
            height={144}
            className="w-28 h-36 rounded-t-[15px] object-cover"
            src={user?.image || ""}
            alt={user?.firstName || ""}
          />
          <div>
            <button
              onClick={() => setShowCreateModal(!showCreateModal)}
              className="bg-primary w-9 h-9 rounded-full grid place-items-center text-[24px] text-white mx-auto -mt-[20px] relative outline outline-[6px] outline-white cursor-pointer"
            >
              <AiOutlinePlus />
            </button>
            <p className="text-center mt-2 font-medium">Create Story</p>
          </div>
        </div>
        {recentStory &&
          recentStory.map((storyData, idx) => (
            <SingleStory key={idx} storyData={storyData} />
          ))}
      </div>
    </div>
  );
};

export default Story;
