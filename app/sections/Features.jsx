"use client";

import { FaBookOpen, FaRocket, FaCreditCard, FaGamepad } from "react-icons/fa";

export default function Features() {
  const features = [
    {
      icon: <FaBookOpen className="text-primary text-4xl" />,
      title: "Education Rewards",
      desc: "Learn blockchain concepts and earn rewards for completing modules.",
    },
    {
      icon: <FaRocket className="text-primary text-4xl" />,
      title: "Token Launches",
      desc: "Stay informed about the latest token launches and market opportunities.",
    },
    {
      icon: <FaCreditCard className="text-primary text-4xl" />,
      title: "Payment Solutions",
      desc: "Explore real-world crypto payment solutions for everyday transactions.",
    },
    {
      icon: <FaGamepad className="text-primary text-4xl" />,
      title: "Blockchain Games",
      desc: "Discover play-to-earn games and immersive blockchain-based experiences.",
    },
  ];

  return (
    <section id="features" className="w-full py-16 lg:py-24 bg-neutral-900">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12">
          Platform <span className="text-primary">Features</span>
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-neutral-800 p-6 rounded-xl shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
