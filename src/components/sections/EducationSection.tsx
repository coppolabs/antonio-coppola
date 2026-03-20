import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree:
      "Ph.D. Candidate, Business Analytics and Intelligent Systems",
    institution:
      "TUM School of Management, Technical University of Munich",
    dates: "2022 – 2026",
    details: "Professorship for Business Analytics and Intelligent Systems",
  },
  {
    degree: "M.Sc. in Industrial Engineering",
    institution:
      "Università degli Studi di Napoli Federico II, Naples, Italy",
    dates: "Mar 2021",
  },
  {
    degree: "B.Sc. in Industrial Engineering",
    institution:
      "Università degli Studi di Napoli Federico II, Naples, Italy",
    dates: "Jan 2018",
  },
  {
    degree: "EsaBac – Italian–French Dual Diploma",
    institution:
      "Liceo Classico Europeo, Convitto Nazionale “Vittorio Emanuele II”, Naples, Italy",
    dates: "Jul 2014",
  },
];

const EducationSection = () => (
  <SectionWrapper id="education" surface>
    <SectionTitle>Education</SectionTitle>

    <div className="mt-6 space-y-8">
      {education.map((ed, i) => (
        <div
          key={i}
          className="grid grid-cols-[auto_1fr_auto] gap-4 items-start"
        >
          {/* Icon */}
          <div className="mt-1 p-2 rounded-lg bg-primary/10 text-primary">
            <GraduationCap size={20} />
          </div>

          {/* Main content */}
          <div>
            <h4 className="font-sans font-semibold text-foreground text-base leading-snug">
              {ed.degree}
            </h4>

            <p className="text-sm text-meta font-sans mt-1">
              {ed.institution}
            </p>

            {ed.details && (
              <p className="text-sm text-foreground/70 font-sans mt-1">
                {ed.details}
              </p>
            )}
          </div>

          {/* Date (right aligned column) */}
          <div className="text-sm text-meta font-sans whitespace-nowrap pt-1">
            {ed.dates}
          </div>
        </div>
      ))}
    </div>
  </SectionWrapper>
);

export default EducationSection;