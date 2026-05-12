import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FaClock, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { Booking } from "@/components/Booking";
import { WHATSAPP } from "@/components/Contact";

export const Route = createFileRoute("/booking")({
  component: BookingPage,
  head: () => ({
    meta: [
      { title: "Book an Appointment · dolledbyVishi" },
      {
        name: "description",
        content:
          "Reserve your hair, nails, makeup or lash appointment with Vishi. Easy online booking for the dolledbyVishi studio in Bamenda.",
      },
      { property: "og:title", content: "Book with dolledbyVishi" },
      { property: "og:description", content: "Reserve your luxury beauty appointment." },
    ],
  }),
});

function BookingPage() {
  return (
    <div className="pt-24">
      <section className="relative py-16 sm:py-24">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-rose opacity-10 blur-[120px] -z-10" />
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-5">Booking</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl">
            Reserve your <span className="text-gradient-rose italic">glow</span>
          </h1>
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
            Send a request below and Vishi will personally confirm your appointment
            via WhatsApp within 24 hours.
          </p>
          <div className="divider-rose w-40 mx-auto mt-10" />
        </div>
      </section>

      {/* Info strip */}
      <section className="py-6">
        <div className="mx-auto max-w-5xl px-5 sm:px-8 grid sm:grid-cols-3 gap-4">
          {[
            { icon: FaClock, t: "Hours", v: "Tue – Sat · 9am – 7pm" },
            { icon: FaMapMarkerAlt, t: "Studio", v: "Bamenda, Cameroon" },
            { icon: FaWhatsapp, t: "Quick chat", v: "WhatsApp Vishi", href: `https://wa.me/${WHATSAPP}` },
          ].map((b) => {
            const Inner = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-5 flex items-center gap-4 hover-glow"
              >
                <div className="w-11 h-11 rounded-full bg-gradient-rose/20 ring-1 ring-primary/30 grid place-items-center text-primary">
                  <b.icon />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-foreground/50">{b.t}</div>
                  <div className="text-sm text-foreground/90">{b.v}</div>
                </div>
              </motion.div>
            );
            return b.href ? (
              <a key={b.t} href={b.href} target="_blank" rel="noreferrer">{Inner}</a>
            ) : (
              <div key={b.t}>{Inner}</div>
            );
          })}
        </div>
      </section>

      <Booking />

      {/* Booking FAQ */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <h2 className="font-display text-3xl sm:text-4xl text-center mb-10">
            Good to <span className="text-gradient-rose italic">know</span>
          </h2>
          <div className="space-y-4">
            {[
              { q: "Do I need to pay a deposit?", a: "Yes — a 30% deposit secures your slot. The remainder is due on the day of your appointment." },
              { q: "What's your cancellation policy?", a: "Cancellations 24+ hours before are fully refundable. Within 24h, deposits are non-refundable but transferable once." },
              { q: "Do you accept walk-ins?", a: "We are appointment-only to ensure each client receives our full attention. Same-day requests are welcome via WhatsApp if a slot opens." },
              { q: "Do you offer home / on-location service?", a: "Yes, for bridal and editorial bookings. A travel fee applies depending on location." },
            ].map((f) => (
              <details key={f.q} className="glass rounded-2xl p-5 group">
                <summary className="cursor-pointer font-display text-lg flex justify-between items-center list-none">
                  {f.q}
                  <span className="text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="text-sm text-foreground/65 mt-3 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
