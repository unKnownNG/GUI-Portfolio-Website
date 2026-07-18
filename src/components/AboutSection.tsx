import React from "react";
import { LeafOne, LeafTwo, BranchOne, Sprout, Flower, Seed, OrganicSun, FluidBlob } from "./BotanicalIcons";
import { Heart, Leaf, Zap } from "lucide-react";

export const AboutSection: React.FC = () => {
  const philosophies = [
    {
      title: "Low-Level Efficiency",
      desc: "Tailoring systems and interfaces to run lean and fast. Designing software that respects hardware constraints, CPU cycles, and memory profiles.",
      icon: <Flower size={32} className="text-terracotta-500" />,
      color: "bg-terracotta-50 border-terracotta-100",
    },
    {
      title: "Systems Thinking",
      desc: "Architecting from the boots up. Applying operating systems paradigms, multithreading control, and interface design to build robust full-stack software.",
      icon: <Sprout size={32} className="text-sage-500" />,
      color: "bg-sage-50 border-sage-100",
    },
    {
      title: "Clean Interfaces",
      desc: "Creating responsive frontends for complex data. Bridging data visualization and developer tooling with beautiful, tactile user interfaces.",
      icon: <Seed size={32} className="text-earth-500" />,
      color: "bg-earth-100/50 border-earth-200/40",
    },
  ];

  const skills = [
    { name: "Embedded Systems & C/C++", category: "Systems", icon: <Flower size={20} /> },
    { name: "Next.js & React", category: "Frontend", icon: <Seed size={20} /> },
    { name: "TypeScript & JS", category: "Web Logic", icon: <BranchOne size={20} /> },
    { name: "OS Internals & Kernels", category: "Low Level", icon: <LeafTwo size={20} /> },
    { name: "Python, Rust & MATLAB", category: "Languages", icon: <LeafOne size={20} /> },
    { name: "ROS2 & STM32 Control", category: "Robotics", icon: <OrganicSun size={20} /> },
  ];

  return (
    <section id="about" className="relative pt-12 md:pt-16 pb-24 md:pb-32 overflow-hidden bg-earth-50/50">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 right-[5%] text-sage-300 opacity-30 select-none pointer-events-none rotate-12">
        <LeafTwo size={120} />
      </div>
      <div className="absolute bottom-10 left-[8%] text-terracotta-300 opacity-20 select-none pointer-events-none -rotate-45">
        <BranchOne size={100} />
      </div>

      <FluidBlob
        color="sage"
        animation="morph-slow"
        opacity="opacity-15"
        className="w-[400px] h-[400px] top-1/3 left-[-100px]"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-sage-600 bg-sage-100 px-4 py-1.5 rounded-full border border-sage-200/30">
            Rooted in Purpose
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-semibold text-earth-900 mt-4 mb-6">
            Engineering software from hardware registers up to responsive web layouts.
          </h2>
          <p className="text-base md:text-lg text-earth-800/80 leading-relaxed">
            I am an Electronics and Communication Engineering student and developer focused on embedded systems, OS design, and frontend platforms. By blending low-level optimization with high-level user interface design, I construct high-performance digital experiences.
          </p>
        </div>

        {/* Core Philosophies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-24">
          {philosophies.map((item, index) => (
            <div
              key={index}
              className={`p-8 md:p-10 rounded-[2rem] border transition-all duration-500 hover:shadow-lg hover:-translate-y-1 bg-white group ${item.color}`}
            >
              <div className="bg-white dark:bg-earth-50 rounded-2xl w-14 h-14 flex items-center justify-center shadow-sm mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-serif font-semibold text-earth-900 mb-3">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-earth-800/70 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Story & Skills Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-5xl mx-auto items-center">
          {/* Story Column */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-earth-900">
              Cultivating Digital Spaces
            </h3>
            <p className="text-sm md:text-base text-earth-800/80 leading-relaxed">
              Based in Chennai, India, I enjoy digging deep into operating systems internals, writing bootloaders from scratch, and experimenting with real-time embedded control code.
            </p>
            <p className="text-sm md:text-base text-earth-800/80 leading-relaxed">
              I'm pursuing my B.E. at Sri Sai Ram Institute of Technology. I've designed data visualizations for defense research teams, built control pipelines for rover subsystems, and contributed to open-source systems libraries. Let's build something efficient together.
            </p>
            
            {/* Custom leaf quote card */}
            <div className="p-5 border-l-4 border-sage-500 bg-sage-50/50 rounded-r-2xl text-xs md:text-sm text-sage-800 italic">
              "Software is at its best when low-level engineering efficiency meets high-level developer ergonomics."
            </div>
          </div>

          {/* Skills Grid Column */}
          <div className="lg:col-span-7">
            <h4 className="text-xs font-bold uppercase tracking-widest text-earth-400 mb-6">
              My Toolkit / Skills
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-2xl border border-earth-200/50 bg-white shadow-sm hover:border-sage-300 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="text-sage-500 bg-sage-50 p-2.5 rounded-xl transition-colors duration-300 group-hover:bg-sage-100 group-hover:text-sage-600">
                    {skill.icon}
                  </div>
                  <div>
                    <span className="text-xs text-earth-400 font-semibold tracking-wider block uppercase">
                      {skill.category}
                    </span>
                    <span className="text-sm md:text-base text-earth-900 font-bold">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
