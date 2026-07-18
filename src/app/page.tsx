import React from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Capsule Bar */}
      <Navbar />

      <main className="flex-grow">
        {/* Hero Banner Section */}
        <HeroSection />

        {/* Philosophy & Skills About Section */}
        <AboutSection />

        {/* Organic Design Projects Grid Section */}
        <ProjectsSection />

        {/* Interactive Earthy Contact Form Section */}
        <ContactSection />
      </main>

      {/* Underline Footer */}
      <Footer />
    </div>
  );
}
