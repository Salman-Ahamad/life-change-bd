"use client";

import { IImageCard } from "@/interface";
import { Button } from "@/universal";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const ImageCard: FC<IImageCard> = ({
  fees,
  href,
  thumbnail,
  title,
  cardWidth = "3/1",
}) => (
  <article
    className={`w-full h-64 mx-auto mt-4 shadow-lg rounded-md duration-300 hover:shadow-sm overflow-hidden relative ${
      (cardWidth === "3/1" && "max-w-sm") ||
      (cardWidth === "2/1" && "max-w-xl") ||
      (cardWidth === "1" && "max-w-full")
    }`}
  >
    <Link href={href}>
      <Image
        src={thumbnail}
        loading="lazy"
        alt={title}
        className="w-full h-full rounded-t-md"
      />
      <div className="absolute bottom-0 w-full group transition-all transform">
        <div className="flex flex-col items-center justify-center gap-1.5 py-3 px-2 bg-primary bg-opacity-95 text-center transition-all duration-400 ease-in-out transform translate-y-0 h-20 hover:h-32">
          <h3 className="text-gray-50 text-2xl">{title}</h3>
          <Button variant="secondary" className="hidden group-hover:flex">
            {fees}
          </Button>
        </div>
      </div>
    </Link>
  </article>
);
