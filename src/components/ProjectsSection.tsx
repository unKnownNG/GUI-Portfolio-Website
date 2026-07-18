import React from "react";
import { LeafOne, LeafTwo, BranchOne, Sprout, Flower, Seed, OrganicSun, FluidBlob } from "./BotanicalIcons";
import { ArrowUpRight } from "lucide-react";

export const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Custom Operating System",
      desc: "Designed and implemented a minimal OS from scratch including a custom Assembly bootloader and C-based kernel. Built VGA text-mode drivers, memory management, and a basic CLI on an emulated x86 machine.",
      icon: <Seed size={24} />,
      tags: ["C", "Assembly", "GCC", "QEMU"],
      color: "hover:border-sage-300",
      blobColor: "bg-sage-100/40",
      iconColor: "text-sage-600 bg-sage-50",
    },
    {
      title: "LLVM Custom Compiler",
      desc: "Implemented the frontend pipeline of a compiler from scratch: lexical analysis (hand-written lexer), recursive-descent parser, and AST construction for a custom grammar. Integrating LLVM IR generation.",
      icon: <BranchOne size={24} />,
      tags: ["C++", "LLVM", "Compiler Design"],
      color: "hover:border-terracotta-300",
      blobColor: "bg-terracotta-100/30",
      iconColor: "text-terracotta-600 bg-terracotta-50",
    },
    {
      title: "PsyPathAI Platform",
      desc: "Full-stack AI career guidance platform with an AI coaching agent delivering psychology-aware context via MCP. Features Supabase/PostgreSQL backend with row-level security and LLM APIs.",
      icon: <OrganicSun size={24} />,
      tags: ["Next.js", "TypeScript", "Supabase", "MCP"],
      color: "hover:border-earth-300",
      blobColor: "bg-earth-100/45",
      iconColor: "text-earth-600 bg-earth-100/50",
    },
  ];

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden bg-earth-50">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-[-150px] text-sage-200 opacity-20 select-none pointer-events-none rotate-45">
        <LeafOne size={200} />
      </div>
      <div className="absolute top-[10%] right-[-100px] text-terracotta-200 opacity-15 select-none pointer-events-none -rotate-12">
        <BranchOne size={180} />
      </div>

      <FluidBlob
        color="terracotta"
        animation="morph"
        opacity="opacity-15"
        className="w-[450px] h-[450px] bottom-1/4 right-[-100px]"
      />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta-600 bg-terracotta-100/50 px-4 py-1.5 rounded-full border border-terracotta-200/20">
              Organic Design
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-semibold text-earth-900 mt-4">
              Featured Projects
            </h2>
          </div>
          <p className="text-sm md:text-base text-earth-800/70 max-w-md md:text-right">
            A handpicked garden of digital projects. Each product is crafted with minimal asset sizes, custom motion, and deep accessibility.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`p-8 rounded-[2.25rem] border border-earth-200/40 bg-white shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group relative overflow-hidden flex flex-col justify-between ${project.color}`}
            >
              {/* Dynamic expanding hover background blob */}
              <div
                className={`absolute -right-10 -bottom-10 w-28 h-28 rounded-full ${project.blobColor} opacity-0 group-hover:opacity-100 group-hover:scale-[2.5] transition-all duration-700 blur-xl pointer-events-none`}
              ></div>

              <div className="relative z-10">
                {/* Icon Box */}
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 ${project.iconColor}`}
                >
                  {project.icon}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] md:text-xs font-semibold px-2.5 py-0.5 rounded-full bg-earth-50 text-earth-800/80 border border-earth-200/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-semibold text-earth-900 mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-earth-800/75 leading-relaxed mb-8">
                  {project.desc}
                </p>
              </div>

              {/* Footer link */}
              <div className="relative z-10 pt-2 border-t border-earth-100/50 flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs md:text-sm font-semibold text-terracotta-600 hover:text-terracotta-700 transition-colors group-hover:underline"
                >
                  Learn more
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
                <span className="text-[10px] font-bold text-earth-300 tracking-wider">
                  0{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
