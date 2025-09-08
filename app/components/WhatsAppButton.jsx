"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "1234567890"; // replace with your actual number

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
    </button>
  );
}
