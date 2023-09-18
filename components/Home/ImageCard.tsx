import { ICard } from "@/interface";
import Image from "next/image";
import { FC } from "react";

export const ImageCard: FC<ICard> = ({ fees, href, thumbnail, title }) => (
  <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm">
    <a href={href}>
      <Image
        src={thumbnail}
        loading="lazy"
        alt={title}
        className="w-full h-48 rounded-t-md"
      />
      <div className="flex items-center justify-center py-3 mx-2">
        <div className="ml-3 text-center">
          <span className="block text-gray-900">{title}</span>
          <span className="block text-gray-400 text-sm">{fees}</span>
        </div>
      </div>
    </a>
  </article>
);
