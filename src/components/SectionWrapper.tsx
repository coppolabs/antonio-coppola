import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "band";
}

const SectionWrapper = ({
  id,
  children,
  className = "",
  variant = "default",
}: SectionWrapperProps) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className={`scroll-mt-10 ${variant === "band" ? "bg-muted/5" : ""} ${className}`}
  >
    <div className="max-w-5xl mx-auto px-6 md:px-12 py-10 md:py-14">
      {children}
    </div>
  </motion.section>
);

export default SectionWrapper;