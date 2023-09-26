import Image from "next/image";

import { FC } from "react";

export interface IAvatar {
  type: "inline" | "small" | "large";
}

export const Avatar: FC<IAvatar> = ({ type }) => {
  switch (type) {
    case "inline":
      return (
        <Image
          src="/avatar.jpeg"
          width={24}
          height={24}
          className="w-6 h-6 rounded-full p-0.5 border"
          alt=""
        />
      );
    case "small":
      return (
        <Image
          src="/avatar.jpeg"
          width={48}
          height={48}
          className="w-12 h-12 rounded-full p-1 border"
          alt=""
        />
      );
    case "large":
      return (
        <Image
          src="/avatar.jpeg"
          width={80}
          height={80}
          className="w-20 h-20 rounded-full p-2 border"
          alt=""
        />
      );

    default:
      break;
  }
};

export const AvatarInline = () => (
  <Image
    src="/avatar.jpeg"
    width={24}
    height={24}
    className="w-6 h-6 rounded-full p-0.5 border"
    alt=""
  />
);

export const AvatarSmall = () => (
  <Image
    src="/avatar.jpeg"
    width={48}
    height={48}
    className="w-12 h-12 rounded-full p-1 border"
    alt=""
  />
);

export const AvatarLarge = () => (
  <Image
    src="/avatar.jpeg"
    width={80}
    height={80}
    className="w-20 h-20 rounded-full p-2 border"
    alt=""
  />
);
