"use client";

import { useState } from "react";
import Story from "./Story";
import WhatsOnYourMind from "./WhatsOnYourMind";
import { CreatePost } from "@/components";
import Post from "./Post";
import { useCurrentUser, useGetData } from "@/hooks";
import { IPostWithAuthor } from "@/interface";

const Feed = () => {
  const [posts, setPosts] = useState<IPostWithAuthor[]>([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const user = useCurrentUser(true);

  useGetData("/photo-zone/post", setPosts, true);

  return (
    <div className="mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
      <Story recentStory={posts.slice(0, 15)} />

      <CreatePost show={showCreateModal} setShow={setShowCreateModal} />

      <WhatsOnYourMind />
      {posts &&
        user &&
        posts.map((post, idx) => (
          <Post key={idx} data={post} userId={user.id} />
        ))}
    </div>
  );
};

export default Feed;
