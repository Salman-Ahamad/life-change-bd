"use client";

import { Footer, Header } from "@/components";
import {
  About,
  FAQ,
  Hero,
  OurServices,
  PopularCourses,
  UpComingEvents,
} from "@/components/Home";
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
