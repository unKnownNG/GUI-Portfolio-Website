"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { LeafOne } from "./BotanicalIcons";

type NavLink = {
  label: string;
  id?: string;       // for scroll sections on homepage
  href?: string;      // for page links like /blog
};

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check active section only on homepage
      if (isHome) {
        const sections = ["home", "about", "projects", "contact"];
        const scrollPosition = window.scrollY + 120;

        for (const section of sections) {
          const el = document.getElementById(section);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (isHome) {
      const el = document.getElementById(id);
      if (el) {
        window.scrollTo({
          top: el.offsetTop - 90,
          behavior: "smooth",
        });
      }
    } else {
      // Navigate to homepage with hash
      window.location.href = `/#${id}`;
    }
  };

  const navLinks: NavLink[] = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", id: "contact" },
  ];

  const isActive = (link: NavLink) => {
    if (link.href) return pathname === link.href;
    return isHome && activeSection === link.id;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 md:px-8 py-4 ${
        scrolled ? "pt-3" : "pt-6"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl transition-all duration-500 rounded-full border border-earth-200/50 bg-earth-50/85 backdrop-blur-md shadow-sm px-6 py-3 flex items-center justify-between ${
          scrolled ? "shadow-md max-w-5xl py-2.5" : ""
        }`}
      >
        {/* Brand/Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-earth-900 font-serif font-bold text-lg group"
        >
          <div className="bg-sage-100 p-1.5 rounded-full text-sage-600 transition-transform group-hover:rotate-12 duration-300">
            <LeafOne size={20} />
          </div>
          <span className="hidden sm:inline tracking-tight font-serif text-earth-800">
            Daiyaan<span className="text-terracotta-500">.</span>Dev
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1.5 bg-earth-100/50 rounded-full p-1 border border-earth-200/30">
          {navLinks.map((link) =>
            link.href ? (
              <Link
                key={link.href}
                href={link.href}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive(link)
                    ? "bg-earth-50 text-earth-900 shadow-sm border border-earth-200/30"
                    : "text-earth-500 hover:text-earth-900"
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id!)}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive(link)
                    ? "bg-earth-50 text-earth-900 shadow-sm border border-earth-200/30"
                    : "text-earth-500 hover:text-earth-900"
                }`}
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:block">
          {isHome ? (
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="flex items-center gap-1 bg-terracotta-500 text-earth-50 hover:bg-terracotta-600 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 shadow-sm shadow-terracotta-200 group"
            >
              Let&apos;s Talk
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ) : (
            <Link
              href="/#contact"
              className="flex items-center gap-1 bg-terracotta-500 text-earth-50 hover:bg-terracotta-600 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 shadow-sm shadow-terracotta-200 group"
            >
              Let&apos;s Talk
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1.5 text-earth-800 hover:bg-earth-100 rounded-full transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden absolute top-24 left-4 right-4 bg-earth-50/95 backdrop-blur-lg border border-earth-200/60 rounded-3xl p-6 shadow-xl transition-all duration-500 ease-out origin-top ${
          isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-3">
          {navLinks.map((link) =>
            link.href ? (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-2xl text-base font-semibold transition-all duration-300 ${
                  isActive(link)
                    ? "bg-sage-100 text-sage-800 border-l-4 border-sage-500 pl-6"
                    : "text-earth-500 hover:text-earth-900 hover:bg-earth-100/50"
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id!)}
                className={`px-4 py-3 rounded-2xl text-base font-semibold transition-all duration-300 ${
                  isActive(link)
                    ? "bg-sage-100 text-sage-800 border-l-4 border-sage-500 pl-6"
                    : "text-earth-500 hover:text-earth-900 hover:bg-earth-100/50"
                }`}
              >
                {link.label}
              </a>
            )
          )}
          <hr className="border-earth-200/50 my-2" />
          {isHome ? (
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="w-full flex items-center justify-center gap-1.5 bg-terracotta-500 text-earth-50 hover:bg-terracotta-600 rounded-2xl py-3 text-center text-sm font-semibold transition-all duration-300 shadow-md shadow-terracotta-200"
            >
              Let&apos;s Talk
              <ArrowUpRight size={16} />
            </a>
          ) : (
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-1.5 bg-terracotta-500 text-earth-50 hover:bg-terracotta-600 rounded-2xl py-3 text-center text-sm font-semibold transition-all duration-300 shadow-md shadow-terracotta-200"
            >
              Let&apos;s Talk
              <ArrowUpRight size={16} />
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};
