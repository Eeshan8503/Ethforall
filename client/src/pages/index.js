import { Inter } from "@next/font/google";
import { useState, useEffect } from "react";
import PageHead from "./PageHead";
import Navbar from "./Navbar";
import ConnectMetamasButton from "./ConnectMetamasButton";
import AboutSection from "./AboutSection";
import PreferenceSection from "./PreferenceSection";
import loggedIn from "./loggedIn";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isMetamaskConnected, setIsMetamaskConnected] = useState(false);

  useEffect(() => {
    if (window.ethereum && window.ethereum.selectedAddress) {
      setIsMetamaskConnected(true);
    }
  }, []);

  const handleConnectMetamask = () => {
    setIsConnected(true);
  };

  const handleFormSubmit = () => {
    setIsSubmitted(true);
  };
  return (
    <>
      <PageHead />
      <Navbar />
      <ConnectMetamasButton />
      <AboutSection />
      <PreferenceSection />
      {isMetamaskConnected && <loggedIn />}
    </>
  );
}
