import SectionWrapper from "@/components/SectionWrapper";
import SectionTitle from "@/components/SectionTitle";

const SkillsSection = () => {
  const coreTech = [
    {
      category: "Programming",
      skills: ["Python", "Julia", "C++", "TypeScript"],
    },
    {
      category: "Optimization & OR",
      skills: ["LP", "MILP", "Matheuristics", "Metaheuristics", "Gurobi", "CPLEX"],
    },
    {
      category: "Machine Learning",
      skills: ["Supervised Learning", "Imitation Learning", "Deep Learning", "GNNs", "Contextual Modeling"],
    },
  ];

  const tools = ["Git", "Docker", "LaTeX", "React", "CI/CD"];

  const languages = [
    { name: "Italian", level: "native" },
    { name: "English", level: "full professional proficiency" },
    { name: "German", level: "fluent" },
    { name: "French", level: "conversational" },
    { name: "Portuguese", level: "conversational" },
  ];

  return (
    <SectionWrapper id="skills" variant="band" className="py-16 md:py-14">
      <div className="-mt-14 space-y-8">
        <SectionTitle>Skills & Toolkit</SectionTitle>

        <div className="divide-y divide-border/30 space-y-6">
          {/* Core Technical Capabilities */}
          {coreTech.map((group) => (
            <div
              key={group.category}
              className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-y-3 md:gap-x-8 items-start pt-6 first:pt-0"
            >
              <h4 className="text-xs font-sans font-bold uppercase tracking-[0.14em] text-primary/80 pt-1.5">
                {group.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-border/80 bg-white px-3 py-1 text-[13px] font-sans font-medium text-slate-900 shadow-sm transition-colors hover:border-primary/40"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Tools & Infrastructure Row */}
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-y-3 md:gap-x-8 items-start pt-6">
            <h4 className="text-xs font-sans font-semibold uppercase tracking-[0.14em] text-foreground/50 pt-1.5">
              Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-lg border border-border/80 bg-white px-3 py-1 text-[13px] font-sans font-medium text-slate-900 shadow-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Languages Row */}
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-y-3 md:gap-x-8 items-start pt-6">
            <h4 className="text-xs font-sans font-semibold uppercase tracking-[0.14em] text-foreground/50 pt-1.5">
              Languages
            </h4>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <span
                  key={lang.name}
                  className="inline-flex items-center rounded-lg border border-border/80 bg-white px-3 py-1 text-[13px] font-sans text-slate-900 shadow-sm"
                >
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-[11px] text-slate-500 font-normal italic font-sans ml-1.5">
                    ({lang.level})
                  </span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;