"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-center lg:text-left"
        >
          <h1 className="text-4xl lg:text-6xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Welcome to Cryptonomics 101
          </h1>
          <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
            Learn, explore, and stay updated with the latest in blockchain and
            cryptocurrency. Your journey into the future of finance starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              href="#about"
              className="px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/80 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="#community"
              className="px-6 py-3 rounded-xl border border-secondary text-secondary font-medium hover:bg-secondary hover:text-white transition-colors"
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
            src="/herocryptonomics01.webp" // replace with real image in /public
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
