
import React from 'react';
import TableOfContents from "../components/TableOfContents";
import { Hero } from "../components/sections/Hero";
import { TechStack } from "../components/sections/TechStack";
import { Education } from "../components/sections/Education";
import { WorkExperience } from "../components/sections/WorkExperience";
import { Projects } from "../components/sections/Projects";
import { Talks } from "../components/sections/Talks";

// Updated pastel gradient background inspired by Taylor Swift's Lover album cover (soft warm pinks, lilacs, and blues)
const BG_GRADIENT =
  "bg-[linear-gradient(135deg,_#ff9a9e_0%,_#fad0c4_50%,_#fad0c4_70%,_#fbc2eb_85%,_#a18cd1_100%)]";

const Index = () => {
  return (
    <div
      className={`min-h-screen flex flex-col ${BG_GRADIENT} relative overflow-x-hidden pb-32 transition-all`}
      style={{
        backgroundAttachment: "fixed"
      }}
    >
      <Hero />
      <TechStack />
      <Education />
      <WorkExperience />
      <Projects />
      <Talks />
      <TableOfContents />
    </div>
  );
};

export default Index;
