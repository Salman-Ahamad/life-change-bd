"use client";

import { useState } from "react";
import Story from "./Story";
import WhatsOnYourMind from "./WhatsOnYourMind";
import { CreatePost } from "@/components";
import Post from "./Post";
import { useGetData } from "@/hooks";
import { IPostSchema } from "@/interface";

const Feed = () => {
  const [posts, setPosts] = useState<IPostSchema[]>([]);
  const [showCreateModal, setShowCreateModal] = useState(false);

  useGetData("/photo-zone/post", setPosts);

  return (
    <div className="mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
      <Story recentStory={posts} />
      {/* <Button
        variant="secondary"
        onClick={() => setShowCreateModal(!showCreateModal)}
      >
        Create New
      </Button> */}
      <CreatePost show={showCreateModal} setShow={setShowCreateModal} />
      <WhatsOnYourMind />
      {posts && posts.map((post, idx) => <Post key={idx} data={post} />)}
    </div>
  );
};

export default Feed;
