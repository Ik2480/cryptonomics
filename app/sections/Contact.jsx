"use client";

import { useState } from "react";

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
    <section id="contact" className="w-full py-16 lg:py-24 bg-[var(--color-bg)]">
      <div className="container mx-auto px-4 lg:px-8 flex justify-center">
        <div className="w-full max-w-xl">
          {/* Contact Heading */}
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center text-cyan-400">
            Get in <span className="text-cyan-400/80">Touch</span>
          </h2>
          <p className="text-gray-300 mb-8 text-center">
            Have questions or want to collaborate? Fill out the form below.
          </p>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 bg-[var(--color-card)] p-6 rounded-2xl shadow-lg"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className={`w-full p-3 rounded-xl border ${
                  errors.name ? "border-red-500" : "border-cyan-400/30"
                } bg-[var(--color-bg)] text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors`}
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
                  errors.email ? "border-red-500" : "border-cyan-400/30"
                } bg-[var(--color-bg)] text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors`}
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
                  errors.message ? "border-red-500" : "border-cyan-400/30"
                } bg-[var(--color-bg)] text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-cyan-400 text-[#0D1117] font-semibold hover:bg-cyan-400/80 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
