import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Networking Solutions",
  "CCTV Installation",
  "Computer Repairs",
  "Cloud Services",
  "Digital Services",
  "AMC Contracts",
];

const scrollTo = (href: string) => {
  const el = document.getElementById(href.replace("#", ""));
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#080F2A]">
      {/* Top accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF9800]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#FF9800] to-[#e65100] flex items-center justify-center shadow-lg shadow-orange-500/30">
                <span className="text-white font-black text-sm">GIT</span>
              </div>
              <div>
                <div className="font-bold text-white text-lg leading-tight">
                  Goa <span className="text-[#FF9800]">IT</span> Service
                </div>
                <div className="text-white/40 text-xs">One Stop Solution For All</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Formerly Sharvani Computer Service and Training. Led by IT & Networking Specialist
              Hanumant Vinayak Mone, serving Goa since 10+ years.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { label: "Facebook", href: "#" },
                { label: "Instagram", href: "#" },
                { label: "YouTube", href: "#" },
              ].map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 hover:bg-[#FF9800]/20 hover:border-[#FF9800]/40 flex items-center justify-center text-white/50 hover:text-[#FF9800] transition-all cursor-pointer text-xs font-bold"
                >
                  {label[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-white/50 hover:text-[#FF9800] text-sm transition-colors cursor-pointer text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => scrollTo("#services")}
                    className="text-white/50 hover:text-[#FF9800] text-sm transition-colors cursor-pointer text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              {[
                { Icon: Phone, text: "7020156012", href: "tel:7020156012" },
                { Icon: MessageCircle, text: "9922022662 (WA)", href: "https://wa.me/919922022662" },
                { Icon: Mail, text: "support@goaitservice.in", href: "mailto:support@goaitservice.in" },
                { Icon: MapPin, text: "Latambarcem, Bicholim, Goa", href: null },
              ].map(({ Icon, text, href }) => (
                <li key={text} className="flex items-start gap-2.5">
                  <Icon className="w-4 h-4 text-[#FF9800] flex-shrink-0 mt-0.5" />
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-white/50 hover:text-white text-sm transition-colors cursor-pointer"
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-white/50 text-sm">{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/35 text-xs">
          <span>© {year} Goa IT Service. All rights reserved.</span>
          <span>H.No.157(A), Pistewada, Nanoda, Latambarcem, Bicholim, Goa</span>
        </div>
      </div>
    </footer>
  );
}
