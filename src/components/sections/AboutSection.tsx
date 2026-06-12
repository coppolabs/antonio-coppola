import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import flowVideo from "@/assets/manhattan_flow.mp4";

const AboutSection = () => {
  const timelineEvents = [
    {
      year: "2014",
      city: "Naples",
      institution: "University of Naples Federico II",
      details: "Industrial engineering foundation",
    },
    {
      year: "2019",
      city: "Braga",
      institution: "Universidade do Minho",
      details: "International research track & Erasmus+",
    },
    {
      year: "2021",
      city: "Munich",
      institution: "Technical University of Munich",
      details: "Ph.D. launch in operations research",
    },
    {
      year: "2025",
      city: "Montreal",
      institution: "Polytechnique Montréal",
      details: "Advanced transportation optimization",
    },
    {
      year: "2026",
      city: "Munich",
      institution: "Technical University of Munich",
      details: "Thesis completion",
      current: true,
    },
  ];

  // Track the selected event on mobile (defaults to the current/latest event)
  const [activeIndex, setActiveIndex] = useState(
    timelineEvents.findIndex((evt) => evt.current) ?? 0
  );

  return (
    <SectionWrapper id="about" variant="band">
      <SectionTitle>My Journey as an Engineer & Researcher</SectionTitle>

      {/* Lean Line Timeline (Desktop Only) */}
      <div className="-mt-2 mb-14 relative px-4 hidden md:block">
        {/* Continuous Structural Track Line */}
        <div className="absolute top-[29px] left-8 right-8 h-[2px] bg-slate-200/80" />

        <div className="grid grid-cols-5 relative z-10">
          {timelineEvents.map((evt) => (
            <div key={`${evt.year}-${evt.city}-${evt.details}`} className="flex flex-col items-center text-center group">
              {/* Year Label */}
              <span className="text-xs font-bold font-sans tracking-wider text-slate-400 group-hover:text-primary transition-colors mb-2.5">
                {evt.year}
              </span>

              {/* Dynamic Timeline Node Indicator */}
              <div className="relative flex items-center justify-center mb-4">
                <div
                  className={`h-3 w-3 rounded-full border-2 transition-all duration-300 ${evt.current
                    ? "bg-primary border-primary ring-4 ring-primary/20 scale-125"
                    : "bg-white border-slate-300 group-hover:border-slate-500"
                    }`}
                />
              </div>

              {/* Text Description Stack */}
              <div className="space-y-1 px-2">
                <div>
                  <h5 className={`text-sm font-bold font-sans inline-block ${evt.current ? "text-primary" : "text-slate-800"}`}>
                    {evt.city}
                  </h5>
                  <p className="text-[10px] font-sans font-medium text-slate-400 leading-tight line-clamp-1 max-w-[150px] mx-auto mt-0.5">
                    {evt.institution}
                  </p>
                </div>
                <p className="text-[11px] text-slate-500 font-sans leading-tight max-w-[140px] mx-auto pt-0.5 border-t border-slate-100">
                  {evt.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Horizontal Timeline (Mobile Only) */}
      <div className="md:hidden -mt-2 mb-10 w-full">
        {/* Track Line Container */}
        <div className="relative mb-6 px-4">
          {/* Track Line */}
          <div className="absolute top-[29px] left-8 right-8 h-[2px] bg-slate-200/80" />

          <div className="grid grid-cols-5 relative z-10 w-full">
            {timelineEvents.map((evt, idx) => {
              const isSelected = activeIndex === idx;
              return (
                <button
                  key={`${evt.year}-${evt.city}`}
                  onClick={() => setActiveIndex(idx)}
                  className="flex flex-col items-center text-center focus:outline-none"
                >
                  <span className={`text-[11px] font-bold font-sans tracking-wider transition-colors mb-2.5 ${isSelected ? "text-primary font-extrabold" : "text-slate-400"
                    }`}>
                    {evt.year}
                  </span>

                  <div className="relative flex items-center justify-center">
                    <div
                      className={`h-3 w-3 rounded-full border-2 transition-all duration-300 ${isSelected
                        ? "bg-primary border-primary ring-4 ring-primary/20 scale-125"
                        : evt.current
                          ? "bg-white border-primary"
                          : "bg-white border-slate-300"
                        }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Info Card Display for Selected Event */}
        <div className="relative mx-4 p-4 rounded-xl border border-slate-200/60 bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all duration-300">

          {/* Dynamic Spike / Arrow Pointer */}
          <div
            className="absolute -top-1.5 h-3 w-3 rotate-45 border-t border-l border-slate-200/60 bg-white transition-all duration-300"
            style={{
              left: `calc(${(activeIndex * 20) + 10}% - 6px)`
            }}
          />

          {/* 3-Line Structured Text Content */}
          <div className="flex flex-col gap-1 text-left font-sans relative z-10">
            <h5 className={`text-sm font-bold tracking-wide uppercase text-[11px] ${timelineEvents[activeIndex].current ? "text-primary" : "text-slate-800"
              }`}>
              {timelineEvents[activeIndex].city}
            </h5>
            <p className="text-xs font-semibold text-slate-500 leading-tight">
              {timelineEvents[activeIndex].institution}
            </p>
            <p className="text-xs text-slate-600 leading-relaxed mt-0.5 font-normal">
              {timelineEvents[activeIndex].details}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Left Column: Text Content */}
        <div className="flex-1 max-w-none">
          <div className="space-y-4 text-foreground/80 font-sans leading-[1.65] text-justify break-words [hyphens:auto]">
            <p>
              My engineering journey began in Naples, Italy, where I worked on the mathematical control of complex networks alongside{" "}
              <a
                href="https://scholar.google.de/citations?hl=it&user=xO0lRJIAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-primary transition-colors font-medium"
              >
                Prof. Franco Garofalo
              </a>
              . Motivated by an interest in large-scale operational problems, I moved to Germany to pursue a Ph.D. at the Technical University of Munich with{" "}
              <a
                href="https://scholar.google.de/citations?user=umGuS18AAAAJ&hl=it&oi=ao"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-primary transition-colors font-medium"
              >
                Prof. Maximilian Schiffer
              </a>
              , where I specialized in scalable optimization algorithms for high-dimensional mobility and logistics systems.
            </p>

            <p>
              During my doctoral studies, I actively contributed to the international Operations Research community through conference presentations and journal publications. I also worked as a visiting researcher at Polytechnique Montréal, collaborating with{" "}
              <a
                href="https://scholar.google.de/citations?hl=it&user=CilK624AAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-primary transition-colors"
              >
                Prof. Michel Gendreau
              </a>
              , where I expanded my focus on large-scale transportation optimization and algorithmic decision-making. Alongside research, I gained experience in teaching, thesis supervision, and applied collaborations with industry partners on real-world mobility systems.
            </p>
          </div>
        </div>

        {/* Right Column: Visualization */}
        <div className="hidden md:block w-full md:w-56 flex-shrink-0 self-start">
          <div className="overflow-hidden rounded-xl border border-primary/10 shadow-md bg-muted/20 p-1.5">
            <div className="group grayscale hover:grayscale-0 transition-all duration-700">
              <div className="relative aspect-[16/9] md:aspect-[3/4] overflow-hidden rounded-lg">
                <video
                  src={flowVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover scale-110"
                />

                <div className="absolute bottom-2 right-2 px-2 py-1.5 bg-white rounded-lg border border-border/80 shadow-sm z-10 flex flex-col gap-0.5 font-sans">
                  {[
                    { color: "bg-orange-400", label: "passenger" },
                    { color: "bg-blue-600", label: "pickup" },
                    { color: "bg-green-600", label: "rebalancing" },
                    { color: "bg-red-500", label: "idle" },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 leading-none">
                      <span className={`w-1.5 h-1.5 rounded-full ${item.color} flex-shrink-0`} />
                      <span className="text-[9px] text-slate-700 font-semibold tracking-tight">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="py-2 mt-1">
                <p className="text-[9px] uppercase tracking-[0.15em] text-center text-foreground/40 font-sans font-bold">
                  Manhattan Flow Simulation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 p-4 rounded-lg bg-background border border-border">
        <p className="text-xs font-sans uppercase tracking-wider text-foreground/50 mb-1">
          Fun fact
        </p>
        <div className="text-sm text-foreground/70 font-sans italic flex flex-col gap-1">
          <span>
            Outside research, I am the frontman of a rock band, where I explore a more creative and expressive side of my personality.
          </span>
          <span>
            I truly enjoy the process of writing music, performing and connecting with audiences.
          </span>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;