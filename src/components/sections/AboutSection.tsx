import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { MapPin } from "lucide-react";

const interests = [
  "Combinatorial Optimization",
  "Machine Learning",
  "Learning-Augmented Optimization",
  "Dynamic Routing",
  "Mobility-on-Demand Systems",
  "Stochastic Optimization",
  "Network Optimization",
];

const AboutSection = () => (
  <SectionWrapper id="about" variant="band">
    <SectionTitle>About Me</SectionTitle>

    <div className="">
      <div className="-mt-4 mb-4 flex items-center gap-2 text-sm text-foreground/60 font-sans">
        <MapPin size={14} />
        Munich, Germany
      </div>

      <div className="space-y-4 text-foreground/80 font-sans leading-[1.65] text-justify">
        <p>
          I am a Ph.D. candidate in Operations Research at the Technical University of Munich, working at the intersection of machine learning and combinatorial optimization. My research focuses on large-scale dynamic routing problems, with a particular emphasis on mobility-on-demand systems and congestion-aware decision-making.
        </p>

        <p>
          I began my academic journey in Naples, where I studied industrial engineering and worked on control of complex networked systems under the supervision of{" "}
          <a
            href="https://scholar.google.de/citations?hl=it&user=xO0lRJIAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Prof. Franco Garofalo
          </a>.
          {" "}I then moved to Germany to pursue a Ph.D. at TUM under{" "}
          <a
            href="https://scholar.google.de/citations?user=umGuS18AAAAJ&hl=it&oi=ao"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Prof. Maximilian Schiffer
          </a>, shifting my focus toward operations research and mobility systems. This led me to develop optimization models for large-scale transportation systems, and ultimately to integrate learning-based approaches for decision-making under uncertainty.
        </p>

        <p>
          Through my work, I engaged with the international operations research community, presenting at major conferences. This path brought me to Montréal, where I visited Polytechnique Montréal and worked with{" "}
          <a
            href="https://scholar.google.de/citations?hl=it&user=CilK624AAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            Prof. Michel Gendreau
          </a> on transportation optimization, further strengthening my perspective on large-scale mobility systems.
        </p>

        <p>
          More broadly, I am interested in how intelligent decision systems can improve the efficiency and sustainability of complex infrastructures. I enjoy building end-to-end systems—from modeling and algorithm design to experimentation and visualization—that make these ideas concrete and impactful.
        </p>
      </div>
    </div>

    <div className="mt-8">
      <h3 className="text-sm font-sans font-semibold text-foreground/60 uppercase tracking-wider mb-3">
        Research Interests
      </h3>
      <div className="flex flex-wrap gap-2">
        {interests.map((interest) => (
          <span
            key={interest}
            className="px-3 py-1.5 text-sm font-sans bg-primary/10 text-primary rounded-full"
          >
            {interest}
          </span>
        ))}
      </div>
    </div>

    <div className="mt-8 p-4 rounded-lg bg-background border border-border">
      <p className="text-xs font-sans uppercase tracking-wider text-foreground/50 mb-1">
        Fun fact
      </p>
      <p className="text-sm text-foreground/70 font-sans italic">
        Outside research, I am the frontman of a rock band.
        <br></br>
        I truly enjoy the process of writing music, performing and connecting with audiences.
      </p>
    </div>
  </SectionWrapper>
);

export default AboutSection;