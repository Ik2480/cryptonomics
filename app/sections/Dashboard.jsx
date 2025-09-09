"use client";
import { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Sector,
  Legend,
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";

// Theme palette (Hero-aligned)
const THEME = {
  navbar: "bg-slate-950/70",
  balance: "from-primary to-secondary",
  rewards: "from-primary to-secondary",
  tokenomics: "from-primary to-secondary",
  buttonPrimary:
    "px-3 py-1 rounded-lg bg-primary text-white hover:bg-primary/80 transition-colors",
  buttonSecondary:
    "px-3 py-1 rounded-lg border border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors",
  chartColors: [
    "#3b82f6", // primary blue
    "#ec4899", // secondary pink
    "#10b981", // emerald
    "#f59e0b", // amber
    "#8b5cf6", // violet
  ],
};

function useCountUp(value, duration = 800) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    let start = displayValue;
    let end = value;
    let startTime;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const current = Math.floor(start + (end - start) * progress);
      setDisplayValue(current);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [value]);

  return displayValue;
}

// Glass tooltip
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="backdrop-blur-md bg-slate-900/70 border border-white/20 text-white px-3 py-2 rounded-lg shadow-lg">
        <p className="text-sm font-semibold">{payload[0].name}</p>
        <p className="text-xs">{payload[0].value.toLocaleString()} tokens</p>
      </div>
    );
  }
  return null;
};

// Navbar
function DashboardNavbar() {
  return (
    <header
      className={`sticky top-0 z-40 ${THEME.navbar} backdrop-blur-md flex items-center justify-between px-6 py-4 shadow-md`}
    >
      <a href="/" className="flex items-center gap-2">
        <img
          src="/cryptonomicsLogo.webp"
          alt="Cryptonomics101 Logo"
          width={40}
          height={30}
          className="rounded-lg"
        />
        <span className="text-white font-semibold">Cryptonomics101</span>
      </a>
      <a href="/" className={THEME.buttonPrimary}>
        Back to Home
      </a>
    </header>
  );
}

export default function Dashboard() {
  const [boozBalance, setBoozBalance] = useState(1200);
  const animatedBalance = useCountUp(boozBalance);

  const [tokenomics, setTokenomics] = useState([
    { name: "Circulating Supply", value: 500000 },
    { name: "Burned Tokens", value: 200000 },
    { name: "Staking Pool", value: 300000 },
    { name: "Treasury", value: 150000 },
    { name: "Community Fund", value: 100000 },
  ]);

  const [rewards] = useState([
    { name: "Airdrop #1" },
    { name: "Entry Ticket" },
    { name: "Special Reward" },
    { name: "VIP Pass" },
    { name: "Exclusive Drop" },
  ]);

  const [showAllRewards, setShowAllRewards] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setBoozBalance((prev) => prev + Math.floor(Math.random() * 100));
      setTokenomics((prev) =>
        prev.map((item) => ({
          ...item,
          value: item.value + Math.floor(Math.random() * 5000 - 2500),
        }))
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col bg-gradient-to-br from-slate-950 to-slate-900">
      <DashboardNavbar />

      <main className="flex-1 overflow-y-auto px-6 py-8 grid md:grid-cols-3 gap-8">
        {/* Left Side */}
        <div className="flex flex-col gap-6 md:col-span-1">
          {/* Booz Balance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`p-6 rounded-2xl shadow-lg text-center bg-gradient-to-r ${THEME.balance} border border-white/20`}
          >
            <h2 className="text-xl font-semibold mb-2 text-white">
              Booz Balance
            </h2>
            <p className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {animatedBalance}
            </p>
          </motion.div>

          {/* Rewards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className={`p-6 rounded-2xl shadow-lg bg-gradient-to-r ${THEME.rewards} border border-white/20`}
          >
            <h2 className="text-xl font-semibold mb-4 text-center text-white">
              Rewards
            </h2>

            <ul className="space-y-2">
              {rewards.slice(0, 2).map((reward, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center p-3 rounded-lg bg-white/10 text-white"
                >
                  <span>{reward.name}</span>
                  <button className={THEME.buttonPrimary}>Claim</button>
                </li>
              ))}

              <AnimatePresence>
                {showAllRewards &&
                  rewards.slice(2).map((reward, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex justify-between items-center p-3 rounded-lg bg-white/10 text-white overflow-hidden"
                    >
                      <span>{reward.name}</span>
                      <button className={THEME.buttonPrimary}>Claim</button>
                    </motion.li>
                  ))}
              </AnimatePresence>
            </ul>

            {rewards.length > 2 && (
              <button
                onClick={() => setShowAllRewards(!showAllRewards)}
                className="mt-3 w-full text-sm text-white/80 hover:text-white underline"
              >
                {showAllRewards ? "Show Less" : "Show More"}
              </button>
            )}
          </motion.div>
        </div>

        {/* Right Side: Tokenomics */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className={`p-6 rounded-2xl shadow-lg md:col-span-2 bg-gradient-to-r ${THEME.tokenomics} border border-white/20`}
        >
          <h2 className="text-xl font-semibold mb-4 text-center text-white">
            Tokenomics
          </h2>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={tokenomics}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="45%"
                outerRadius={120}
                label
                isAnimationActive={true}
                activeIndex={activeIndex ?? undefined}
                activeShape={(props) => {
                  const RADIAN = Math.PI / 180;
                  const {
                    cx,
                    cy,
                    midAngle,
                    innerRadius,
                    outerRadius,
                    startAngle,
                    endAngle,
                    fill,
                    payload,
                    percent,
                    value,
                  } = props;
                  const sin = Math.sin(-RADIAN * midAngle);
                  const cos = Math.cos(-RADIAN * midAngle);
                  const sx = cx + (outerRadius + 10) * cos;
                  const sy = cy + (outerRadius + 10) * sin;
                  const mx = cx + (outerRadius + 30) * cos;
                  const my = cy + (outerRadius + 30) * sin;
                  return (
                    <g>
                      <text
                        x={cx}
                        y={cy}
                        dy={8}
                        textAnchor="middle"
                        fill="#fff"
                      >
                        {payload.name}
                      </text>
                      <Sector
                        cx={cx}
                        cy={cy}
                        innerRadius={innerRadius}
                        outerRadius={outerRadius + 10}
                        startAngle={startAngle}
                        endAngle={endAngle}
                        fill={fill}
                      />
                      <path
                        d={`M${sx},${sy}L${mx},${my}`}
                        stroke={fill}
                        fill="none"
                      />
                      <circle cx={mx} cy={my} r={2} fill={fill} stroke="none" />
                      <text x={mx + 10} y={my} fill="#fff">
                        {`${value.toLocaleString()} (${(percent * 100).toFixed(
                          0
                        )}%)`}
                      </text>
                    </g>
                  );
                }}
                onMouseEnter={(_, index) => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                {tokenomics.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={THEME.chartColors[index % THEME.chartColors.length]}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend
                verticalAlign="bottom"
                height={40}
                formatter={(value) => (
                  <span style={{ color: "white", fontSize: "0.9rem" }}>
                    {value}
                  </span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </main>

      <footer className="py-4 px-6 text-center text-gray-400 text-sm mt-6">
        <a
          href="/whitepaper.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="underline mb-2 block"
        >
          View Whitepaper
        </a>
        <p className="text-xs">
          Disclaimer: This dashboard is for informational purposes only.
        </p>
      </footer>
    </section>
  );
}
