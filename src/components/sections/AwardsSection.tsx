import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { Award } from "lucide-react";

const scholarships = [
  {
    name: "Bavaria–Quebec Student Mobility Program",
    year: "May 2025",
    description: "Awarded by the Bavarian Research Alliance (BayFOR)",
  },
  {
    name: "Academic Training Program Scholarship",
    year: "Nov 2024",
    description: "Awarded by the TUM School of Management",
  },
  {
    name: "Erasmus+ Scholarship",
    year: "Sep 2019",
    description: "Awarded by the European Commission",
  },
];

const AwardsSection = () => (
  <SectionWrapper id="awards">
    <SectionTitle>Awarded Scholarships</SectionTitle>

    <div className="space-y-6 mt-6">
      {scholarships.map((award, i) => (
        <div key={i} className="flex items-start gap-4">
          <Award size={18} className="text-primary mt-1 flex-shrink-0" />

          <div>
            <p className="font-sans font-medium text-foreground text-base">
              {award.name}
              <span className="text-meta font-normal ml-2">
                · {award.year}
              </span>
            </p>

            <p className="text-sm text-foreground/70 font-sans mt-1 leading-relaxed">
              {award.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default AwardsSection;