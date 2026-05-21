import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/u-makeup2.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="dolledbyVishi luxury beauty"
          className="h-full w-full object-cover object-center opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      <div className="mx-auto max-w-7xl w-full px-5 sm:px-8 pt-28 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs sm:text-sm tracking-[0.4em] uppercase text-primary/90 mb-6"
        >
          Luxury Beauty Studio · Bamenda
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[1.02] max-w-4xl"
        >
          <span className="text-gradient-rose italic">dolled</span>
          <span className="text-foreground">byVishi</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 max-w-xl text-base sm:text-lg text-foreground/75 leading-relaxed"
        >
          Where artistry meets allure. Hair, nails, makeup and lash extensions —
          crafted to make every woman feel undeniably radiant.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            to="/booking"
            className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium bg-gradient-rose text-primary-foreground hover-glow"
          >
            Book Appointment
          </Link>
          <Link
            to="/gallery"
            className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium border border-primary/40 text-foreground hover:bg-primary/10 transition-colors"
          >
            View Gallery
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-20 hidden sm:flex items-center gap-8 text-xs uppercase tracking-[0.3em] text-foreground/50"
        >
          <span>Hair</span><span className="h-px w-8 bg-primary/40" />
          <span>Nails</span><span className="h-px w-8 bg-primary/40" />
          <span>Makeup</span><span className="h-px w-8 bg-primary/40" />
          <span>Lashes</span>
        </motion.div>
      </div>
    </section>
  );
}
