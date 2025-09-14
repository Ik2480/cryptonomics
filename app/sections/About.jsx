"use client";

import Link from "next/link";
import { FaDiscord, FaTelegramPlane, FaTwitter, FaLock } from "react-icons/fa";
import { SiLedgerwallet } from "react-icons/si";
import { GiRocketThruster, GiShield } from "react-icons/gi";
import { HiUsers, HiStar } from "react-icons/hi";

export default function Mission() {
  const features = [
    {
      icon: GiShield,
      title: "Security & Privacy",
      desc: "We put safety first with secure wallets, hardware keys, VPNs, and blockchain best practices.",
      url: "https://shop.ledger.com/?r=b75fe59b938a", // Ledger link
      platform: "Ledger",
    },
    {
      icon: GiRocketThruster,
      title: "Innovation & Impact",
      desc: "From education rewards to gaming on blockchain, we connect fun with real-world financial tools.",
      url: "#innovation",
      platform: "Learn More",
    },
    {
      icon: HiUsers,
      title: "Community & Games",
      desc: "Learn, earn, and play—our hub brings people together with blockchain-powered incentives.",
      url: "https://discord.gg/d6SzpnDy", // Discord
      platform: "Discord",
    },
    {
      icon: HiStar,
      title: "Engagement & Rewards",
      desc: "Join our Telegram & Twitter communities for latest updates and exclusive $BOOZ rewards.",
      url: "https://t.me/cryptonomics1O1", // Telegram
      platform: "Telegram",
    },
  ];

  return (
    <section id="mission" className="w-full py-16 lg:py-24 bg-[var(--color-bg)] text-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Heading & Description */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4 text-cyan-400">
            Our Mission
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            CryptoNomics101 is more than a community fund—it’s a movement to democratize blockchain. 
            We’re building interconnected payments and business tools, culminating in the fun and rewards of the dominoes-chess gaming mission. 
            Anchored in the Blockchain of Oz and powered by $BOOZ with the Algorand Number Generator, our ecosystem is designed for fairness, scalability, and playful engagement.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="bg-[var(--color-card)] p-6 rounded-xl shadow-lg flex flex-col items-start gap-4 hover:shadow-cyan-400/30 transition"
              >
                <Icon className="w-10 h-10 text-cyan-400" />
                <h3 className="text-xl font-semibold">{f.title}</h3>
                <p className="text-gray-300 text-sm">{f.desc}</p>
                <Link
                  href={f.url}
                  target="_blank"
                  className="mt-auto inline-flex items-center gap-2 text-cyan-400 font-medium hover:underline"
                >
                  {f.platform}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
