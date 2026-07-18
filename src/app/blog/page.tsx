"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, Tag } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LeafOne, LeafTwo, BranchOne, FluidBlob, Sprout, Flower, Seed, OrganicSun } from "@/components/BotanicalIcons";

const blogPosts = [
  {
    title: "Building a Custom OS from Scratch: Lessons from the Bootloader",
    excerpt:
      "A deep dive into x86 real-mode assembly, writing a stage-1 bootloader, switching to protected mode, and loading a C kernel. What textbooks don't tell you about bare-metal development.",
    date: "2026-07-10",
    readTime: "12 min read",
    tags: ["OS Development", "Assembly", "C"],
    icon: <Seed size={20} />,
    accentColor: "sage",
  },
  {
    title: "Demystifying LLVM IR: Writing Your First Compiler Frontend",
    excerpt:
      "Walking through the journey of building a lexer, recursive-descent parser, and AST, then lowering it all to LLVM IR. A practical guide for systems enthusiasts.",
    date: "2026-06-28",
    readTime: "15 min read",
    tags: ["Compilers", "LLVM", "C++"],
    icon: <BranchOne size={20} />,
    accentColor: "terracotta",
  },
  {
    title: "ROS2 & STM32: Bridging Embedded Hardware with Robotic Middleware",
    excerpt:
      "How I integrated STM32 microcontrollers with ROS2 for our university rover's control pipeline. From UART protocols to real-time sensor fusion.",
    date: "2026-06-15",
    readTime: "10 min read",
    tags: ["Embedded", "ROS2", "STM32"],
    icon: <OrganicSun size={20} />,
    accentColor: "sage",
  },
  {
    title: "Why I Chose Next.js for My Portfolio (and What I Learned)",
    excerpt:
      "Reflections on using Next.js App Router, Tailwind CSS v4, and TypeScript together. The developer experience, pitfalls, and the organic design system behind this site.",
    date: "2026-05-30",
    readTime: "8 min read",
    tags: ["Next.js", "TypeScript", "Web Dev"],
    icon: <Flower size={20} />,
    accentColor: "terracotta",
  },
  {
    title: "Memory Management Deep Dive: From malloc to Custom Allocators",
    excerpt:
      "Understanding how memory allocation works under the hood. Implementing a simple memory allocator in C and comparing it with modern approaches in Rust.",
    date: "2026-05-12",
    readTime: "14 min read",
    tags: ["C", "Rust", "Systems"],
    icon: <Sprout size={20} />,
    accentColor: "sage",
  },
  {
    title: "The Art of Device Drivers: Writing VGA Text-Mode Output",
    excerpt:
      "A hands-on exploration of writing device drivers for VGA text mode. How the framebuffer works, color attributes, scrolling, and rendering a basic terminal.",
    date: "2026-04-22",
    readTime: "11 min read",
    tags: ["Drivers", "OS Dev", "C"],
    icon: <LeafOne size={20} />,
    accentColor: "terracotta",
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        {/* Blog Hero */}
        <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-earth-50">
          {/* Background decorations */}
          <FluidBlob
            color="sage"
            animation="morph"
            opacity="opacity-20"
            className="w-[350px] h-[350px] top-10 -left-20"
          />
          <FluidBlob
            color="terracotta"
            animation="morph-slow"
            opacity="opacity-15"
            className="w-[300px] h-[300px] top-1/3 -right-16"
          />
          <div className="absolute top-32 right-[10%] text-sage-300 opacity-30 select-none pointer-events-none rotate-12 hidden md:block">
            <LeafTwo size={100} />
          </div>

          <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-earth-500 hover:text-terracotta-600 transition-colors mb-8 group"
            >
              <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
              Back to Portfolio
            </Link>

            <span className="block text-xs font-bold uppercase tracking-widest text-terracotta-600 bg-terracotta-100/55 px-4 py-1.5 rounded-full border border-terracotta-200/20 w-fit mx-auto mb-4">
              Blog
            </span>

            <h1 className="text-4xl md:text-6xl font-serif font-semibold text-earth-900 tracking-tight leading-[1.15] mb-6">
              Thoughts on{" "}
              <span className="text-sage-600 italic font-medium">systems</span>,
              code & craft.
            </h1>

            <p className="text-base md:text-lg text-earth-800/80 max-w-2xl mx-auto leading-relaxed">
              Writings about low-level systems programming, compiler design,
              embedded development, and the frontend technologies I use to bring
              ideas to life.
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="relative py-16 md:py-24 overflow-hidden bg-earth-50/50">
          <FluidBlob
            color="sage"
            animation="morph-slow"
            opacity="opacity-10"
            className="w-[400px] h-[400px] bottom-1/4 left-[-100px]"
          />

          <div className="container mx-auto px-6 relative z-10 max-w-5xl">
            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <article
                  key={index}
                  className={`group relative flex flex-col p-8 rounded-[2.25rem] border border-earth-200/40 bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 overflow-hidden ${
                    post.accentColor === "sage"
                      ? "hover:border-sage-300"
                      : "hover:border-terracotta-300"
                  }`}
                >
                  {/* Hover background blob */}
                  <div
                    className={`absolute -right-10 -bottom-10 w-28 h-28 rounded-full opacity-0 group-hover:opacity-100 group-hover:scale-[2.5] transition-all duration-700 blur-xl pointer-events-none ${
                      post.accentColor === "sage"
                        ? "bg-sage-100/40"
                        : "bg-terracotta-100/30"
                    }`}
                  ></div>

                  <div className="relative z-10 flex flex-col flex-grow">
                    {/* Icon + Meta row */}
                    <div className="flex items-center gap-3 mb-5">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${
                          post.accentColor === "sage"
                            ? "text-sage-600 bg-sage-50"
                            : "text-terracotta-600 bg-terracotta-50"
                        }`}
                      >
                        {post.icon}
                      </div>
                      <div className="flex items-center gap-3 text-earth-400 text-xs font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={12} />
                          {post.readTime}
                        </span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] md:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-earth-50 text-earth-800/80 border border-earth-200/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-serif font-semibold text-earth-900 mb-3 group-hover:text-earth-800 transition-colors leading-snug">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm text-earth-800/70 leading-relaxed mb-6 flex-grow">
                      {post.excerpt}
                    </p>

                    {/* Read more link */}
                    <div className="pt-3 border-t border-earth-100/50 flex items-center justify-between">
                      <span
                        className={`inline-flex items-center gap-1 text-sm font-semibold transition-colors group-hover:underline ${
                          post.accentColor === "sage"
                            ? "text-sage-600 hover:text-sage-700"
                            : "text-terracotta-600 hover:text-terracotta-700"
                        }`}
                      >
                        Read article
                        <ArrowUpRight
                          size={14}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        />
                      </span>
                      <span className="text-[10px] font-bold text-earth-300 tracking-wider">
                        0{index + 1}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Coming Soon note */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-3 p-6 rounded-2xl bg-white border border-earth-200/40 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-sage-50 text-sage-600 flex items-center justify-center">
                  <Sprout size={20} />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-earth-900">More articles growing...</p>
                  <p className="text-xs text-earth-500">New posts on systems programming & embedded dev coming soon.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
