import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { FileText, Code, ExternalLink } from "lucide-react";
import StaggeredRouting from "@/assets/papers/staggered_routing.pdf";
import IntegBalStag from "@/assets/papers/integ_bal_stag_arxiv.pdf";
import LCSS21Unilaral from "@/assets/papers/LCSS_21_unilateral.pdf";

interface Publication {
  title: string;
  authors: string;
  venue: string;
  description: string;
  pdfHref?: string;
  codeHref?: string;
  pageHref?: string;
}

const publications: Publication[] = [
  {
    title: "Staggered Routing in Autonomous Mobility-on-Demand Systems",
    authors:
      "Antonio Coppola, Gerhard Hiermann, Dario Paccagnan, Maximilian Schiffer",
    venue: "European Journal of Operational Research, 327(3):875–891, 2025",
    description:
      "Introduces staggered routing for AMoD systems to mitigate congestion through coordinated departure-time control on shared networks.",
    pdfHref: StaggeredRouting,
    codeHref: "https://github.com/tumBAIS/staggered_routing_in_amod_systems", // TODO: replace with repository link
    pageHref: "https://www.sciencedirect.com/science/article/pii/S0377221725004771", // TODO: replace with journal / paper page
  },
  {
    title: "Partial Controllability of Network Dynamical Systems with Unilateral Inputs",
    authors:
      "Camilla Ancona, Francesco Lo Iudice, Antonio Coppola, Pietro De Lellis, Francesco Garofalo",
    venue: "IEEE Control Systems Letters, 6:2252–2257, 2021",
    description:
      "Studies controllability properties of network dynamical systems under unilateral inputs, with a focus on structural limitations and control design implications.",
    pdfHref: LCSS21Unilaral,
    pageHref: "https://ieeexplore.ieee.org/document/9670453/", // TODO: replace with IEEE / paper page
  },
];

const workingPapers: Publication[] = [
  {
    title: "Integrated Balanced and Staggered Routing in AMoD Systems",
    authors:
      "Antonio Coppola, Gerhard Hiermann, Dario Paccagnan, Michel Gendreau, Maximilian Schiffer",
    venue: "Under revision at Transportation Science, 2025",
    description:
      "Develops an integrated optimization framework combining balanced and staggered routing to improve system-wide congestion management in AMoD operations.",
    pdfHref: IntegBalStag,
    codeHref: "https://github.com/tumBAIS/integ_bal_stag",
    pageHref: "https://arxiv.org/abs/2506.19722",
  },
  {
    title: "Online Balanced and Staggered Routing",
    authors: "Antonio Coppola",
    venue: "Work in progress, 2025",
    description:
      "Explores online decision-making for balanced and staggered routing under dynamic demand, with the goal of scalable and anticipatory fleet control.",
  },
];

const PublicationItem = ({ pub }: { pub: Publication }) => (
  <div className="py-6 border-b border-border last:border-b-0">
    <h4 className="font-sans font-semibold text-foreground text-base leading-snug">
      {pub.title}
    </h4>
    <p className="text-sm text-meta font-sans mt-1">{pub.authors}</p>
    <p className="text-sm text-meta font-sans italic mt-0.5">{pub.venue}</p>
    <p className="text-sm text-foreground/70 font-sans mt-2 leading-relaxed">
      {pub.description}
    </p>

    <div className="flex flex-wrap gap-4 mt-3">
      {pub.pdfHref && (
        <a
          href={pub.pdfHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-sans font-medium text-primary hover:text-primary/80 transition-colors"
        >
          <FileText size={14} />
          PDF
        </a>
      )}

      {pub.codeHref && (
        <a
          href={pub.codeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-sans font-medium text-primary hover:text-primary/80 transition-colors"
        >
          <Code size={14} />
          Code
        </a>
      )}

      {pub.pageHref && (
        <a
          href={pub.pageHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-sans font-medium text-primary hover:text-primary/80 transition-colors"
        >
          <ExternalLink size={14} />
          Paper page
        </a>
      )}
    </div>
  </div>
);

const ResearchSection = () => (
  <SectionWrapper id="research">
    <SectionTitle>Research & Publications</SectionTitle>

    <h3 className="text-sm font-sans font-semibold text-meta uppercase tracking-wider mb-2">
      Publications
    </h3>
    <div className="mb-10">
      {publications.map((pub) => (
        <PublicationItem key={pub.title} pub={pub} />
      ))}
    </div>

    <h3 className="text-sm font-sans font-semibold text-meta uppercase tracking-wider mb-2">
      Working Papers & Preprints
    </h3>
    <div>
      {workingPapers.map((pub) => (
        <PublicationItem key={pub.title} pub={pub} />
      ))}
    </div>
  </SectionWrapper>
);

export default ResearchSection;