"use client";

import Navbar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import HowToBuy from "./components/HowToBuy";
import BridgeGuide from "./components/BridgeGuide";

export default function TokenPage() {
  return (
    <section className="w-full min-h-screen flex flex-col bg-gradient-to-b from-[#081834] to-[#0B132B]">
      <Navbar />

      <Dashboard />
      <HowToBuy />
      <BridgeGuide />
    </section>
  );
}
