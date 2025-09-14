"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const posts = [
  {
    title: "Q4 2025 Roadmap Update",
    date: "September 2025",
    summary:
      "Updates on our milestones, partnerships, and upcoming features for Q4 2025.",
    slug: "q4-2025-roadmap-update",
  },
  {
    title: "Gaming Mission Preview",
    date: "October 2025",
    summary:
      "Sneak peek into the upcoming Dominoes and Chess gaming experiences.",
    slug: "gaming-mission-preview",
  },
  {
    title: "Community Spotlight: $BOOZ Holders",
    date: "November 2025",
    summary:
      "Celebrating our vibrant $BOOZ community and sharing stories of active contributors.",
    slug: "community-spotlight-booz-holders",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="w-full bg-[var(--color-bg)] py-12 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto">
        {/* Section Title */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-cyan-400">
          Blog & News
        </h1>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-[var(--color-card)] p-6 rounded-2xl shadow-lg hover:shadow-[0_0_15px_#00FFFF] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-cyan-300 mb-4">{post.date}</p>
                <p className="text-[var(--color-text)] leading-relaxed">
                  {post.summary}
                </p>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-block text-cyan-400 hover:underline font-medium"
              >
                Read More →
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link href="/" className="text-cyan-400 hover:underline font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
