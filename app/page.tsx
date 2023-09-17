"use client";

import Nav from "@/components/Nav/Nav";
import { MainContainer } from "@/universal";

const Home = () => {
  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Customers", path: "/" },
    { title: "Careers", path: "/" },
    { title: "Guides", path: "/" },
    { title: "Partners", path: "/" },
  ];

  return (
    <MainContainer bgColor="black">
      <header className="py-4">
        <Nav />
      </header>
    </MainContainer>
  );
};

export default Home;
