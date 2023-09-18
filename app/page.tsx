"use client";

import {
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
    <PopularCourses />
    <OurServices />
    <UpcommingEvents />
  </main>
);
export default Home;
