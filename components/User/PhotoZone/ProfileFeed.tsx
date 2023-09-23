"use client";

import React, { useEffect, useState } from "react";
import WhatsOnYourMind from "./WhatsOnYourMind";
import Post from "./Post";

const ProfileFeed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {}, []);

  return (
    <div className="mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
      <WhatsOnYourMind />
      {posts.map((post) => {
        return <Post key={post.id} id={post.id} data={post.data()} />;
      })}
    </div>
  );
};

export default ProfileFeed;
