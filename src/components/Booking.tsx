import { useState } from "react";
import { motion } from "framer-motion";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getFirebase, isFirebaseConfigured } from "@/lib/firebase";
import { SectionTitle } from "./SectionTitle";
import { toast } from "sonner";

const services = ["Hair Styling", "Nails", "Makeup", "Lash Extensions", "Bridal Package"];

export function Booking() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: services[0],
    date: "",
    message: "",
  });

  const handle = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.date) {
      toast.error("Please fill in your name, phone and preferred date.");
      return;
    }
    setLoading(true);
    try {
      if (isFirebaseConfigured()) {
        const { db } = getFirebase();
        if (db) {
          await addDoc(collection(db, "bookings"), {
            ...form,
            createdAt: serverTimestamp(),
            status: "pending",
          });
        }
      } else {
        await new Promise((r) => setTimeout(r, 700));
      }
      toast.success("Appointment requested — Vishi will reach out shortly.");
      setForm({ name: "", phone: "", service: services[0], date: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Could not save your booking. Please WhatsApp us instead.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="booking" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[420px] bg-gradient-rose opacity-10 blur-[120px] -z-10" />
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Booking"
          title={<>Reserve your <span className="text-gradient-rose italic">glow</span></>}
          description="Tell us when and what — we'll handle the rest."
        />

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="glass-strong rounded-3xl p-6 sm:p-10 grid sm:grid-cols-2 gap-5"
        >
          <Field label="Full Name">
            <input value={form.name} onChange={handle("name")} className={inputCls} placeholder="Your name" />
          </Field>
          <Field label="Phone Number">
            <input value={form.phone} onChange={handle("phone")} className={inputCls} placeholder="+237 6 53 80 43 01" />
          </Field>
          <Field label="Service Type">
            <select value={form.service} onChange={handle("service")} className={inputCls}>
              {services.map((s) => <option key={s} className="bg-background">{s}</option>)}
            </select>
          </Field>
          <Field label="Preferred Date">
            <input type="date" value={form.date} onChange={handle("date")} className={inputCls} />
          </Field>
          <Field label="Message" className="sm:col-span-2">
            <textarea
              rows={4}
              value={form.message}
              onChange={handle("message")}
              className={inputCls + " resize-none"}
              placeholder="Tell us about your look, occasion, references…"
            />
          </Field>
          <div className="sm:col-span-2 flex justify-center pt-2">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-full px-10 py-3.5 text-sm font-medium bg-gradient-rose text-primary-foreground hover-glow disabled:opacity-60"
            >
              {loading ? "Sending…" : "Confirm Appointment"}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-xl bg-background/50 border border-primary/20 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition";

function Field({
  label, children, className = "",
}: { label: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="block text-xs uppercase tracking-widest text-foreground/60 mb-2">{label}</span>
      {children}
    </label>
  );
}
