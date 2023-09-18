import React, { FC } from "react";

interface ItemType {
  item: { title: string; thumbnail: string; fees: string; href: string };
}

export const ImageCard: FC<ItemType> = ({ item }) => {
  return (
    <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm">
      <a href={item.href}>
        <img
          src={item.thumbnail}
          loading="lazy"
          alt={item.title}
          className="w-full h-48 rounded-t-md"
        />
        <div className="flex items-center justify-center py-3 mx-2">
          <div className="ml-3 text-center">
            <span className="block text-gray-900">{item.title}</span>
            <span className="block text-gray-400 text-sm">{item.fees}</span>
          </div>
        </div>
      </a>
    </article>
  );
};
