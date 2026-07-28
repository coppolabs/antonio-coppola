import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";

const experiences = [
  {
    position: "Optimization Engineer — Mobility AI",
    org: (
      <>
        Technical University of Munich • Supervised by{" "}
        <a
          href="https://scholar.google.com/citations?user=umGuS18AAAAJ&hl=en"
          className="underline underline-offset-2 hover:text-primary transition-colors"
        >
          Prof. Maximilian Schiffer
        </a>
      </>
    ),
    dates: "2022 – 2026",
    details: [
      "Designed and implemented simulation frameworks for congestion-aware autonomous mobility-on-demand (AMoD) systems",
      "Developed scalable optimization solvers combining matheuristics, metaheuristics, and ML-guided components (GLMs, MLPs, GNNs)",
      "Conducted large-scale experiments on real-world transportation networks using empirical demand data",
      "Achieved up to 35% reduction in congestion delays under realistic urban mobility scenarios",
      "Built end-to-end pipelines for simulation, optimization, and visualization in Python, Julia, and C++ with CI/CD workflows",
      "Published in leading operations research journals; multiple manuscripts under review",
      "Supervised Master’s theses and contributed to teaching activities",
      "Collaborated across international research groups (TUM, Polytechnique Montréal, Imperial College London)"
    ]
  },
  {
    position: "Research Engineer — Large-Scale Transportation Optimization",
    org: (
      <>
        Polytechnique Montréal • Hosted by{" "}
        <a
          href="https://scholar.google.com/citations?user=CilK624AAAAJ&hl=en"
          className="underline underline-offset-2 hover:text-primary transition-colors"
        >
          Prof. Michel Gendreau
        </a>
      </>
    ),
    dates: "2025",
    details: [
      "Collaborated with a world-leading researcher in transportation science on large-scale optimization and metaheuristic design",
      "Implemented and benchmarked state-of-the-art large neighborhood search (LNS) algorithms for vehicle routing problems",
      "Contributed to international operations research collaborations, including conference presentations and academic reading groups",
      "Produced technical reports and presentations translating complex optimization results for both academic and applied audiences"
    ]
  },
  {
    position: "Software Engineer — Transit Optimization & Field Deployment",
    org: (
      <>
        <a
          href="https://mcube-cluster.de/en/projekt/steam/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-primary transition-colors"
        >
          STEAM Project
        </a>{" "}
        • MCube Cluster
      </>
    ),
    dates: "2024",
    details: [
      "Led development of a semi-flexible transit optimization system from algorithm design to field deployment",
      "Designed demand-responsive scheduling algorithms improving passenger walking distance and vehicle occupancy",
      "Executed a large-scale mobility experiment, collecting and analyzing GPS telemetry and user interaction data",
      "Translated operational constraints from industry partners (BMW, SWM, MAN) into optimization models and deployable solutions"
    ]
  },
  {
    position: "Engineering Intern — Network Dynamical Systems",
    org: (
      <>
        University of Naples Federico II • Supervised by{" "}
        <a
          href="https://scholar.google.com/citations?user=xO0lRJIAAAAJ&hl=it"
          className="underline underline-offset-2 hover:text-primary transition-colors"
        >
          Prof. Franco Garofalo
        </a>
      </>
    ),
    dates: "2021",
    details: [
      "Studied controllability properties of complex network dynamical systems",
      "Co-authored peer-reviewed publication in IEEE Control Systems Letters"
    ]
  }
];

const ExperienceSection = () => (
  <SectionWrapper id="experience" variant="band">
    <SectionTitle>Working Experience</SectionTitle>
    <div className="space-y-8">
      {experiences.map((exp, i) => (
        <div key={i} className="relative pl-8 border-l border-border/60">
          {/* Timeline Dot */}
          <div className="absolute -left-[4.5px] top-1.5 w-2 h-2 rounded-full bg-primary shadow-sm" />

          {/* Header Area */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 -mb-0 mt-1">
            <h4 className="font-sans font-bold text-foreground text-lg leading-tight">
              {exp.position}
            </h4>
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-primary/80 whitespace-nowrap">
              {exp.dates}
            </span>
          </div>

          {/* Organization/Supervision */}
          <p className="text-sm font-sans font-medium text-foreground/80 mb-5 mt-1">
            {exp.org}
          </p>

          {/* Bulleted Details from CV */}
          <ul className="space-y-1">
            {exp.details.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-foreground/70 font-sans leading-relaxed -mt-3">
                <span className="mt-2 w-1 h-1 rounded-full bg-primary/40 flex-shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default ExperienceSection;