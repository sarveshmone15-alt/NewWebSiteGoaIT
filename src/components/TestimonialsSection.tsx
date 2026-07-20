import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Naik",
    location: "Bicholim, Goa",
    rating: 5,
    text: "Hanumant sir set up our entire office network from scratch. Professional work, done on time and within budget. Our team of 15 can now work seamlessly. Highly recommend Goa IT Service!",
    service: "Networking Setup",
  },
  {
    name: "Priya Dessai",
    location: "Mapusa, Goa",
    rating: 5,
    text: "Got my laptop repaired in just 2 hours. Data was fully recovered after a crash. Honest pricing and very knowledgeable. Will definitely come back for any IT issues.",
    service: "Laptop Repair",
  },
  {
    name: "Suresh Kamat",
    location: "Latambarcem, Goa",
    rating: 5,
    text: "CCTV installation was done perfectly for my shop. Remote monitoring works great, very clear footage. Also helped with all the app setup on my phone. 5 stars!",
    service: "CCTV Installation",
  },
  {
    name: "Anita Vernekar",
    location: "Bicholim, Goa",
    rating: 5,
    text: "Migrated our business to Office 365 and Azure cloud smoothly. Zero downtime. The team is very patient in explaining everything. Our data is now secure and accessible anywhere.",
    service: "Cloud Migration",
  },
  {
    name: "Datta Sawant",
    location: "Sanquelim, Goa",
    rating: 5,
    text: "Had my PAN card and passport applications done here. Fast service, no running around. They know every digital service. Very convenient one-stop shop!",
    service: "Digital Services",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF9800]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A2F6B]/20 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#FF9800]/15 border border-[#FF9800]/30 text-[#FF9800] text-sm font-semibold rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            What Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9800] to-[#ffcc02]">
              Clients Say
            </span>
          </h2>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 60 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl bg-gradient-to-br from-[#0A2F6B]/60 to-[#0A2F6B]/30 border border-white/10 backdrop-blur-sm p-8 md:p-10"
            >
              <Quote className="w-10 h-10 text-[#FF9800]/30 mb-6" />
              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 italic">
                "{t.text}"
              </p>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF9800] to-[#e65100] flex items-center justify-center font-black text-white text-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-white font-bold">{t.name}</div>
                    <div className="text-white/50 text-sm">{t.location}</div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FF9800] text-[#FF9800]" />
                    ))}
                  </div>
                  <span className="text-xs text-[#FF9800]/70 font-medium">{t.service}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF9800]/20 border border-white/10 hover:border-[#FF9800]/40 flex items-center justify-center text-white hover:text-[#FF9800] transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`rounded-full transition-all cursor-pointer ${
                    i === current ? "w-6 h-2 bg-[#FF9800]" : "w-2 h-2 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF9800]/20 border border-white/10 hover:border-[#FF9800]/40 flex items-center justify-center text-white hover:text-[#FF9800] transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
