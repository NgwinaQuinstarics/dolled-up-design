import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GiHairStrands, GiLipstick, GiNails } from "react-icons/gi";
import { PiEyeBold } from "react-icons/pi";
import { SectionTitle } from "@/components/SectionTitle";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services · dolledbyVishi" },
      {
        name: "description",
        content:
          "Hair, nails, makeup and lash extensions. Explore the full menu of luxury beauty services at dolledbyVishi.",
      },
      { property: "og:title", content: "dolledbyVishi Services" },
      { property: "og:description", content: "Hair, nails, makeup & lash extensions in Bamenda." },
    ],
  }),
});

const categories = [
  {
    icon: GiHairStrands,
    title: "Hair Styling & Installation",
    intro: "Sleek installs, voluminous wigs, silk presses and bridal updos crafted to perfection.",
    items: [
      { name: "Wig Installation (Frontal/Closure)", duration: "2 – 3 hrs", price: "From XAF 25,000" },
      { name: "Custom Wig Making", duration: "By order", price: "From XAF 60,000" },
      { name: "Silk Press / Blowout", duration: "1.5 hrs", price: "From XAF 15,000" },
      { name: "Bridal Updo / Styling", duration: "2 hrs", price: "From XAF 35,000" },
      { name: "Box Braids / Knotless", duration: "4 – 6 hrs", price: "From XAF 20,000" },
    ],
  },
  {
    icon: GiNails,
    title: "Nails",
    intro: "Luxury manicures, gel extensions and bespoke nail art on every set.",
    items: [
      { name: "Classic Manicure", duration: "45 min", price: "From XAF 5,000" },
      { name: "Gel Polish (Hands or Feet)", duration: "1 hr", price: "From XAF 8,000" },
      { name: "Gel Extensions / Builder Gel", duration: "1.5 – 2 hrs", price: "From XAF 15,000" },
      { name: "Acrylic Full Set", duration: "2 hrs", price: "From XAF 18,000" },
      { name: "Nail Art (per design)", duration: "+15 min", price: "From XAF 1,000" },
    ],
  },
  {
    icon: GiLipstick,
    title: "Makeup",
    intro: "Soft glam, full glam and editorial looks tailored to your skin and occasion.",
    items: [
      { name: "Soft Glam", duration: "1 hr", price: "From XAF 15,000" },
      { name: "Full Glam", duration: "1.5 hrs", price: "From XAF 25,000" },
      { name: "Bridal Makeup (Trial included)", duration: "2.5 hrs", price: "From XAF 75,000" },
      { name: "Editorial / Photoshoot", duration: "1.5 hrs", price: "From XAF 30,000" },
      { name: "Lashes Application Only", duration: "20 min", price: "From XAF 3,000" },
    ],
  },
  {
    icon: PiEyeBold,
    title: "Lash Extensions",
    intro: "Classic, hybrid and volume sets — featherlight, fluffy and flawlessly retained.",
    items: [
      { name: "Classic Set", duration: "1.5 hrs", price: "From XAF 15,000" },
      { name: "Hybrid Set", duration: "2 hrs", price: "From XAF 20,000" },
      { name: "Volume / Mega Volume", duration: "2.5 hrs", price: "From XAF 25,000" },
      { name: "Refill (within 3 weeks)", duration: "1 hr", price: "From XAF 10,000" },
      { name: "Lash Removal", duration: "30 min", price: "From XAF 3,000" },
    ],
  },
];

function ServicesPage() {
  return (
    <div className="pt-24">
      <section className="relative py-16 sm:py-24">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-rose opacity-10 blur-[120px] -z-10" />
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-5">Services</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl">
            The full <span className="text-gradient-rose italic">menu</span>
          </h1>
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
            A curated list of every service offered at the dolledbyVishi studio.
            Custom packages available on request — just ask.
          </p>
          <div className="divider-rose w-40 mx-auto mt-10" />
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 space-y-16">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="glass-strong rounded-3xl p-7 sm:p-10"
            >
              <div className="flex items-start gap-5 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-rose/20 ring-1 ring-primary/30 grid place-items-center flex-shrink-0">
                  <cat.icon className="text-primary" size={28} />
                </div>
                <div>
                  <h2 className="font-display text-3xl sm:text-4xl">{cat.title}</h2>
                  <p className="text-sm text-foreground/65 mt-2 max-w-2xl">{cat.intro}</p>
                </div>
              </div>

              <div className="divide-y divide-primary/10">
                {cat.items.map((it) => (
                  <div key={it.name} className="py-4 flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <div className="font-display text-lg">{it.name}</div>
                      <div className="text-xs uppercase tracking-widest text-foreground/50 mt-1">{it.duration}</div>
                    </div>
                    <div className="text-sm text-gradient-rose font-medium">{it.price}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium bg-gradient-rose text-primary-foreground hover-glow"
                >
                  Book {cat.title.split(" ")[0]} →
                </Link>
              </div>
            </motion.div>
          ))}

          <p className="text-center text-xs text-foreground/50">
            * Prices are starting points and may vary based on length, complexity, and products used.
            A final quote is confirmed at consultation.
          </p>
        </div>
      </section>
    </div>
  );
}
