"use client";

import {
  About,
  FAQ,
  Hero,
  OurServices,
  PopularCourses,
  UpComingEvents,
} from "@/components/Home";
import { Header } from "@/components/common/Header";
import { commonNavItems } from "@/lib/data";

const Home = () => (
  <main>
    <Header navData={commonNavItems} />
    <Hero />
    <About />
    <PopularCourses />
    <OurServices />
    <UpComingEvents />
    <FAQ />
  </main>
);
export default Home;
