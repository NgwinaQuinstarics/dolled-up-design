import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "@tanstack/react-router";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Gallery", to: "/gallery" },
  { label: "Booking", to: "/booking" },
  { label: "Contact", to: "/contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-20 sm:h-24 flex items-center justify-between">
        <Link to="/" className="font-display text-xl sm:text-2xl tracking-wide flex items-center">
          <span className="inline-flex items-center justify-center rounded-full bg-white/95 ring-2 ring-primary/40 shadow-[0_4px_20px_rgba(255,182,193,0.35)] p-1.5 sm:p-2">
            <img
              src="/logo.png"
              alt="dolledbyVishi"
              className="h-12 sm:h-16 w-auto object-contain"
              onError={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              img.style.display = "none";
              const fallback = img.parentElement?.nextElementSibling as HTMLElement | null;
              if (fallback) fallback.style.display = "inline";
              }}
            />
          </span>
          <span className="hidden">
            <span className="text-gradient-rose">dolled</span>
            <span className="text-foreground/90">byVishi</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-9 text-sm">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-foreground" }}
                className="relative text-foreground/70 hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gradient-rose after:transition-all hover:after:w-full"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          to="/booking"
          className="hidden lg:inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-gradient-rose text-primary-foreground hover-glow"
        >
          Book Now
        </Link>

        <button
          aria-label="Toggle menu"
          className="lg:hidden text-foreground p-2"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <HiX size={26} /> : <HiMenu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-strong overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-6 gap-5">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="text-foreground/85 hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <Link
                to="/booking"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center rounded-full px-5 py-3 bg-gradient-rose text-primary-foreground font-medium"
              >
                Book Appointment
              </Link>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
