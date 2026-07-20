import { motion } from "motion/react";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handler = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3">
      {/* Scroll to top */}
      {showTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all cursor-pointer shadow-lg"
          title="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </motion.button>
      )}

      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/919922022662"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-green-500 shadow-xl shadow-green-500/40 flex items-center justify-center text-white hover:bg-green-600 transition-all cursor-pointer"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.a>

      {/* Call */}
      <motion.a
        href="tel:7020156012"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-[#FF9800] shadow-xl shadow-orange-500/40 flex items-center justify-center text-[#0B1D40] hover:bg-[#e65100] transition-all cursor-pointer"
        title="Call us"
      >
        <Phone className="w-6 h-6" />
      </motion.a>
    </div>
  );
}
