"use client";

import { group, helping } from "@/lib/assets";
import { MainContainer } from "@/universal";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

export const Support: FC = () => {
  return (
    <MainContainer bgColor="black">
      <div className="rounded-3xl bg-sky-600 min-h-[700px] max-w-3xl mx-auto text-white text-2xl font-bold">
        <div className="border-b px-24 pt-3 pb-5 flex items-center gap-24">
          <div>
            <Image src={group} className="w-40 h-40 lg:w-72 lg:h-72" alt="" />
          </div>
          <div>
            <Link href="/" className="border-b">
              For counselling Support group
            </Link>
            <hr />
            <Link href="/">My Business UnionTrainer, TL, STL</Link>
          </div>
        </div>

        <div>
          <div>
            <Image src={helping} className="w-40 h-40 lg:w-72 lg:h-72" alt="" />
          </div>
          <div>
            <Link href="/">counselling support</Link>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};
