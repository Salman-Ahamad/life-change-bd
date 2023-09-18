"use client";

import {
  About,
  Header,
  Hero,
  OurServices,
  PopularCourses,
  UpComingEvents,
} from "@/components/Home";

const Home = () => (
  <main>
    <Header />
    <Hero />
    <About />
    <PopularCourses />
    <OurServices />
    <UpComingEvents />
  </main>
);
export default Home;
