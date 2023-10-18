"use client";

import { useCurrentUser } from "@/hooks";
import { Title } from "@/universal";
import Image from "next/image";

const ProfileDetails = () => {
  const user = useCurrentUser(true);

  return (
    <div className="px-4 bg-white rounded-[17px] shadow-md mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
      <div className="flex items-center justify-center py-2 cursor-pointer hover:bg-gray-300">
        <Image
          src={user?.image || ""}
          width={140}
          height={140}
          alt={user?.firstName || ""}
          className="rounded-full  border-2 p-2"
        />
      </div>
      <Title variant="H4" className="py-6">
        {user?.firstName} {user?.lastName}
      </Title>
    </div>
  );
};

export default ProfileDetails;
