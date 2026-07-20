import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Phone, MessageCircle, ArrowRight, ChevronDown, Wifi, Server, Shield, Cloud } from "lucide-react";

const HERO_BG = "https://hercules-cdn.com/file_frA30Q0CNjiw8LXrkmbO0vrx";

type Stat = { value: number; suffix: string; label: string };

const stats: Stat[] = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Projects Done" },
  { value: 300, suffix: "+", label: "Happy Clients" },
  { value: 24, suffix: "/7", label: "Support" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-black text-[#FF9800]">
      {count}
      {suffix}
    </div>
  );
}

// Floating tech icons for background decoration
const floatingIcons = [
  { Icon: Wifi, top: "15%", left: "8%", delay: 0 },
  { Icon: Server, top: "25%", right: "10%", delay: 0.5 },
  { Icon: Shield, top: "60%", left: "5%", delay: 1 },
  { Icon: Cloud, top: "70%", right: "8%", delay: 1.5 },
];

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1D40]/90 via-[#0A2F6B]/75 to-[#0B1D40]/90" />
      {/* Animated radial glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#0A2F6B]/40 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-2/3 right-1/4 w-[400px] h-[400px] rounded-full bg-[#FF9800]/10 blur-3xl"
        />
      </div>

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, delay, ...pos }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.15, y: [0, -15, 0] }}
          transition={{ delay, duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute hidden xl:block"
          style={pos as React.CSSProperties}
        >
          <Icon className="w-16 h-16 text-[#FF9800]" />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF9800]/15 border border-[#FF9800]/30 text-[#FF9800] text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF9800] animate-pulse" />
          Formerly Sharvani Computer Service and Training
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white text-balance leading-tight mb-6"
        >
          Professional{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9800] to-[#ffcc02]">
            IT & Networking
          </span>
          <br />
          Solutions Across Goa
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-10 text-balance"
        >
          Networking, CCTV, Computer Repairs, Cloud Solutions &{" "}
          <span className="text-[#FF9800] font-semibold">120+ Digital Services</span>{" "}
          — delivered with expertise across Bicholim, Goa and beyond.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <a
            href="tel:7020156012"
            className="flex items-center gap-2 px-8 py-4 bg-[#FF9800] hover:bg-[#e65100] text-[#0B1D40] font-bold rounded-xl text-base transition-all duration-200 shadow-xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-105 cursor-pointer"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          <a
            href="https://wa.me/919922022662"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl text-base transition-all duration-200 shadow-xl shadow-green-500/30 hover:scale-105 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold rounded-xl text-base border border-white/20 transition-all duration-200 hover:scale-105 cursor-pointer"
          >
            Get Quote
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-4 text-center"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <div className="text-white/60 text-sm mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors cursor-pointer"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}
