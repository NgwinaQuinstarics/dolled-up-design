import { motion } from "framer-motion";
import aboutImg from "@/assets/about.jpg";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
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
              alt="Vishi at work"
              loading="lazy"
              className="rounded-xl w-full h-[520px] object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">About</p>
          <h2 className="font-display text-4xl sm:text-5xl mb-6">
            Beauty, <span className="text-gradient-rose italic">refined</span>.
          </h2>
          <p className="text-foreground/75 leading-relaxed mb-5">
            dolledbyVishi is a luxury beauty house born from a love of artistry,
            femininity and detail. From sleek installs to soft glam — every look
            is created with intention, premium products and an unwavering eye
            for elegance.
          </p>
          <p className="text-foreground/65 leading-relaxed mb-8">
            Whether it's your wedding day, a milestone shoot, or simply a day to
            feel like the version of you that turns heads — you're in expert
            hands.
          </p>

          <div className="grid grid-cols-3 gap-6">
            {[
              { k: "5+", v: "Years" },
              { k: "800+", v: "Clients" },
              { k: "100%", v: "Luxury" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-xl p-5 text-center">
                <div className="font-display text-3xl text-gradient-rose">{s.k}</div>
                <div className="text-xs uppercase tracking-widest text-foreground/60 mt-1">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
