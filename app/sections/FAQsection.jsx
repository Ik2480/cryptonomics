"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const faqsData = [
  {
    question: "Wallet Setup",
    answer: "Instructions on setting up a Phantom or Solflare wallet to use with $BOOZ."
  },
  {
    question: "Rewards",
    answer: "Learn how $BOOZ rewards are calculated and how to claim them."
  },
  {
    question: "Bridges",
    answer: "Guide for transferring $BOOZ across chains using the bridging system."
  },
  {
    question: "Staking",
    answer: "Details on staking $BOOZ for rewards and governance participation."
  },
  {
    question: "DAO",
    answer: "Overview of DAO governance, proposals, and voting mechanisms."
  },
  {
    question: "Gas Fees",
    answer: "Information on transaction fees, how they are calculated, and tips to reduce costs."
  }
];

export default function FAQSection() {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const filteredFaqs = faqsData.filter(faq =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id = "faq" className="w-full bg-[var(--color-bg)] py-12 px-4 md:px-6">
      <div className="container mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center text-cyan-400">
          FAQ & Knowledge Base
        </h1>

        {/* Search Input */}
        <div className="mb-8 flex justify-center">
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-1/2 bg-[var(--color-card)] border border-cyan-400 text-[var(--color-text)] px-4 py-2 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
        </div>

        {/* Accordion */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-[var(--color-card)] border border-cyan-400 rounded-lg overflow-hidden cursor-pointer hover:shadow-[0_0_15px_#00FFFF] transition-shadow duration-300"
              onClick={() => toggleFaq(index)}
            >
              <div className="px-6 py-4 flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <span className="text-cyan-400 text-xl">{openIndex === index ? "-" : "+"}</span>
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 text-[var(--color-text)] bg-[var(--color-bg)]"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="text-cyan-400 hover:underline font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
