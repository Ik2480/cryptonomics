"use client";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Blogs from "./sections/Blogs";
import FAQSection from "./sections/FAQsection";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-[var(--color-bg)] text-white font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* About / Mission Section */}
      <About />

      {/* Blogs Section */}
      <section className="w-full py-16 lg:py-16 px-4 lg:px-12">
        <Blogs />
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 lg:py-16 px-4 lg:px-12">
        <FAQSection />
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 lg:py-16 px-4 lg:px-12">
        <Contact />
      </section>
    </main>
  );
}
