"use client";

export default function Disclaimer() {
  return (
    <section className="w-full bg-neutral-900/95 backdrop-blur-md px-6 py-4 border-b border-white/20 text-center">
      <h3 className="font-semibold mb-2 text-white">Disclaimer</h3>
      <p className="mb-2 text-white max-w-3xl mx-auto">
        We share crypto insights and stats to help you learn and explore.<br />
        Remember, crypto is volatile — invest carefully and always make informed decisions.
      </p>
      <a
        href="/whitepaper.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block underline text-sm text-white hover:text-primary transition-colors mt-1"
      >
        View Whitepaper
      </a>
    </section>
  );
}
