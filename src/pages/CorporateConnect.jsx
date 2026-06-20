import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Building2,
  CheckCircle2,
  ArrowUpRight,
  Home,
  ChevronRight,
  Briefcase,
  Handshake,
  Globe,
  Users,
  FileCheck2,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  industrySectors,
  enablementFeatures,
  jobReadyPoints,
  tieUpCards,
  featuresList,
} from "../constants/data";
import {
  containerVariants,
  staggerContainer,
  cardVariants,
  fadeInUp,
} from "../utils/animations";

import CorporateTrainingImage from "../assets/images/Direct Employer Integration Portal.webp";

const CorporateConnectFirstSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="relative min-h-screen flex items-center pt-12 lg:pt-32 pb-20 overflow-hidden bg-[#0F172A]">
        {/* Background Video Parallax Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none w-full h-full">
          <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#0F172A]">
            <div className="absolute min-w-[180%] min-h-[120%] sm:min-w-[140%] sm:min-h-[140%] md:min-w-[115%] md:min-h-[115%] w-auto h-auto aspect-video top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <iframe
                className="w-full h-full pointer-events-none object-cover transform scale-110"
                src="https://www.youtube.com/embed/K_WzEuUPp8E?autoplay=1&mute=1&loop=1&playlist=K_WzEuUPp8E&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&enablejsapi=1&iv_load_policy=3"
                title="Background Network Canvas"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                style={{ pointerEvents: "none" }}
              />
            </div>
          </div>

          {/* Cinematic Overlays */}
          <div className="absolute inset-0 bg-[#0F172A]/65 z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/50 to-transparent z-20"></div>
        </div>

        <div className="max-w-7xl pt-16 mx-auto px-6 w-full relative z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* ================= LEFT CONTENT: CORE VERTICAL FRAMEWORK ================= */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-start"
            >
              {/* 🛠️ Modern Dynamic Breadcrumb Area */}
              <motion.nav variants={fadeInUp} className="mb-6 md:mt-0">
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                  <Link
                    to="/"
                    className="text-white/50 hover:text-[#D32F2F] transition-colors flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest"
                  >
                    <Home size={12} /> Home
                  </Link>
                  <ChevronRight size={12} className="text-white/20" />
                  <span className="text-white font-black text-[10px] uppercase tracking-widest">
                    Corporate Connect
                  </span>
                </div>
              </motion.nav>

              <motion.span
                variants={fadeInUp}
                className="px-4 py-1.5 rounded-full border border-[#D32F2F]/30 bg-[#D32F2F]/10 text-white font-bold tracking-widest uppercase text-[9px] mb-6 inline-block"
              >
                Alliances, Placements & Collaborations
              </motion.span>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight mb-6 leading-tight font-sans"
              >
                Corporate <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D32F2F] to-red-500">
                  Connect
                </span>
              </motion.h1>

              <motion.div
                variants={fadeInUp}
                className="space-y-4 max-w-xl mb-12"
              >
                <p className="text-white/80 text-lg font-medium leading-relaxed">
                  At JITM Skills, we bridge the gap between talent and industry
                  demand through strategic alliances, centralized recruitment
                  pathways, and actionable institutional framework bonds.
                </p>

                <p className="text-white/60 text-sm leading-relaxed border-l-2 border-[#D32F2F] pl-4">
                  We empower industries globally by structuralizing ecosystem
                  segments across 20+ Indian states, driving shared outcomes for
                  Fortune 500 partners, public institutions, and skill
                  ecosystems.
                </p>
              </motion.div>

              {/* 📊 4 Topics Quick Scope Blocks Grid */}
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 gap-4 w-full max-w-lg mb-12"
              >
                {[
                  { text: "Recruitment Partners", icon: <Users size={15} /> },
                  { text: "Industry Tie-ups", icon: <Building2 size={15} /> },
                  {
                    text: "Become a Hiring Partner",
                    icon: <Briefcase size={15} />,
                  },
                  {
                    text: "MoUs & Collaborations",
                    icon: <Handshake size={15} />,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-white/5 border border-white/10 p-3.5 rounded-xl hover:bg-[#D32F2F]/10 hover:border-[#D32F2F]/30 transition-all group"
                  >
                    <div className="text-[#D32F2F] bg-white/5 p-2 rounded-lg group-hover:scale-110 group-hover:bg-[#D32F2F]/20 transition-all">
                      {item.icon}
                    </div>
                    <span className="text-[9px] text-white/90 font-black uppercase tracking-wider leading-tight">
                      {item.text}
                    </span>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp}>
                <button
                  className="inline-flex items-center gap-2 bg-[#D32F2F] hover:bg-red-700 text-white font-bold uppercase text-[11px] tracking-widest px-8 py-4 rounded-xl transition-all group shadow-lg shadow-red-900/20"
                  onClick={() => {
                    const targetElement = document.getElementById(
                      "hiring-form-section",
                    );
                    if (targetElement)
                      targetElement.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Become a Hiring Partner
                  <ArrowUpRight
                    className="group-hover:rotate-45 transition-transform"
                    size={16}
                  />
                </button>
              </motion.div>
            </motion.div>

            {/* ================= RIGHT VISUAL: BENTO GRID INTERACTIVE LAYER ================= */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative perspective-1000"
            >
              <div className="relative z-10 grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  {/* CARD 1: RECRUITMENT NETWORK */}
                  <motion.div
                    whileHover={{ scale: 1.04, rotateZ: -0.5, y: -4 }}
                    className="h-52 bg-white/5 backdrop-blur-2xl rounded-[32px] border border-white/10 p-7 flex flex-col justify-between group hover:bg-white/10 transition-all cursor-pointer shadow-2xl"
                  >
                    <div className="flex justify-between items-start">
                      <div className="p-3 bg-[#D32F2F]/10 rounded-2xl text-[#D32F2F] group-hover:bg-[#D32F2F] group-hover:text-white transition-all">
                        <Users size={24} />
                      </div>
                      <div className="text-right">
                        <div className="text-white font-black text-2xl italic leading-none tracking-tighter">
                          450+
                        </div>
                        <div className="text-[7px] text-white/40 font-black uppercase tracking-widest mt-1">
                          Active Employers
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-black text-xs uppercase tracking-widest">
                        Recruitment Network
                      </h4>
                      <p className="text-[9px] text-white/40 font-bold uppercase tracking-tight mt-1">
                        Direct Placement Links
                      </p>
                      <div className="w-full h-[1px] bg-white/10 mt-3 group-hover:bg-[#D32F2F]/40 transition-colors" />
                    </div>
                  </motion.div>

                  {/* CARD 2: NATIONWIDE TIE-UPS */}
                  <motion.div
                    whileHover={{ scale: 1.04, rotateZ: 0.5, y: -4 }}
                    className="h-64 bg-[#D32F2F] rounded-[32px] p-7 flex flex-col justify-between shadow-[0_25px_50px_rgba(211,47,47,0.3)] cursor-pointer relative overflow-hidden group"
                  >
                    <Building2
                      className="absolute -bottom-8 -right-8 text-white/10 group-hover:scale-105 transition-transform duration-500"
                      size={140}
                    />
                    <div className="flex justify-between items-start relative z-10">
                      <div className="p-2 bg-white/10 rounded-xl text-white">
                        <Globe size={22} />
                      </div>
                    </div>
                    <div className="relative z-10 space-y-1">
                      <div className="text-white font-black text-3xl italic tracking-tighter leading-none">
                        20+
                      </div>
                      <h4 className="text-white font-black text-xs uppercase tracking-widest">
                        Industry Tie-ups
                      </h4>
                      <p className="text-[9px] text-white/80 font-bold uppercase tracking-tight">
                        Pan-India Corporate Operations
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-6 pt-12">
                  {/* CARD 3: MOUs & GOVT COLLABORATIONS */}
                  <motion.div
                    whileHover={{ scale: 1.04, rotateZ: 0.5, y: -4 }}
                    className="h-64 bg-white/10 backdrop-blur-xl rounded-[32px] border border-white/10 p-7 flex flex-col justify-between hover:border-[#D32F2F]/40 hover:bg-white/15 transition-all cursor-pointer shadow-2xl group"
                  >
                    <div className="flex justify-between items-start">
                      <div className="p-3 bg-white/5 text-[#D32F2F] rounded-2xl">
                        <Handshake size={24} />
                      </div>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mt-2"></span>
                    </div>
                    <div>
                      <h4 className="text-white font-black text-xs uppercase tracking-widest mb-2.5">
                        MoUs & Alliances
                      </h4>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mb-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "92%" }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-[#D32F2F]"
                        />
                      </div>
                      <p className="text-[8px] text-white/40 font-black uppercase tracking-widest">
                        Institutional & Govt Signed Pacts
                      </p>
                    </div>
                  </motion.div>

                  {/* CARD 4: FIXED REPLACED DYNAMIC HUB (Hiring Partner Gate) */}
                  <motion.div
                    whileHover={{ scale: 1.04, rotateZ: -0.5, y: -4 }}
                    className="h-52 bg-gradient-to-br from-slate-900 to-slate-950 rounded-[32px] border border-white/10 p-7 flex flex-col justify-between cursor-pointer group shadow-2xl relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-xl pointer-events-none" />

                    <div className="flex justify-between items-start">
                      <div className="p-3 bg-white/5 text-red-400 rounded-2xl group-hover:text-white group-hover:bg-[#D32F2F] transition-all">
                        <FileCheck2 size={22} />
                      </div>
                      <span className="text-[8px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                        Live Gate
                      </span>
                    </div>

                    <div className="space-y-1">
                      <h4 className="text-white font-black text-xs uppercase tracking-widest group-hover:text-[#D32F2F] transition-colors">
                        Join Ecosystem
                      </h4>
                      <p className="text-[10px] text-slate-400 font-medium leading-tight">
                        Onboard your enterprise dashboard instantly to pool
                        curated profiles.
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[8px] font-bold uppercase text-slate-500 group-hover:text-white transition-colors">
                      <span>Onboarding Form</span>
                      <ArrowUpRight size={12} />
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Rotating Subtle Background Aura Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[125%] border border-white/5 rounded-full -z-10 pointer-events-none"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-50/50 min-h-screen pt-24 pb-16 overflow-hidden px-4 sm:px-6 lg:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          {/* ================= HERO TEXT BLOCK BANNER (Enhanced Entry Animation) ================= */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="bg-red-50 text-[#D32F2F] text-[10px] font-black uppercase tracking-[0.25em] px-4 py-1.5 rounded-full inline-block mb-4 border border-red-100">
              Employers & Partnerships
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              Building Strong <br />
              <span className="text-[#D32F2F] bg-gradient-to-r from-[#D32F2F] to-red-500 bg-clip-text text-transparent">
                Industry Partnerships
              </span>
            </h1>
            <p className="mt-4 text-sm md:text-base font-medium text-slate-500 leading-relaxed">
              At JITM Skills, we collaborate with leading employers and
              corporate institutions to build industry-ready talent and
              sustainable employment pathways. Our partnerships ensure training
              remains practical, relevant, and aligned with workforce needs.
            </p>
          </motion.div>

          {/* ================= SECTION 1: SECTORS BENTO GRID ================= */}
          <div className="mb-12">
            {/* Header Info Block with Scroll Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4"
            >
              <div>
                <span className="text-[#D32F2F] text-[10px] font-black tracking-widest uppercase block mb-1">
                  Ecosystem Categories
                </span>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                  Our Recruitment Partners Network
                </h2>
              </div>
              <p className="max-w-md text-xs font-semibold text-slate-400">
                A robust cross-functional alliance enabling quick entry paths,
                placements, and career setups for certified professionals.
              </p>
            </motion.div>

            {/* Grid Layout Setup with Precise Staggered Logic Links */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.08,
                    delayChildren: 0.1,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {industrySectors.map((sector, idx) => {
                // FIX: Icon component reference ko Capital letter variable me extract kiya
                const IconComponent = sector.icon;

                return (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, y: 25, scale: 0.98 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        transition: {
                          type: "spring",
                          stiffness: 100,
                          damping: 15,
                        },
                      },
                    }}
                    whileHover={{ y: -6, transition: { duration: 0.2 } }}
                    className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:border-red-100/50 transition-all flex flex-col justify-between group relative overflow-hidden"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        {/* FIX: Dynamic bg aur color injection data.js se */}
                        <div
                          className={`p-3 rounded-xl transition-colors ${sector.bgColor || "bg-slate-50"} ${sector.iconColor || "text-[#D32F2F]"}`}
                        >
                          {/* FIX: Component render structure */}
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 bg-slate-50 px-2.5 py-1 rounded-md">
                          {sector.badge}
                        </span>
                      </div>
                      <h3 className="text-base font-black text-slate-800 mb-2 tracking-tight group-hover:text-[#D32F2F] transition-colors">
                        {sector.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">
                        {sector.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-50 flex items-center justify-between text-[10px] font-bold uppercase text-slate-400 group-hover:text-[#D32F2F] transition-colors">
                      <span>Explore Openings</span>
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: WHAT WE ENABLE ================= */}
      <section className="mb-12 bg-gradient-to-br from-slate-900 to-slate-950 p-24 md:p-20 text-white relative overflow-hidden shadow-2xl">
        {/* Decorative absolute element lines overlay */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

        {/* Left Title Area Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mb-12 relative z-10"
        >
          <span className="text-[#D32F2F] text-[10px] font-black uppercase block mb-2">
            Actionable Frameworks
          </span>

          {/* Font-white tracking exact class as you gave */}
          <h1 className="text-3xl md:text-5xl font-white tracking-tight leading-tight">
            What These Corporate
            <br />
            <span className="text-[#D32F2F] bg-gradient-to-r from-[#D32F2F] to-red-500 bg-clip-text text-transparent">
              Partnerships Enable
            </span>
          </h1>
          <p className="text-slate-400 font-medium text-xs md:text-sm mt-3 leading-relaxed">
            These partnerships go far beyond mere corporate handshakes. They
            structuralize placement-linked modules, direct hiring engagements,
            and actual sustainable placement pipelines.
          </p>
        </motion.div>

        {/* Staggered Grid Container */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.08 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
        >
          {enablementFeatures.map((feat, i) => {
            // EXACT SAME ICON EXTRACTION VARIABLE
            const FeatIcon = feat.icon;

            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 100, damping: 15 },
                  },
                }}
                whileHover={{ y: -2 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:bg-white/10 transition-all"
              >
                {/* Exact Same Div Inner Icons Layer */}
                <div className="text-[#D32F2F] mb-4 bg-white/5 w-12 h-12 flex items-center justify-center rounded-xl border border-white/5">
                  <FeatIcon className="w-6 h-6" />
                </div>
                <h4 className="text-[17px] font-black tracking-tight text-white mb-1.5">
                  {feat.title}
                </h4>
                <p className="text-[11px] font-medium text-slate-400 leading-normal">
                  {feat.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ================= SECTION 3: JOB-READY DAY ONE (SPLIT VIEW) ================= */}
      <section className="mb-12 p-6 md:p-12 flex flex-col lg:flex-row items-center gap-12 overflow-hidden">
        {/* Left Grid Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full lg:w-1/2 space-y-6"
        >
          {/* Text Weights Header (Exact Same Elements) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-[#D32F2F] text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-md inline-block mb-3">
              Core Training Outcomes
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Job-Ready From <br />
              <span className="text-[#D32F2F] bg-gradient-to-r from-[#D32F2F] to-red-500 bg-clip-text text-transparent">
                Day One
              </span>
            </h1>
            <p className="text-xs md:text-sm font-medium text-slate-500 mt-2 leading-relaxed">
              Our strict multi-industry employer network ensures that every
              candidate is technically prepared to perform efficiently in live
              production environments from the very first clock-in.
            </p>
          </motion.div>

          {/* Structured Checked Bullet items list (Exact Same Loop & Condition Logic) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.08, delayChildren: 0.2 },
              },
            }}
            className="space-y-3.5"
          >
            {jobReadyPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -15 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { type: "spring", stiffness: 120, damping: 14 },
                  },
                }}
                className="flex items-start gap-3 group"
              >
                <div className="mt-0.5 text-emerald-500 shrink-0 transform group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={16} className="fill-emerald-50/50" />
                </div>
                <span className="text-xs font-bold text-slate-600 leading-tight group-hover:text-slate-900 transition-colors">
                  {point}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Presentation Visual Graphics Layout (Exact Same Inner Graphics Components) */}
        <motion.div
          initial={{ opacity: 0, x: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full lg:w-1/2 relative"
        >
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl group border border-slate-100">
            {/* 1. Real Training/Placement Image Asset */}
            <img
              src={CorporateTrainingImage}
              alt="Corporate Recruitment Training at JITM Skills"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* 2. Dark Gradient Overlay Text Protection */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />

            {/* 3. Floating Live Status Tag */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 shadow-lg flex items-center gap-2"
            >
              <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[9px] font-black text-slate-800 uppercase tracking-wider">
                Live Recruitment Grid
              </span>
            </motion.div>

            {/* 4. Overlaid Text Panel Details */}
            <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 text-white space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="space-y-1"
              >
                <div className="flex items-center gap-2 text-red-400 font-bold uppercase text-[9px] tracking-widest">
                  <Building2 size={12} />
                  <span>Direct Corporate Link</span>
                </div>
                <h4 className="text-sm md:text-base font-black tracking-tight text-white">
                  Direct Employer Integration Portal
                </h4>
                <p className="text-[10px] text-slate-300/90 font-medium max-w-sm leading-normal">
                  Live dashboards connection routing student data maps directly
                  to human resource engines.
                </p>
              </motion.div>

              {/* Dynamic Badge Tags Inside Image Layout (With Micro Hover Animations) */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-wrap gap-2 pt-1"
              >
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  className="text-[9px] font-black uppercase tracking-wider px-2.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg cursor-default select-none block"
                >
                  💼 Practical Exposures
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  className="text-[9px] font-black uppercase tracking-wider px-2.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg cursor-default select-none block"
                >
                  🤝 Job Fairs Link
                </motion.span>
                <motion.span
                  whileHover={{ scale: 1.03 }}
                  className="text-[9px] font-black uppercase tracking-wider px-2.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg cursor-default select-none block"
                >
                  📊 Post Placement Track
                </motion.span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-[#0F172A] p-6 md:p-14 relative overflow-hidden">
        {/* Premium Cinematic Subtle Mesh background lights */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* ================= LEFT COLUMN: HEADING & CONTENT WEIGHTS ================= */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              variants={fadeInUp}
            >
              <span className="text-[#D32F2F] text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-white/5 rounded-md inline-block mb-3 border border-white/10">
                Industry Collaboration
              </span>

              {/* Exact Dynamic Text Hierarchy as required */}
              <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
                Job-Ready From <br />
                <span className="text-[#D32F2F] bg-gradient-to-r from-[#D32F2F] to-red-500 bg-clip-text text-transparent">
                  Day One
                </span>
              </h1>

              <p className="text-xs md:text-sm font-medium text-slate-400 mt-4 leading-relaxed">
                To maintain high training standards, JITM Skills partners with
                leading organizations, sector experts, and service providers.
                Our strict multi-industry employer network ensures that every
                candidate is technically prepared to perform efficiently in live
                production environments from the very first clock-in.
              </p>
            </motion.div>

            {/* Strategic Metrics Impact Zone */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              variants={fadeInUp}
            >
              <div className="pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xl font-black text-white italic tracking-tight">
                    94%
                  </h4>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mt-0.5">
                    First-Day Readiness
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-black text-white italic tracking-tight">
                    200+
                  </h4>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mt-0.5">
                    Signed Pact Synergies
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ================= RIGHT COLUMN: ASYMMETRIC 2x2 CARD GRID MATRIX ================= */}
          <div className="lg:col-span-7 w-full">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {tieUpCards.map((card, idx) => {
                const IconComponent = card.icon;

                return (
                  <motion.div
                    key={idx}
                    variants={cardVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`bg-slate-900/40 backdrop-blur-xl border border-white/5 p-6 rounded-[28px] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${card.borderHover}`}
                  >
                    {/* Subtle Interactive Card Radial Ambient Shadow */}
                    <div
                      className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10 ${card.glowColor}`}
                    />

                    <div>
                      {/* Upper Header Card Block */}
                      <div className="flex justify-between items-start mb-5">
                        <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-[#D32F2F] group-hover:bg-[#D32F2F] group-hover:text-white transition-all duration-300">
                          <IconComponent size={20} />
                        </div>
                        <span className="text-[8px] font-black tracking-widest uppercase text-slate-500 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                          {card.tag}
                        </span>
                      </div>

                      {/* Main Title & Description Content weights */}
                      <h3 className="text-sm font-black text-white tracking-tight mb-2 group-hover:text-[#D32F2F] transition-colors duration-200">
                        {card.title}
                      </h3>
                      <p className="text-[11px] font-medium text-slate-400 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>

                    {/* Micro action border vector footer inside card */}
                    <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[8px] font-bold uppercase tracking-wider text-slate-500 group-hover:text-white transition-colors">
                      <span>Integration Map</span>
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transform translate-y-0.5 group-hover:translate-y-0 transition-all"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 py-16 px-6 md:px-14 rounded-[40px] border border-slate-200/60 relative overflow-hidden shadow-sm">
        {/* Background Ambient Warm/Red Accent Layer for Light UI */}
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#D32F2F]/5 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-500/5 rounded-full blur-[60px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* ================= LEFT SIDE: MAIN VALUE CORE ================= */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial="hidden"
              variants={fadeInUp}
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
            >
              <span className="text-[#D32F2F] text-[9px] font-black uppercase tracking-widest px-3 py-1 bg-white rounded-md inline-block mb-3 border border-slate-200 shadow-sm">
                Employer Collaboration
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Become A <br />
                <span className="text-[#D32F2F] bg-gradient-to-r from-[#D32F2F] to-red-600 bg-clip-text text-transparent">
                  Hiring Partner
                </span>
              </h1>
              <p className="text-xs md:text-sm font-medium text-slate-600 mt-4 leading-relaxed">
                JITM Skills invites employers to join us as Hiring Partners and
                gain access to a steady pipeline of trained, motivated, and
                job-ready candidates across multiple sectors. Our partnership
                model helps organizations meet workforce requirements
                efficiently while contributing to national skill development and
                employment generation.
              </p>
            </motion.div>

            {/* Quick List Bullet Features (Typographic Minimal List) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              variants={fadeInUp}
            >
              <h4 className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-1">
                How We Support Employers
              </h4>
              {[
                "Participation in candidate assessment and selection loops",
                "Direct inputs into curriculum design and skill standards updates",
                "Sustained support for enterprise bulk hiring requirements",
                "Project-based and short-term custom manpower solutions",
              ].map((text, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F] shrink-0" />
                  <span className="text-xs font-bold text-slate-700 tracking-wide">
                    {text}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ================= RIGHT SIDE: MATRIX FLOW (NO CARDS LIGHT TIMELINE) ================= */}
          <div className="lg:col-span-6 w-full space-y-6 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-[1px] before:bg-slate-200">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-20px" }}
              className="space-y-6"
            >
              {featuresList.map((item, idx) => {
                const IconElement = item.icon;
                return (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="flex items-start gap-4 relative z-10 group"
                  >
                    {/* Left Timeline Bullet Icon Element - Inverted for Light Mode */}
                    <div className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-500 group-hover:text-white group-hover:bg-[#D32F2F] group-hover:border-[#D32F2F] transition-all duration-300 shrink-0 shadow-sm group-hover:shadow-md">
                      <IconElement size={16} />
                    </div>

                    {/* Middle Content Description Stack */}
                    <div className="space-y-0.5 pt-0.5">
                      <div className="flex items-center gap-3">
                        <h3 className="text-sm font-black text-slate-800 group-hover:text-[#D32F2F] transition-colors">
                          {item.title}
                        </h3>
                        <span className="text-[7px] font-black uppercase tracking-wider text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200 shadow-2xs">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-[11px] font-semibold text-slate-500 group-hover:text-slate-600 transition-colors leading-normal max-w-md">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* ================= CALL TO ACTION BUTTON ZONE ================= */}
            <div className="pt-4 pl-10">
              <button
                onClick={() => navigate("/ContactUs")} // Aapke route ke naam ke hisab se path set karein (e.g., "/contact" ya "/ContactUs")
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#D32F2F] to-red-600 hover:from-red-600 hover:to-red-700 text-white font-black uppercase text-[10px] tracking-widest px-7 py-3.5 rounded-xl shadow-md shadow-red-900/10 hover:shadow-lg hover:shadow-red-900/20 transition-all transform hover:scale-[1.02] active:scale-[0.98] group"
              >
                <span>Register as Hiring Partner</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mt-2.5 pl-1">
                🤝 Partner in Nation Building & Workforce Empowerment
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CorporateConnectFirstSection;
