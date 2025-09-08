"use client";

// Inline SVG icons to replace react-icons/fa
const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-primary">
    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6l-3.254-1.928a.75.75 0 00-.722.254l-.414.622a.75.75 0 00.254.722l3.42 2.025a.75.75 0 00.9-.091l4.085-4.549a.75.75 0 00-.912-1.224L12.75 12V6z" clipRule="evenodd" />
  </svg>
);

const RocketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-primary">
    <path d="M11.516 2.016a.75.75 0 01.968 0L14.28 3.75l2.455 1.416A3.75 3.75 0 0118.75 9.25v2.296a1.125 1.125 0 01-.659 1.052l-5.413 2.658a1.125 1.125 0 00-.824 0l-5.413-2.658a1.125 1.125 0 01-.659-1.052V9.25a3.75 3.75 0 011.015-2.584L9.72 3.75l1.795-1.734z" />
    <path fillRule="evenodd" d="M12 7.749l3.42-1.688a.75.75 0 01.815.116.75.75 0 01-.116.815L13.5 9.25v6.5a.75.75 0 01-1.5 0V9.25l-3.58 1.762a.75.75 0 01-.815-.116.75.75 0 01.116-.815L12 7.75z" clipRule="evenodd" />
  </svg>
);

const UsersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-primary">
    <path d="M7 6a7 7 0 00-7 7v1a1 1 0 001 1h1a1 1 0 001-1v-1a4 4 0 014-4h.236a1 1 0 00.912-.596l1.455-2.887A2.99 2.99 0 0012 3a2.99 2.99 0 00-2.617 1.487l1.455 2.887A1 1 0 0012 7h.236a4 4 0 014 4v1a1 1 0 001 1h1a1 1 0 001-1v-1a7 7 0 00-7-7zm8 14h2a1 1 0 001-1v-1a2 2 0 00-2-2h-2zm-6 0h2v-2a2 2 0 00-2-2H9a2 2 0 00-2 2v1a1 1 0 001 1zm-4 0h2a1 1 0 001-1v-1a2 2 0 00-2-2H5a2 2 0 00-2 2v1a1 1 0 001 1z" />
  </svg>
);

export default function About() {
  const features = [
    {
      icon: <ShieldIcon />,
      title: "Security & Privacy",
      desc: "Get started with secure wallets, hardware wallets, and two-factor authentication (2FA).",
    },
    {
      icon: <RocketIcon />,
      title: "Innovation & Impact",
      desc: "We're blending innovation with real-world impact through our projects.",
    },
    {
      icon: <UsersIcon />,
      title: "Community & Games",
      desc: "Learn with a blockchain education reward system and play games like chess.",
    },
  ];

  return (
    <section id="about" className="w-full py-16 lg:py-24 bg-neutral">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            About <span className="text-primary">Cryptonomics101</span>
          </h2>

          <p className="text-gray-300 leading-relaxed mb-8">
            Cryptonomics 101 is a community fund evolving into a powerful ecosystem. Welcome to your hub for the future of crypto. Join us to shape the future!
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <ShieldIcon className="text-primary text-2xl mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white">Security & Privacy</h3>
                <p className="mt-2 text-gray-300 leading-relaxed">
                  Security and privacy lead the way. Get started with a secure wallet, use hardware wallets and two-factor authentication (2FA), a VPN, and explore terms like DeFi and private keys to stay safe.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <RocketIcon className="text-primary text-2xl mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white">Our Projects</h3>
                <p className="mt-2 text-gray-300 leading-relaxed">
                  We’re blending innovation with real-world impact through four exciting projects: a blockchain education reward system to empower learners, token launches for content creators, payment systems for businesses, and blockchain-based board games like dominoes and chess.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-neutral-800 p-6 rounded-xl shadow-md hover:scale-105 transform transition-transform duration-300"
            >
              {feature.icon}
              <h3 className="mt-4 text-xl font-semibold text-white">
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
