"use client";

import {
  About,
  FAQ,
  Hero,
  OurServices,
  PopularCourses,
  UpComingEvents,
} from "@/components/Home";
import { Footer, Header } from "@/components";
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
