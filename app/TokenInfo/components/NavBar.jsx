"use client";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-[#0A1F44] backdrop-blur-md flex items-center justify-between px-6 py-4 shadow-md">
      <a href="/" className="flex items-center gap-2">
        <img
          src="/cryptonomicsLogo.webp"
          alt="Cryptonomics101 Logo"
          width={40}
          height={30}
          className="rounded-lg"
        />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#66B2FF] to-[#00FFAA] font-semibold">
          Cryptonomics101
        </span>
      </a>
    </header>
  );
}
