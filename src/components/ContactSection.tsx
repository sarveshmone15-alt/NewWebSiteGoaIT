import { useState } from "react";
import { motion } from "motion/react";
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  { icon: Phone, label: "Call Us", value: "7020156012", href: "tel:7020156012", color: "#FF9800" },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "9922022662",
    href: "https://wa.me/919922022662",
    color: "#25D366",
  },
  {
    icon: Mail,
    label: "Email",
    value: "support@goaitservice.in",
    href: "mailto:support@goaitservice.in",
    color: "#3B82F6",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "H.No.157(A), Pistewada, Nanoda, Latambarcem, Bicholim, Goa",
    href: "https://maps.google.com/?q=Latambarcem,Bicholim,Goa",
    color: "#EF4444",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon–Sat: 9 AM – 8 PM | Sun: 10 AM – 4 PM",
    href: null,
    color: "#8B5CF6",
  },
];

type FormState = { name: string; phone: string; email: string; service: string; message: string };

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please fill in your name and phone number.");
      return;
    }
    setLoading(true);
    // Simulate form submission (no backend required for static site)
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
    toast.success("Message sent! We'll get back to you shortly.");
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF9800]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A2F6B]/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#FF9800]/15 border border-[#FF9800]/30 text-[#FF9800] text-sm font-semibold rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9800] to-[#ffcc02]">
              Touch
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Ready to solve your IT challenges? Reach out — we respond fast.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 mb-8">
              {contactInfo.map(({ icon: Icon, label, value, href, color }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 rounded-xl bg-white/[0.04] border border-white/10 p-4 hover:border-white/20 transition-all"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${color}20` }}
                  >
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs mb-0.5">{label}</div>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-white font-medium text-sm hover:text-[#FF9800] transition-colors cursor-pointer"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="text-white font-medium text-sm">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border border-white/10 h-64">
              <iframe
                title="Goa IT Service Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.7!2d73.9800!3d15.5900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb8b3f!2sLatambarcem%2C%20Bicholim%2C%20Goa!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                className="w-full h-full grayscale opacity-80"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-2xl bg-gradient-to-br from-[#0A2F6B]/60 to-[#0A2F6B]/30 border border-white/10 backdrop-blur-sm p-6 md:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                  <p className="text-white/60 mb-6">We'll get back to you as soon as possible.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "", service: "", message: "" }); }}
                    className="px-6 py-2.5 bg-[#FF9800] text-[#0B1D40] font-semibold rounded-lg text-sm hover:bg-[#e65100] transition-colors cursor-pointer"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-white font-bold text-xl mb-6">Send us a Message</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white/60 text-xs mb-1.5 block">Your Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Rajesh Naik"
                        required
                        className="w-full rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[#FF9800]/60 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-white/60 text-xs mb-1.5 block">Phone Number *</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="98765 43210"
                        required
                        className="w-full rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[#FF9800]/60 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-white/60 text-xs mb-1.5 block">Email Address</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@gmail.com"
                      className="w-full rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[#FF9800]/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-white/60 text-xs mb-1.5 block">Service Required</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full rounded-xl bg-[#0A2F6B] border border-white/15 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#FF9800]/60 transition-colors cursor-pointer"
                    >
                      <option value="">Select a service...</option>
                      <option value="networking">Networking Solutions</option>
                      <option value="cctv">CCTV Installation</option>
                      <option value="repair">Computer Repair</option>
                      <option value="cloud">Cloud Services</option>
                      <option value="digital">Digital Services</option>
                      <option value="amc">AMC Contract</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-white/60 text-xs mb-1.5 block">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe your IT issue or requirement..."
                      className="w-full rounded-xl bg-white/10 border border-white/15 text-white placeholder-white/30 px-4 py-3 text-sm focus:outline-none focus:border-[#FF9800]/60 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FF9800] hover:bg-[#e65100] disabled:opacity-60 text-[#0B1D40] font-bold rounded-xl text-sm transition-all duration-200 hover:scale-[1.02] cursor-pointer shadow-lg shadow-orange-500/30"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-[#0B1D40]/30 border-t-[#0B1D40] rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
