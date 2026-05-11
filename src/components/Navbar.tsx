import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Booking", href: "#booking" },
  { label: "Contact", href: "#contact" },
];

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
      <nav className="mx-auto max-w-7xl px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a href="#home" className="font-display text-xl sm:text-2xl tracking-wide">
          <span className="text-gradient-rose">dolled</span>
          <span className="text-foreground/90">byVishi</span>
        </a>

        <ul className="hidden lg:flex items-center gap-9 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-foreground/80 hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gradient-rose after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#booking"
          className="hidden lg:inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-gradient-rose text-primary-foreground hover-glow"
        >
          Book Now
        </a>

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
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-foreground/85 hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <a
                href="#booking"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center rounded-full px-5 py-3 bg-gradient-rose text-primary-foreground font-medium"
              >
                Book Appointment
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
