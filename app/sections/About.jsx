"use client";

// Inline SVG icons
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

export default function Mission() {
  const features = [
    {
      icon: <ShieldIcon />,
      title: "Security & Privacy",
      desc: "We put safety first with secure wallets, hardware keys, 2FA, and blockchain best practices.",
    },
    {
      icon: <RocketIcon />,
      title: "Innovation & Impact",
      desc: "From education rewards to gaming on blockchain, we connect fun with real-world financial tools.",
    },
    {
      icon: <UsersIcon />,
      title: "Community & Games",
      desc: "Learn, earn, and play—our hub brings people together with blockchain-powered incentives.",
    },
  ];

  return (
    <section id="mission" className="w-full py-16 lg:py-24 bg-neutral">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Our <span className="text-primary">Mission</span>
          </h2>

          <p className="text-gray-300 leading-relaxed mb-6">
            CryptoNomics101 is more than a community fund—it’s a movement to democratize blockchain. 
            We’re building interconnected payments and business tools, culminating in the fun and rewards of the dominoes-chess gaming mission. 
            Anchored in the Blockchain of Oz and powered by $BOOZ with the Algorand Number Generator, our ecosystem is designed for fairness, scalability, and playful engagement.
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">
            Launched organically on <span className="text-primary">August 31, 2025, at 3:41 AM</span> with no presale, 
            CryptoNomics101 delivers automated, equitable incentives across the network. 
            Together, we’re shaping a vibrant, enjoyable decentralized future.
          </p>

          <div className="space-y-6">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-4">
                {f.icon}
                <div>
                  <h3 className="text-xl font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-gray-300 leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
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
              <h3 className="mt-4 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
