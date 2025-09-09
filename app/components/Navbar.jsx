"use client";

import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname(); // Get current route
  const [isOpen, setIsOpen] = useState(false);

  // Do not render Navbar on Dashboard page
  if (pathname === "/Dashboard") return null;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Blogs", href: "#blogs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-neutral-900/95 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between py-4">
        {/* Logo + Dashboard link */}
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center">
            <img
              src="/cryptonomicsLogo.webp"
              alt="Cryptonomics101 Logo"
              width={40}
              height={30}
            />
          </a>
          <a
            href="/Dashboard"
            className="px-3 py-1 bg-primary rounded-lg text-white hover:bg-primary/80 transition-colors"
          >
            Cryptonomics101
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 justify-center space-x-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Login Button */}
        <div className="hidden md:flex">
          <a
            href="/login"
            className="px-4 py-2 bg-primary rounded-lg text-white hover:bg-primary/80 transition-colors"
          >
            Login
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-neutral-900/95 backdrop-blur-md px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block text-white hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="/Dashboard"
            className="block w-full text-center px-4 py-2 bg-primary rounded-lg text-white hover:bg-primary/80 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Cryptonomics101
          </a>
          <a
            href="/login"
            className="block w-full text-center px-4 py-2 bg-primary rounded-lg text-white hover:bg-primary/80 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Login
          </a>
        </div>
      )}
    </nav>
  );
}
