"use client";

import Image from "next/image";
import { FC } from "react";

import { bnsLogo } from "@/lib/assets";
import { footerItems } from "@/lib/data";
import {
  Button,
  CommonText,
  LinkButton,
  MainContainer,
  Title,
} from "@/universal";
import { AppDownload } from ".";
import Link from "next/link";

export const Footer: FC = () => (
  <footer>
    <MainContainer bgColor="black" className="text-white py-20">
      <section className="flex flex-col md:flex-row justify-center md:justify-between items-start gap-10 md:gap-40 px-5 2xl:px-0">
        <div className="flex flex-col justify-start items-start gap-5">
          <Image src={bnsLogo} width={300} height={150} alt="life change bd" />

          <CommonText className="text-white max-w-sm">
            The automated process starts as soon as your clothes go into the
            machine.
          </CommonText>

          <div className="flex justify-center items-center gap-2.5">
            {footerItems.socialIcons.map((item, i) => (
              <Link key={i} href={item.href}>
                <Image src={item.icon} className="w-10" alt={item.href} />
              </Link>
            ))}
          </div>

          <AppDownload />
        </div>
        <div className="flex flex-col justify-center items-start gap-5">
          <Title variant="H5" className="text-start">
            {footerItems.title}
          </Title>

          {footerItems.policy.map((item, i) => (
            <CommonText key={i} className="text-white max-w-[200px]">
              <Link href={item.href}>{item.title}</Link>
            </CommonText>
          ))}

          <div className="flex flex-col gap-5 mt-5">
            <LinkButton
              href="/admin-login"
              className="px-3 py-1.5 bg-accent hover:bg-primary rounded"
            >
              Admin Login
            </LinkButton>
            <LinkButton
              href="/sub-admin-login"
              className="px-3 py-1.5 bg-accent hover:bg-primary rounded"
            >
              SubAdmin Login
            </LinkButton>
          </div>
        </div>
      </section>
      <section className="mt-10">
        {footerItems.option.map(({ title, text, copyright }, i) =>
          !copyright ? (
            <div
              key={i}
              className="flex flex-col justify-center items-center py-5 border-t border-gray-800"
            >
              <Title variant="H5">{title}</Title>
              <CommonText className="text-white text-center text-lg lg:text-2xl mt-2">
                {text}
              </CommonText>
            </div>
          ) : (
            <CommonText
              key={i}
              className="text-white text-center pt-5 border-t border-gray-800"
            >
              {copyright}
            </CommonText>
          )
        )}
      </section>
    </MainContainer>
  </footer>
);
