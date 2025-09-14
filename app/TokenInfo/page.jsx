"use client";

import Navbar from "./components/NavBar";
import Dashboard from "./components/Dashboard";
import HowToBuy from "./components/HowToBuy";
import BridgeGuide from "./components/BridgeGuide";

export default function TokenPage() {
  return (
    <section className="w-full min-h-screen flex flex-col bg-[#0D1117] text-[#E6E6E6] py-4">
      {/* Navbar */}
      <Navbar />

      {/* Main Dashboard */}
      <div className="px-4 md:px-6">
        <Dashboard />
      </div>

      {/* HowToBuy Section */}
      <div className="px-4 md:px-6 mt-8">
        <HowToBuy />
      </div>

      {/* Bridge Guide Section */}
      <div className="px-4 md:px-6 mt-8">
        <BridgeGuide />
      </div>
    </section>
  );
}
