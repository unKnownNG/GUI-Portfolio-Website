"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, Mail, ArrowRight } from "lucide-react";
import { FluidBlob, BranchOne, OrganicSun } from "./BotanicalIcons";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col items-center justify-between pt-32 pb-24 overflow-hidden bg-earth-50"
    >
      {/* Background blobs for depth */}
      <FluidBlob
        color="sage"
        animation="morph"
        opacity="opacity-30"
        className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] top-10 -left-20"
      />
      <FluidBlob
        color="terracotta"
        animation="morph-slow"
        opacity="opacity-20"
        className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] top-1/3 -right-20"
      />
      <FluidBlob
        color="sand"
        animation="morph"
        opacity="opacity-50"
        className="w-[350px] h-[350px] bottom-10 left-1/3"
      />

      {/* Floating hand-drawn decorator */}
      <div className="absolute top-28 right-[12%] text-terracotta-400 opacity-60 animate-float hidden md:block">
        <OrganicSun size={48} />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center max-w-4xl">
        {/* Profile Avatar Frame with Botanical Elements */}
        <div className="relative mb-8 mt-4 group">
          {/* Decorative Branch Leaf Behind (Left) */}
          <div className="absolute -left-12 -top-10 text-sage-500 opacity-80 -rotate-45 transform select-none pointer-events-none transition-transform duration-700 group-hover:rotate-[-55deg] group-hover:scale-105">
            <BranchOne size={80} />
          </div>
          
          {/* Decorative Branch Leaf Behind (Right) */}
          <div className="absolute -right-12 -top-6 text-sage-500 opacity-80 scale-x-[-1] rotate-45 transform select-none pointer-events-none transition-transform duration-700 group-hover:rotate-[55deg] group-hover:scale-105">
            <BranchOne size={80} />
          </div>

          {/* Morphing Avatar Container */}
          <div className="w-48 h-48 md:w-56 md:h-56 relative animate-morph border-4 border-earth-100 shadow-lg overflow-hidden bg-earth-100/30 flex items-center justify-center">
            {/* 
              Avatar image is removed for now as requested. 
              The generated AI image has been copied to '/profile.png'.
              You can uncomment the Image component below to display it.
            */}
            {/* <Image
              src="/profile.png"
              alt="Mohammed Daiyaan Profile"
              fill
              priority
              className="object-cover scale-105 transition-transform duration-700 group-hover:scale-110"
              sizes="(max-w-768px) 192px, 224px"
            /> */}
            <span className="text-5xl md:text-6xl font-serif font-semibold text-sage-700 select-none">MD</span>
          </div>

          {/* Soft dot indicators/decorations */}
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-terracotta-300 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 -right-4 w-3.5 h-3.5 bg-sage-300 rounded-full animate-bounce"></div>
        </div>

        {/* Title / Name */}
        <span className="text-sm font-semibold tracking-widest text-terracotta-600 uppercase mb-3 bg-terracotta-100/55 px-4 py-1.5 rounded-full border border-terracotta-200/20">
          Mohammed Daiyaan
        </span>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-serif font-semibold text-earth-900 tracking-tight leading-[1.15] mb-6 max-w-3xl">
          Bridging the gap between <br className="hidden sm:inline" />
          <span className="text-sage-600 italic font-medium">low-level systems</span> & fluid frontends.
        </h1>

        {/* Sub-headline */}
        <p className="text-base md:text-lg text-earth-800/80 max-w-xl leading-relaxed mb-8">
          I'm a systems-oriented engineering student and developer, focusing on embedded software, operating systems, and interactive frontend frameworks.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("projects");
              if (el) window.scrollTo({ top: el.offsetTop - 90, behavior: "smooth" });
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-terracotta-500 text-earth-50 hover:bg-terracotta-600 font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-md shadow-terracotta-200 group"
          >
            Explore My Work
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("contact");
              if (el) window.scrollTo({ top: el.offsetTop - 90, behavior: "smooth" });
            }}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-earth-50 hover:bg-earth-100 text-earth-800 font-semibold px-8 py-3.5 rounded-full border border-earth-300 transition-all duration-300"
          >
            <Mail size={16} />
            Let's Collaborate
          </a>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById("about");
            if (el) window.scrollTo({ top: el.offsetTop - 90, behavior: "smooth" });
          }}
          className="flex flex-col items-center gap-1.5 text-earth-400 hover:text-earth-900 transition-colors text-xs font-semibold uppercase tracking-wider animate-float"
        >
          <span>Scroll down</span>
          <ArrowDown size={14} className="text-sage-500" />
        </a>
      </div>

      {/* Organic Wave Divider Image */}
      <div className="absolute bottom-0 left-0 w-full z-0 pointer-events-none">
        <img
          src="/wave-divider.png"
          alt=""
          className="w-full h-auto block"
          aria-hidden="true"
        />
      </div>
    </section>
  );
};
