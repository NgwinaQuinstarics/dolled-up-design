import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { SectionTitle } from "./SectionTitle";

const reviews = [
  { name: "Amara K.", role: "Bride", text: "Vishi made me feel like a queen on my wedding day. The makeup lasted 14 hours flawlessly." },
  { name: "Ngwe T.", role: "Content Creator", text: "My go-to for lashes and glam. The studio is gorgeous and the work is consistently next level." },
  { name: "Linda M.", role: "Client", text: "Best nails in Bamenda — period. The detail and care is unmatched." },
  { name: "Bih S.", role: "Bride", text: "From hair to makeup, every detail was perfection. I felt so beautiful." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % reviews.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Testimonials"
          title={<>Words from our <span className="text-gradient-rose italic">clients</span></>}
        />

        <div className="relative h-[280px] sm:h-[240px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
              className="glass-strong absolute inset-0 rounded-3xl p-8 sm:p-12 flex flex-col items-center text-center"
            >
              <FaQuoteLeft className="text-primary/60 mb-5" size={28} />
              <p className="font-display text-xl sm:text-2xl text-foreground/90 leading-relaxed max-w-3xl">
                "{reviews[i].text}"
              </p>
              <div className="flex gap-1 my-5 text-primary">
                {[...Array(5)].map((_, k) => <FaStar key={k} />)}
              </div>
              <div className="text-sm">
                <span className="text-gradient-rose font-medium">{reviews[i].name}</span>
                <span className="text-foreground/50"> · {reviews[i].role}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, k) => (
            <button
              key={k}
              aria-label={`review ${k + 1}`}
              onClick={() => setI(k)}
              className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-gradient-rose" : "w-1.5 bg-foreground/20"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
