import { getServerSession } from "next-auth/next";
import { options } from "../api/auth/[...nextauth]/options";

import {
  About,
  FAQ,
  Hero,
  OurServices,
  PopularCourses,
  UpComingEvents,
} from "@/components/Home";
import { useSession } from "next-auth/react";

const Home = async () => {
  const session = await getServerSession(options);

  return (
    <>
      {session ? (
        <main>
          <Hero />
          <About />
          <PopularCourses />
          <OurServices />
          <UpComingEvents />
          <FAQ />
        </main>
      ) : (
        <h1> user not found</h1>
      )}
    </>
  );
};

export default Home;
