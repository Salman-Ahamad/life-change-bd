"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { Title } from "@/universal";

const ProfileDetails = () => {
  const { data: session } = useSession();

  useEffect(() => {}, []);

  return (
    <div className="px-4 bg-white rounded-[17px] shadow-md mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
      <div className="flex items-center justify-center py-2 cursor-pointer hover:bg-gray-300">
        <Image
          src={session?.user?.image}
          width={140}
          height={140}
          alt={session?.user?.name}
          className="rounded-full  border-2 p-2"
        />
      </div>
      <Title variant="H4" className="py-6">
        {session?.user?.name}
      </Title>
    </div>
  );
};

export default ProfileDetails;
