"use client";

import Link from "next/link";
import blogs from "../Data/blogs.json"; // adjust path if needed

export default function Blogs() {
  return (
    <section
      id="blogs"
      className="relative w-full py-20 bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/blog-bg.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative container mx-auto px-4 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Our Blogs
        </h2>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-12">
          “Knowledge is the key to empowerment. At Cryptonomics101, every step
          you take to learn brings you closer to shaping the crypto future.”
        </p>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post, i) => (
            <div
              key={i}
              className="bg-neutral-900/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:scale-105 transform transition-transform duration-300 text-left"
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {post.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {post.content.slice(0, 100)}...
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-primary font-semibold hover:underline"
              >
                Continue Reading →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
