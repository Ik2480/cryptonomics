"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleConsent = (value) => {
    localStorage.setItem("cookieConsent", value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-3xl bg-neutral-900 text-white rounded-xl shadow-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-4 z-50">
      <p className="text-sm">
        We use cookies to improve your experience.
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => handleConsent("accepted")}
          className="px-4 py-2 rounded-lg bg-primary hover:bg-primary/80 transition-colors text-sm font-medium"
        >
          Accept
        </button>
        <button
          onClick={() => handleConsent("declined")}
          className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors text-sm font-medium"
        >
          Decline
        </button>
      </div>
    </div>
  );
}
