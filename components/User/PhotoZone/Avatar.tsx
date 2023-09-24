import Image from "next/image";
import React from "react";

export const AvatarInline = () => {
  return (
    <Image
      src="/avatar.jpeg"
      width={24}
      height={24}
      className="w-6 h-6 rounded-full p-0.5 border"
      alt=""
    />
  );
};

export const AvatarSmall = () => {
  return (
    <Image
      src="/avatar.jpeg"
      width={48}
      height={48}
      className="w-12 h-12 rounded-full p-1 border"
      alt=""
    />
  );
};

export const AvatarLarge = () => {
  return (
    <Image
      src="/avatar.jpeg"
      width={80}
      height={80}
      className="w-20 h-20 rounded-full p-2 border"
      alt=""
    />
  );
};
