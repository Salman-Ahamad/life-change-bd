import { facebook, pinterest, twitter } from "@/lib/assets";
import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-sky-500 py-16 text-white">
      <h3 className="py-5 mb-10 text-2xl md:text-5xl font-bold text-center">
        Follow our CEO
      </h3>
      <div className="flex justify-center items-center gap-5">
        {[facebook, twitter, pinterest].map((icon, i) => (
          <Image key={i} src={icon} className="w-8 h-8" alt="" />
        ))}
      </div>
    </footer>
  );
};
