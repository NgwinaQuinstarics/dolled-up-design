import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { About } from "@/components/About";
import { SectionTitle } from "@/components/SectionTitle";
import { FaHeart, FaGem, FaStar, FaSpa } from "react-icons/fa";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About · dolledbyVishi" },
      {
        name: "description",
        content:
          "Meet Vishi — the artist behind dolledbyVishi. Discover our philosophy, our studio and our commitment to luxury beauty.",
      },
      { property: "og:title", content: "About dolledbyVishi" },
      {
        property: "og:description",
        content: "Meet Vishi and the philosophy behind the luxury beauty house.",
      },
    ],
  }),
});

const values = [
  { icon: FaHeart, title: "Artistry First", text: "Every look is treated as a canvas — sculpted with patience, intention and love." },
  { icon: FaGem, title: "Premium Products", text: "Only the finest, skin-loving brands grace our kit and our chairs." },
  { icon: FaSpa, title: "Sanctuary Vibes", text: "A serene, scented studio where you can fully exhale and be pampered." },
  { icon: FaStar, title: "Detail Obsessed", text: "From a single misplaced lash to a perfect blend line — we sweat the small things." },
];

function AboutPage() {
  return (
    <div className="pt-24">
      <PageHero
        eyebrow="Our Story"
        title={<>The artist behind <span className="text-gradient-rose italic">dolledbyVishi</span></>}
        subtitle="A luxury beauty house built on artistry, femininity and unwavering attention to detail."
      />

      <About />

      {/* Philosophy */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="Philosophy"
            title={<>What we <span className="text-gradient-rose italic">believe</span></>}
            description="The principles that shape every appointment in the dolledbyVishi studio."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="glass rounded-2xl p-7 text-center hover-glow"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-rose/20 ring-1 ring-primary/30 grid place-items-center mb-5">
                  <v.icon className="text-primary" />
                </div>
                <h3 className="font-display text-xl mb-2">{v.title}</h3>
                <p className="text-sm text-foreground/65 leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <SectionTitle
            eyebrow="Journey"
            title={<>From passion to <span className="text-gradient-rose italic">profession</span></>}
          />
          <div className="space-y-10">
            {[
              { year: "2021", title: "The Beginning", text: "Started doing makeup for friends and family — quickly realised this was a calling, not a hobby." },
              { year: "2022", title: "Going Pro", text: "Trained intensively in lash extensions, hair installations and editorial makeup. Built a clientele through word of mouth." },
              { year: "2024", title: "The Studio", text: "Opened the doors to the dolledbyVishi studio in Bamenda — a private, luxury sanctuary for our clients." },
              { year: "Today", title: "Two Studios", text: "Serving brides, creators and women across Bamenda from two studios — Up Station · City Chemist and Mile 4 Park · Nkwen." },
            ].map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-20 font-display text-2xl text-gradient-rose">{m.year}</div>
                <div className="flex-1 glass rounded-2xl p-6">
                  <h3 className="font-display text-2xl mb-2">{m.title}</h3>
                  <p className="text-sm text-foreground/65 leading-relaxed">{m.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle: string }) {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-rose opacity-10 blur-[120px] -z-10" />
      <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs tracking-[0.4em] uppercase text-primary mb-5"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl lg:text-7xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-foreground/70 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
        <div className="divider-rose w-40 mx-auto mt-10" />
      </div>
    </section>
  );
}
