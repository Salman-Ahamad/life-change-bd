"use client";

import { IPostSchema } from "@/interface";
import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";
import { FaGlobeAmericas } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
// import { MdOutlineClose } from "react-icons/md";

const Post = ({ data }: { data: IPostSchema }) => {
  return (
    <div className="py-4 bg-white rounded-[17px] shadow-md mt-5">
      <div className="px-4 flex justify-between items-center">
        <div className="flex gap-2">
          {data.imageUrl && (
            <Image
              width={44}
              height={44}
              className="w-[44px] h-[44px] object-cover rounded-full"
              src={data.imageUrl}
              alt={data.imageUrl}
            />
          )}

          <div>
            <h1 className="text-[16px] font-semibold">{data.imageUrl}</h1>
            <div className="text-gray-500 flex items-center gap-2">
              <p>{data.createdAt}</p>
              <p>·</p>
              <FaGlobeAmericas />
            </div>
          </div>
        </div>

        <div className="text-gray-500 text-[26px] flex gap-4">
          <FiMoreHorizontal className="cursor-pointer" />
          {/* TODO: Add this delete button later */}
          {/* {isAdmin() && (
            <MdOutlineClose
              className="cursor-pointer"
              onClick={() => {
                // deleteDoc(doc(db, "posts", id));
              }}
            />
          )} */}
        </div>
      </div>

      <p className="px-4 mt-4 text-gray-800 font-normal">{data.text}</p>

      <div className="mt-4 flex items-center justify-center">
        {data.imageUrl && (
          <Image
            width={500}
            height={500}
            src={data.imageUrl}
            alt={data.imageUrl}
          />
        )}
      </div>

      <div className="mx-4 h-[1px] bg-gray-300 mt-4"></div>

      <div className="flex mt-[7px] text-gray-500">
        <div className="flex gap-2 justify-center items-center w-[50%] py-2 rounded-[10px] hover:bg-gray-200 cursor-pointer">
          <AiOutlineLike className="text-[26px]" />
          <p className="font-medium">Like</p>
        </div>
        {/* <div className="flex gap-2 justify-center items-center w-[50%] py-2 rounded-[10px] hover:bg-gray-200 cursor-pointer">
          <TfiComment className="text-[20px] translate-y-[4px]" />
          <p className="font-medium">Comment</p>
        </div> */}
      </div>
    </div>
  );
};

export default Post;
