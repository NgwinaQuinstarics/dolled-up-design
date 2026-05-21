import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact · dolledbyVishi" },
      {
        name: "description",
        content:
          "Get in touch with dolledbyVishi — WhatsApp, email or visit our luxury beauty studio in Bamenda.",
      },
      { property: "og:title", content: "Contact dolledbyVishi" },
      { property: "og:description", content: "WhatsApp, email or visit the studio in Bamenda." },
    ],
  }),
});

function ContactPage() {
  return (
    <div className="pt-24">
      <section className="relative py-16 sm:py-24">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-rose opacity-10 blur-[120px] -z-10" />
        <div className="mx-auto max-w-4xl px-5 sm:px-8 text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-5">Contact</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl">
            Let's <span className="text-gradient-rose italic">connect</span>
          </h1>
          <p className="mt-6 text-foreground/70 max-w-2xl mx-auto">
            Whether you have a question, a custom request, or are ready to book —
            we'd love to hear from you.
          </p>
          <div className="divider-rose w-40 mx-auto mt-10" />
        </div>
      </section>

      <Contact />

      {/* Hours */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <h2 className="font-display text-3xl text-center mb-8">
            Studio <span className="text-gradient-rose italic">hours</span>
          </h2>
          <div className="glass-strong rounded-2xl p-6 divide-y divide-primary/10">
            {[
              ["Monday", "9:00 — 22:00"],
              ["Tuesday", "9:00 — 22:00"],
              ["Wednesday", "9:00 — 22:00"],
              ["Thursday", "9:00 — 22:00"],
              ["Friday", "9:00 — 22:00"],
              ["Saturday", "9:00 — 22:00"],
              ["Sunday", "9:00 — 22:00"],
            ].map(([d, h]) => (
              <div key={d} className="flex justify-between py-3 text-sm">
                <span className="text-foreground/80">{d}</span>
                <span className={h === "Closed" ? "text-foreground/40" : "text-gradient-rose"}>{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
