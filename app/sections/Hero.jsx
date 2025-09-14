"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-auto flex flex-col items-center justify-center bg-[var(--color-bg)] py-12 px-4 md:py-20 lg:py-24">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-cyan-400 mt-8 mb-4">
            Blockchain of Oz – $BOOZ Live
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Democratizing blockchain through interconnected payments, business tools, and gaming rewards — anchored in the Blockchain of Oz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="#about"
              className="px-6 py-3 rounded-xl bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition text-sm font-semibold"
            >
              Get Started
            </Link>
            <Link
              href="#community"
              className="px-6 py-3 rounded-xl border border-cyan-400 text-cyan-400 font-medium hover:bg-cyan-400 hover:text-white transition-colors"
            >
              Join Community
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <Image
            src="/herocryptonomics01.webp"
            alt="Cryptonomics illustration"
            width={500}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
