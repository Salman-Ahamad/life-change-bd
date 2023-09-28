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
    <main>
      <Hero />
      <About />
      <PopularCourses />
      <OurServices />
      <UpComingEvents />
      <FAQ />
    </main>
  );
};

export default Home;
