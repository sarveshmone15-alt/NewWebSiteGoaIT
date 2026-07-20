import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What areas do you serve in Goa?",
    a: "We primarily serve Bicholim, Latambarcem, Sanquelim, Mapusa, and surrounding North Goa areas. For larger projects, we serve clients across Goa.",
  },
  {
    q: "How quickly can you respond to IT emergencies?",
    a: "We offer same-day service for most issues. For critical emergencies, we aim to respond within 2–4 hours during business hours (9 AM – 8 PM). WhatsApp us for fastest response.",
  },
  {
    q: "Do you offer Annual Maintenance Contracts (AMC)?",
    a: "Yes! We offer AMC packages for homes and businesses covering preventive maintenance, priority support, periodic audits, and discounted rates on parts and labor.",
  },
  {
    q: "What brands of hardware do you work with?",
    a: "We work with all major brands — Cisco, TP-Link, D-Link, Hikvision, Dahua, Dell, HP, Lenovo, Samsung, and more. We source original/OEM parts for all repairs.",
  },
  {
    q: "Can you help with government digital services?",
    a: "Absolutely. We offer 120+ digital services including PAN card, passport applications, Aadhaar services, income and caste certificates, and more government portal services.",
  },
  {
    q: "Do you provide cloud services for small businesses?",
    a: "Yes. We set up and manage Microsoft Azure, Office 365, email hosting, cloud backup, and data migration for businesses of all sizes — including full training for your team.",
  },
  {
    q: "What is your pricing structure?",
    a: "We offer transparent, upfront pricing with no hidden charges. Basic repairs start from ₹300. For networking, CCTV, and cloud projects, we provide free site surveys and quotes.",
  },
  {
    q: "Do you provide warranty on repairs?",
    a: "Yes. All repairs come with a 30-day workmanship warranty. Parts replaced with original/branded components typically carry the manufacturer's warranty.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF9800]/40 to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#FF9800]/15 border border-[#FF9800]/30 text-[#FF9800] text-sm font-semibold rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9800] to-[#ffcc02]">
              Questions
            </span>
          </h2>
          <p className="text-white/60 text-lg">Quick answers to common questions.</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                open === i
                  ? "bg-[#0A2F6B]/50 border-[#FF9800]/30"
                  : "bg-white/[0.03] border-white/10 hover:border-white/20"
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
              >
                <span className={`font-semibold text-base ${open === i ? "text-[#FF9800]" : "text-white"}`}>
                  {q}
                </span>
                <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 ml-4 ${open === i ? "text-[#FF9800]" : "text-white/40"}`} />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <p className="px-5 pb-5 text-white/65 text-sm leading-relaxed">{a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
