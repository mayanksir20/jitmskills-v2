import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import EnrollmentForm from "../components/EnrollmentForm";

import GovernmentPartnered from "../assets/images/Verticals/Government-Partnered.webp";
import {
  PROGRAMS_DATA,
  SKILL_INITIATIVES,
  SCHEMES_SECTION_DATA,
} from "../constants/data";
import {
  Home,
  ChevronRight,
  ArrowUpRight,
  Target,
  Globe,
  Zap,
  Shield,
  Briefcase,
  GraduationCap,
  Plus,
  Minus,
  CheckCircle2,
  HeartPulse,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Sparkles,
  X,
} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  containerVariants,
  itemVariants,
} from "../utils/animations";

const VerticalsHero = () => {
  // Dynamic Text Logic for the 4th card
  const sectors_list = [
    "Skill Dev",
    "Logistics",
    "Energy",
    "Consulting",
    "WCD Projects",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % sectors_list.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [sectors_list.length]);

  const [expandedId, setExpandedId] = useState(null);
  const { header: programsHeader, programs } = PROGRAMS_DATA;

  const { header: schemesHeader, schemes } = SCHEMES_SECTION_DATA;
  const [activeScheme, setActiveScheme] = useState(null); // Click logic stat

  const navigate = useNavigate();

  const [showForm, setShowForm] = useState(false);

  const openFormModal = () => setShowForm(true);
  const closeFormModal = () => setShowForm(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-12 lg:pt-32 pb-20 overflow-hidden bg-[#0F172A]">
        {/* Background Video Parallax */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none w-full h-full">
          {/* Clean wrapper without undefined motion variables to prevent ESLint errors */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#0F172A]">
            <div className="absolute min-w-[180%] min-h-[120%] sm:min-w-[140%] sm:min-h-[140%] md:min-w-[115%] md:min-h-[115%] w-auto h-auto aspect-video top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <iframe
                className="w-full h-full pointer-events-none object-cover transform scale-110"
                src="https://www.youtube.com/embed/K_WzEuUPp8E?autoplay=1&mute=1&loop=1&playlist=K_WzEuUPp8E&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&enablejsapi=1&iv_load_policy=3"
                title="Background Video"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                style={{ pointerEvents: "none" }}
              />
            </div>
          </div>

          {/* Overlays (100% same content zone inside section boundary) */}
          <div className="absolute inset-0 bg-[#0F172A]/55 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-[#0F172A]/85 via-[#0F172A]/40 to-transparent z-20"></div>
        </div>

        <div className="max-w-7xl pt-16 mx-auto px-6 w-full relative z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT: Vertical Story */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-start"
            >
              {/* Breadcrumb Section */}
              <motion.nav variants={fadeInUp} className="mb-6 md:mt-0">
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                  <Link
                    to="/"
                    className="text-white/50 hover:text-[#D32F2F] transition-colors flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest"
                  >
                    <Home size={12} /> Home
                  </Link>
                  <ChevronRight size={12} className="text-white/20" />
                  <span className="text-white font-black text-[10px] uppercase tracking-widest">
                    Our Verticals
                  </span>
                </div>
              </motion.nav>

              <motion.span
                variants={fadeInUp}
                className="badge mb-6 border border-[#D32F2F]/30 bg-[#D32F2F]/10 text-white text-[10px]"
              >
                Multi-Sectoral Impact & Expertise
              </motion.span>

              <motion.h1
                variants={fadeInUp}
                className="h-super text-white italic uppercase mb-6 leading-tight"
              >
                Industry <br />
                <span className="text-red-gradient">Verticals</span>
              </motion.h1>

              <motion.div
                variants={fadeInUp}
                className="space-y-4 max-w-xl mb-12"
              >
                <p className="text-white/80 text-lg font-medium leading-relaxed italic">
                  From <b className="text-white">Government Skill Missions</b>{" "}
                  to corporate logistics, JITM Skills operates across diverse
                  <b className="text-[#D32F2F]"> Industrial Landscapes</b>.
                </p>

                <p className="text-white/60 text-sm leading-relaxed border-l-2 border-[#D32F2F] pl-4">
                  We empower the nation through dedicated verticals in
                  <b className="text-white">
                    {" "}
                    Renewable Energy, Telecom, and Healthcare
                  </b>
                  . Our expertise spans 20+ states, delivering high-impact
                  training and consulting solutions for India's evolving
                  workforce.
                </p>
              </motion.div>

              {/* Quick Scope Grid */}
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 gap-4 w-full max-w-lg mb-12"
              >
                {[
                  { icon: <Target size={16} />, text: "Skill Development" },
                  {
                    icon: <Briefcase size={16} />,
                    text: "Industrial Consulting",
                  },
                  { icon: <Zap size={16} />, text: "Renewable Energy" },
                  { icon: <Shield size={16} />, text: "Social Impact (CSR)" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-[#D32F2F]/10 transition-colors group"
                  >
                    <div className="text-[#D32F2F] group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-[9px] text-white/80 font-black uppercase tracking-widest">
                      {item.text}
                    </span>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp}>
                <button
                  className="btn-jitm group uppercase text-[11px] tracking-widest px-10"
                  onClick={() => navigate("/TrainingSectors")}
                >
                  Explore Our Scope{" "}
                  <ArrowUpRight
                    className="group-hover:rotate-45 transition-transform"
                    size={18}
                  />
                </button>
              </motion.div>
            </motion.div>

            {/* RIGHT VISUAL: Interactive Data Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative perspective-1000"
            >
              <div className="relative z-10 grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  {/* Card 1: Skill Missions */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotateZ: -1, y: -5 }}
                    className="h-52 bg-white/5 backdrop-blur-2xl rounded-[40px] border border-white/10 p-8 flex flex-col justify-between group hover:bg-[#D32F2F]/10 transition-all cursor-pointer relative overflow-hidden shadow-2xl"
                  >
                    <div className="flex justify-between items-start">
                      <GraduationCap
                        className="text-[#D32F2F] group-hover:animate-bounce transition-all"
                        size={32}
                      />
                      <div className="text-right">
                        <div className="text-white font-black text-2xl italic leading-none tracking-tighter">
                          700+
                        </div>
                        <div className="text-[7px] text-white/40 font-black uppercase tracking-widest mt-1">
                          Partnerships
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-black text-xs uppercase tracking-widest">
                        Skill Missions
                      </h4>
                      <p className="text-[9px] text-white/30 font-bold uppercase tracking-tighter mt-1">
                        UPSDM & Jharkhand Govt
                      </p>
                      <div className="w-full h-[1px] bg-white/10 mt-3 group-hover:bg-[#D32F2F]/50 transition-colors" />
                    </div>
                  </motion.div>

                  {/* Card 2: Main Red Card */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotateZ: 1, y: -5 }}
                    className="h-64 bg-[#D32F2F] rounded-[40px] p-8 flex flex-col justify-between shadow-[0_30px_60px_rgba(211,47,47,0.4)] cursor-pointer relative overflow-hidden group"
                  >
                    <Target
                      className="absolute -bottom-6 -right-6 text-white/10 group-hover:scale-110 transition-transform"
                      size={150}
                    />
                    <div className="flex justify-between items-start relative z-10">
                      <Globe className="text-white" size={32} />
                    </div>
                    <div className="relative z-10 space-y-1">
                      <div className="text-white font-black text-3xl italic tracking-tighter leading-none">
                        20+
                      </div>
                      <h4 className="text-white font-black text-xs uppercase tracking-widest">
                        States Impacted
                      </h4>
                      <p className="text-[9px] text-white/70 font-bold uppercase tracking-tighter">
                        Nationwide Reach
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-6 pt-12">
                  {/* Card 3: CSR & Empowerment */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotateZ: 1, y: -5 }}
                    className="h-64 bg-white/10 backdrop-blur-xl rounded-[40px] border border-white/10 p-8 flex flex-col justify-between hover:border-[#D32F2F]/50 transition-all cursor-pointer shadow-2xl group"
                  >
                    <div className="flex justify-between items-start">
                      <Shield className="text-[#D32F2F]" size={32} />
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse mt-2"></span>
                    </div>
                    <div>
                      <h4 className="text-white font-black text-xs uppercase tracking-widest mb-3 italic">
                        CSR Impact
                      </h4>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mb-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "85%" }}
                          transition={{ duration: 2, ease: "easeOut" }}
                          className="h-full bg-[#D32F2F]"
                        />
                      </div>
                      <p className="text-[8px] text-white/30 font-black uppercase tracking-tighter">
                        Women Empowerment Projects
                      </p>
                    </div>
                  </motion.div>

                  {/* Card 4: Dynamic Sector Rotation */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotateZ: -1, y: -5 }}
                    className="h-52 bg-white/5 backdrop-blur-2xl rounded-[40px] border border-white/10 p-8 flex flex-col justify-between cursor-pointer group overflow-hidden shadow-2xl"
                  >
                    <div className="flex justify-between items-start">
                      <Zap className="text-[#D32F2F]" size={32} />
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F] animate-bounce"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F] animate-bounce delay-100"></span>
                      </div>
                    </div>

                    <div className="relative h-10 my-2">
                      <AnimatePresence>
                        <motion.h4
                          key={sectors_list[index]}
                          initial={{ y: 20, opacity: 0, filter: "blur(8px)" }}
                          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                          exit={{ y: -20, opacity: 0, filter: "blur(8px)" }}
                          transition={{ duration: 0.6, ease: "backOut" }}
                          className="absolute inset-0 text-white font-black text-xl italic uppercase tracking-tighter leading-none"
                        >
                          {sectors_list[index]}
                        </motion.h4>
                      </AnimatePresence>
                    </div>

                    <div>
                      <div className="w-full h-[1px] bg-white/10 mb-2" />
                      <p className="text-[8px] text-white/30 font-black uppercase tracking-widest">
                        Expanding Training Horizons
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Rotating background ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full -z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3-Card Grid Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <motion.span
              variants={fadeInUp}
              className="text-[#D32F2F] text-[10px] font-black uppercase  mb-4 block"
            >
              {programsHeader.superTitle}
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-black text-slate-900 italic uppercase mb-6"
            >
              {programsHeader.title}{" "}
              <span className="text-[#D32F2F]">{programsHeader.subtitle}</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="max-w-2xl mx-auto text-slate-500 font-medium"
            >
              {programsHeader.description}
            </motion.p>
          </motion.div>

          {/* 3-Card Row Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {programs.map((prog) => (
              <motion.div
                key={prog.id}
                variants={fadeInUp}
                className={`relative flex flex-col rounded-[2.5rem] border border-slate-200 overflow-hidden transition-all duration-500 bg-white ${
                  expandedId === prog.id
                    ? "ring-2 ring-[#D32F2F] shadow-2xl scale-[1.02] z-20"
                    : "hover:shadow-xl"
                }`}
              >
                {/* Image Section - Pehle se dikhega */}
                <div className="relative h-64 overflow-hidden group">
                  <img loading="lazy"
                    src={prog.image}
                    alt={prog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#D32F2F] text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                      {prog.tag}
                    </span>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                </div>

                {/* Content Section */}
                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-4 text-xs font-black text-slate-300 uppercase italic">
                    Program {prog.id}
                  </div>
                  <h3 className="text-xl font-black text-slate-900 uppercase italic mb-3 leading-tight">
                    {prog.title}
                  </h3>
                  <p className="text-slate-500 text-xs font-medium mb-6 line-clamp-2">
                    {prog.shortDesc}
                  </p>

                  {/* View More Trigger */}
                  <button
                    onClick={() =>
                      setExpandedId(expandedId === prog.id ? null : prog.id)
                    }
                    className="mt-auto flex items-center justify-between w-full p-4 rounded-2xl bg-slate-50 group hover:bg-[#D32F2F] transition-all"
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest group-hover:text-white transition-colors">
                      {expandedId === prog.id
                        ? "Hide Details"
                        : "View Training Details"}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      {expandedId === prog.id ? (
                        <Minus size={14} className="text-[#D32F2F]" />
                      ) : (
                        <Plus size={14} className="text-[#D32F2F]" />
                      )}
                    </div>
                  </button>

                  {/* Expanded Details - Open on click */}
                  <AnimatePresence>
                    {expandedId === prog.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden mt-6 pt-6 border-t border-slate-100"
                      >
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-2">
                            {prog.fullDetails.stats.map((stat, i) => (
                              <div
                                key={i}
                                className="bg-slate-50 p-3 rounded-xl border border-slate-100"
                              >
                                <div className="text-[#D32F2F] font-black text-sm">
                                  {stat.value}
                                </div>
                                <div className="text-[7px] text-slate-400 uppercase tracking-widest">
                                  {stat.label}
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="space-y-2">
                            {prog.fullDetails.points
                              .slice(0, 3)
                              .map((point, i) => (
                                <div
                                  key={i}
                                  className="flex items-center gap-2"
                                >
                                  <CheckCircle2
                                    size={12}
                                    className="text-[#D32F2F]"
                                  />
                                  <span className="text-[10px] font-bold text-slate-700 uppercase">
                                    {point}
                                  </span>
                                </div>
                              ))}
                          </div>

                          <div className="bg-red-50 p-4 rounded-2xl flex items-start gap-3">
                            <HeartPulse
                              size={16}
                              className="text-[#D32F2F] shrink-0"
                            />
                            <p className="text-[9px] text-slate-600 font-medium leading-tight">
                              {prog.fullDetails.medical}
                            </p>
                          </div>

                          <button className="w-full bg-slate-900 text-white py-3 rounded-xl font-black text-[9px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#D32F2F] transition-colors">
                            Full Curriculum <ArrowUpRight size={14} />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="pt-20 pb-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Side: Content */}
            <div>
              <motion.span
                variants={fadeInUp}
                className="text-[#D32F2F] text-[10px] font-black uppercase  mb-4 block"
              >
                {SKILL_INITIATIVES.superTitle}
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-black text-slate-900 italic uppercase mb-6 leading-tight"
              >
                {SKILL_INITIATIVES.title}
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-slate-500 font-medium mb-8 leading-relaxed"
              >
                {SKILL_INITIATIVES.description}
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="p-6 bg-slate-50 rounded-3xl border-l-4 border-[#D32F2F]"
              >
                <p className="text-slate-900 font-bold italic text-sm italic">
                  "{SKILL_INITIATIVES.mission}"
                </p>
              </motion.div>
            </div>

            {/* Right Side: Feature List */}
            <div className="grid sm:grid-cols-1 gap-4">
              {SKILL_INITIATIVES.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="flex items-center gap-4 p-4 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <CheckCircle size={18} className="text-[#D32F2F]" />
                  </div>
                  <span className="text-xs font-black text-slate-700 uppercase tracking-wide">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#0B0F1A] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header Section with Fade In - Kept Same to maintain continuity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <span className="text-[#D32F2F] text-[10px] font-black uppercase tracking-[0.4em] mb-4 block italic">
              {schemesHeader.superTitle}
            </span>
            <h2 className="text-4xl md:text-6xl font-black italic uppercase mb-8 leading-[1.1]">
              {schemesHeader.title} <br />
              <span className="text-[#D32F2F]">{schemesHeader.subtitle}</span>
            </h2>
            <p className="max-w-4xl text-slate-500 font-medium leading-relaxed italic border-l border-white/20 pl-6">
              {schemesHeader.description}
            </p>
          </motion.div>

          {/* Naya Dynamic Split-Bento Scheme Viewer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* 1. LEFT SIDE: Full Image Preview Block */}
            {/* Hum image ko alag block me full screen context me dikhayenge */}
            <motion.div
              layout
              className="relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden border border-white/10 group shadow-2xl"
            >
              <AnimatePresence>
                {/* Active scheme ke hisab se image automatically fade logic ke sath change hogi */}
                <motion.img
                  key={activeScheme || "default"}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  src={
                    activeScheme
                      ? schemes.find((s) => s.id === activeScheme).image
                      : GovernmentPartnered
                  }
                  className="absolute inset-0 w-full h-full"
                />
              </AnimatePresence>

              {/* Transparent Red Gradient Overlay (Signature look) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F1A] via-[#0B0F1A]/70 to-transparent group-hover:via-[#D32F2F]/20 group-hover:from-[#0B0F1A]/80 transition-all duration-500" />

              {/* Dynamic Image Caption (Untouched Content zone) */}
              <div className="absolute bottom-10 left-10 right-10 z-10">
                <AnimatePresence>
                  {activeScheme && (
                    <motion.div
                      key={activeScheme + "_caption"}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.4 }}
                    >
                      <span className="bg-[#D32F2F]/10 border border-[#D32F2F]/20 px-3 py-1 rounded-md text-[8px] font-black text-white uppercase tracking-widest block mb-3 w-fit">
                        {schemes.find((s) => s.id === activeScheme).tag}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-black uppercase italic text-white leading-tight">
                        {schemes.find((s) => s.id === activeScheme).title}
                      </h3>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* 2. RIGHT SIDE: Dynamic Info & Benefits Block */}
            {/* Jab tak click nahi hota, default instructions dikhayenge */}
            <AnimatePresence>
              {!activeScheme ? (
                <motion.div
                  key="default_right"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="p-10 bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] h-[400px] md:h-[600px] flex flex-col justify-center items-center text-center group hover:border-[#D32F2F]/20 transition-all"
                >
                  <Zap
                    className="text-[#D32F2F]/40 mb-8 animate-pulse"
                    size={60}
                    strokeWidth={1}
                  />
                  <h4 className="text-2xl font-black text-white uppercase italic mb-3 tracking-tighter">
                    Unlock Your Potential
                  </h4>
                  <p className="text-slate-500 text-sm max-w-sm italic leading-relaxed">
                    Explore Our Diverse Government-Partnered Schemes by clicking
                    the cards below and discover the impact we are creating
                    together.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key={activeScheme + "_info"}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-10 bg-white/5 backdrop-blur-xl border border-[#D32F2F]/30 shadow-[0_0_60px_-15px_rgba(211,47,47,0.4)] rounded-[3rem] h-auto md:h-[600px] flex flex-col"
                >
                  {/* Header Structure changed to Image Preview Left & Info Right context */}
                  <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pr-2">
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-slate-300 text-sm font-medium mb-12 leading-relaxed italic border-l-2 border-[#D32F2F] pl-6"
                    >
                      {schemes.find((s) => s.id === activeScheme).intro}
                    </motion.p>

                    {/* Benefits Grid */}
                    <div className="grid gap-3 mb-12">
                      <p className="text-[10px] font-black text-[#D32F2F] uppercase tracking-widest mb-2">
                        Program Benefits:
                      </p>
                      {schemes
                        .find((s) => s.id === activeScheme)
                        .benefits.map((benefit, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-4 bg-white/5 p-5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors"
                          >
                            <CheckCircle2
                              size={16}
                              className="text-[#D32F2F] mt-1 shrink-0"
                            />
                            <span className="text-[11px] md:text-[12px] font-bold text-white/90 uppercase tracking-wide">
                              {benefit}
                            </span>
                          </motion.div>
                        ))}
                    </div>
                  </div>

                  {/* Sticky Action Footer */}
                  <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between gap-6 bg-transparent sticky bottom-0 z-10">
                    <div className="flex gap-10">
                      <div>
                        <div className="text-3xl font-black italic text-white leading-none">
                          {schemes.find((s) => s.id === activeScheme).impact
                            ?.trained || "---"}
                        </div>
                        <div className="text-[8px] font-black uppercase text-white/40 tracking-widest mt-1">
                          Trained
                        </div>
                      </div>
                      <div>
                        <div className="text-3xl font-black italic text-[#D32F2F] leading-none">
                          {schemes.find((s) => s.id === activeScheme).impact
                            ?.placed || "---"}
                        </div>
                        <div className="text-[8px] font-black uppercase text-white/40 tracking-widest mt-1">
                          Placed
                        </div>
                      </div>
                    </div>
                    <motion.button
                      onClick={openFormModal}
                      whileHover={{ x: 5 }}
                      className="btn-jitm group uppercase text-[10px] tracking-widest px-10 flex justify-center items-center gap-2"
                    >
                      Enroll Now{" "}
                      <ArrowRight
                        className="group-hover:translate-x-1 transition-transform"
                        size={16}
                      />
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {showForm && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                  {/* Backdrop with Heavy Blur */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={closeFormModal}
                    className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
                  />

                  {/* Form Content Wrapper */}
                  <motion.div
                    initial={{ y: "50%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "50%", opacity: 0 }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="relative w-full max-w-5xl z-10 max-h-[90vh] overflow-y-auto no-scrollbar"
                  >
                    {/* Close Button */}
                    <button
                      onClick={closeFormModal}
                      className="absolute top-4 right-4 p-2 text-slate-400 hover:text-[#D32F2F] transition-all z-50 bg-slate-900/50 rounded-full border border-white/10"
                    >
                      <X size={20} />
                    </button>

                    <div className="w-full overflow-hidden">
                      <EnrollmentForm
                        title="Placement Drive Application"
                        onSuccess={closeFormModal}
                        defaultType="free"
                      />
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>

          {/* 3. Scheme Selection Row (Below Image & Info) */}
          {/* Is layer par click karte he left side ki image aur right side ki info change ho jayegi */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/5">
            {schemes.map((scheme) => (
              <motion.div
                key={scheme.id}
                variants={itemVariants}
                onClick={() => setActiveScheme(scheme.id)}
                className={`p-6 rounded-2xl border cursor-pointer transition-all ${
                  activeScheme === scheme.id
                    ? "border-[#D32F2F] bg-white/5"
                    : "border-white/10 bg-transparent hover:border-white/20 hover:bg-white/[0.03]"
                }`}
              >
                <span className="text-[#D32F2F] font-black text-[8px] uppercase tracking-wider mb-2 block italic">
                  {scheme.tag}
                </span>
                <h4 className="text-sm font-black uppercase italic leading-tight group-hover:text-[#D32F2F] transition-colors">
                  {scheme.title}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8FAFC] overflow-hidden relative border-y border-slate-200">
        {/* Background Glows - Adjusted for wider layout */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[50%] h-full bg-[#D32F2F]/[0.03] skew-x-12 transform translate-x-20" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px]" />
        </div>

        {/* Increased max-width and reduced horizontal padding to fill space */}
        <div className="max-w-[1400px] mx-auto px-4 md:px-10 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 text-left">
            {/* Left Side: Content (Takes more space now) */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3 py-1.5 rounded-lg mb-6 shadow-sm"
              >
                <Sparkles size={14} className="text-[#D32F2F]" />
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-500">
                  Start Your Journey Today
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-7xl font-black italic uppercase text-[#0B0F1A] mb-6 leading-[0.95] tracking-tighter"
              >
                Ready to <span className="text-[#D32F2F]">Transform</span>{" "}
                <br />
                Your Future?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-base md:text-lg text-slate-600 font-bold leading-snug max-w-2xl italic border-l-4 border-[#D32F2F] pl-6"
              >
                Join thousands of youth who have built successful careers
                through JITM Skills programs. Stay connected with updates on
                government schemes, CSR training, and placement drives — all
                delivered to your inbox every month.
              </motion.p>
            </div>

            {/* Right Side: Action Area (Stacked for impact) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="w-full lg:w-auto flex flex-col gap-4 min-w-[320px]"
            >
              <button
                className="group relative bg-[#D32F2F] text-white w-full py-6 rounded-xl font-black text-xs uppercase tracking-[0.2em] shadow-[0_15px_30px_-10px_rgba(211,47,47,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(211,47,47,0.5)] transition-all flex items-center justify-center gap-3 active:scale-95"
                onClick={openFormModal}
              >
                Enroll Now
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button
                className="group bg-[#0B0F1A] text-white w-full py-6 rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-800 transition-all flex items-center justify-center gap-3 active:scale-95 shadow-lg"
                onClick={() => navigate("/ContactUs")}
              >
                Contact Us for Details
                <MessageSquare size={20} />
              </button>

              <div className="mt-4 text-center lg:text-right">
                <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                  Trusted by 20+ State Missions
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VerticalsHero;
