import { useState } from "react";
import { Inter } from "@next/font/google";
import PreferenceSection from "./PreferenceSection";
import ConnectMetamasButton from "./ConnectMetamasButton";
import PageHead from "./PageHead";
import AboutSection from "./AboutSection";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <PageHead />
      <Navbar />
      <AboutSection />
      <PreferenceSection />
      <ConnectMetamasButton />
    </>
  );
}
