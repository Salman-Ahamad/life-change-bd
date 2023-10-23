"use client";

import { Header } from "@/components";

import { ChangeMeetingLink } from "@/components/SubAdmin/ChangeMeetingLink";
import { useCurrentUser } from "@/hooks";
import { INavItem } from "@/interface";
import { Container, Title } from "@/universal";
import { AiOutlineHome } from "react-icons/ai";

const navData: INavItem[] = [
  {
    label: <AiOutlineHome className="text-2xl" />,
    link: "/subadmin",
  },
  {
    label: "Profile",
    link: "/subadmin/profile",
  },
  {
    label: "Photo Zone",
    link: "/photo-zone",
  },
];

const SubAdmin = () => {
  const user = useCurrentUser(true);

  return (
    <main>
      <Header navData={navData} />

      <div className="max-w-lg w-full mx-auto py-6 flex flex-col justify-center">
        <Title variant="H3">Welcome to Life Change Bd</Title>
      </div>
      <Container className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10 w-full py-12 px-6 mx-auto">
        {user?.settings?.course && (
          <ChangeMeetingLink courseSlug={user?.settings?.course} />
        )}
      </Container>
    </main>
  );
};

export default SubAdmin;
