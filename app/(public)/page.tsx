"use client";

import {
  About,
  FAQ,
  Hero,
  OurServices,
  PopularCourses,
  UpComingEvents,
} from "@/components/Home";

const Home = () => {
  // const { data: session } = useSession();

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
