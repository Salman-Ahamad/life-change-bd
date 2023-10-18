"use client";

import { footerItems } from "@/lib";
import { Title } from "@/universal";
import Image from "next/image";

export const Footer = () => (
  <footer className="bg-primary py-20 text-white">
    <Title variant="H2" className="capitalize">
      Follow our CEO
    </Title>
    <div className="flex justify-center items-center gap-5 lg:gap-10 mt-14">
      {footerItems.socialIcons.map((item, i) => (
        // <Link key={i} href={item.href}>
        //   <Image src={item.icon} className="w-10" alt={item.href} />
        // </Link>

        <a target="_blank" href={item.href} rel="noopener noreferrer" key={i}>
          <Image src={item.icon} className="w-10" alt={item.href} />
        </a>
      ))}
    </div>
  </footer>
);
