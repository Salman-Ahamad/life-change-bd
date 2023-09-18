"use client";

import {
  About,
  Hero,
  OurServices,
  PopularCourses,
  UpComingEvents,
} from "@/components/Home";
import { Header } from "@/components/common/Header";
import { commonNavItems } from "@/public/data";

const Home = () => (
  <main>
    <Header navData={commonNavItems} />
    <Hero />
    <About />
    <PopularCourses />
    <OurServices />
    <UpComingEvents />
  </main>
);
export default Home;
