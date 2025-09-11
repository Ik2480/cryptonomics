"use client";

import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion, AnimatePresence } from "framer-motion";

const THEME = {
  buttonPrimary:
    "px-3 py-1 rounded-lg bg-[#66B2FF] text-[#F5F5F5] hover:bg-[#3385FF] transition-colors",
  chartColors: ["#66B2FF", "#8CD9F2", "#3385FF", "#004D99"],
};

// CountUp Hook for smooth number animation
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

  const [rewards] = useState([
    { name: "Airdrop #1" },
    { name: "Entry Ticket" },
    { name: "Special Reward" },
    { name: "VIP Pass" },
    { name: "Exclusive Drop" },
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

  const totalTokenomicsSupply = tokenomics.reduce((sum, item) => sum + item.value, 0);

  return (
    <main className="flex-1 overflow-y-auto p-4 md:p-6 grid md:grid-cols-3 gap-8 text-white font-sans">
      {/* Left Column */}
      <div className="flex flex-col gap-6 md:col-span-1">
        {/* Booz Balance */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full h-28 p-4 rounded-2xl shadow-lg text-center bg-gradient-to-br from-[#1F2A45] to-[#24325E] border border-white/20"
        >
          <h2 className="text-lg font-semibold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-[#66B2FF] to-[#00FFAA]">
            Booz Balance
          </h2>
          <p className="text-3xl font-extrabold text-[#66B2FF]">{animatedBalance}</p>
        </motion.div>

        {/* Rewards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="p-6 rounded-2xl shadow-lg bg-gradient-to-br from-[#1F2A45] to-[#24325E] border border-white/20 flex-grow flex flex-col"
        >
          <h2 className="text-xl font-semibold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#66B2FF] to-[#00FFAA]">
            Rewards
          </h2>

          <ul className="space-y-2 flex-grow">
            {rewards.map((reward, i) => (
              <li
                key={i}
                className="flex justify-between items-center p-3 rounded-lg bg-[#1F2A45]/50 text-[#66B2FF]"
              >
                <span>{reward.name}</span>
                <button className={THEME.buttonPrimary}>Claim</button>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Right Column - Token Info & Tokenomics */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="p-6 rounded-2xl shadow-lg md:col-span-2 bg-gradient-to-br from-[#1F2A45] to-[#24325E] border border-white/20 flex flex-col gap-6"
      >
        {/* New BOOZ Token Info Section */}
        <div className="p-6 rounded-2xl shadow-md bg-gradient-to-br from-[#1F2A45] to-[#24325E]">
          <h2 className="text-2xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#66B2FF] to-[#00FFAA]">
            $BOOZ TOKEN INFO
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-4 text-sm text-[#B0B0B0] mb-4">
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
          <div className="flex flex-col text-sm text-[#B0B0B0]">
            <span className="font-semibold text-white">Contract Address:</span>
            <span className="break-all">6dJtPizh6meSDXUu7tFQU5RB3j45e4T28yBMGevswave</span>
          </div>
        </div>

        {/* Existing Tokenomics Chart Section */}
        <div className="flex-grow flex flex-col items-center">
          <div className="h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={tokenomics} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <XAxis dataKey="name" hide={true} />
                <YAxis hide={true} />
                <Tooltip
                  content={({ payload, label }) => {
                    if (payload && payload.length) {
                      const data = payload[0].payload;
                      const percentage = ((data.value / totalTokenomicsSupply) * 100).toFixed(1);
                      return (
                        <div className="p-2 rounded shadow-lg bg-[#1F2A45] text-white/90 border border-white/20">
                          <p className="font-bold">{data.name}</p>
                          <p>{data.value.toLocaleString()} tokens</p>
                          <p>{percentage}%</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="value" fill="#66B2FF" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
