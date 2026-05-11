import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP } from "./Contact";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP}`}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring" }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 grid place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform"
    >
      <FaWhatsapp size={26} />
      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40" />
    </motion.a>
  );
}
