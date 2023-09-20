"use client";

import { globe, group, helping } from "@/lib/assets";
import { MainContainer } from "@/universal";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

export const Support: FC = () => {
  return (
    <section className="rounded-3xl bg-sky-600 min-h-[700px]">
      <div className="max-w-5xl mx-auto text-white text-2xl font-bold px-4">
        <div className="px-3 md:px-5 lg:px-24 py-5 md:pt-5 md:pb-10 flex flex-col sm:flex-row items-center gap-0 md:gap-10 lg:gap-24">
          <Image
            src={group}
            className="w-40 h-40 lg:w-72 lg:h-72"
            alt="Consultation Support Group"
          />
          <div className="">
            <div className="pb-10 text-center">
              <p className="pt-5 mb-4 text-center">
                For Consultation Support Group
              </p>
              <Link href="/" className="border-b">
                <Image
                  src={globe}
                  className="w-20 h-20"
                  alt="For Consultation Support Group"
                />
              </Link>
            </div>
            <hr />
            <div className="pt-5">
              <p className="pt-5 mb-4 text-center">
                My Business UnionTrainer, GL, SGL
              </p>
              <Link href="/">
                <Image
                  src={globe}
                  className="w-20 h-20"
                  alt="For Consultation Support Group"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-b px-0 md:px-5 lg:px-24 py-5 md:pt-5 md:pb-10 flex flex-col sm:flex-row items-center gap-0 md:gap-10 lg:gap-24">
          <div>
            <Image src={helping} className="w-40 h-40 lg:w-72 lg:h-72" alt="" />
          </div>
          <div>
            <Link href="/">Consultation Support</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
