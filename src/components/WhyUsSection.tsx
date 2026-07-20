import { motion } from "motion/react";
import {
  BadgeCheck, IndianRupee, MapPin, Zap, Package, ThumbsUp,
} from "lucide-react";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Certified Engineer",
    description: "Hanumant Vinayak Mone is a seasoned IT & Networking Specialist with 10+ years of field experience.",
    color: "#FF9800",
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description: "Transparent, competitive rates with no hidden charges. SME and home user packages available.",
    color: "#3B82F6",
  },
  {
    icon: MapPin,
    title: "On-Site Support",
    description: "We come to you — homes, offices, or remote sites across Bicholim, Goa and surrounding areas.",
    color: "#10B981",
  },
  {
    icon: Zap,
    title: "Fast Response",
    description: "Same-day and emergency support available. Most issues resolved within a single visit.",
    color: "#F59E0B",
  },
  {
    icon: Package,
    title: "Original Parts",
    description: "We source genuine components and branded hardware, ensuring lasting repairs and upgrades.",
    color: "#8B5CF6",
  },
  {
    icon: ThumbsUp,
    title: "Reliable Service",
    description: "300+ happy clients built on trust, honest advice, and quality workmanship every time.",
    color: "#EF4444",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF9800]/40 to-transparent" />
      {/* Background gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0A2F6B]/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#FF9800]/15 border border-[#FF9800]/30 text-[#FF9800] text-sm font-semibold rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            The Goa IT Service{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9800] to-[#ffcc02]">
              Advantage
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Six reasons thousands of clients in Goa trust us with their IT needs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, description, color }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/25 p-6 transition-all duration-300 hover:shadow-xl overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl"
                style={{ background: `radial-gradient(circle at 50% 0%, ${color}, transparent 70%)` }}
              />

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `${color}20` }}
              >
                <Icon className="w-6 h-6" style={{ color }} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
              <p className="text-white/55 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
