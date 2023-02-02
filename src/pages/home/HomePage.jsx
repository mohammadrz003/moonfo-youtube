import React from "react";

import MainLayout from "../../components/MainLayout";
import Articles from "./container/Articles";
import CTA from "./container/CTA";
import Hero from "./container/Hero";

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />
      <Articles />
      <CTA />
    </MainLayout>
  );
};

export default HomePage;
