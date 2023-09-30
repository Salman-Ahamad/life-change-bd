"use client";

import {
  About,
  FAQ,
  Hero,
  OurServices,
  PopularCourses,
  UpComingEvents,
} from "@/components/Home";
import { useSession } from "next-auth/react";

const Home = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <>
      <Hero />
      <About />
      <PopularCourses />
      <OurServices />
      <UpComingEvents />
      <FAQ />
    </>
  );
};

export default Home;
