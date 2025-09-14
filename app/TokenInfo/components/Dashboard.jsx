"use client";

import { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

import RewardSimulator from "./RewardSimulator";

const THEME = {
  buttonPrimary:
    "px-3 py-1 rounded-lg bg-[#00FFFF] text-[#0D1117] hover:bg-[#00FFFF]/80 transition-colors",
  buttonSmall:
    "px-2 py-1 rounded-md bg-[#00FFFF] text-[#0D1117] hover:bg-[#00FFFF]/80 transition-colors text-sm",
  background: "bg-[#0D1117] text-[#E6E6E6]",
  card: "bg-[#161B22] rounded-lg shadow-lg hover:shadow-[0_0_15px_#00FFFF] transition-shadow duration-300 border border-[#00FFFF]/20",
  gradientText: "text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#66B2FF]",
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
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [value]);

  return displayValue;
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

  const rewards = [
    { name: "Airdrop #1" },
    { name: "Entry Ticket" },
    { name: "Special Reward" },
    { name: "VIP Pass" },
    { name: "Exclusive Drop" },
  ];

  const tokenAddress = "6dJtPizh6meSDXUu7tFQU5RB3j45e4T28yBMGevswave";
  const COLORS = ["#00FFFF", "#66B2FF", "#0DFFAA", "#FF00AA", "#FFAA00"];
  const totalTokenomicsSupply = tokenomics.reduce((sum, item) => sum + item.value, 0);

  const copyAddress = () => {
    navigator.clipboard.writeText(tokenAddress);
    alert("Address copied to clipboard!");
  };

  const openSolscan = () => {
    window.open(`https://solscan.io/token/${tokenAddress}`, "_blank");
  };

  return (
    <main className={`flex-1 overflow-y-auto p-4 md:p-6 grid md:grid-cols-3 gap-8 ${THEME.background} font-sans`}>
      {/* Left Column */}
      <div className="flex flex-col gap-6 md:col-span-1">
        {/* Booz Balance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`w-full h-28 p-4 text-center ${THEME.card}`}
        >
          <h2 className={`text-lg font-semibold mb-1 ${THEME.gradientText}`}>
            Booz Balance
          </h2>
          <p className="text-3xl font-extrabold text-[#00FFFF]">{animatedBalance}</p>
        </motion.div>

        {/* Rewards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`p-6 flex-grow flex flex-col ${THEME.card}`}
        >
          <h2 className={`text-xl font-semibold mb-4 text-center ${THEME.gradientText}`}>
            Rewards
          </h2>

          <ul className="space-y-2 flex-grow">
            {rewards.map((reward, i) => (
              <li
                key={i}
                className="flex justify-between items-center p-3 rounded-lg bg-[#0D1117] hover:bg-[#00FFFF]/10 transition text-[#00FFFF]"
              >
                <span>{reward.name}</span>
                <button className={THEME.buttonPrimary}>Claim</button>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Right Column */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className={`flex flex-col gap-6 md:col-span-2 border border-[#00FFFF]/20 p-4 rounded-lg`}
      >
        {/* Top row - RewardSimulator aligned with Booz Balance */}
        <div className="flex flex-col md:flex-row gap-4 h-28">
          {/* RewardSimulator - height matches Booz Balance */}
          <div className="flex-1 h-full">
            <RewardSimulator />
          </div>
        </div>

        {/* Main Content: PieChart + Token Info */}
        <div className="flex gap-6 flex-col md:flex-row h-full mt-4">
          {/* Left Div - PieChart */}
          <div className="flex-1">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={tokenomics}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#00FFFF"
                  label={false} // labels removed
                >
                  {tokenomics.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  content={({ payload }) => {
                    if (payload && payload.length) {
                      const data = payload[0].payload;
                      const percentage = ((data.value / totalTokenomicsSupply) * 100).toFixed(1);
                      return (
                        <div className="p-2 rounded shadow-lg bg-[#161B22] text-white/90 border border-[#00FFFF]/20">
                          <p className="font-bold">{data.name}</p>
                          <p>{data.value.toLocaleString()} tokens</p>
                          <p>{percentage}%</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Right Div - Token Info (border removed) */}
          <div className="flex-1 p-4 rounded-lg bg-[#161B22] flex flex-col justify-between">
            <div>
              <h2 className={`text-2xl font-bold mb-4 text-center ${THEME.gradientText}`}>
                $BOOZ TOKEN INFO
              </h2>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm text-[#B0B0B0] mb-4">
                <div className="flex flex-col">
                  <span className="font-semibold text-white">Name:</span>
                  <span>BLOCKCHAIN OF OZ</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-white">Symbol:</span>
                  <span>BOOZ</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-white">Decimals:</span>
                  <span>9</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-white">Total Supply:</span>
                  <span>1,250,000</span>
                </div>
              </div>
              <div className="flex flex-col text-sm text-[#B0B0B0] mb-4">
                <span className="font-semibold text-white">Contract Address:</span>
                <span className="break-all">{tokenAddress}</span>
              </div>
            </div>
            {/* Buttons below Address */}
            <div className="flex gap-2 justify-center mt-2">
              <button className={THEME.buttonSmall} onClick={copyAddress}>Copy Address</button>
              <button className={THEME.buttonSmall} onClick={openSolscan}>Open in Solscan</button>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
