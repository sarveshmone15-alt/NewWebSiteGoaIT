import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Network, Camera, Monitor, Cloud, Globe, Wrench,
  Wifi, Server, Cable, Radio, Lock, HardDrive,
  Laptop, Printer, Database, Bug, Shield, Video,
  CloudCog, Mail, ArrowUpDown, FileText, CreditCard,
  Briefcase, ClipboardList, Settings, Building,
  ChevronDown, ChevronUp,
} from "lucide-react";

type SubService = { icon: React.ElementType; name: string };
type ServiceCategory = {
  icon: React.ElementType;
  title: string;
  color: string;
  description: string;
  subServices: SubService[];
};

const services: ServiceCategory[] = [
  {
    icon: Network,
    title: "Networking Solutions",
    color: "#3B82F6",
    description: "Complete LAN/WAN setup, WiFi, fiber, and managed network infrastructure for homes and businesses.",
    subServices: [
      { icon: Cable, name: "LAN Setup" },
      { icon: Wifi, name: "WiFi Installation" },
      { icon: Radio, name: "Router Configuration" },
      { icon: Server, name: "Managed Networks" },
      { icon: HardDrive, name: "Rack Installation" },
      { icon: Cable, name: "Fiber Networking" },
    ],
  },
  {
    icon: Camera,
    title: "CCTV Installation",
    color: "#EF4444",
    description: "IP cameras, DVR/NVR setup, and remote monitoring for comprehensive security coverage.",
    subServices: [
      { icon: Camera, name: "IP Cameras" },
      { icon: Video, name: "DVR / NVR Setup" },
      { icon: Monitor, name: "Remote Monitoring" },
      { icon: Shield, name: "Security Solutions" },
      { icon: Lock, name: "Access Control" },
      { icon: Building, name: "Commercial CCTV" },
    ],
  },
  {
    icon: Monitor,
    title: "Computer Services",
    color: "#8B5CF6",
    description: "Expert repair, data recovery, and maintenance for laptops, desktops, and peripherals.",
    subServices: [
      { icon: Laptop, name: "Laptop Repair" },
      { icon: Monitor, name: "Desktop Repair" },
      { icon: Printer, name: "Printer Repair" },
      { icon: Database, name: "Data Recovery" },
      { icon: Bug, name: "Virus Removal" },
      { icon: Settings, name: "OS Installation" },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    color: "#06B6D4",
    description: "Microsoft Azure, Office 365, cloud migration, backup and email setup for modern businesses.",
    subServices: [
      { icon: CloudCog, name: "Microsoft Azure" },
      { icon: Mail, name: "Office 365 Setup" },
      { icon: Database, name: "Backup Solutions" },
      { icon: ArrowUpDown, name: "Cloud Migration" },
      { icon: Mail, name: "Email Setup" },
      { icon: Shield, name: "Cloud Security" },
    ],
  },
  {
    icon: Globe,
    title: "Digital Services",
    color: "#FF9800",
    description: "120+ government and digital services — PAN, passport, certificates, and more.",
    subServices: [
      { icon: FileText, name: "PAN Card" },
      { icon: FileText, name: "Passport Apply" },
      { icon: CreditCard, name: "Certificates" },
      { icon: Globe, name: "Govt Portals" },
      { icon: Briefcase, name: "Business Reg." },
      { icon: ClipboardList, name: "120+ Services" },
    ],
  },
  {
    icon: Wrench,
    title: "AMC Contracts",
    color: "#10B981",
    description: "Annual Maintenance Contracts for preventive maintenance and priority corporate IT support.",
    subServices: [
      { icon: Settings, name: "Preventive Maint." },
      { icon: Building, name: "Corporate Support" },
      { icon: Monitor, name: "Equipment Audit" },
      { icon: Wrench, name: "On-site Support" },
      { icon: ClipboardList, name: "SLA Support" },
      { icon: Shield, name: "Priority Service" },
    ],
  },
];

function ServiceCard({ service, index }: { service: ServiceCategory; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const { icon: Icon, title, color, description, subServices } = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:shadow-2xl"
      style={{ "--service-color": color } as React.CSSProperties}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${color}20` }}
          >
            <Icon className="w-6 h-6" style={{ color }} />
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/50 hover:text-white transition-all cursor-pointer"
          >
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#FF9800] transition-colors">
          {title}
        </h3>
        <p className="text-white/55 text-sm leading-relaxed">{description}</p>

        {/* Sub-services */}
        <motion.div
          initial={false}
          animate={{ height: expanded ? "auto" : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="mt-5 pt-5 border-t border-white/10 grid grid-cols-2 gap-2">
            {subServices.map(({ icon: SubIcon, name }) => (
              <div key={name} className="flex items-center gap-2 text-white/65 text-xs">
                <SubIcon className="w-3.5 h-3.5 flex-shrink-0" style={{ color }} />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom accent bar */}
      <div
        className="h-0.5 w-0 group-hover:w-full transition-all duration-500"
        style={{ backgroundColor: color }}
      />
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF9800]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A2F6B]/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#FF9800]/15 border border-[#FF9800]/30 text-[#FF9800] text-sm font-semibold rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            Everything IT, Under{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9800] to-[#ffcc02]">
              One Roof
            </span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            From basic computer repairs to enterprise networking and cloud infrastructure — click any card to explore.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
