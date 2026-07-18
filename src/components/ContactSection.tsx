"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, ArrowUpRight } from "lucide-react";
import { LeafOne, Sprout, FluidBlob } from "./BotanicalIcons";

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-earth-50/50">
      {/* Decorative blobs */}
      <FluidBlob
        color="sage"
        animation="morph"
        opacity="opacity-20"
        className="w-[380px] h-[380px] top-10 right-[-100px]"
      />
      <FluidBlob
        color="terracotta"
        animation="morph-slow"
        opacity="opacity-15"
        className="w-[300px] h-[300px] bottom-10 left-[-50px]"
      />

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact details & Call-to-action */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-sage-600 bg-sage-100 px-4 py-1.5 rounded-full border border-sage-200/30">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-5xl font-serif font-semibold text-earth-900 mt-4 mb-6">
                Let's plant some ideas.
              </h2>
              <p className="text-base text-earth-800/80 leading-relaxed">
                Whether you have a full design spec ready to build or simply want to chat about organic layout options, 
                my inbox is always open. Let's create something meaningful together.
              </p>
            </div>

            {/* Icon Info Boxes */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-earth-200/40 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-sage-50 text-sage-600 flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-xs text-earth-400 font-semibold tracking-wider block uppercase">
                    Email me
                  </span>
                  <a
                    href="mailto:mohammeddaiyaan2005@gmail.com"
                    className="text-sm md:text-base font-bold text-earth-900 hover:text-terracotta-500 transition-colors"
                  >
                    mohammeddaiyaan2005@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-earth-200/40 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-terracotta-50 text-terracotta-600 flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-xs text-earth-400 font-semibold tracking-wider block uppercase">
                    Based in
                  </span>
                  <span className="text-sm md:text-base font-bold text-earth-900">
                    Chennai, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <span className="text-xs font-bold uppercase tracking-wider text-earth-400 block mb-3">
                Connect elsewhere
              </span>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-semibold text-earth-800 hover:text-terracotta-600 transition-colors"
                >
                  GitHub <ArrowUpRight size={14} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-semibold text-earth-800 hover:text-terracotta-600 transition-colors"
                >
                  LinkedIn <ArrowUpRight size={14} />
                </a>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm font-semibold text-earth-800 hover:text-terracotta-600 transition-colors"
                >
                  Dribbble <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form */}
          <div className="lg:col-span-7 bg-white border border-earth-200/40 rounded-[2.25rem] p-8 md:p-10 shadow-sm relative overflow-hidden">
            {/* Soft decorative background leaf */}
            <div className="absolute right-0 top-0 text-sage-100 opacity-20 transform translate-x-12 -translate-y-8 select-none pointer-events-none rotate-45">
              <LeafOne size={160} />
            </div>

            {submitted ? (
              <div className="text-center py-12 space-y-4 relative z-10">
                <div className="w-16 h-16 bg-sage-50 text-sage-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sprout size={32} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-earth-900">
                  Message planted!
                </h3>
                <p className="text-sm md:text-base text-earth-800/70 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. I've received your query and will reply within 24 hours. Let's make it grow!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs md:text-sm font-bold text-terracotta-600 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <h3 className="text-xl md:text-2xl font-serif font-semibold text-earth-900">
                  Write your message
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-earth-800/80">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-earth-50 border border-earth-200/50 rounded-2xl px-5 py-3.5 text-sm md:text-base text-earth-900 placeholder-earth-400 focus:outline-none focus:border-sage-400 focus:ring-4 focus:ring-sage-100 transition-all duration-300"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-earth-800/80">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full bg-earth-50 border border-earth-200/50 rounded-2xl px-5 py-3.5 text-sm md:text-base text-earth-900 placeholder-earth-400 focus:outline-none focus:border-sage-400 focus:ring-4 focus:ring-sage-100 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-earth-800/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your design plans, timelines, or just say hello..."
                    className="w-full bg-earth-50 border border-earth-200/50 rounded-2xl px-5 py-3.5 text-sm md:text-base text-earth-900 placeholder-earth-400 focus:outline-none focus:border-sage-400 focus:ring-4 focus:ring-sage-100 transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 bg-terracotta-500 hover:bg-terracotta-600 text-earth-50 font-semibold py-4 px-6 rounded-2xl transition-all duration-300 shadow-md shadow-terracotta-200 hover:shadow-lg disabled:opacity-75 disabled:pointer-events-none group"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
