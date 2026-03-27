// No "use client" — this is a Server Component. All client work is in children.
import Wrapper from "./Wrapper";
import GridOverlay from "./common/GridOverlay";
import SectionGlows from "./common/SectionGlows";
import SectionHeading from "./common/SectionHeading";
import AvailabilityChips from "./contact/AvailabilityChips";
import ContactForm from "./contact/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full py-24 bg-zinc-950 overflow-hidden">
      <SectionGlows />
      <GridOverlay />

      <Wrapper className="relative z-10 max-w-5xl">
        <SectionHeading
          eyebrow="Say Hello"
          title={<>Let's Build<br />Something.</>}
          subtitle="Have a project in mind, a role to fill, or just want to talk shop?"
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-10 items-start">
          {/* md:col-span-2 — entry animation handled inside AvailabilityChips ("use client") */}
          <div className="md:col-span-2">
            <AvailabilityChips />
          </div>

          {/* md:col-span-3 — entry animation handled inside ContactForm ("use client") */}
          <div className="md:col-span-3">
            <ContactForm />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}