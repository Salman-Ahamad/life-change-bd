"use client";

import { useState } from "react";
import Story from "./Story";
import WhatsOnYourMind from "./WhatsOnYourMind";
import Post from "./Post";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  return (
    <div className="mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
      <Story />
      <WhatsOnYourMind />
      {posts &&
        posts.map(({ post }) => {
          return <Post key={post.id} id={post.id} data={post.data()} />;
        })}
    </div>
  );
};

export default Feed;
