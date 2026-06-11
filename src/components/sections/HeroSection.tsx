import { FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.png";
import cvFile from "@/assets/AC_CV.pdf";

const HeroSection = () => (
  <section
    id="hero"
    className="scroll-mt-28 -mt-20 min-h-[70vh] flex items-center pt-20 pb-8 md:pb-20"
  >
    <div className="max-w-4xl mx-auto w-full px-6 md:px-12">
      {/* Header */}
      <div className="mb-10 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
          Antonio Coppola
        </h1>
        <p className="text-base md:text-lg text-primary mt-3 font-sans font-medium uppercase tracking-[0.08em] md:tracking-wide">
          Optimization Engineer | Operations Research | Artificial Intelligence
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-stretch gap-10 lg:gap-14 -mt-5">
        {/* Profile image (desktop) */}
        <div className="hidden md:block flex-shrink-0 w-52 md:w-64 mx-auto md:mx-0">
          <img
            src={profileImg}
            alt="Antonio Coppola"
            className="w-full h-full rounded-xl border-4 border-primary/10 shadow-xl aspect-square object-cover object-[50%_20%]"
          />
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between text-center md:text-left">
          <div className="max-w-[530px] md:-ml-9 text-foreground/80 font-sans leading-relaxed text-left md:text-justify [hyphens:auto] break-words">
            <p>
              I am an Optimization Engineer with +4 years of experience, working in the field of Operations Research.
              I design and implement advanced algorithms for complex decision-making under uncertainty,
              leveraging combinatorial optimization, machine learning, and artificial intelligence as core methodologies.
            </p>

            <p className="mt-4">
              My recent work has focused on large-scale transportation and mobility systems,
              where I design optimization models and decision-support tools for real-world operational challenges.
              Beyond mobility, my expertise extends to other domains, such as resource allocation, scheduling, routing, network design and strategic planning.
            </p>

            <p className="mt-4">
              I focus on bridging theory and practice by translating advanced mathematical models into robust software systems.
              From algorithm design and experimentation to deployment, I build solutions that are both efficient and aligned
              with real-world constraints and operational requirements.</p>

            <p className="mt-5 text-sm font-medium border-l-2 border-primary/30 pl-4 italic">
              I’m always open to research collaborations, industry opportunities, or simply connecting to share ideas. Feel free to reach out!
            </p>

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-8 justify-center md:justify-start md:-ml-9">
            <a href={cvFile} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                className="h-9 px-4 border-primary text-primary hover:bg-primary/5 transition-colors"
              >
                <FileText size={16} className="mr-2" />
                View Resume
              </Button>
            </a>

            <a href="mailto:antonio.coppola364@gmail.com">
              <Button
                variant="outline"
                className="h-9 px-4 border-primary text-primary hover:bg-primary/5 transition-colors"
              >
                <Mail size={16} className="mr-2" />
                Get in Touch
              </Button>
            </a>
          </div>

          {/* Mobile Image */}
          <div className="mt-6 mb-4 md:hidden flex justify-center">
            <div className="w-12">
              <img
                src={profileImg}
                alt="Antonio Coppola"
                className="w-full rounded-xl border-4 border-primary/10 shadow-lg aspect-square object-cover object-[50%_20%]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;