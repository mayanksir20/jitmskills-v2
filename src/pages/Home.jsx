// import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCreative } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import Testimonials from "../components/Testimonials";
import EnrollmentForm from "../components/EnrollmentForm";
import GetInTouch from "../components/GetInTouch"; //// Tumhara form component
import {
  fadeInUp,
  staggerContainer,
  floatingVariant as floatingAnimation,
} from "../utils/animations";
import {
  SLIDE_DATA,
  SECTOR_DATA,
  JITM_SERVICES,
  GOVT_PROGRAMS,
  PROJECT_LOGOS,
  SERVICE_HIGHLIGHTS,
  CERTIFICATION_LOGOS,
  PLACEMENT_PARTNERS,
} from "../constants/data";

// Lucide Icons
import {
  ArrowUpRight,
  CheckCircle2,
  Zap,
  Monitor,
  Stethoscope,
  HardHat,
  Truck,
  GraduationCap,
  Briefcase,
  CheckCircle,
  X,
  Globe,
  Award,
  Building2,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  Users,
} from "lucide-react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

// Icon Mapper Helper
const IconComponent = ({ name, size = 24, className = "" }) => {
  const icons = {
    Stethoscope,
    Monitor,
    HardHat,
    Truck,
    GraduationCap,
    Zap,
    Briefcase,
    Globe,
    Award,
    Building2,
    Users,
  };
  const Component = icons[name];
  return Component ? <Component size={size} className={className} /> : null;
};

const Home = () => {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 9; // Ek baar mein 9 logo dikhenge

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => {
        // Agar agla set khatam ho jaye to wapas 0 par aa jao
        const nextIndex = prevIndex + itemsPerPage;
        return nextIndex >= CERTIFICATION_LOGOS.length ? 0 : nextIndex;
      });
    }, 5000); // 5 Seconds ka interval

    return () => clearInterval(timer);
  }, []);

  // Current CERTIFICATION LOGOS
  const visibleLogos = CERTIFICATION_LOGOS.slice(index, index + itemsPerPage);

  const [selectedId, setSelectedId] = useState(null); // Selected card tracking

  const [isEnrollOpen, setIsEnrollOpen] = useState(false);

  const navigate = useNavigate();

  const [isGetInTouchOpen, setIsGetInTouchOpen] = useState(false);

  // Background Scroll Lock Framework
  useEffect(() => {
    if (selectedId || isGetInTouchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedId, isGetInTouchOpen]);

  const handleJoinMissionClick = () => {
    setSelectedId(null); // Pehla modal band
    setIsGetInTouchOpen(true); // GetInTouch modal chalu
  };

  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* --- SECTION 1: HERO SLIDER --- */}
      <section className="relative min-h-[95vh] flex items-center pt-24 bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 to-transparent" />

        <Swiper
          modules={[Autoplay, Pagination, EffectCreative]}
          effect={"creative"}
          creativeEffect={{
            prev: { translate: ["-100%", 0, -500], opacity: 0 },
            next: { translate: ["100%", 0, 0], opacity: 1 },
          }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          speed={5000}
          pagination={{ clickable: true }}
          loop={true}
          className="w-full h-full z-10"
        >
          {SLIDE_DATA.map((slide) => (
            <SwiperSlide key={slide.id}>
              {({ isActive }) => (
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center pb-16 pt-0 lg:pt-16">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={staggerContainer}
                    className="space-y-8 relative z-20"
                  >
                    {/* Floating BG ID */}
                    <div className="absolute -top-20 -left-10 text-[200px] font-black text-white/5 italic select-none">
                      0{slide.id}
                    </div>

                    <motion.div variants={fadeInUp}>
                      <span className="bg-[#D32F2F]/10 text-white border border-[#D32F2F]/30 px-4 py-2 rounded-full text-[10px] uppercase tracking-widest">
                        {slide.tag}
                      </span>
                    </motion.div>

                    <motion.h1
                      variants={fadeInUp}
                      className="text-3xl lg:text-6xl font-black text-white leading-none uppercase italic"
                    >
                      {slide.title} <br />{" "}
                      <span className="text-red-600">{slide.highlight}</span>
                    </motion.h1>

                    <motion.p
                      variants={fadeInUp}
                      className="text-white/70 text-lg italic max-w-xl"
                    >
                      {slide.description}
                    </motion.p>

                    <motion.div
                      variants={fadeInUp}
                      className="grid sm:grid-cols-2 gap-4"
                    >
                      {slide.points.map((p, i) => (
                        <div
                          key={i}
                          className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
                            isActive
                              ? "bg-white/10 border-red-500/50"
                              : "bg-white/5 border-white/10"
                          }`}
                        >
                          <CheckCircle2
                            size={16}
                            className={
                              isActive ? "text-red-500" : "text-gray-500"
                            }
                          />
                          <span className="text-white text-[10px] font-bold uppercase">
                            {p}
                          </span>
                        </div>
                      ))}
                    </motion.div>

                    {/* FIXED ONCLICK LOGIC INJECTED HERE */}
                    <motion.div variants={fadeInUp} className="flex gap-6">
                      <button
                        onClick={() => setIsEnrollOpen(true)}
                        className="bg-red-600 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all flex items-center gap-2"
                      >
                        Enroll Now <ArrowUpRight size={18} />
                      </button>
                    </motion.div>
                  </motion.div>

                  {/* Media Section Framework */}
                  <motion.div
                    variants={fadeInUp}
                    className="relative rounded-[4rem] overflow-hidden border-[12px] border-white/5 h-[550px]"
                  >
                    <motion.video
                      key={slide.id}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 w-full h-full object-cover opacity-60"
                    >
                      <source src={slide.bgVideo} type="video/mp4" />
                    </motion.video>
                    <img
                      loading="lazy"
                      src={slide.image}
                      className="w-full h-full object-cover mix-blend-screen opacity-90 relative z-10"
                      alt="Hero"
                    />
                  </motion.div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* ================= 80% SCREEN AREA POPUP WITH SOLID DARK OVERLAY ================= */}
      {isEnrollOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950 p-4 md:p-8">
          {/* Modern 80% Scale Layout Frame */}
          <div className="relative w-full max-w-6xl h-[85vh] md:h-[80vh]  overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
            {/* Close Trigger Button Layout */}
            <div className="absolute top-6 right-6 z-[10000]">
              <button
                onClick={() => setIsEnrollOpen(false)}
                className="p-3 bg-slate-100 text-slate-800 hover:bg-red-600 hover:text-white rounded-2xl transition-all shadow-md flex items-center justify-center group"
              >
                <X
                  size={24}
                  className="group-hover:rotate-90 transition-transform duration-300"
                />
              </button>
            </div>

            {/* Form Scroll Context Layer */}
            <div className="w-full h-full overflow-y-auto p-6 md:p-12 text-left">
              <EnrollmentForm onClose={() => setIsEnrollOpen(false)} />
            </div>
          </div>
        </div>
      )}

      {/* --- SECTION 2: SECTORS HUB --- */}
      <section className="py-32 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }} // Ensures animation happens only once
            className="grid lg:grid-cols-2 gap-12 mb-24 items-end"
          >
            <motion.div variants={fadeInUp}>
              <h6 className="text-red-600 font-black uppercase tracking-widest text-xs mb-4">
                JITM Ecosystem
              </h6>
              <h2 className="text-4xl lg:text-6xl font-black text-[#0F172A] uppercase italic leading-none">
                Sector-Wise{" "}
                <span className="text-red-600 underline">Excellence</span>
              </h2>
            </motion.div>
            <motion.p
              variants={fadeInUp}
              className="text-gray-500 border-l-4 border-red-600 pl-6 italic"
            >
              Providing industry-aligned training and logistics solutions across
              India to empower the next generation.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2 grid sm:grid-cols-2 gap-4"
            >
              {SECTOR_DATA.map((sector) => (
                <motion.div
                  key={sector.id}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="bg-white p-10 rounded-[40px] border border-gray-100 group shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 bg-gray-50 text-red-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-red-600 group-hover:text-white transition-all">
                    <IconComponent name={sector.iconName} size={30} />
                  </div>
                  <h4 className="text-xl font-black text-[#0F172A] uppercase italic mb-3">
                    {sector.title}
                  </h4>
                  <p className="text-gray-500 text-xs font-medium">
                    {sector.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-[#0F172A] rounded-[50px] p-12 text-white flex flex-col justify-between relative overflow-hidden"
            >
              <Zap
                className="absolute -top-10 -right-10 text-white/5"
                size={200}
              />
              <div className="relative z-10">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl font-black uppercase italic mb-8"
                >
                  The <span className="text-red-600">JITM Edge</span>
                </motion.h3>
                <ul className="space-y-6">
                  {JITM_SERVICES.map((s, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform shrink-0 mt-0.5">
                        <IconComponent name={s.iconName} size={20} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[11px] font-black uppercase tracking-widest text-white leading-tight">
                          {s.label}
                        </span>
                        {s.desc && (
                          <p className="text-[10px] text-white/50 font-medium mt-1 leading-normal max-w-[220px]">
                            {s.desc}
                          </p>
                        )}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/TrainingSectors")} // 2. Click karne par is route par chala jayenge
                className="mt-12 bg-red-600 p-5 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-all"
              >
                All Programs <ArrowUpRight />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: GOVT & CSR PROGRAMS */}
      <section className="py-32 px-6 bg-[#0F172A] relative overflow-hidden">
        {/* Decorative Background Elements */}
        <motion.div
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          className="absolute top-20 -left-20 w-96 h-96 bg-red-600/5 rounded-full blur-[120px] pointer-events-none"
        />
        <motion.div
          variants={floatingAnimation}
          initial="initial"
          animate="animate"
          className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header Content with Stagger */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-24"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl lg:text-6xl font-black text-white italic uppercase leading-none"
            >
              <span className="text-red-600 font-black uppercase tracking-widest text-xs mb-4 block normal-case not-italic">
                Empowering Youth Future
              </span>
              Our Latest <span className="text-red-600">Govt & CSR</span>{" "}
              Programs
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-white/40 max-w-4xl mx-auto mt-6 italic leading-relaxed"
            >
              Delivering large-scale, high-impact, and industry-aligned skill
              development programs across India. JITM Skills works in close
              collaboration with national missions, state governments, and
              leading PSUs to empower the youth.
            </motion.p>
          </motion.div>

          {/* Cards Grid with Individual Stagger */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {GOVT_PROGRAMS.map((prog) => (
              <motion.div
                key={prog.id}
                variants={fadeInUp}
                onClick={() => setSelectedId(prog)}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative p-10 bg-white/5 border border-white/10 rounded-[40px] hover:bg-white/10 hover:border-red-600/30 transition-all duration-500 overflow-hidden cursor-pointer"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="flex justify-between items-start mb-10 relative z-10">
                  <motion.div
                    whileHover={{ rotate: -5 }}
                    className="w-16 h-16 bg-white rounded-2xl p-2 flex items-center justify-center shadow-2xl overflow-hidden"
                  >
                    <img
                      loading="lazy"
                      src={prog.logoUrl}
                      alt="logo"
                      className="w-full h-full object-contain transition-transform group-hover:scale-110"
                    />
                  </motion.div>

                  <div className="text-white/20 group-hover:text-red-600 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500 transform">
                    <IconComponent name={prog.iconName} size={32} />
                  </div>
                </div>

                <div className="relative z-10">
                  <h4 className="text-xl font-black text-white uppercase italic mb-2 group-hover:text-red-600 transition-colors">
                    {prog.title}
                  </h4>
                  <p className="text-red-600 text-[10px] font-black uppercase tracking-widest mb-4">
                    {prog.subtitle}
                  </p>
                  <p className="text-white/30 text-xs leading-relaxed line-clamp-3 group-hover:text-white/60 transition-colors">
                    {prog.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* PRIMARY DETAILS PROGRAM MODAL */}
          <AnimatePresence>
            {selectedId && (
              <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 overflow-hidden">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedId(null)}
                  className="fixed inset-0 bg-slate-950/90 backdrop-blur-md"
                />

                {/* 80% Height & Width Controlled Canvas */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 30 }}
                  transition={{ type: "spring", damping: 25, stiffness: 250 }}
                  className="relative w-full max-w-6xl h-[85vh] md:h-[80vh] bg-white rounded-[40px] overflow-hidden shadow-2xl z-10 grid lg:grid-cols-2 border border-slate-100"
                >
                  {/* Floating Absolute Close Control */}
                  <button
                    onClick={() => setSelectedId(null)}
                    className="absolute top-6 right-6 w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-all z-50 shadow-md"
                  >
                    <X size={20} />
                  </button>

                  {/* Left Panel: Static Framework Context (Dark) */}
                  <div className="bg-[#0F172A] p-10 lg:p-14 text-white flex flex-col justify-between overflow-y-auto custom-scrollbar">
                    <div>
                      <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                        <IconComponent name={selectedId.iconName} size={32} />
                      </div>
                      <h2 className="text-3xl font-black uppercase italic leading-tight mb-3">
                        {selectedId.title}
                      </h2>
                      <p className="text-red-600 font-black uppercase tracking-widest text-xs">
                        {selectedId.subtitle}
                      </p>
                    </div>

                    <div className="mt-10 bg-white/5 p-6 rounded-2xl border border-white/10">
                      <p className="text-white/30 text-[9px] uppercase  mb-2">
                        Project Impact
                      </p>
                      <p className="text-3xl font-black italic text-red-600">
                        {selectedId.stats}
                      </p>
                    </div>
                  </div>

                  {/* Right Panel: Content Scrolling Viewport (White) */}
                  <div className="p-10 lg:p-14 bg-white overflow-y-auto h-full text-left flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-black text-[#0F172A] uppercase italic mb-6 border-b pb-3">
                        Project Highlights
                      </h3>

                      <div className="space-y-4 mb-8">
                        {selectedId.highlights.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle
                              className="text-red-600 mt-0.5 shrink-0"
                              size={18}
                            />
                            <p className="text-gray-700 font-bold text-xs uppercase tracking-tight">
                              {item}
                            </p>
                          </div>
                        ))}
                      </div>

                      <p className="text-gray-400 text-xs leading-relaxed pt-6 border-t italic">
                        {selectedId.longDesc}
                      </p>
                    </div>

                    {/* UPDATED ACTION SYSTEM TRIGGER */}
                    <button
                      onClick={handleJoinMissionClick}
                      className="mt-8 w-full flex items-center justify-center gap-3 bg-red-600 text-white p-5 rounded-2xl font-black uppercase tracking-widest shadow-xl hover:bg-black transition-all"
                    >
                      Join the Mission <ArrowUpRight size={18} />
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>

          {/* 2. SECONDARY GET INTOUCH FORM MODAL CALL */}
          <GetInTouch
            isOpen={isGetInTouchOpen}
            onClose={() => setIsGetInTouchOpen(false)}
          />
        </div>
      </section>

      {/* {SECTION 4: INFINITE LOGO SLIDER (Project Partners)} */}
      <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6 mb-20 text-center"
        >
          <motion.h6
            variants={fadeInUp}
            className="text-red-600 font-black uppercase tracking-widest text-[10px] mb-4"
          >
            Our Strategic Partners
          </motion.h6>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl lg:text-7xl font-black text-[#0F172A] italic uppercase leading-tight tracking-tighter"
          >
            Trusted by{" "}
            <span className="text-red-600 underline decoration-8 underline-offset-[12px]">
              Leading
            </span>{" "}
            Missions
          </motion.h2>
        </motion.div>

        {/* Infinite Scroll Container */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex overflow-hidden group"
        >
          {/* Left & Right Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex whitespace-nowrap py-10"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 30, // Slowed down slightly for a more premium feel
              repeat: Infinity,
            }}
            /* Hover pe animation slow karne ke liye (Optional) */
            whileHover={{ transition: { duration: 60 } }}
          >
            {/* Logos List Double for Seamless Loop */}
            {[...PROJECT_LOGOS, ...PROJECT_LOGOS].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[300px] px-6 flex items-center justify-center"
              >
                <motion.div
                  whileHover={{ y: -15 }}
                  className="relative w-full h-36 bg-gray-50 rounded-[3rem] p-10 border border-gray-100 group/logo transition-all duration-700 flex items-center justify-center overflow-hidden hover:bg-white hover:border-red-600/20 hover:shadow-[0_40px_80px_-15px_rgba(220,38,38,0.15)]"
                >
                  {/* Subtle Inner Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/[0.03] to-transparent opacity-0 group-hover/logo:opacity-100 transition-opacity duration-700" />

                  <img
                    loading="lazy"
                    src={logo.img}
                    alt={logo.alt}
                    className="relative z-10 w-full h-full object-contain filter grayscale opacity-40 group-hover/logo:grayscale-0 group-hover/logo:opacity-100 transition-all duration-1000 scale-90 group-hover/logo:scale-110"
                  />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 5: JITM SKILL SERVICES (Split-Screen Design) */}
      <section className="py-20 px-6 bg-[#F3F4F6] skillservices overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto"
        >
          {/* --- Header Side-by-Side (Pehele jaisa safe) --- */}
          <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <motion.h6
                variants={fadeInUp}
                className="text-red-600 font-black uppercase tracking-widest text-xs mb-4"
              >
                Our Expertise
              </motion.h6>
              <motion.h2
                variants={fadeInUp}
                className="text-4xl lg:text-6xl font-black text-[#0F172A] italic uppercase leading-none"
              >
                Skill <span className="text-red-600">Services</span>
              </motion.h2>
            </div>
            <motion.p
              variants={fadeInUp}
              className="text-gray-500 text-sm italic leading-relaxed max-w-xl border-l-2 border-red-600 pl-6 lg:mb-2"
            >
              JITM Skills provides industry-aligned training, placement, and
              entrepreneurship programs across India to build successful
              careers.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* --- Guidance Card (Animated - Pehele jaisa safe) --- */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className="lg:col-span-1 bg-[#0F172A] rounded-[30px] p-8 text-white flex flex-col justify-between border border-white/5 relative overflow-hidden group/guidance"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 blur-[50px] opacity-0 group-hover/guidance:opacity-100 transition-opacity duration-700" />
              <div className="relative z-10">
                <h3 className="text-xl font-black uppercase italic mb-2">
                  Guidance?
                </h3>
                <p className="text-white/40 text-[8px] font-bold uppercase tracking-widest mb-6">
                  Call for Queries
                </p>
                <a
                  href="tel:01204570318"
                  className="inline-flex items-center gap-4 group bg-red-600 p-3 rounded-2xl w-full hover:bg-white transition-all duration-500 shadow-lg shadow-red-600/20 hover:shadow-white/10"
                >
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-[#0F172A]">
                    <PhoneCall size={18} className="group-hover:text-red-600" />
                  </div>
                  <span className="text-sm font-black italic group-hover:text-black">
                    0120 457 0318
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/10 relative z-10">
                <motion.div whileHover={{ y: -2 }}>
                  <p className="text-lg font-black italic text-red-600 leading-none">
                    150+
                  </p>
                  <p className="text-[7px] text-white/30 uppercase mt-1">
                    Centers
                  </p>
                </motion.div>
                <motion.div whileHover={{ y: -2 }}>
                  <p className="text-lg font-black italic text-red-600 leading-none">
                    10L+
                  </p>
                  <p className="text-[7px] text-white/30 uppercase mt-1">
                    Students
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* --- Services Grid (Staggered Animation - FIXED HOVER SHAKE) --- */}
            <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">
              {SERVICE_HIGHLIGHTS.map((service, index) => (
                <motion.div
                  key={service.id}
                  custom={index}
                  variants={fadeInUp}
                  whileHover={{ y: -8 }}
                  className="group relative bg-white rounded-[30px] p-6 border border-gray-100 hover:shadow-2xl hover:shadow-red-600/5 transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-pointer h-full"
                >
                  {/* Background Image Overlay with Scaling */}
                  <motion.div
                    className="absolute top-0 right-0 w-24 h-24 opacity-10 group-hover:opacity-100 group-hover:w-full group-hover:h-full transition-all duration-700 pointer-events-none"
                    initial={{ scale: 1.2 }}
                    whileHover={{ scale: 1 }}
                  >
                    <img
                      loading="lazy"
                      src={service.img}
                      className="w-full h-full object-cover rounded-[30px] filter grayscale group-hover:grayscale-0 transition-all duration-700"
                      alt={service.title}
                    />
                    <div className="absolute inset-0 bg-white/90 group-hover:bg-white/70 transition-all duration-500"></div>
                  </motion.div>

                  <div className="relative z-10 flex flex-col grow">
                    <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-4 group-hover:bg-red-600 group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                      <IconComponent name={service.icon} size={20} />
                    </div>
                    <h4 className="text-lg font-black text-[#0F172A] uppercase italic mb-2 group-hover:text-red-600 transition-colors duration-300">
                      {service.title}
                    </h4>
                    {/* 🔥 FIXED SECTION: Smooth Description without layout shake */}
                    <p className="text-gray-600 text-[11px] font-medium leading-relaxed italic line-clamp-3 group-hover:text-[#0F172A] group-hover:font-semibold transition-all duration-300 min-h-[56px] lg:min-h-[48px]">
                      {service.desc}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between relative z-10 pt-4 border-t border-gray-100/50 group-hover:border-gray-100/20 transition-all duration-300">
                    <span className="text-[8px] font-black uppercase tracking-[0.2em] text-red-600 group-hover:text-[#0F172A]">
                      Expertise
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate("/TrainingSectors");
                      }}
                      className="w-8 h-8 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-[#0F172A] group-hover:text-white transition-all duration-500 cursor-pointer border-none outline-none group-hover:scale-110"
                      title="View Training Program"
                    >
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 6: GLOBAL CERTIFICATION & LOGO WALL */}
      <section className="py-32 px-6 bg-[#0F172A] overflow-hidden relative">
        {/* Ambient Background Glow Effect */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* --- Left Side: Content --- */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
            >
              <motion.h6
                variants={fadeInUp}
                className="text-red-500 font-black uppercase tracking-widest text-xs mb-4"
              >
                World Class Standards
              </motion.h6>
              <motion.h2
                variants={fadeInUp}
                className="text-4xl lg:text-6xl font-black text-white italic uppercase leading-[0.9] mb-8"
              >
                Get <span className="text-red-500">Global</span> <br />{" "}
                Certification
              </motion.h2>

              <div className="space-y-6">
                <motion.p
                  variants={fadeInUp}
                  className="text-slate-400 text-lg font-medium italic leading-relaxed border-l-4 border-red-500 pl-8"
                >
                  We provide industry-recognized global certifications to
                  enhance students' skills. Our training programs ensure
                  hands-on experience and practical knowledge.
                </motion.p>

                {/* Features Tags */}
                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4 pt-4"
                >
                  {/* Tag 1 */}
                  <div className="flex items-center gap-3 bg-slate-900/60 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-800/80 group hover:border-red-500/30 transition-all duration-300">
                    <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                      <ShieldCheck size={20} />
                    </div>
                    <p className="text-[10px] font-black text-slate-200 uppercase tracking-widest">
                      Industry Recognized
                    </p>
                  </div>

                  {/* Tag 2 */}
                  <div className="flex items-center gap-3 bg-slate-900/60 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-800/80 group hover:border-red-500/30 transition-all duration-300">
                    <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
                      <Briefcase size={20} />
                    </div>
                    <p className="text-[10px] font-black text-slate-200 uppercase tracking-widest">
                      Placement Support
                    </p>
                  </div>
                </motion.div>

                <button
                  className="bg-red-500 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all duration-300 mt-10 inline-flex items-center group shadow-lg shadow-red-500/10 hover:shadow-white/5"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/TrainingSectors");
                  }}
                >
                  Start Your Journey{" "}
                  <ArrowUpRight
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    size={18}
                  />
                </button>
              </div>
            </motion.div>

            {/* --- Right Side: Fading Logo Grid --- */}
            {/* --- Right Side: Fading Logo Grid --- */}
            <div className="relative h-[550px] flex items-center justify-center">
              <div className="grid grid-cols-3 gap-6 w-full relative z-10">
                <AnimatePresence>
                  {visibleLogos.map((logo) => (
                    <motion.div
                      key={logo.id}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8, y: -20 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="aspect-square bg-slate-900/80 backdrop-blur-md rounded-[2.5rem] p-6 shadow-2xl border border-slate-800/60 flex items-center justify-center group hover:bg-white hover:border-transparent hover:shadow-xl hover:shadow-white/5 transition-all duration-500 cursor-pointer"
                    >
                      <img
                        loading="lazy"
                        src={logo.img}
                        alt="Certification Logo"
                        className="w-full h-full object-contain filter invert opacity-60 group-hover:invert-0 group-hover:opacity-100 transition-all duration-500"
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Pagination Dots */}
              <div className="absolute -bottom-14 flex gap-3">
                {[0, 1, 2].map((dot) => {
                  const targetIndex = dot * itemsPerPage;
                  const isActive = Math.floor(index / itemsPerPage) === dot;

                  return (
                    <button
                      key={dot}
                      onClick={() => setIndex(targetIndex)}
                      title={`Go to slide ${dot + 1}`}
                      className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                        isActive
                          ? "w-10 bg-red-500"
                          : "w-3 bg-slate-700 hover:bg-slate-600"
                      }`}
                      aria-label={`Switch to logo set ${dot + 1}`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: OUR PLACEMENT PARTNERS (Infinite Slider) */}
      <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-6 mb-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <motion.h6
                variants={fadeInUp}
                className="text-red-600 font-black uppercase tracking-widest text-[10px] mb-4"
              >
                Career Opportunities
              </motion.h6>
              <motion.h2
                variants={fadeInUp}
                className="text-3xl lg:text-4xl font-black text-[#0F172A] italic uppercase leading-none"
              >
                Our Placement <span className="text-red-600">Partners</span>
              </motion.h2>
            </div>

            <motion.p
              variants={fadeInUp}
              className="text-gray-400 text-[13px] italic max-w-md md:text-right border-r-2 border-red-600 pr-6 hidden md:block leading-relaxed"
            >
              We collaborate with leading companies across multiple industries
              to create real career opportunities. Our partners trust our
              standards and hire skilled talent.
            </motion.p>
          </div>
        </motion.div>

        {/* Infinite Marquee Wrapper */}
        <div className="relative flex overflow-hidden group">
          {/* Animated Marquee Container */}
          <motion.div
            className="flex whitespace-nowrap py-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              ease: "linear",
              duration: 25, // Speed control
              repeat: Infinity,
            }}
            // Hover karne pe marquee slow ho jayegi taaki user logo dekh sake
            whileHover={{ transition: { duration: 50 } }}
          >
            {[...PLACEMENT_PARTNERS, ...PLACEMENT_PARTNERS].map(
              (partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[200px] px-4 flex items-center justify-center"
                >
                  {/* Card Container */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="group/card h-28 w-full bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center overflow-hidden transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-red-600/5 hover:border-red-600/20"
                  >
                    <img
                      loading="lazy"
                      src={partner.img}
                      alt="Placement Partner"
                      className="max-h-20 max-w-[70%] object-contain opacity-50 grayscale transition-all duration-700 ease-in-out group-hover/card:opacity-100 group-hover/card:grayscale-0 group-hover/card:scale-125"
                    />
                  </motion.div>
                </div>
              ),
            )}
          </motion.div>

          {/* Side Gradients for Smooth Fading Effect */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />
        </div>
      </section>

      {/* SECTION: TESTIMONIALS (Card Carousel) */}
      <Testimonials />
    </div>
  );
};

export default Home;
