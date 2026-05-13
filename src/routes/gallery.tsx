import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import g1 from "@/assets/g-hair.jpg";
import g2 from "@/assets/g-makeup.jpg";
import g3 from "@/assets/g-lash.jpg";
import g4 from "@/assets/g-nails.jpg";
import g5 from "@/assets/g-bridal.jpg";
import g6 from "@/assets/g-salon.jpg";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery · dolledbyVishi" },
      {
        name: "description",
        content: "Browse the dolledbyVishi portfolio — hair installs, glam looks, lashes, nails and bridal beauty.",
      },
      { property: "og:title", content: "dolledbyVishi Gallery" },
      { property: "og:description", content: "Looks from the studio." },
    ],
  }),
});

type Cat = "All" | "Hair" | "Makeup" | "Lashes" | "Nails" | "Bridal";

const items: { src: string; cat: Cat; alt: string }[] = [
  { src: g1, cat: "Hair", alt: "Frontal install" },
  { src: g2, cat: "Makeup", alt: "Soft glam look" },
  { src: g3, cat: "Lashes", alt: "Volume lash set" },
  { src: g4, cat: "Nails", alt: "Luxury manicure" },
  { src: g5, cat: "Bridal", alt: "Bridal beauty" },
  { src: g6, cat: "Hair", alt: "Studio styling" },
  { src: g2, cat: "Bridal", alt: "Bridal glam" },
  { src: g4, cat: "Nails", alt: "Nail art set" },
  { src: g1, cat: "Hair", alt: "Sleek install" },
  { src: g3, cat: "Lashes", alt: "Hybrid lashes" },
  { src: g4, cat: "Nails", alt: "Nail art set" },
  { src: g5, cat: "Makeup", alt: "Editorial glam" },
  { src: g6, cat: "Hair", alt: "Polished updo" },
  { src: g1, cat: "Hair", alt: "Bodywave install" },
  { src: g2, cat: "Makeup", alt: "Bronze cut crease" },
  { src: g3, cat: "Lashes", alt: "Wispy mega volume" },
  { src: g4, cat: "Nails", alt: "French chrome tips" },
  { src: g5, cat: "Bridal", alt: "Traditional bridal" },
  { src: g6, cat: "Hair", alt: "Sleek low bun" },
  { src: g2, cat: "Makeup", alt: "Soft pink glam" },
  { src: g4, cat: "Nails", alt: "Almond rose set" },
  { src: g3, cat: "Lashes", alt: "Natural classics" },
  { src: g5, cat: "Bridal", alt: "Civil ceremony look" },
  { src: g1, cat: "Hair", alt: "Curly closure" },
  { src: g2, cat: "Makeup", alt: "Birthday glam" },
];

const cats: Cat[] = ["All", "Hair", "Makeup", "Lashes", "Nails", "Bridal"];

function GalleryPage() {
  const [active, setActive] = useState<Cat>("All");
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <div className="pt-24">
      <section className="relative py-16 sm:py-24">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-rose opacity-10 blur-[120px] -z-10" />
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-5">Portfolio</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl">
            Looks from the <span className="text-gradient-rose italic">studio</span>
          </h1>
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
            A curated selection of recent work — hair, glam, lashes, nails and bridal beauty.
          </p>
          <div className="divider-rose w-40 mx-auto mt-10" />
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          {/* Filter chips */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-widest transition ${
                  active === c
                    ? "bg-gradient-rose text-primary-foreground"
                    : "glass text-foreground/70 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 auto-rows-[200px] sm:auto-rows-[260px] gap-4">
            <AnimatePresence>
              {filtered.map((it, i) => (
                <motion.figure
                  layout
                  key={`${it.src}-${i}-${active}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: (i % 6) * 0.04 }}
                  className={`relative overflow-hidden rounded-xl glass group ${i % 5 === 0 ? "row-span-2" : ""}`}
                >
                  <img
                    src={it.src}
                    alt={it.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <figcaption className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs uppercase tracking-widest text-primary">{it.cat}</span>
                    <div className="font-display text-lg text-foreground">{it.alt}</div>
                  </figcaption>
                </motion.figure>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="text-center mt-16">
            <p className="text-foreground/65 mb-5">Love what you see?</p>
            <Link
              to="/booking"
              className="inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-medium bg-gradient-rose text-primary-foreground hover-glow"
            >
              Book Your Look
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
