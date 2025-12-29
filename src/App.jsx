"use client";

import useLenis from "./utils/Lenis";
import HeroSection from "./components/HeroSection";
import Works from "./components/Works";
import OurLife from "./components/OurLife";
import MajorServices from "./components/MajorServices";
import KeyClients from "./components/KeyClients";

const App = () => {
  useLenis();

  return (
    <main className="w-full relative">
    <HeroSection />
    <Works/>
    <OurLife/>
    <MajorServices/>
    <KeyClients/>

    <div className="w-full h-screen"></div>
    </main>
  );
};

export default App;
