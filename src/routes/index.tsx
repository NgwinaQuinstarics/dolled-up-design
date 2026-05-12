import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { SectionTitle } from "@/components/SectionTitle";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "dolledbyVishi · Luxury Beauty Studio in Bamenda" },
      {
        name: "description",
        content:
          "Luxury hair, nails, makeup and lash extensions in Bamenda. Book your glow with Vishi.",
      },
      { property: "og:title", content: "dolledbyVishi · Luxury Beauty Studio" },
      {
        property: "og:description",
        content: "Hair, nails, makeup & lash extensions crafted with elegance.",
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Hero />

      {/* Brief about teaser */}
      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-rose opacity-20 blur-3xl rounded-full" />
            <div className="relative overflow-hidden rounded-2xl glass-strong p-2">
              <img
                src={aboutImg}
                alt="Vishi at work in the studio"
                loading="lazy"
                className="rounded-xl w-full h-[480px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">The Studio</p>
            <h2 className="font-display text-4xl sm:text-5xl mb-6">
              Beauty, <span className="text-gradient-rose italic">refined</span>.
            </h2>
            <p className="text-foreground/75 leading-relaxed mb-8">
              dolledbyVishi is a luxury beauty house born from a love of artistry,
              femininity and detail. From sleek installs to soft glam — every look
              is created with intention, premium products and an unwavering eye
              for elegance.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium border border-primary/40 text-foreground hover:bg-primary/10 transition-colors"
            >
              Discover our story →
            </Link>
          </motion.div>
        </div>
      </section>

      <Services />

      {/* Gallery teaser CTA */}
      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <SectionTitle
            eyebrow="Portfolio"
            title={<>A glimpse into the <span className="text-gradient-rose italic">artistry</span></>}
            description="Explore the full gallery of looks created in the dolledbyVishi studio."
          />
          <Link
            to="/gallery"
            className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium bg-gradient-rose text-primary-foreground hover-glow"
          >
            View Full Gallery
          </Link>
        </div>
      </section>

      <Testimonials />

      {/* Final CTA */}
      <section className="relative py-24">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 text-center">
          <h2 className="font-display text-4xl sm:text-5xl mb-6">
            Ready to feel <span className="text-gradient-rose italic">undeniably radiant</span>?
          </h2>
          <p className="text-foreground/70 mb-8">
            Reserve your appointment with Vishi today.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center justify-center rounded-full px-10 py-4 text-sm font-medium bg-gradient-rose text-primary-foreground hover-glow"
          >
            Book Your Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
