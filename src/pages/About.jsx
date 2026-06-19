// import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { fadeInUp, staggerContainer } from "../utils/animations";
import {
  GraduationCap,
  Briefcase,
  ArrowUpRight,
  Monitor,
  Globe2,
  ChevronRight,
  Home,
  Layers,
  Activity,
  Zap,
  Star,
  ShieldCheck,
  CheckCircle2,
  Target,
  Eye,
  Rocket,
  Truck,
  Users,
  Award,
  BarChart3,
  X,
  Clock,
  ArrowDownRight,
  Cpu,
} from "lucide-react";
import { LEADERS, WHY_CHOOSE_DATA } from "../constants/data";

// icon import why choose us data
const IconComponent = ({ name, size = 24, className = "" }) => {
  const icons = {
    Globe2: <Globe2 size={size} className={className} />,
    ShieldCheck: <ShieldCheck size={size} className={className} />,
    Cpu: <Cpu size={size} className={className} />,
  };
  return icons[name] || <ShieldCheck size={size} className={className} />;
};

const About = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [selectedInfo, setSelectedInfo] = useState(null);

  const points = [
    {
      year: "2013",
      title: "11+ Years of Expertise",
      desc: "Founded as a pillar of the Skill India Mission, delivering excellence in vocational training and IT infrastructure.",
      icon: <Award size={20} />,
    },
    {
      year: "Network",
      title: "Pan-India Logistics",
      desc: "A robust supply chain managing IT assets, Desktops, and UPS systems to the most remote corners of India.",
      icon: <Truck size={20} />,
    },
    {
      year: "Impact",
      title: "10 Lakh+ Lives Impacted",
      desc: "Transforming a million youth into job-ready professionals for the global workforce through structured programs.",
      icon: <Users size={20} />,
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#D32F2F] selection:text-white overflow-x-hidden">
      {/* About JITM Skills : HERO WITH INTERACTIVE DATA CARDS */}
      <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-[#0F172A] isolate">
        {/* Background Video Parallax - Fixed for Intermediate Screen Scaling */}
        {/* ================= BACKGROUND VIDEO LAYER (NO SCROLL-GAP DEFINITIVE FIX) ================= */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none w-full h-full">
          {/* Clean wrapper without undefined motion variables to prevent ESLint errors */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#0F172A]">
            <div className="absolute min-w-[180%] min-h-[120%] sm:min-w-[140%] sm:min-h-[140%] md:min-w-[115%] md:min-h-[115%] w-auto h-auto aspect-video top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <iframe
                className="w-full h-full pointer-events-none object-cover transform scale-110"
                src="https://www.youtube.com/embed/gPrkWosQpvQ?autoplay=1&mute=1&loop=1&playlist=gPrkWosQpvQ&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&enablejsapi=1&iv_load_policy=3"
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

        {/* ================= CONTENT ZONE (100% UNTOUCHED & INTACT) ================= */}
        <div className="max-w-7xl mx-auto px-6 w-full relative z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT: Optimized with Full Story Impact */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-start"
            >
              {/* Breadcrumb Section */}
              <motion.nav variants={fadeInUp} className="mb-6 mt-20">
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                  <Link
                    to="/"
                    className="text-white/50 hover:text-[#D32F2F] transition-colors flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest"
                  >
                    <Home size={12} /> Home
                  </Link>
                  <ChevronRight size={12} className="text-white/20" />
                  <span className="text-white font-black text-[10px] uppercase tracking-widest">
                    About JITM Skills
                  </span>
                </div>
              </motion.nav>

              <motion.span
                variants={fadeInUp}
                className="badge mb-6 border border-[#D32F2F]/30 bg-[#D32F2F]/10 text-white text-[10px]"
              >
                Transforming India Since 2013
              </motion.span>

              <motion.h1
                variants={fadeInUp}
                className="h-super text-white italic uppercase mb-6 leading-tight"
              >
                Empowering <br />
                <span className="text-red-gradient">Digital Assets</span>
              </motion.h1>

              {/* --- UPDATED IMPACTFUL PARAGRAPH --- */}
              <motion.div
                variants={fadeInUp}
                className="space-y-4 max-w-xl mb-8"
              >
                <p className="text-white/80 text-lg font-medium leading-relaxed italic">
                  Since 2013,{" "}
                  <b className="text-white">JITM Skills Pvt. Ltd.</b> has been a
                  driving force in India's growth. As a trusted{" "}
                  <b className="text-[#D32F2F]">NSDC Training Partner</b>, we
                  bridge the digital gap by aligning world-class hardware with
                  industry-ready training.
                </p>

                <p className="text-white/60 text-sm leading-relaxed border-l-2 border-[#D32F2F] pl-4">
                  Our dual expertise sets us apart: supplying large-scale{" "}
                  <b className="text-white">IT Assets</b> for 20+ corporate
                  giants while managing{" "}
                  <b className="text-white">Mega Skill Centres</b> across J&K,
                  Uttarakhand, and the North-East to empower rural youth. We
                  don't just create employees—we build future-ready profession
                  professionals.
                </p>
              </motion.div>

              {/* Legacy Tags Section */}
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 gap-4 w-full max-w-lg mb-10"
              >
                {[
                  { icon: <Monitor size={16} />, text: "IT & Hardware Supply" },
                  { icon: <Globe2 size={16} />, text: "Pan-India Logistics" },
                  {
                    icon: <ShieldCheck size={16} />,
                    text: "NSDC Skill Partner",
                  },
                  {
                    icon: <Briefcase size={16} />,
                    text: "20+ Corporate Partners",
                  },
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
                  Explore Journey{" "}
                  <ArrowUpRight
                    className="group-hover:rotate-45 transition-transform"
                    size={18}
                  />
                </button>
              </motion.div>
            </motion.div>

            {/* ================= RIGHT VISUAL: BHARA HUA DATA CARDS ================= */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative perspective-1000"
            >
              <div className="relative z-10 grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  {/* Card 1: IT Assets */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotateZ: -1, y: -5 }}
                    className="h-52 bg-white/5 backdrop-blur-2xl rounded-[40px] border border-white/10 p-8 flex flex-col justify-between group hover:bg-[#D32F2F]/10 transition-all cursor-pointer relative overflow-hidden shadow-2xl"
                  >
                    <div className="flex justify-between items-start">
                      <Monitor
                        className="text-[#D32F2F] group-hover:scale-110 transition-transform"
                        size={32}
                      />
                      <div className="text-right">
                        <div className="text-white font-black text-2xl italic leading-none tracking-tighter">
                          50K+
                        </div>
                        <div className="text-[7px] text-white/40 font-black uppercase tracking-widest mt-1">
                          Assets Sent
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-black text-xs uppercase tracking-widest">
                        IT Assets
                      </h4>
                      <p className="text-[9px] text-white/30 font-bold uppercase tracking-tighter mt-1">
                        Logistics Support
                      </p>
                      <div className="w-full h-[1px] bg-white/10 mt-3 group-hover:bg-[#D32F2F]/50 transition-colors" />
                    </div>
                  </motion.div>

                  {/* Card 2: Skill Training */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotateZ: 1, y: -5 }}
                    className="h-64 bg-[#D32F2F] rounded-[40px] p-8 flex flex-col justify-between shadow-[0_30px_60px_rgba(211,47,47,0.4)] cursor-pointer relative overflow-hidden group"
                  >
                    <Zap
                      className="absolute -bottom-6 -right-6 text-white/10 group-hover:scale-110 transition-transform"
                      size={150}
                    />
                    <div className="flex justify-between items-start relative z-10">
                      <GraduationCap className="text-white" size={32} />
                      <span className="bg-white/20 px-3 py-1 rounded-full text-[8px] font-black text-white uppercase tracking-widest backdrop-blur-sm tracking-tighter italic">
                        10L+ Youth Trained
                      </span>
                    </div>
                    <div className="relative z-10">
                      <div className="text-white font-black text-3xl mb-1 italic tracking-tighter leading-none">
                        150+
                      </div>
                      <h4 className="text-white font-black text-xs uppercase tracking-widest">
                        Training Centres
                      </h4>
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-6 pt-12">
                  {/* Card 3: Placement */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotateZ: 1, y: -5 }}
                    className="h-64 bg-white/10 backdrop-blur-xl rounded-[40px] border border-white/10 p-8 flex flex-col justify-between hover:border-[#D32F2F]/50 transition-all cursor-pointer shadow-2xl group"
                  >
                    <div className="flex justify-between items-start">
                      <Briefcase
                        className="text-[#D32F2F] group-hover:rotate-12 transition-transform"
                        size={32}
                      />
                      <Activity
                        className="text-green-400 animate-pulse"
                        size={16}
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-black text-xs uppercase tracking-widest mb-3 italic">
                        100%* Placement
                      </h4>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mb-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          transition={{ duration: 2, ease: "easeOut" }}
                          className="h-full bg-[#D32F2F]"
                        />
                      </div>
                      <p className="text-[8px] text-white/30 font-black uppercase tracking-tighter">
                        500+ Hiring Partners
                      </p>
                    </div>
                  </motion.div>

                  {/* Card 4: Pan-India */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotateZ: -1, y: -5 }}
                    className="h-52 bg-white/5 backdrop-blur-2xl rounded-[40px] border border-white/10 p-8 flex flex-col justify-between cursor-pointer group"
                  >
                    <Globe2
                      className="text-[#D32F2F] group-hover:animate-spin-slow transition-all"
                      size={32}
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        <div className="text-white font-black text-2xl italic tracking-tighter leading-none">
                          26+
                        </div>
                      </div>
                      <h4 className="text-white font-black text-xs uppercase tracking-widest">
                        States Covered
                      </h4>
                    </div>
                  </motion.div>
                </div>
              </div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full -z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Specializations */}
      <section className="py-32 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h6
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-red-600 font-black uppercase tracking-widest text-xs mb-4"
            >
              Our Specializations
            </motion.h6>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="h-section uppercase italic text-[#0F172A]"
            >
              Empowering India Through{" "}
              <span className="text-red-gradient">Targeted Learning</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* CARD 1: FREE GOVERNMENT COURSES (ULTRA IMPACT) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              className="lg:col-span-1 group relative bg-white border-2 border-[#D32F2F]/10 rounded-[50px] p-10 overflow-hidden shadow-2xl hover:shadow-[#D32F2F]/20 transition-all duration-500"
            >
              {/* Background Mission Watermark */}
              <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 transition-all duration-700">
                <Star size={150} fill="#D32F2F" />
              </div>

              <div className="relative z-10 h-full flex flex-col">
                {/* Govt. Mission Badges */}
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 bg-[#D32F2F] rounded-2xl flex items-center justify-center text-white shadow-xl transform group-hover:rotate-12 transition-transform">
                    <Zap size={32} />
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="bg-slate-100 text-[#1A1A1A] text-[7px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-slate-200">
                      PMKVY & UPSDM Authorized
                    </span>
                    <span className="bg-[#D32F2F]/10 text-[#D32F2F] text-[7px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-[#D32F2F]/20">
                      Skill India Partner
                    </span>
                  </div>
                </div>

                {/* Heading */}
                <h3 className="text-3xl font-black uppercase italic mb-6 leading-none tracking-tighter text-[#0F172A]">
                  Free Govt. <br />
                  <span className="text-red-gradient">Skills Training</span>
                </h3>

                {/* Focus Description */}
                <p className="text-slate-500 font-medium mb-8 text-sm leading-relaxed">
                  In alignment with the Government of India's mission, we
                  provide youth with{" "}
                  <b className="text-[#1A1A1A]">
                    World-class vocational training
                  </b>{" "}
                  completely free of charge. Our mission is to empower every
                  hand with skills and provide dignity to every individual.
                </p>

                {/* Premium Feature Checklist */}
                <div className="grid grid-cols-1 gap-4 mb-10">
                  {[
                    "Govt. Recognized Certification",
                    "Industry Expert Trainers",
                    "Digital Labs & Modern Equipment",
                    "Free Course Books & Kits",
                    "Post-Training Job Support",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center border border-green-100">
                        <CheckCircle2 size={12} className="text-green-600" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-wider text-slate-700">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Impact Counter Footer */}
                <div className="mt-auto pt-8 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    {/* Lives Impacted Stat */}
                    <div>
                      <div className="text-2xl font-black text-[#1A1A1A] italic leading-none">
                        10L+
                      </div>
                      <div className="text-[7px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">
                        Lives Impacted
                      </div>
                    </div>

                    {/* Vertical Divider */}
                    <div className="w-[1px] h-8 bg-slate-100" />

                    {/* Training Centers Stat - Light Gray with Hover Animation */}
                    <div className="group/stat flex items-center gap-3">
                      <div className="text-slate-300 group-hover/stat:text-[#D32F2F] group-hover/stat:rotate-12 transition-all duration-300">
                        <Globe2 size={18} />
                      </div>
                      <div>
                        <div className="text-xl font-black text-slate-300 italic leading-none group-hover/stat:text-slate-400 transition-colors">
                          150+
                        </div>
                        <div className="text-[6px] font-black text-slate-300 uppercase tracking-widest mt-1 group-hover/stat:text-slate-400 transition-colors">
                          Training Centers In India
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Main Action Button */}
                  <button
                    className="h-12 w-12 bg-[#D32F2F] text-white rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-lg group-hover:rotate-[-45deg]"
                    onClick={() => navigate("/TrainingSectors")}
                  >
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* CARD 2: PAID PROFESSIONAL COURSES */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              className="group relative bg-[#0F172A] rounded-[50px] p-10 overflow-hidden min-h-[600px] flex flex-col shadow-2xl border border-white/5"
            >
              {/* Background Decor */}
              <div className="absolute top-10 right-10 opacity-5 group-hover:text-white/10 transition-colors text-white">
                <Layers size={150} />
              </div>

              <div className="relative z-10 h-full flex flex-col">
                {/* Icon & New Badge */}
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-[#D32F2F]">
                    <GraduationCap size={32} />
                  </div>
                  <span className="bg-[#D32F2F] text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest animate-pulse">
                    New Launch
                  </span>
                </div>

                {/* Heading */}
                <h3 className="text-3xl text-white font-black uppercase italic mb-4 leading-none">
                  Paid Tech <br />
                  <span className="text-[#D32F2F]">Certifications</span>
                </h3>

                {/* Description */}
                <p className="text-white/50 font-medium mb-6 text-sm leading-relaxed">
                  Advanced industry-aligned technical courses designed for
                  high-end professional careers. We have recently launched this
                  segment and have already certified{" "}
                  <b className="text-white">10K+ students</b> with an{" "}
                  <b className="text-white">80% placement success</b> rate.
                </p>

                {/* Key Features List */}
                <ul className="space-y-3 mb-8">
                  {[
                    "3 Months Intensive Program",
                    "100% Placement Assurance",
                    "Lifetime Placement Support",
                    "Full Interview Preparation",
                    "Premium Study Materials (PDF, PPT, VDO)",
                    "Taught by Expert Skilled Teachers",
                  ].map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-wider text-white/80"
                    >
                      <CheckCircle2
                        size={14}
                        className="text-[#D32F2F] flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Impact Footer: 10K+ Students & 150+ Centers */}
                <div className="mt-auto pt-8 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    {/* Certified Students Stat */}
                    <div>
                      <div className="text-2xl font-black text-white italic leading-none">
                        10K+
                      </div>
                      <div className="text-[7px] font-black text-white/30 uppercase tracking-[0.2em] mt-1">
                        Certified Students
                      </div>
                    </div>

                    {/* Vertical Divider */}
                    <div className="w-[1px] h-8 bg-white/10" />

                    {/* Pan-India Centers Stat */}
                    <div className="group/stat flex items-center gap-3">
                      <div className="text-white/20 group-hover/stat:text-[#D32F2F] group-hover/stat:rotate-12 transition-all duration-300">
                        <Globe2 size={18} />
                      </div>
                      <div>
                        <div className="text-xl font-black text-white/20 italic leading-none group-hover/stat:text-white/40 transition-colors">
                          150+
                        </div>
                        <div className="text-[6px] font-black text-white/20 uppercase tracking-widest mt-1 group-hover/stat:text-white/40 transition-colors">
                          Centers Pan-India
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    className="h-12 w-12 bg-[#D32F2F] text-white rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-lg group-hover:rotate-[-45deg]"
                    onClick={() => navigate("/TrainingSectors")}
                  >
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* CARD 3: 100% PLACEMENT GUARANTEE */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              className="group relative bg-white border border-slate-200 rounded-[50px] p-10 overflow-hidden min-h-[550px] flex flex-col shadow-xl hover:border-[#D32F2F]/20 transition-all"
            >
              {/* Background Decor */}
              <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <Briefcase size={150} />
              </div>

              <div className="relative z-10 h-full flex flex-col">
                {/* Icon & Status Badge */}
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center text-[#D32F2F] group-hover:bg-[#D32F2F] group-hover:text-white transition-all duration-500">
                    <Activity size={32} />
                  </div>
                  <div className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full border border-green-100">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-[8px] font-black text-green-700 uppercase tracking-widest">
                      Active Cell
                    </span>
                  </div>
                </div>

                {/* Heading */}
                <h3 className="text-3xl text-[#0F172A] font-black uppercase italic mb-4 leading-none">
                  100% Placement <br />
                  <span className="text-[#D32F2F]">Guarantee</span>
                </h3>

                {/* Description */}
                <p className="text-slate-500 font-medium mb-6 text-sm">
                  The dedicated career cell at JITM Skills connects you with top
                  national and international brands. Our network provides more
                  than just a job—it offers a long-term career path.
                </p>

                {/* Key Career Features List */}
                <ul className="space-y-3 mb-8">
                  {[
                    "500+ Global Hiring Partners",
                    "Direct Corporate Tie-ups",
                    "Resume & Portfolio Building",
                    "Dedicated Mock Interview Rounds",
                    "Soft Skills & Personality Grooming",
                    "Regular Job Fairs & Campus Drives",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-wider text-[#1A1A1A]"
                    >
                      <div className="w-1.5 h-1.5 bg-[#D32F2F] rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Success Stats Footer */}
                <div className="mt-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 mb-8">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[8px] font-black uppercase text-slate-400 tracking-widest">
                      Placement Rate
                    </span>
                    <span className="text-[10px] font-black text-[#D32F2F]">
                      80%+
                    </span>
                  </div>
                  <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "80%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-[#D32F2F]"
                    />
                  </div>
                </div>

                {/* Action Button */}
                <button
                  className="mt-auto w-fit text-[#0F172A] font-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover:text-[#D32F2F] transition-all group-hover:translate-x-2"
                  onClick={() => navigate("/")}
                >
                  Explore Partners <ArrowUpRight size={14} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Purpose & Goals */}
      <section className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* LEFT CONTENT: Heading & Main Intro */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-col items-start"
            >
              <motion.h6
                variants={fadeInUp}
                className="text-red-600 font-black uppercase tracking-widest text-xs mb-4"
              >
                Purpose & Goals
              </motion.h6>
              <motion.h2
                variants={fadeInUp}
                className="h-section uppercase italic text-[#0F172A] mb-8 leading-none"
              >
                Our Mission <br />
                <span className="text-red-gradient">& Vision</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-slate-500 text-lg font-medium leading-relaxed mb-10 max-w-lg"
              >
                Driving purpose through meaningful skill development, creating
                real impact in lives and communities, and enabling long-term
                transformation by combining innovation, opportunity, and
                industry-aligned training for a stronger future.
              </motion.p>

              {/* Strategic Pillars List */}
              <motion.div variants={fadeInUp} className="space-y-4 w-full">
                {[
                  "Sustainable Employment Generation",
                  "Inclusive Outcome-Driven Training",
                  "Advanced Digital Tool Integration",
                  "Empowering Entrepreneurship",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-slate-100 group hover:border-[#D32F2F]/20 transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#D32F2F] shadow-sm group-hover:scale-110 transition-transform">
                      <Rocket size={18} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#0F172A]">
                      {item}
                    </span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT CONTENT: Mission & Vision Cards */}
            <div className="grid grid-cols-1 gap-8 w-full pt-12 lg:pt-0">
              {/* Mission Card */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="group relative bg-[#0F172A] rounded-[50px] p-12 overflow-hidden shadow-2xl border border-white/5"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform text-white">
                  <Target size={180} />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#D32F2F] rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg transform group-hover:rotate-6 transition-transform">
                    <Target size={32} />
                  </div>
                  <h3 className="text-3xl text-white font-black uppercase italic mb-6 leading-none">
                    Our <span className="text-[#D32F2F]">Mission</span>
                  </h3>
                  <p className="text-white/50 font-medium leading-relaxed mb-8">
                    To create a skilled, confident, and future-ready workforce
                    through high-quality training, modern digital tools, and
                    strong industry linkages that lead to sustainable employment
                    and entrepreneurship.
                  </p>
                  <div className="flex items-center gap-2 text-[#D32F2F] text-[10px] font-black uppercase tracking-widest">
                    Empowering Lives <ArrowUpRight size={14} />
                  </div>
                </div>
              </motion.div>

              {/* Vision Card */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="group relative bg-[#F8FAFC] rounded-[50px] p-12 overflow-hidden shadow-xl border border-slate-100 hover:border-[#D32F2F]/20 transition-all"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:scale-110 transition-transform text-[#0F172A]">
                  <Eye size={180} />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#0F172A] rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg transform group-hover:-rotate-6 transition-transform">
                    <Eye size={32} />
                  </div>
                  <h3 className="text-3xl text-[#0F172A] font-black uppercase italic mb-6 leading-none">
                    Our <span className="text-[#D32F2F]">Vision</span>
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed mb-8">
                    To be India’s most trusted and impactful skill development
                    organization by enabling livelihoods, uplifting communities,
                    and reducing the country’s skill gap through inclusive,
                    outcome-driven training.
                  </p>
                  <div className="flex items-center gap-2 text-[#0F172A] text-[10px] font-black uppercase tracking-widest">
                    Driving Change <ArrowUpRight size={14} />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-24 bg-[#0F172A] relative overflow-hidden">
        {/* Background Decorative Glows */}
        <div className="absolute top-0 -left-20 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <Zap
          className="absolute -bottom-20 -left-20 text-white/[0.02] pointer-events-none"
          size={400}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* --- LEFT SIDE: Stats & Intro (Dark Edition) --- */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-5 space-y-10"
            >
              <div>
                <motion.h6
                  variants={fadeInUp}
                  className="text-red-600 font-black uppercase tracking-widest text-xs mb-4"
                >
                  Executive Leadership
                </motion.h6>
                <motion.h2
                  variants={fadeInUp}
                  className="text-5xl lg:text-6xl font-black text-white uppercase italic leading-[0.9] tracking-tighter mb-8"
                >
                  The Minds Behind <br />{" "}
                  <span className="text-red-500">JITM Excellence</span>
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  className="text-white/40 text-sm italic leading-relaxed border-l-2 border-red-500 pl-6"
                >
                  With over a decade of expertise, our leadership is committed
                  to transforming India's skilling landscape through innovation
                  and dignity.
                </motion.p>
              </div>

              {/* Experience Stats Grid (Glassmorphism) */}
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-white/5 p-8 rounded-[40px] border border-white/10 group hover:bg-white/10 hover:border-red-500/30 transition-all duration-500">
                  <Award className="text-red-500 mb-4" size={28} />
                  <h4 className="text-4xl font-black text-white italic leading-none">
                    20+
                  </h4>
                  <p className="text-[10px] font-bold uppercase text-white/30 tracking-widest mt-2">
                    Awards Won
                  </p>
                </div>
                <div className="bg-white/5 p-8 rounded-[40px] border border-white/10 group hover:bg-white/10 hover:border-red-500/30 transition-all duration-500">
                  <Clock className="text-red-500 mb-4" size={28} />
                  <h4 className="text-4xl font-black text-white italic leading-none">
                    13+
                  </h4>
                  <p className="text-[10px] font-bold uppercase text-white/30 tracking-widest mt-2">
                    Years Exp.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* --- RIGHT SIDE: Horizontal Leader Cards (Dark Edition) --- */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-7 space-y-6"
            >
              {LEADERS.map((leader) => (
                <motion.div
                  key={leader.id}
                  variants={fadeInUp}
                  className="bg-white/[0.03] rounded-[50px] p-5 pr-10 border border-white/10 flex flex-col md:flex-row items-center gap-10 group hover:bg-white/[0.07] hover:border-red-500/20 transition-all duration-700"
                >
                  {/* Card Left: Photo with Glow */}
                  <div className="w-full md:w-44 h-52 rounded-[35px] overflow-hidden shrink-0 shadow-2xl relative group-hover:ring-2 ring-red-500/20 transition-all">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] to-transparent opacity-40" />
                  </div>

                  {/* Card Right: Content */}
                  <div className="flex-1 py-4">
                    <p className="text-red-500 font-black uppercase tracking-[0.2em] text-xs mb-3">
                      {leader.role}
                    </p>
                    <h4 className="text-3xl font-black text-white uppercase italic mb-4 tracking-tight">
                      {leader.name}
                    </h4>
                    <p className="text-white/40 text-xs italic leading-relaxed line-clamp-2 mb-8 group-hover:text-white/60 transition-colors">
                      "{leader.quote}"
                    </p>

                    <button
                      onClick={() => setSelectedLeader(leader)}
                      className="flex items-center gap-4 group/btn text-[10px] font-black uppercase tracking-widest text-white/60 hover:text-red-500 transition-colors"
                    >
                      View Full Profile{" "}
                      <ArrowUpRight
                        size={16}
                        className="group-hover/btn:rotate-45 transition-transform"
                      />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* --- Modal Popup (Remains Clean & High Contrast) --- */}
          <AnimatePresence>
            {selectedLeader && (
              <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedLeader(null)}
                  className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
                />

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="relative bg-white w-full max-w-5xl rounded-[60px] overflow-hidden shadow-[0_0_100px_rgba(220,38,38,0.2)] z-10 max-h-[85vh] flex flex-col"
                >
                  <style>{`
                  .hide-scrollbar::-webkit-scrollbar { display: none; }
                  .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                `}</style>

                  <button
                    onClick={() => setSelectedLeader(null)}
                    className="absolute top-8 right-8 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-red-500 hover:text-white transition-all z-30"
                  >
                    <X size={24} />
                  </button>

                  <div className="flex flex-col lg:flex-row overflow-y-auto hide-scrollbar">
                    {/* Modal Left: Bio Sidebar */}
                    <div className="lg:w-1/3 bg-gray-50 p-14 flex flex-col items-center text-center border-r border-gray-100">
                      <div className="w-36 h-36 rounded-[40px] overflow-hidden shadow-2xl mb-8 border-4 border-white ring-8 ring-gray-100">
                        <img
                          src={selectedLeader.image}
                          className="w-full h-full object-cover"
                          alt=""
                        />
                      </div>
                      <h2 className="text-3xl font-black uppercase italic text-[#0F172A] leading-tight mb-2">
                        {selectedLeader.name}
                      </h2>
                      <p className="text-red-500 font-black uppercase tracking-widest text-[10px]">
                        {selectedLeader.role}
                      </p>

                      <motion.div
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="mt-auto pt-16 text-gray-300 flex flex-col items-center gap-3"
                      >
                        <span className="text-[9px] font-black uppercase ">
                          Read Profile
                        </span>
                        <div className="w-[2px] h-10 bg-gradient-to-b from-red-500 to-transparent rounded-full" />
                      </motion.div>
                    </div>

                    {/* Modal Right: Details */}
                    <div className="lg:w-2/3 p-12 lg:p-20">
                      <h3 className="text-2xl font-black uppercase italic mb-10 border-b border-gray-100 pb-6 text-[#0F172A]">
                        Visionary Leadership
                      </h3>
                      <p className="text-gray-500 italic leading-relaxed mb-12 text-lg">
                        "{selectedLeader.brief}"
                      </p>

                      <div className="grid md:grid-cols-2 gap-12">
                        <div>
                          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-red-500 mb-8 flex items-center gap-3">
                            <Award size={18} /> Core Expertise
                          </h4>
                          <div className="space-y-5">
                            {(
                              selectedLeader.details.focus ||
                              selectedLeader.details.verticals
                            ).map((item, i) => (
                              <p
                                key={i}
                                className="text-xs font-bold text-[#0F172A] uppercase tracking-tight border-l-2 border-red-100 pl-5 hover:border-red-500 transition-colors cursor-default"
                              >
                                {item}
                              </p>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-xs font-black uppercase tracking-[0.2em] text-[#0F172A] mb-8 flex items-center gap-3">
                            <Briefcase size={18} /> Major Programs
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedLeader.details.programs.map((p, i) => (
                              <span
                                key={i}
                                className="bg-[#0F172A] text-white px-4 py-2 rounded-xl text-[9px] font-bold uppercase tracking-widest hover:bg-red-500 transition-colors"
                              >
                                {p}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADER */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h6
              variants={fadeInUp}
              className="text-red-600 font-black uppercase tracking-widest text-[10px] mb-4"
            >
              Value Proposition
            </motion.h6>
            <motion.h2
              variants={fadeInUp}
              className="text-5xl lg:text-7xl font-black text-[#0F172A] uppercase italic leading-none tracking-tighter"
            >
              Why{" "}
              <span className="text-red-600 underline decoration-8 underline-offset-[12px]">
                Choose
              </span>{" "}
              Us
            </motion.h2>
          </motion.div>

          {/* GRID */}
          <div className="grid lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_DATA.map((item) => (
              <motion.div
                key={item.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-10 rounded-[50px] border border-gray-100 flex flex-col justify-between group hover:bg-[#0F172A] transition-all duration-500 cursor-default"
              >
                <div>
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-red-600 mb-8 shadow-sm group-hover:bg-red-600 group-hover:text-white transition-all">
                    <IconComponent name={item.iconName} size={30} />
                  </div>
                  <h4 className="text-2xl font-black text-[#0F172A] group-hover:text-white uppercase italic mb-4 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 group-hover:text-white/50 text-sm mb-8 leading-relaxed italic">
                    "{item.shortDesc}"
                  </p>

                  <ul className="space-y-3">
                    {item.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-[#0F172A] group-hover:text-white/80"
                      >
                        <CheckCircle2 size={14} className="text-red-600" />{" "}
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => setSelectedInfo(item)}
                  className="mt-12 flex items-center gap-3 text-[10px] font-black uppercase  text-red-600 group-hover:text-white transition-all"
                >
                  Learn More <ArrowUpRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>

          {/* MODAL */}
          <AnimatePresence>
            {selectedInfo && (
              <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedInfo(null)}
                  className="absolute inset-0 bg-[#0F172A]/90 backdrop-blur-xl"
                />

                {/* Modal Box - Locked at 80% Height Maximum with Hidden Webkit Scrollbars */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 50 }}
                  className="relative bg-white w-full max-w-3xl rounded-[40px] md:rounded-[60px] p-8 md:p-16 shadow-2xl z-10 max-h-[85vh] md:max-h-[80vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                >
                  {/* Close Button Trigger */}
                  <button
                    onClick={() => setSelectedInfo(null)}
                    className="absolute top-8 right-8 md:top-10 md:right-10 text-gray-300 hover:text-red-600 transition-colors z-20"
                  >
                    <X size={28} />
                  </button>

                  {/* STICKY RIGHT SIDE SCROLL INDICATOR ICON WITH TEXT */}
                  <div className="sticky top-1/3 float-right translate-x-4 md:translate-x-8 pointer-events-none z-30 h-0 hidden md:block">
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="flex flex-col items-center gap-2 bg-[#0F172A] text-white py-4 px-2 rounded-full shadow-lg border border-white/10"
                    >
                      <ArrowDownRight
                        size={14}
                        className="text-red-500 rotate-45"
                      />
                      <span className="text-[7px] font-black uppercase tracking-[0.2em] [writing-mode:vertical-lr] text-white/60">
                        Scroll To Explore
                      </span>
                    </motion.div>
                  </div>

                  {/* UNTOUCHED CORE CONTENT STRUCTURE */}
                  <div className="w-20 h-20 bg-red-600 rounded-3xl flex items-center justify-center text-white mb-10 shadow-xl shadow-red-600/20">
                    <IconComponent name={selectedInfo.iconName} size={40} />
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black uppercase italic text-[#0F172A] mb-4 pr-10">
                    {selectedInfo.title}
                  </h3>

                  <p className="text-gray-500 italic text-base md:text-lg leading-relaxed mb-10 border-l-4 border-red-600 pl-6 md:pl-8">
                    {selectedInfo.fullDetail.longDesc}
                  </p>

                  <div className="grid grid-cols-1 gap-4">
                    {selectedInfo.fullDetail.list.map((point, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 bg-gray-50 p-5 rounded-2xl border border-gray-100 transition-all hover:bg-red-50"
                      >
                        <CheckCircle2
                          className="text-red-600 mt-1 shrink-0"
                          size={20}
                        />
                        <p className="text-sm font-bold text-[#0F172A] uppercase italic tracking-tight">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Blink Scroll Indicator Bottom */}
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="mt-10 flex flex-col items-center gap-2 text-gray-300"
                  >
                    <div className="w-[1px] h-8 bg-gray-200" />
                    <span className="text-[8px] font-black uppercase tracking-widest">
                      End of Profile
                    </span>
                  </motion.div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 px-6 bg-[#f8e0e07a] overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          {/* SECTION HEADER */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <motion.div variants={fadeInUp} className="max-w-2xl">
              <h6 className="text-red-600 font-black uppercase tracking-widest text-xs mb-4">
                Value Proposition
              </h6>
              <h2 className="text-4xl lg:text-6xl font-black uppercase italic text-[#0F172A] leading-none tracking-tighter">
                Why Leaders <br />
                <span className="text-red-600">Choose JITM Skills</span>
              </h2>
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="text-slate-500 font-medium max-w-sm border-l-2 border-[#D32F2F] pl-6 text-sm italic"
            >
              Trusted by government and corporates, bridging the gap between
              policy and execution with verified skill programs.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-12 gap-16">
            {/* LEFT: INTERACTIVE TIMELINE LIST */}
            <motion.div
              variants={staggerContainer}
              className="lg:col-span-7 space-y-12"
            >
              {points.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="flex gap-8 group cursor-default"
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-12 h-12 rounded-full bg-[#0F172A] text-white flex items-center justify-center group-hover:bg-[#D32F2F] transition-colors shadow-lg z-10"
                    >
                      {item.icon}
                    </motion.div>
                    {idx !== points.length - 1 && (
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        transition={{ duration: 1, delay: idx * 0.2 }}
                        className="w-[2px] bg-slate-200 mt-4 origin-top"
                      />
                    )}
                  </div>
                  <div className="pb-8">
                    <span className="text-[#D32F2F] font-black text-[10px] uppercase tracking-widest mb-2 block">
                      {item.year}
                    </span>
                    <h4 className="text-2xl font-black text-[#0F172A] uppercase italic mb-3 group-hover:text-[#D32F2F] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-md font-medium">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* RIGHT: BENTO-STYLE SECONDARY STATS */}
            <motion.div
              variants={staggerContainer}
              className="lg:col-span-5 grid grid-cols-1 gap-6"
            >
              {[
                {
                  bg: "bg-[#F8FAFC]",
                  text: "text-[#0F172A]",
                  icon: <ShieldCheck size={28} />,
                  title: "Govt Recognized",
                  desc: "Executing top national initiatives backed by verified government standards.",
                },
                {
                  bg: "bg-[#0F172A]",
                  text: "text-white",
                  icon: <Briefcase size={28} />,
                  title: "100% Placement",
                  desc: "Dedicated career cell supporting students until they secure verified employment.",
                  muted: "text-white/40",
                },
                {
                  bg: "bg-[#D32F2F]",
                  text: "text-white",
                  icon: <BarChart3 size={28} />,
                  title: "Sustainable Growth",
                  desc: "Empowering underserved communities with digital tools for long-term independence.",
                  muted: "text-white/80",
                },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className={`p-8 ${stat.bg} rounded-[40px] border border-slate-100 flex items-start gap-6 group transition-all cursor-default shadow-sm hover:shadow-xl`}
                >
                  <div
                    className={`w-14 h-14 ${stat.bg === "bg-[#F8FAFC]" ? "bg-white" : "bg-white/10"} rounded-2xl shadow-sm flex items-center justify-center text-[#D32F2F]`}
                  >
                    {stat.icon}
                  </div>
                  <div>
                    <h5
                      className={`font-black ${stat.text} uppercase italic mb-2`}
                    >
                      {stat.title}
                    </h5>
                    <p
                      className={`text-[10px] ${stat.muted || "text-slate-500"} font-bold uppercase tracking-wide leading-relaxed`}
                    >
                      {stat.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* BOTTOM STRIP: GOVERNMENT RECOGNITION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap items-center justify-between p-8 bg-white rounded-[30px] border border-dashed border-slate-200 shadow-inner"
          >
            <div className="flex items-center gap-4">
              <ShieldCheck className="text-[#D32F2F]" size={28} />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#0F172A]">
                Executing India’s top skilling initiatives with official Govt
                support
              </span>
            </div>
            <div className="flex gap-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-default">
              <span className="text-xs font-black italic uppercase">
                NSDC Partner
              </span>
              <span className="text-xs font-black italic uppercase">
                Skill India
              </span>
              <span className="text-xs font-black italic uppercase">
                PMKVY Authorized
              </span>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
