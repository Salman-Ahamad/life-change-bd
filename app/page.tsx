"use client";

import {
  About,
  Header,
  Hero,
  OurServices,
  PopularCourses,
  UpcommingEvents,
} from "@/components/Home";

const Home = () => (
  <main>
    <Header />
    <Hero />
    <About />
    <PopularCourses />
    <OurServices />
    <UpcommingEvents />
  </main>
);
export default Home;
