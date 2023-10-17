"use client";

import { IPostWithAuthor } from "@/interface";
import Image from "next/image";
import React from "react";

const SingleStory: React.FC<{ storyData: IPostWithAuthor }> = ({
  storyData,
}) => {
  const cardStyle = {
    backgroundImage: `url(${storyData.imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="relative w-28 shadow-md rounded-2xl bg-cover shrink-0 singleStory">
      <div className="relative w-full h-full rounded-2xl p-2" style={cardStyle}>
        {storyData?.author?.image && (
          <Image
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover outline outline-primary"
            src={storyData.author.image}
            alt={storyData.author.firstName || ""}
          />
        )}
        <p className="text-white absolute w-[100%] text-center bottom-2">
          {storyData?.author?.firstName}
        </p>
      </div>
    </div>
  );
};

export default SingleStory;
