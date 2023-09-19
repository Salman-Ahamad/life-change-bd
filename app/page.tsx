"use client";

import { Footer } from "@/components";
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
    <Footer />
  </main>
);
export default Home;
