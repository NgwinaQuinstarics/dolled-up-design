import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { Link } from "@tanstack/react-router";
import { INSTAGRAM, TIKTOK, WHATSAPP } from "./Contact";

export function Footer() {
  return (
    <footer className="relative border-t border-primary/15 mt-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14 grid sm:grid-cols-3 gap-10">
        <div>
          <h3 className="font-display text-2xl">
            <span className="text-gradient-rose">dolled</span>byVishi
          </h3>
          <p className="text-sm text-foreground/60 mt-3 max-w-xs">
            Luxury beauty studio in Bamenda — hair, nails, makeup &amp; lashes.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-primary mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
            <li><Link to="/booking" className="hover:text-primary">Book</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-widest text-primary mb-4">Follow</h4>
          <div className="flex gap-3">
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="w-10 h-10 grid place-items-center rounded-full glass text-primary hover:bg-gradient-rose hover:text-primary-foreground transition"><FaInstagram /></a>
            <a href={TIKTOK} target="_blank" rel="noreferrer" className="w-10 h-10 grid place-items-center rounded-full glass text-primary hover:bg-gradient-rose hover:text-primary-foreground transition"><FaTiktok /></a>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" className="w-10 h-10 grid place-items-center rounded-full glass text-primary hover:bg-gradient-rose hover:text-primary-foreground transition"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary/10 py-6 text-center text-xs text-foreground/50">
        © {new Date().getFullYear()} dolledbyVishi. Crafted with love in Bamenda.
      </div>
    </footer>
  );
}
