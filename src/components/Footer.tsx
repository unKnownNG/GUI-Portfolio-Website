"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { LeafOne } from "./BotanicalIcons";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks: { label: string; id?: string; href?: string }[] = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="relative bg-earth-900 text-earth-100 py-16 md:py-20 border-t border-earth-800">
      <div className="container mx-auto px-6 max-w-5xl relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start mb-16">
          {/* Left Column: Brand */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-2 font-serif font-bold text-xl text-earth-50">
              <div className="bg-earth-800 p-1.5 rounded-full text-sage-400">
                <LeafOne size={18} />
              </div>
              <span className="tracking-tight">
                Daiyaan<span className="text-terracotta-400">.</span>Dev
              </span>
            </div>
            <p className="text-sm text-earth-300 leading-relaxed max-w-sm">
              Designing and developing interfaces inspired by nature. 
              Always focusing on performance, accessibility, and high aesthetic value.
            </p>
          </div>

          {/* Mid Column: Navigation links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-earth-400">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {navLinks.map((link) =>
                link.href ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-earth-300 hover:text-terracotta-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.id}
                    href={`/#${link.id}`}
                    className="text-sm text-earth-300 hover:text-terracotta-400 transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-earth-400">
              Inquiries
            </h4>
            <p className="text-sm text-earth-300 leading-relaxed">
              Available for freelance roles and contract consultations worldwide.
            </p>
            <a
              href="mailto:mohammeddaiyaan2005@gmail.com"
              className="text-sm font-semibold text-terracotta-400 hover:text-terracotta-300 block hover:underline"
            >
              mohammeddaiyaan2005@gmail.com
            </a>
          </div>
        </div>

        {/* Separator */}
        <hr className="border-earth-800 my-8" />

        {/* Bottom Panel */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs text-earth-400">
            <p>
              &copy; {currentYear} Mohammed Daiyaan. Built with Next.js, Tailwind v4, and TypeScript. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={handleBackToTop}
              className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-earth-400 hover:text-earth-50 transition-colors group"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <div className="w-8 h-8 rounded-full bg-earth-800 flex items-center justify-center text-sage-400 transition-transform duration-300 group-hover:-translate-y-0.5">
                <ArrowUp size={14} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
