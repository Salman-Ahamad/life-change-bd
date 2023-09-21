"use client";

import { globe, group, helping } from "@/lib/assets";
import { Container, LinkImage, Title } from "@/universal";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const Support: FC = () => (
  <section className="rounded-[40px] bg-primary min-h-[700px] my-12 py-14 relative z-10">
    <Container className="max-w-5xl mx-auto text-white text-2xl font-bold">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-10 lg:gap-20 border-b justify-items-center">
        <Image
          src={group}
          className="w-40 h-40 md:w-72 md:h-72 col-span-2 lg:col-span-1"
          alt="Consultation Support Group"
        />
        <div className="col-span-2">
          <div className="">
            <Title
              variant="H4"
              className="capitalize text-center lg:text-start"
            >
              For Consultation Support Group
            </Title>
            <LinkImage
              href="/"
              src={globe}
              className="w-20 h-20 my-5 mx-auto md:mx-0"
              alt="For Consultation Support Group"
            />
          </div>

          <div className="pt-5 border-t w-fit">
            <Title
              variant="H4"
              className="capitalize text-center lg:text-start"
            >
              My Business UnionTrainer, GL, SGL
            </Title>
            <LinkImage
              href="/"
              src={globe}
              className="w-20 h-20 my-5 mx-auto md:mx-0"
              alt="For Consultation Support Group"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-10 lg:gap-20 mt-5">
        <Image
          src={helping}
          className="w-40 h-40 md:w-72 md:h-72 col-span-2 lg:col-span-1"
          alt=""
        />
        <div className="col-span-2">
          <Link href="/">Consultation Support</Link>
        </div>
      </div>
    </Container>
  </section>
);
