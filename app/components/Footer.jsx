"use client";

import { FaTwitter, FaTelegramPlane, FaDiscord } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-400 py-8">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
        {/* Left */}
        <div>
          <p className="text-sm">© 2025 Cryptonomics101. All rights reserved.</p>
        </div>

        {/* Center: Links */}
        <div className="flex justify-center gap-6 text-sm">
          <Link href="/privacy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition-colors">
            Terms
          </Link>
        </div>

        {/* Right: Social Icons */}
        <div className="flex justify-center md:justify-end gap-4 text-xl">
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaTwitter />
          </a>
          <a
            href="https://t.me/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://discord.gg/yourinvite"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaDiscord />
          </a>
        </div>
      </div>
    </footer>
  );
}
