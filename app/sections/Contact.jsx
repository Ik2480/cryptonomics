"use client";

import { useState } from "react";
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.message) newErrors.message = "Message is required";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Message submitted successfully!");
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="w-full py-16 lg:py-24 bg-neutral">
      <div className="container mx-auto px-4 lg:px-8 flex justify-center">
        <div className="relative w-full max-w-xl flex">
          {/* Contact Box */}
          <div className="w-full">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-gray-300 mb-6 text-center">
              Have questions or want to collaborate? Fill out the form or reach
              us via social platforms.
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-4 bg-neutral-800 p-6 rounded-xl shadow-lg"
            >
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-xl border ${
                    errors.name ? "border-red-500" : "border-gray-600"
                  } bg-neutral-900 text-white`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-xl border ${
                    errors.email ? "border-red-500" : "border-gray-600"
                  } bg-neutral-900 text-white`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  className={`w-full p-3 rounded-xl border ${
                    errors.message ? "border-red-500" : "border-gray-600"
                  } bg-neutral-900 text-white`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/80 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Media Vertical Bar */}
          <div className="hidden lg:flex flex-col gap-6 ml-6 mt-32 items-center">
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-green-600 text-white hover:bg-green-500 transition-colors"
            >
              <FaWhatsapp className="text-xl" />
            </a>
            <a
              href="https://t.me/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-sky-600 text-white hover:bg-sky-500 transition-colors"
            >
              <FaTelegramPlane className="text-xl" />
            </a>
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-700 text-white hover:bg-blue-600 transition-colors"
            >
              <FaFacebookF className="text-xl" />
            </a>
            <a
              href="https://youtube.com/yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-red-600 text-white hover:bg-red-500 transition-colors"
            >
              <FaYoutube className="text-xl" />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-500 text-white hover:bg-blue-400 transition-colors"
            >
              <FaLinkedinIn className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
