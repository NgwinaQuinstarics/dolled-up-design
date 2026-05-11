import { motion } from "framer-motion";
import { SectionTitle } from "./SectionTitle";
import g1 from "@/assets/g-hair.jpg";
import g2 from "@/assets/g-makeup.jpg";
import g3 from "@/assets/g-lash.jpg";
import g4 from "@/assets/g-nails.jpg";
import g5 from "@/assets/g-bridal.jpg";
import g6 from "@/assets/g-salon.jpg";

const items = [
  { src: g1, span: "row-span-2" },
  { src: g2, span: "" },
  { src: g3, span: "" },
  { src: g5, span: "row-span-2" },
  { src: g4, span: "" },
  { src: g6, span: "" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Gallery"
          title={<>Looks from the <span className="text-gradient-rose italic">studio</span></>}
          description="A peek inside the dolledbyVishi portfolio."
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 auto-rows-[180px] sm:auto-rows-[220px] gap-4">
          {items.map((it, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-xl glass group ${it.span}`}
            >
              <img
                src={it.src}
                alt="Look"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
