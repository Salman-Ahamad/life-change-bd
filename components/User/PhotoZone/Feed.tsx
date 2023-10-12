"use client";

import { useState } from "react";
import Story from "./Story";
import WhatsOnYourMind from "./WhatsOnYourMind";
import { CreatePost } from "@/components";
import { Button } from "@/universal";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);

  return (
    <div className="mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
      <Story />
      <Button
        variant="secondary"
        onClick={() => setShowCreateModal(!showCreateModal)}
      >
        Create New
      </Button>
      <CreatePost show={showCreateModal} setShow={setShowCreateModal} />
      <WhatsOnYourMind />
      {/* {posts.map(({post}) => {
        return <Post key={post.id} id={post.id} data={post.data()} />;
      })} */}
    </div>
  );
};

export default Feed;
