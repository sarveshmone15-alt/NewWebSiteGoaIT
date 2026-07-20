import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Target, Eye, CheckCircle2, Award, Users, Clock, MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const trusts = [
  { icon: Award, text: "10+ Years of hands-on IT expertise" },
  { icon: Users, text: "300+ satisfied clients in Goa" },
  { icon: Clock, text: "Same-day response for critical issues" },
  { icon: MapPin, text: "Local presence in Bicholim & surrounding areas" },
  { icon: CheckCircle2, text: "Certified IT & Networking Specialist" },
  { icon: CheckCircle2, text: "Transparent pricing, no hidden charges" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF9800]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A2F6B]/20 to-transparent pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#FF9800]/15 border border-[#FF9800]/30 text-[#FF9800] text-sm font-semibold rounded-full mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Goa's Trusted{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9800] to-[#ffcc02]">
              IT Partner
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Serving individuals and businesses across Goa with reliable, affordable IT solutions since over a decade.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: intro + trust points */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-white/80 text-lg leading-relaxed mb-6">
              <strong className="text-white">Goa IT Service</strong>, formerly Sharvani Computer
              Service and Training, is led by{" "}
              <strong className="text-[#FF9800]">Hanumant Vinayak Mone</strong>, an experienced IT
              & Networking Specialist. We provide end-to-end technology solutions — from network
              infrastructure and CCTV installations to cloud services and 120+ digital government
              services.
            </p>
            <p className="text-white/70 text-base leading-relaxed mb-10">
              Our commitment is to deliver enterprise-grade IT support at SME-friendly pricing, with
              fast on-site response times across Bicholim and the broader Goa region.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {trusts.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FF9800]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-[#FF9800]" />
                  </div>
                  <span className="text-white/75 text-sm leading-snug">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Mission + Vision cards */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Owner card */}
            <div className="rounded-2xl bg-gradient-to-br from-[#0A2F6B]/60 to-[#0A2F6B]/30 border border-white/10 backdrop-blur-sm p-6 flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF9800] to-[#e65100] flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/30">
                <span className="text-2xl font-black text-white">HM</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg">Hanumant Vinayak Mone</div>
                <div className="text-[#FF9800] text-sm font-semibold">IT & Networking Specialist</div>
                <div className="text-white/50 text-xs mt-1">Founder, Goa IT Service</div>
              </div>
            </div>

            {/* Mission */}
            <div className="rounded-2xl bg-gradient-to-br from-[#0A2F6B]/60 to-[#0A2F6B]/30 border border-white/10 backdrop-blur-sm p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[#FF9800]/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-[#FF9800]" />
                </div>
                <h3 className="text-white font-bold text-base">Our Mission</h3>
              </div>
              <p className="text-white/65 text-sm leading-relaxed">
                To be Goa's most trusted one-stop IT service provider — delivering cutting-edge
                technology solutions that empower homes and businesses to thrive in the digital era,
                at prices that make sense.
              </p>
            </div>

            {/* Vision */}
            <div className="rounded-2xl bg-gradient-to-br from-[#0A2F6B]/60 to-[#0A2F6B]/30 border border-white/10 backdrop-blur-sm p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[#FF9800]/20 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-[#FF9800]" />
                </div>
                <h3 className="text-white font-bold text-base">Our Vision</h3>
              </div>
              <p className="text-white/65 text-sm leading-relaxed">
                To bridge the digital divide in Goa's semi-urban and rural areas by making
                enterprise-level IT infrastructure, cloud services, and digital literacy accessible
                to every individual and business.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
