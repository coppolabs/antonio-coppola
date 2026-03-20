import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";

const experiences = [
  {
    position: "Doctoral Researcher (PhD Candidate)",
    org: (
      <>
        Technical University of Munich (TUM), School of Management, supervised by{" "}
        <a
          href="https://scholar.google.de/citations?user=umGuS18AAAAJ&hl=it&oi=ao"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          Prof. Maximilian Schiffer
        </a>
      </>
    ),
    dates: "2022 – Present",
    bullets: [
      "Research spatiotemporal coordination strategies for autonomous mobility-on-demand systems, with a focus on balanced and staggered routing for congestion mitigation and efficient fleet operations.",
      "Develop optimization- and learning-based methods for congestion-aware routing in robotaxi systems, resulting in publications in leading specialized journals, including the European Journal of Operational Research (EJOR).",
      "Designed and implemented large-scale experimental pipelines in Julia and Python, including HPC-based simulations, training workflows, and data analysis.",
      "Teaching Assistant for 'Modeling Future Mobility Systems', guiding student teams in developing solutions to complex transportation problems.",
      "Supervised multiple Master’s theses on extensions of routing and optimization models.",
      "Presented research at international conferences, including TSL 2023 in Chicago."
    ]
  },
  {
    position: "Visiting Researcher",
    org: (
      <>
        Polytechnique Montréal, hosted by{" "}
        <a
          href="https://scholar.google.de/citations?hl=it&user=CilK624AAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          Prof. Michel Gendreau
        </a>
      </>
    ),
    dates: "2025",
    bullets: [
      "Conducted collaborative research on transportation optimization within one of the leading operations research groups in the field.",
      "Strengthened international research collaborations and expanded academic exchange on large-scale mobility and routing problems."
    ]
  },
  {
    position: "Research Engineer – STEAM Project (Semi-Flexible Transit)",
    org: "Technical University of Munich",
    dates: "2023 – 2024",
    bullets: [
      "Implemented and evaluated algorithms for real-time semi-flexible bus routing using real-world mobility data.",
      "Designed and conducted large-scale experiments to assess system performance under dynamic demand.",
      "Participated in field trials, collecting and processing GPS data to evaluate operational outcomes.",
      "Performed data cleaning and analysis to derive insights from real-world deployment."
    ]
  },
  {
    position: "Research Assistant",
    org: (
      <>
        Università degli Studi di Napoli Federico II, supervised by{" "}
        <a
          href="https://scholar.google.de/citations?hl=it&user=xO0lRJIAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2"
        >
          Prof. Franco Garofalo
        </a>
      </>
    ),
    dates: "2020 – 2021",
    bullets: [
      "Collaborated on research in network dynamical systems following Master’s thesis work.",
      "Contributed to a publication in IEEE Control Systems Letters."
    ]
  }
];

const ExperienceSection = () => (
  <SectionWrapper id="experience">
    <SectionTitle>Experience</SectionTitle>
    <div className="space-y-8">
      {experiences.map((exp, i) => (
        <div key={i} className="relative pl-6 border-l-2 border-border">
          <div className="absolute -left-[7px] top-1 w-3 h-3 rounded-full bg-primary" />
          <h4 className="font-sans text-justify font-semibold text-foreground">
            {exp.position}
          </h4>
          <p className="text-sm text-meta font-sans text-justify">{exp.org}</p>
          <p className="text-xs text-meta font-sans text-justify mb-2">{exp.dates}</p>
          <ul className="space-y-1">
            {exp.bullets.map((b, j) => (
              <li
                key={j}
                className="flex gap-2 text-sm text-foreground/70 font-sans leading-relaxed"
              >
                <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-foreground/30 flex-shrink-0" />
                <span className="text-justify">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default ExperienceSection;