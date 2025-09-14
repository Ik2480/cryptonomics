"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function RewardSimulator() {
  const [holdings, setHoldings] = useState("");
  const [reward, setReward] = useState(null);

  const generateReward = () => {
    if (!holdings || isNaN(holdings)) {
      setReward("❌ Enter valid $BOOZ holdings");
      return;
    }
    const mockReward = Array.from({ length: 6 }, () =>
      Math.random().toString(36).toUpperCase()[2]
    ).join("");
    setReward(mockReward);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-28 p-4 text-center bg-[#161B22] rounded-lg shadow-lg hover:shadow-[0_0_15px_#00FFFF] transition-shadow duration-300 flex flex-col justify-center space-y-2"
    >
      <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#66B2FF]">
        Reward Simulator
      </h3>
      <input
        type="text"
        placeholder="Enter $BOOZ Holdings"
        value={holdings}
        onChange={(e) => setHoldings(e.target.value)}
        className="w-full bg-[#0D1117] px-2 py-1 rounded text-[#E6E6E6] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00FFFF] text-sm"
      />
      <button
        onClick={generateReward}
        className="px-3 py-1 bg-[#00FFFF] text-[#0D1117] rounded text-sm hover:scale-105 transition-transform duration-300"
      >
        Generate
      </button>
      {reward && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-[#00FFFF] font-mono text-sm text-center"
        >
          ✨ {reward} ✨
        </motion.div>
      )}
    </motion.div>
  );
}
