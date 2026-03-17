"use client";
import { motion } from "framer-motion";
import Wrapper from "./Wrapper";
import GridOverlay from "./common/GridOverlay";
import SectionHeading from "./common/SectionHeading";
import AvailabilityChips from "./contact/AvailabilityChips";
import ContactForm from "./contact/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full py-24 bg-zinc-950 overflow-hidden">
      {/* Ambient glows */}
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, #f97316 0%, transparent 70%)" }} />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full opacity-10" style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }} />
      <GridOverlay />

      <Wrapper className="relative z-10 max-w-5xl">
        <SectionHeading
          eyebrow="Say Hello"
          title={<>Let's Build<br />Something.</>}
          subtitle="Have a project in mind, a role to fill, or just want to talk shop?"
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 items-start">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <AvailabilityChips />
          </motion.div>

          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </Wrapper>
    </section>
  );
}