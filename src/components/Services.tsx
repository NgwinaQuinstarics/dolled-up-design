import { motion } from "framer-motion";
import { GiHairStrands, GiLipstick, GiNails } from "react-icons/gi";
import { PiEyeBold } from "react-icons/pi";
import { SectionTitle } from "./SectionTitle";

const services = [
  {
    icon: GiHairStrands,
    title: "Hair Styling & Installation",
    desc: "Sleek installs, voluminous wigs, silk presses and bridal updos crafted to perfection.",
  },
  {
    icon: GiNails,
    title: "Nails",
    desc: "Luxury manicures, gel extensions and bespoke nail art on every set.",
  },
  {
    icon: GiLipstick,
    title: "Makeup",
    desc: "Soft glam, full glam and editorial looks tailored to your skin and occasion.",
  },
  {
    icon: PiEyeBold,
    title: "Lash Extensions",
    desc: "Classic, hybrid and volume sets — featherlight, fluffy and flawlessly retained.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Services"
          title={<>Signature <span className="text-gradient-rose italic">treatments</span></>}
          description="A curated menu of beauty services, delivered with luxury-level care."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-7 hover-glow group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-rose/20 grid place-items-center mb-5 ring-1 ring-primary/30 group-hover:scale-110 transition-transform">
                <s.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-display text-2xl mb-2">{s.title}</h3>
              <p className="text-sm text-foreground/65 leading-relaxed">{s.desc}</p>
              <div className="mt-6 text-xs uppercase tracking-widest text-primary/80 opacity-0 group-hover:opacity-100 transition-opacity">
                Book →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
