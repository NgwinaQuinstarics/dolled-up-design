import { useState } from "react";
import { motion } from "framer-motion";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { FaWhatsapp, FaInstagram, FaTiktok, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { getFirebase, isFirebaseConfigured } from "@/lib/firebase";
import { SectionTitle } from "./SectionTitle";
import { toast } from "sonner";

export const WHATSAPP = "237600000000";
export const INSTAGRAM = "https://instagram.com/dolledbyvishi";
export const TIKTOK = "https://tiktok.com/@dolledbyvishi";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) return toast.error("Please add your name and message.");
    setLoading(true);
    try {
      if (isFirebaseConfigured()) {
        const { db } = getFirebase();
        if (db) await addDoc(collection(db, "contacts"), { ...form, createdAt: serverTimestamp() });
      } else await new Promise((r) => setTimeout(r, 600));
      toast.success("Message sent — we'll be in touch.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Couldn't send. Try WhatsApp instead.");
    } finally { setLoading(false); }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionTitle
          eyebrow="Contact"
          title={<>Let's <span className="text-gradient-rose italic">connect</span></>}
          description="Slide into the DMs, drop us a line, or visit the studio in Bamenda."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass rounded-3xl p-8 space-y-6"
          >
            <ContactRow icon={<FaMapMarkerAlt />} label="Studio" value="Bamenda, Cameroon" />
            <ContactRow icon={<FaWhatsapp />} label="WhatsApp" value="+237 6 00 00 00 00" href={`https://wa.me/${WHATSAPP}`} />
            <ContactRow icon={<FaEnvelope />} label="Email" value="hello@dolledbyvishi.com" href="mailto:hello@dolledbyvishi.com" />
            <div className="divider-rose" />
            <div className="flex gap-3">
              <SocialBtn href={INSTAGRAM}><FaInstagram /></SocialBtn>
              <SocialBtn href={TIKTOK}><FaTiktok /></SocialBtn>
              <SocialBtn href={`https://wa.me/${WHATSAPP}`}><FaWhatsapp /></SocialBtn>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-strong rounded-3xl p-8 space-y-5"
          >
            <input
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl bg-background/50 border border-primary/20 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <input
              placeholder="Email (optional)"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full rounded-xl bg-background/50 border border-primary/20 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <textarea
              rows={5}
              placeholder="How can we glam you up?"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full rounded-xl bg-background/50 border border-primary/20 px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium bg-gradient-rose text-primary-foreground hover-glow disabled:opacity-60"
            >
              {loading ? "Sending…" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-center gap-4">
      <div className="w-11 h-11 rounded-full grid place-items-center bg-gradient-rose/20 ring-1 ring-primary/30 text-primary">{icon}</div>
      <div>
        <div className="text-xs uppercase tracking-widest text-foreground/50">{label}</div>
        <div className="text-foreground/90">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer" className="block hover:opacity-80 transition">{inner}</a> : inner;
}

function SocialBtn({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="w-11 h-11 grid place-items-center rounded-full glass text-primary hover:bg-gradient-rose hover:text-primary-foreground transition-all"
    >
      {children}
    </a>
  );
}
