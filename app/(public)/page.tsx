"use client";

import {
  About,
  FAQ,
  Hero,
  OurServices,
  PopularCourses,
  UpComingEvents,
} from "@/components/Home";

const Home = () => (
  <main>
    <Hero />
    <About />
    <PopularCourses />
    <OurServices />
    <UpComingEvents />
    <FAQ />
  </main>
);

export default Home;
