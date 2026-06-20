import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OurCourse from "../components/OurCourse";
import EnrollmentForm from "../components/EnrollmentForm";
import Swal from "sweetalert2"; // SweetAlert2 Import kiya

import {
  Cpu,
  Database,
  Briefcase,
  Medal,
  Rocket,
  ChevronRight,
  Home,
  CheckCircle2,
  Clock,
  Search,
  FileText,
  GraduationCap,
  X,
  ChevronDown,
  HelpCircle,
} from "lucide-react";
import { statstraining } from "../constants/data";
import { Link } from "react-router-dom";
import {
  staggerContainer,
  fadeInUp,
  containerVariants,
  itemVariants,
  statsCardHover,
} from "../utils/animations";

const steps = [
  {
    id: "01",
    title: "Select Your Sector",
    desc: "Explore Govt Schemes, Free Courses, or premium Paid Programs to find your match.",
    icon: Search,
    action: "course",
  },
  {
    id: "02",
    title: "Submit Application",
    desc: "Click 'Enroll Now' and fill out our quick form. Your details land straight in our inbox.",
    icon: FileText,
    action: "enroll",
  },
  {
    id: "03",
    title: "Learn & Get Placed",
    desc: "Complete hands-on industrial training, get Skill India certificates, and attend job drives.",
    icon: GraduationCap,
    action: "download",
  },
];
const faqs = [
  {
    q: "Are Government Scheme courses completely free?",
    a: "Yes, all programs under PMKVY, UPSDM, or other central and state schemes are 100% government-funded. Students do not need to pay any tuition fees, and books/study materials are provided completely free of charge.",
  },
  {
    q: "What kind of certificates will I receive?",
    a: "Upon successful completion and assessment, you will receive government-recognized certificates from Skill India, NSDC, or relevant Sector Skill Councils (SSCs) which are highly valued by employers across India.",
  },
  {
    q: "How do your Paid Programs differ from Free/Govt courses?",
    a: "Our premium Paid Programs target advanced domains like Frontend Development, digital arts, and custom industrial tools. They offer intensive corporate mentorship, smaller batch limits, premium lab setups, and dedicated placement drives for high-paying corporate roles.",
  },
  {
    q: "Is there any placement support after the training?",
    a: "Absolutely. JITM Skills has a robust network of industry partners. Whether you enroll in a government initiative or a specialized paid track, we provide resume building, mock interviews, and access to pan-India placement assistance.",
  },
];

const TrainingSectors = () => {
  const [activeModal, setActiveModal] = useState(null); // 'course', 'enroll' or null

  // --- FIX: closeModal function yahan sahi se define kar diya ---
  const closeModal = () => {
    setActiveModal(null);
  };

  // --- NEW: PDF Download Alert Handling ---
  const handleStepClick = (step) => {
    if (!step.action) return;

    if (step.action === "download") {
      // SweetAlert Configuration for Confirmation
      Swal.fire({
        title: "Download Brochure?",
        text: "This brochure contains details for all JITM Skills courses, including Government Schemes, Free Literacy, and Premium Paid Programs. Would you like to download it?",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#D32F2F",
        cancelButtonColor: "#1E293B",
        confirmButtonText: "Yes, Download Now",
        cancelButtonText: "Cancel",
        borderRadius: "24px",
      }).then((result) => {
        if (result.isConfirmed) {
          // --- PDF DOWNLOADING LOGIC ---
          const link = document.createElement("a");
          link.href = "/assets/jitm-courses-brochure.pdf"; // Apne PDF ka exact public path yahan daal dena
          link.download = "JITM_Skills_Courses_Brochure.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);

          // Success alert after download starts
          Swal.fire({
            title: "Downloading!",
            text: "Your brochure download has started.",
            icon: "success",
            confirmButtonColor: "#D32F2F",
            borderRadius: "24px",
          });
        }
      });
    } else {
      // Baaki normal modals ke liye handles (course & enroll)
      setActiveModal(step.action);
    }
  };
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <>
      <section className="relative min-h-screen flex items-center pt-12 lg:pt-32 pb-20 overflow-hidden bg-[#0F172A]">
        {/* Parallax Background (Slightly different video/image for training) */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-transparent z-10" />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source
              src="https://assets.mixkit.co/videos/preview/mixkit-man-working-on-his-laptop-34440-large.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 min-[1024px]:mt-12 w-full relative z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-start"
            >
              <motion.nav variants={fadeInUp} className="mb-6 mt-10">
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                  <Link
                    to="/"
                    className="text-white/50 hover:text-[#D32F2F] transition-colors flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest"
                  >
                    <Home size={12} /> Home
                  </Link>
                  <ChevronRight size={12} className="text-white/20" />
                  <span className="text-white font-black text-[10px] uppercase tracking-widest">
                    Training Sectors
                  </span>
                </div>
              </motion.nav>

              <motion.span
                variants={fadeInUp}
                className="badge mb-6 border border-[#D32F2F]/30 bg-[#D32F2F]/10 text-white text-[10px]"
              >
                Skill Development & Certification
              </motion.span>

              <motion.h2
                variants={fadeInUp}
                className="h-super text-white italic uppercase mb-6 leading-tight"
              >
                Mastering <br />{" "}
                <span className="text-red-gradient">Future Skills</span>
              </motion.h2>

              <motion.div
                variants={fadeInUp}
                className="space-y-4 max-w-xl mb-8"
              >
                <p className="text-white/80 text-lg font-medium leading-relaxed italic">
                  We provide specialized training in{" "}
                  <b className="text-white">
                    High-Growth Technology & Management Sectors
                  </b>
                  .
                </p>
                <p className="text-white/60 text-sm leading-relaxed border-l-2 border-[#D32F2F] pl-4">
                  From Government-backed skill initiatives to our Premium
                  Industry Programs—our mission is to make you industry-ready.
                  Our <b className="text-white">Professional Paid Courses</b>{" "}
                  come with a{" "}
                  <b className="text-[#D32F2F]">100% Placement Guarantee</b>,
                  while all other certification programs include comprehensive
                  placement support.
                </p>
              </motion.div>

              {/* Quick Sector Tags */}
              <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
                {[
                  "IT Software & Digital marketing",
                  "medical & Emerging Tech",
                  "Hospitality & Tourism",
                  "Job Oriented Roles",
                  "Artificial Intelligence (AI)",
                  "Film Media Production",
                ].map((tag, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white/5 p-3 rounded-xl border border-white/10 hover:bg-[#D32F2F]/5 transition-all"
                  >
                    <CheckCircle2 size={14} className="text-[#D32F2F]" />
                    <span className="text-[10px] text-white font-bold uppercase tracking-wider">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT VISUAL: BENTO GRID CARDS */}
            <div className="relative grid grid-cols-2 gap-6">
              <div className="pt-16 space-y-6">
                {/* Card 1: Government Training (PMKVY/NSDC) */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="h-60 bg-white/5 backdrop-blur-2xl rounded-[40px] border border-white/10 p-8 flex flex-col justify-between group"
                >
                  <Medal
                    className="text-[#D32F2F] group-hover:rotate-12 transition-transform"
                    size={32}
                  />
                  <div>
                    <h4 className="text-white font-black text-xs uppercase tracking-widest">
                      Govt. Certification
                    </h4>
                    <p className="text-[9px] text-white/40 mt-1 uppercase tracking-tighter">
                      PMKVY & NSDC Schemes
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-[8px] bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full font-bold uppercase">
                        Placement Support
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Card 2: 3-Month Paid Mastery */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="h-72 bg-[#D32F2F] rounded-[40px] p-8 flex flex-col justify-between shadow-[0_30px_60px_rgba(211,47,47,0.3)] relative overflow-hidden group"
                >
                  <Rocket
                    className="absolute -bottom-8 -right-8 text-white/10"
                    size={180}
                  />
                  <div className="flex justify-between items-start relative z-10">
                    <Cpu className="text-white" size={32} />
                    <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2">
                      <Clock size={10} className="text-white" />
                      <span className="text-[8px] font-black text-white uppercase italic">
                        3 Months Duration
                      </span>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="text-white font-black text-3xl italic tracking-tighter mb-1">
                      100%
                    </div>
                    <h4 className="text-white font-black text-xs uppercase tracking-widest">
                      Paid Course Placement
                    </h4>
                    <p className="text-[8px] text-white/70 uppercase font-bold mt-2">
                      Full Job Guarantee or Refund*
                    </p>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-6 pt-12">
                {/* Card 3: IT & Digital Sectors */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="h-72 bg-white/10 backdrop-blur-xl rounded-[40px] border border-white/10 p-8 flex flex-col justify-between group"
                >
                  <Database
                    className="text-[#D32F2F] group-hover:scale-110 transition-transform"
                    size={32}
                  />
                  <div>
                    <h4 className="text-white font-black text-xs uppercase tracking-widest italic leading-tight mb-2">
                      Advance <br /> Technology Sectors
                    </h4>
                    <div className="space-y-2 opacity-60">
                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-[#D32F2F]" />
                      </div>
                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-1/2 h-full bg-[#D32F2F]" />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Card 4: Corporate Hiring */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="h-52 bg-white/5 backdrop-blur-2xl rounded-[40px] border border-white/10 p-8 flex flex-col justify-between group"
                >
                  <Briefcase className="text-[#D32F2F]" size={32} />
                  <div>
                    <div className="text-white font-black text-2xl italic tracking-tighter">
                      500+
                    </div>
                    <h4 className="text-white font-black text-[10px] uppercase tracking-widest">
                      Hiring Partners
                    </h4>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="our-course">
        <OurCourse />
      </div>

      <section className="pt-16 bg-[#0B0F19] px-6 py-16 relative overflow-hidden shadow-2xl">
        {/* Background Subtle Gradient Decor */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#D32F2F]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

        {/* --- HEADER ANIMATION (Using your individual item look) --- */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16 relative z-10"
        >
          <span className="text-[#D32F2F] text-[10px] font-black uppercase ">
            Our Proven Track Record
          </span>
          <h3 className="text-3xl md:text-4xl font-black text-white italic uppercase mt-2 tracking-tight">
            JITM Impact in <span className="text-[#D32F2F]">Numbers</span>
          </h3>
          <div className="h-1 w-16 bg-[#D32F2F] mx-auto mt-3 rounded-full" />
        </motion.div>

        {/* --- GRID (Using your containerVariants for stagger children) --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
        >
          {statstraining.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                // Tumhare naye composite variant ko bind kiya
                variants={statsCardHover}
                whileHover="hover"
                whileTap="tap"
                className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-8 rounded-[32px] shadow-xl flex flex-col justify-between group transition-colors duration-300"
              >
                <div>
                  {/* Icon Container with glowing hover effect */}
                  <div className="w-12 h-12 rounded-2xl bg-[#D32F2F]/10 flex items-center justify-center text-[#D32F2F] mb-6 group-hover:bg-[#D32F2F] group-hover:text-white transition-all duration-300 shadow-lg shadow-[#D32F2F]/5">
                    <Icon size={22} />
                  </div>

                  {/* Value */}
                  <h4 className="text-4xl md:text-5xl font-black text-white tracking-tight italic uppercase mb-1 drop-shadow-md">
                    {stat.value}
                  </h4>

                  {/* Label */}
                  <p className="text-xs font-black text-slate-300 uppercase tracking-wider mb-3">
                    {stat.label}
                  </p>
                </div>

                {/* Description */}
                <p className="text-[11px] text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors duration-300 pt-3 border-t border-slate-800/60">
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <section className="py-24 bg-slate-100 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-slate-50 rounded-full blur-3xl pointer-events-none z-0" />

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-[#D32F2F] text-[10px] font-black uppercase">
              3 Simple Steps
            </span>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 italic uppercase mt-2 tracking-tight">
              How The Process <span className="text-[#D32F2F]">Works</span>
            </h3>
            <div className="h-1 w-16 bg-[#D32F2F] mx-auto mt-3 rounded-full" />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 relative"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  variants={fadeInUp}
                  onClick={() => handleStepClick(step)} // Custom step click triggered
                  className={`relative flex flex-col items-center text-center group ${step.action ? "cursor-pointer" : ""}`}
                >
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[65%] w-[70%] h-[2px] border-t-2 border-dashed border-slate-200 z-0 group-hover:border-[#D32F2F]/40 transition-colors duration-300" />
                  )}

                  <div className="relative mb-6 z-10">
                    <span className="absolute -top-2 -right-3 bg-slate-900 text-white text-[10px] font-black w-6 h-6 rounded-full flex items-center justify-center shadow-md group-hover:bg-[#D32F2F] transition-colors duration-300">
                      {step.id}
                    </span>
                    <div className="w-20 h-20 rounded-[28px] bg-[#F8FAFC] border border-slate-200 flex items-center justify-center text-slate-700 group-hover:bg-slate-900 group-hover:text-white group-hover:border-slate-900 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm">
                      <Icon size={28} />
                    </div>
                  </div>

                  <h4 className="text-base font-black text-slate-900 uppercase tracking-wide mb-3 group-hover:text-[#D32F2F] transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                    {step.desc}
                  </p>
                  {step.action && (
                    <span className="mt-4 text-[9px] font-black uppercase text-[#D32F2F] opacity-0 group-hover:opacity-100 transition-all">
                      {step.action === "download"
                        ? "Click to Download Brochure →"
                        : "Click to Open →"}
                    </span>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* --- PREMIUM FIT-TO-PAGE MODAL POPUP --- */}
        <AnimatePresence>
          {activeModal && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-0 md:p-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
                className="absolute inset-0 bg-slate-950/90 backdrop-blur-xl"
              />

              <motion.div
                initial={{ scale: 0.98, opacity: 0, y: 30 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.98, opacity: 0, y: 30 }}
                transition={{ type: "spring", damping: 25, stiffness: 220 }}
                className="relative w-full h-full md:max-w-7xl md:h-[90vh] bg-white rounded-0 md:rounded-[40px] shadow-2xl z-10 flex flex-col overflow-hidden"
              >
                <div className="flex justify-between items-center px-8 py-6 border-b border-slate-100 bg-white">
                  <div>
                    <span className="text-[#D32F2F] text-[9px] font-black uppercase tracking-widest">
                      JITM Interactive Panel
                    </span>
                    <h4 className="text-xl font-black text-slate-900 uppercase italic">
                      {activeModal === "course"
                        ? "Explore Specializations"
                        : "Admission Gate"}
                    </h4>
                  </div>
                  <button
                    onClick={closeModal}
                    className="p-2.5 bg-slate-100 hover:bg-[#D32F2F] hover:text-white rounded-full transition-all duration-300 shadow-sm"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto px-8 py-10 overflow-x-hidden relative scroll-smooth no-scrollbar">
                  {activeModal === "course" && <OurCourse />}
                  {activeModal === "enroll" && (
                    <div className="max-w-4xl mx-auto">
                      <EnrollmentForm
                        title="Start Your Application"
                        onSuccess={closeModal}
                      />
                    </div>
                  )}

                  {activeModal === "course" && (
                    <div className="fixed md:absolute right-6 top-1/2 -translate-y-1/2 z-50 pointer-events-none flex flex-col items-center gap-1 bg-slate-900/10 p-2 rounded-full backdrop-blur-sm">
                      <motion.div
                        animate={{ y: [0, 6, 0], opacity: [0.4, 1, 0.4] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="text-[#D32F2F]"
                      >
                        <ChevronDown size={20} className="stroke-[3]" />
                      </motion.div>
                      <span className="text-[7px] font-black uppercase tracking-tighter text-slate-500 vertical-text [writing-mode:vertical-lr]">
                        Scroll
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>

      <section className="mt-24 max-w-7xl mx-auto mb-20 px-4 sm:px-6 relative overflow-hidden">
        {/* Left Subtle Glow Backdrop Decor */}
        <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-[#D32F2F]/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Main Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
          {/* --- LEFT COLUMN: CONTENT AREA --- */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 sticky top-28 space-y-6"
          >
            <div>
              <span className="text-[#D32F2F] text-[10px] font-black uppercase  bg-[#D32F2F]/5 px-3 py-1 rounded-full border border-[#D32F2F]/10">
                Have Questions?
              </span>
              <h3 className="text-4xl lg:text-5xl font-black text-slate-900 italic uppercase mt-4 tracking-tighter leading-none">
                Frequently Asked <br />
                <span className="text-[#D32F2F]">Sawaal</span>
              </h3>
              <div className="h-1 w-16 bg-[#D32F2F] mt-4 rounded-full" />
            </div>

            <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium">
              Find quick answers about our enrollment process, certifications,
              and the core differences between government-funded schemes and
              specialized paid courses.
            </p>

            {/* --- PREMIUM VISUAL CARD / BENTO LOOK --- */}
            <div className="relative group rounded-[32px] overflow-hidden border border-slate-200/60 bg-gradient-to-br from-slate-50 to-slate-100 p-8 shadow-sm flex flex-col justify-between min-h-[180px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D32F2F]/5 rounded-full blur-2xl pointer-events-none" />
              <div>
                <h4 className="text-sm font-black text-slate-800 uppercase tracking-wide mb-2">
                  Still Need Assistance?
                </h4>
                <p className="text-[11px] text-slate-400 leading-relaxed max-w-xs">
                  Our academic counselors are available to guide you toward the
                  right training sector choice based on your profile.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200/50 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase text-slate-900 tracking-wider">
                  Contact Support Cell
                </span>
                {/* --- LINK CONVERTED TO INTERACTIVE MAILTO ANCHOR --- */}
                <a
                  href="mailto:info@jitmskills.com?subject=Inquiry%20Regarding%20Training%20Sectors%20-%20JITM%20Skills"
                  className="text-[#D32F2F] text-xs font-black tracking-widest flex items-center gap-1 group-hover:translate-x-1 transition-transform duration-300 hover:opacity-80"
                >
                  info@jitmskills.com{" "}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT COLUMN: ACCORDION LIST --- */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="lg:col-span-7 space-y-4"
          >
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`border rounded-[24px] overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "bg-slate-50 border-slate-300 shadow-sm"
                      : "bg-white border-slate-200 shadow-sm hover:border-slate-300 hover:shadow-md"
                  }`}
                >
                  {/* Question Bar */}
                  <button
                    type="button"
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                    className="w-full p-6 flex items-center justify-between text-left gap-4 outline-none group"
                  >
                    <div className="flex items-center gap-3.5">
                      <HelpCircle
                        size={18}
                        className={`transition-colors duration-300 shrink-0 ${isOpen ? "text-[#D32F2F]" : "text-slate-400 group-hover:text-slate-600"}`}
                      />
                      <span className="text-xs md:text-sm font-black text-slate-800 uppercase tracking-wide leading-snug">
                        {faq.q}
                      </span>
                    </div>

                    {/* Arrow Indicator Wrapper */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`shrink-0 transition-colors duration-300 ${isOpen ? "text-[#D32F2F]" : "text-slate-400"}`}
                    >
                      <ChevronDown size={18} className="stroke-[2.5]" />
                    </motion.div>
                  </button>

                  {/* --- CENTRAL SMOOTH SLIDING ACCORDION PANEL --- */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pl-[46px] text-xs text-slate-500 leading-relaxed border-t border-slate-200/40 pt-3 bg-white/50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default TrainingSectors;
