"use client";

import React, { useEffect, useState } from "react";
import WhatsOnYourMind from "./WhatsOnYourMind";
import Post from "./Post";
import { useCurrentUser, useGetData } from "@/hooks";
import { IPostWithAuthor } from "@/interface";

const ProfileFeed: React.FC = () => {
  const [posts, setPosts] = useState<IPostWithAuthor[]>([]);
  const [myPosts, setMyPosts] = useState<IPostWithAuthor[]>([]);

  const user = useCurrentUser();
  useGetData("/photo-zone/post", setPosts);

  useEffect(() => {
    if (posts && posts.length > 0 && user) {
      const filteredPost = posts.filter(
        (post) => post?.author?.id === user?.id
      );
      setMyPosts(filteredPost);
    }
  }, [posts, user]);

  return (
    <div className="mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
      <WhatsOnYourMind />
      {myPosts && myPosts.map((post, idx) => <Post key={idx} data={post} />)}
    </div>
  );
};

export default ProfileFeed;
