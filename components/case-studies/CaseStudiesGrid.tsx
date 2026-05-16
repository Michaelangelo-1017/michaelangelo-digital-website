"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { CaseStudyCard } from "@/components/case-studies/CaseStudyCard";
import { CASE_STUDIES } from "@/data/caseStudies";
import { staggerContainer } from "@/lib/animations";

export function CaseStudiesGrid() {
  return (
    <section className="bg-cream py-24 sm:py-28 lg:py-32">
      <Container size="wide">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {CASE_STUDIES.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
