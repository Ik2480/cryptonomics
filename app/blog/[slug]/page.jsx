"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import blogs from "../../Data/blogs.json"; // adjust path if needed

export default function BlogDetail() {
  const { slug } = useParams();
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    return (
      <div className="container mx-auto px-4 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-red-500">404 - Blog Not Found</h1>
        <Link href="/#blogs" className="text-primary underline mt-4 inline-block">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <section className="w-full py-16 lg:py-24 bg-neutral min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <h1 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          {post.title}
        </h1>
        <p className="text-gray-300 whitespace-pre-line leading-relaxed mb-8">
          {post.content}
        </p>
        <Link
          href="/#blogs"
          className="text-primary font-semibold hover:underline"
        >
          ← Back to Blogs
        </Link>
      </div>
    </section>
  );
}
