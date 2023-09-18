"use client";

import {
  FAQ,
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
    <FAQ />
  </main>
);
export default Home;
