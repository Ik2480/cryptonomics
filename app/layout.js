import { Inter } from "next/font/google";
import "./globals.css";

// Import shared components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import WhatsAppButton from "./components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cryptonomics 101",
  description: "Learn and explore blockchain & crypto with Cryptonomics 101",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral text-white`}>
        {/* Sticky Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="container mx-auto px-4 lg:px-8 flex-1">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Cookie Consent */}
        <CookieConsent />

        {/* Floating WhatsApp Button */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
