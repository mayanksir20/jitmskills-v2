import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeInUp } from "../utils/animations";
import landProperty from "../assets/images/Land-property.webp";

import CenterImage1 from "../assets/images/Yoga Training Centers.webp";
import CenterImage2 from "../assets/images/Diagnostic Labs.webp";
import CenterImage3 from "../assets/images/Old Age Homes.webp";
import CenterImage4 from "../assets/images/Child Care Centers.webp";
import {
  Home,
  ChevronRight,
  ArrowUpRight,
  Handshake,
  Award,
  TrendingUp,
  Users,
  Building2,
  CheckCircle,
  Flower2,
  FlaskConical,
  HeartHandshake,
  Baby,
  MapPin,
  CheckCircle2,
  Building,
  X,
  Loader2,
} from "lucide-react";

function BecomeFranchisePartner() {
  const [index, setIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSector, setSelectedSector] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    landArea: "",
    address: "", // Added explicit configuration path
    pincode: "", // Added localized validation tracking
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const franchiseSectors = [
    "Yoga & Wellness Training Centers",
    "Diagnostic & Healthcare Laboratories",
    "Senior Citizen Care Homes (Old Age Homes)",
    "Child Care & Early Learning Centers",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % franchiseSectors.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [franchiseSectors.length]);

  const sectorsData = [
    {
      id: "01",
      title: "Yoga Training Centers",
      icon: <Flower2 size={24} />,
      color: "from-emerald-500/20 to-teal-500/5",
      borderColor: "hover:border-emerald-500/30",
      accentText: "text-emerald-400",
      bgBadge: "bg-emerald-500/10 text-emerald-400",
      desc: "Promoting wellness, holistic mental health architectures, and structured physical training frameworks across localized micro-centers.",
      image: CenterImage1,
    },
    {
      id: "02",
      title: "Diagnostic Labs",
      icon: <FlaskConical size={24} />,
      color: "from-blue-500/20 to-indigo-500/5",
      borderColor: "hover:border-blue-500/30",
      accentText: "text-blue-400",
      bgBadge: "bg-blue-500/10 text-blue-400",
      desc: "Establishing clinical pathology testing ecosystems backed by modern diagnostic tech modules and healthcare parameters.",
      image: CenterImage2,
    },
    {
      id: "03",
      title: "Old Age Homes",
      icon: <HeartHandshake size={24} />,
      color: "from-orange-500/20 to-amber-500/5",
      borderColor: "hover:border-orange-500/30",
      accentText: "text-orange-400",
      bgBadge: "bg-orange-500/10 text-orange-400",
      desc: "Creating sustainable, empathetic, and fully medically-equipped senior living facilities driven by continuous community support.",
      image: CenterImage3,
    },
    {
      id: "04",
      title: "Child Care Centers",
      icon: <Baby size={24} />,
      color: "from-rose-500/20 to-pink-500/5",
      borderColor: "hover:border-rose-500/30",
      accentText: "text-rose-400",
      bgBadge: "bg-rose-500/10 text-rose-400",
      desc: "Nurturing the early childhood development pipeline with safe, highly engaging, learning environments and expert daycare tracking.",
      image: CenterImage4,
    },
  ];

  const handleOpenModal = (title) => {
    setSelectedSector(title);
    setIsModalOpen(true);
    setSubmitStatus(null);
    setFormData({
      name: "",
      phone: "",
      email: "",
      landArea: "",
      address: "",
      pincode: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const payload = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      landArea: formData.landArea,
      selectedSector: selectedSector,
      address: formData.address,
      pincode: formData.pincode,
    };

    try {
      const response = await fetch(
        "https://jitmskills-v2.onrender.com/api/v1/send-lead",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const data = await response.json();

      if (response.ok && data.status === "success") {
        setSubmitStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          landArea: "",
          address: "",
          pincode: "",
        });

        // ⏱️ Production UI Guard: Strict 7-second auto-close execution block
        setTimeout(() => {
          setIsModalOpen(false);
          setSubmitStatus(null);
        }, 7000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Transmission interface disruption error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-12 lg:pt-32 pb-20 overflow-hidden bg-[#0F172A]">
        {/* Background Video Parallax / Ambient Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none w-full h-full">
          <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#0F172A]">
            <div className="absolute min-w-[180%] min-h-[120%] sm:min-w-[140%] sm:min-h-[140%] md:min-w-[115%] md:min-h-[115%] w-auto h-auto aspect-video top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <iframe
                className="w-full h-full pointer-events-none object-cover transform scale-110"
                src="https://www.youtube.com/embed/UUkhz5ylzXs?autoplay=1&mute=1&loop=1&playlist=UUkhz5ylzXs&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&enablejsapi=1&iv_load_policy=3"
                title="Franchise Background Video"
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
            {/* LEFT CONTENT: Vertical Story & Value Proposition */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-start"
            >
              {/* Breadcrumb Navigation */}
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
                    Franchise Model
                  </span>
                </div>
              </motion.nav>

              <motion.span
                variants={fadeInUp}
                className="badge mb-6 border border-[#D32F2F]/30 bg-[#D32F2F]/10 text-white text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-semibold"
              >
                Growth & Entrepreneurship Opportunity
              </motion.span>

              <motion.h1
                variants={fadeInUp}
                className="h-super text-white italic uppercase mb-6 leading-tight text-4xl md:text-5xl lg:text-6xl font-black"
              >
                Become A <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D32F2F] to-red-500">
                  Franchise Partner
                </span>
              </motion.h1>

              <motion.div
                variants={fadeInUp}
                className="space-y-4 max-w-xl mb-12"
              >
                <p className="text-white/80 text-lg font-medium leading-relaxed italic">
                  Join hands with <b className="text-white">JITM Skills</b> to
                  establish a high-yielding training and consulting business in
                  your region.
                </p>

                <p className="text-white/60 text-sm leading-relaxed border-l-2 border-[#D32F2F] pl-4">
                  We provide the blueprint, operational ecosystem, government
                  compliance alignments, and end-to-end support. Leverage our
                  pan-India network to transform local youth and scale your
                  business multi-fold.
                </p>
              </motion.div>

              {/* Quick Benefits Grid */}
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 gap-4 w-full max-w-lg mb-12"
              >
                {[
                  {
                    icon: <Building2 size={16} />,
                    text: "Proven Infrastructure",
                  },
                  { icon: <Award size={16} />, text: "Govt Approvals" },
                  { icon: <TrendingUp size={16} />, text: "High ROI Business" },
                  { icon: <Handshake size={16} />, text: "Continuous Support" },
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

              {/* Action Call to Button */}
              <motion.div variants={fadeInUp}>
                <button
                  className="btn-jitm group uppercase text-[11px] tracking-widest px-10 bg-[#D32F2F] hover:bg-[#b72424] text-white py-4 rounded-xl font-bold flex items-center gap-2 transition-all shadow-lg cursor-pointer"
                  onClick={() => handleOpenModal("General Franchise Inquiry")}
                >
                  Apply For Franchise{" "}
                  <ArrowUpRight
                    className="group-hover:rotate-45 transition-transform"
                    size={18}
                  />
                </button>
              </motion.div>
            </motion.div>

            {/* RIGHT VISUAL: Glassmorphic Bento Grid Interactive Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative perspective-1000"
            >
              <div className="relative z-10 grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  {/* Card 1: Experience / Centers Track */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotateZ: -1, y: -5 }}
                    className="h-52 bg-white/5 backdrop-blur-2xl rounded-[40px] border border-white/10 p-8 flex flex-col justify-between group hover:bg-[#D32F2F]/10 transition-all cursor-pointer relative overflow-hidden shadow-2xl"
                  >
                    <div className="flex justify-between items-start">
                      <Users
                        className="text-[#D32F2F] group-hover:animate-bounce transition-all"
                        size={32}
                      />
                      <div className="text-right">
                        <div className="text-white font-black text-2xl italic leading-none tracking-tighter">
                          50+
                        </div>
                        <div className="text-[7px] text-white/40 font-black uppercase tracking-widest mt-1">
                          Active Centers
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-black text-xs uppercase tracking-widest">
                        Franchise Footprint
                      </h4>
                      <p className="text-[9px] text-white/30 font-bold uppercase tracking-tighter mt-1">
                        Rapidly Growing Network
                      </p>
                      <div className="w-full h-[1px] bg-white/10 mt-3 group-hover:bg-[#D32F2F]/50 transition-colors" />
                    </div>
                  </motion.div>

                  {/* Card 2: Main Accent Theme Card */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotateZ: 1, y: -5 }}
                    className="h-64 bg-[#D32F2F] rounded-[40px] p-8 flex flex-col justify-between shadow-[0_30px_60px_rgba(211,47,47,0.4)] cursor-pointer relative overflow-hidden group"
                  >
                    <Handshake
                      className="absolute -bottom-6 -right-6 text-white/10 group-hover:scale-110 transition-transform"
                      size={150}
                    />
                    <div className="flex justify-between items-start relative z-10">
                      <CheckCircle className="text-white" size={32} />
                    </div>
                    <div className="relative z-10 space-y-1">
                      <div className="text-white font-black text-3xl italic tracking-tighter leading-none">
                        100%
                      </div>
                      <h4 className="text-white font-black text-xs uppercase tracking-widest">
                        Compliance Support
                      </h4>
                      <p className="text-[9px] text-white/70 font-bold uppercase tracking-tighter">
                        Hassle-Free Government Approvals
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-6 pt-12">
                  {/* Card 3: Dynamic Success Rate/Metrics */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotateZ: 1, y: -5 }}
                    className="h-64 bg-white/10 backdrop-blur-xl rounded-[40px] border border-white/10 p-8 flex flex-col justify-between hover:border-[#D32F2F]/50 transition-all cursor-pointer shadow-2xl group"
                  >
                    <div className="flex justify-between items-start">
                      <TrendingUp className="text-[#D32F2F]" size={32} />
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse mt-2"></span>
                    </div>
                    <div>
                      <h4 className="text-white font-black text-xs uppercase tracking-widest mb-3 italic">
                        Partner Profitability
                      </h4>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mb-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "92%" }}
                          transition={{ duration: 2, ease: "easeOut" }}
                          className="h-full bg-[#D32F2F]"
                        />
                      </div>
                      <p className="text-[8px] text-white/30 font-black uppercase tracking-tighter">
                        Average ROI within 18 Months
                      </p>
                    </div>
                  </motion.div>

                  {/* Card 4: Dynamic Sector Rotation for Franchise */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotateZ: -1, y: -5 }}
                    className="h-52 bg-white/5 backdrop-blur-2xl rounded-[40px] border border-white/10 p-8 flex flex-col justify-between cursor-pointer group overflow-hidden shadow-2xl"
                  >
                    <div className="flex justify-between items-start">
                      <Building2 className="text-[#D32F2F]" size={32} />
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F] animate-bounce"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F] animate-bounce delay-100"></span>
                      </div>
                    </div>

                    <div className="relative h-10 my-2">
                      <AnimatePresence>
                        <motion.h4
                          key={franchiseSectors[index]}
                          initial={{ y: 20, opacity: 0, filter: "blur(8px)" }}
                          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                          exit={{ y: -20, opacity: 0, filter: "blur(8px)" }}
                          transition={{ duration: 0.6, ease: "backOut" }}
                          className="absolute inset-0 text-white font-black text-sm italic uppercase tracking-tighter leading-none"
                        >
                          {franchiseSectors[index]}
                        </motion.h4>
                      </AnimatePresence>
                    </div>

                    <div>
                      <div className="w-full h-[1px] bg-white/10 mb-2" />
                      <p className="text-[8px] text-white/30 font-black uppercase tracking-widest">
                        Available Sectors for Franchise
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Rotating Background Ambient Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full -z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= FRANCHISE SECTORS GRID (LIGHT THEME) ================= */}
      <section className="w-full bg-white py-24 px-6 relative border-t border-slate-100">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* HEADER SEPARATOR */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200/80">
            <div className="space-y-3">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#D32F2F] bg-[#D32F2F]/5 px-3 py-1 rounded-md border border-[#D32F2F]/10">
                Operational Spectrum
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase italic text-slate-900">
                Our Franchise <span className="text-[#D32F2F]">Verticals</span>
              </h2>
              <p className="text-xs text-slate-500 font-medium max-w-xl">
                JITM Skills invites space owners, institutions, and community
                leaders to collaborate in establishing localized high-impact
                hubs.
              </p>
            </div>

            {/* Minimum Space Criteria Badge */}
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex items-center gap-4 max-w-sm shrink-0 shadow-xs">
              <div className="p-3 bg-[#D32F2F]/10 text-[#D32F2F] rounded-xl border border-[#D32F2F]/20">
                <MapPin size={22} />
              </div>
              <div>
                <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-wider">
                  Area Requirement
                </span>
                <p className="text-sm font-black text-slate-900 tracking-wide">
                  MINIMUM 2,000 SQ. FT.
                </p>
                <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-tight mt-0.5">
                  & Above Spaces Preferred
                </p>
              </div>
            </div>
          </div>

          {/* INTERACTIVE SECTOR GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectorsData.map((sector) => (
              <motion.div
                key={sector.id}
                whileHover={{ y: -6 }}
                className={`bg-slate-50/50 border border-slate-200/70 ${sector.borderColor} rounded-[32px] p-5 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group shadow-xs`}
              >
                <div className="space-y-4">
                  <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-slate-100">
                    <img
                      src={sector.image}
                      alt={sector.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${sector.color} to-transparent mix-blend-multiply`}
                    />

                    {/* Floating Indicators */}
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
                      <span className="bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-black px-2.5 py-1 rounded-lg border border-slate-200 font-mono shadow-xs">
                        {sector.id}
                      </span>
                      <div
                        className={`p-2 bg-white/90 backdrop-blur-md ${sector.accentText} rounded-lg border border-slate-200 shadow-xs`}
                      >
                        {sector.icon}
                      </div>
                    </div>

                    {/* INTERACTIVE BUTTON ON CLICK LINK ACTION */}
                    <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleOpenModal(sector.title)}
                        className="bg-[#D32F2F] text-white font-black text-[10px] uppercase tracking-widest px-5 py-3 rounded-xl shadow-xl flex items-center gap-1.5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out"
                      >
                        Apply Now
                        <ArrowUpRight size={13} className="stroke-[2.5]" />
                      </motion.button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-base font-black text-slate-800 tracking-tight group-hover:text-[#D32F2F] transition-colors duration-200">
                      {sector.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed min-h-[66px]">
                      {sector.desc}
                    </p>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="mt-5 pt-4 border-t border-slate-200/60 flex items-center justify-between text-[9px] font-black uppercase tracking-wider text-slate-400 group-hover:text-slate-700 transition-colors">
                  <span>Infrastructure Ready</span>
                  <span
                    className={`border ${sector.bgBadge} px-2 py-0.5 rounded font-mono font-bold`}
                  >
                    JITM Certified
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* LOWER COLLABORATION DECK */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6">
            <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-[#D32F2F]">
                Why Partner with JITM Skills?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 font-medium">
                {[
                  "End-to-end establishment support",
                  "Operational guidance and training",
                  "Assistance in setup and management",
                  "Long-term collaboration opportunities",
                ].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2
                      size={13}
                      className="text-emerald-600 shrink-0"
                    />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200/60 rounded-3xl p-6 space-y-4">
              <h4 className="text-xs font-black uppercase tracking-widest text-[#D32F2F]">
                Who Can Collaborate?
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-600 font-medium">
                {[
                  "Space Owners (2,000+ Sq.Ft.)",
                  "Educational Institutions",
                  "NGOs & Corporate Trusts",
                  "Local Micro-Entrepreneurs",
                ].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <Building size={13} className="text-blue-600 shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DYNAMIC MODAL POPUP SYSTEM ================= */}
      <AnimatePresence>
        {isModalOpen && (
          // 📍 INDEXING REINFORCED: z-50 ko badalkar z-[9999] kiya taaki stacking index top-tier par rahe
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop Blur Ring */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !isSubmitting && setIsModalOpen(false)}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs target-backdrop"
            />

            {/* Modal Body Container */}
            {/* 🚀 LAYOUT SHIFT: max-w-md se max-w-3xl kiya taaki dynamic width horizontal form fields ko stretch kar sake */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              className="bg-white rounded-[32px] border border-slate-200 shadow-2xl w-full max-w-3xl p-6 sm:p-10 relative z-50 overflow-y-auto max-h-[90vh] custom-scrollbar"
            >
              {/* Close Button Layer */}
              <button
                onClick={() => !isSubmitting && setIsModalOpen(false)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 p-1.5 rounded-full hover:bg-slate-50 transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Form Branding Headings */}
              <div className="space-y-1 mb-6 pr-8 border-b border-slate-100 pb-4">
                <span className="text-[9px] font-black text-[#D32F2F] tracking-widest uppercase block">
                  Franchise Application Desk
                </span>
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight leading-tight">
                  Apply for:{" "}
                  <span className="text-[#D32F2F] italic inline-block ml-1">
                    {selectedSector}
                  </span>
                </h3>
                <p className="text-[11px] text-slate-400 font-medium">
                  Query pipeline targets:{" "}
                  <span className="font-mono text-slate-600 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-100">
                    info@jitmskills.com
                  </span>
                </p>
              </div>

              {/* Core Form Element Structure */}
              {/* 🛠️ HORIZONTAL LAYOUT: Main inputs layout wrapper ko grid-cols-1 md:grid-cols-2 kiya */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                  {/* Left Column Fields */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[9px] font-black text-slate-500 uppercase tracking-wider mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="Enter your name"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 font-medium focus:outline-hidden focus:border-[#D32F2F] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[9px] font-black text-slate-500 uppercase tracking-wider mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        pattern="[0-9]{10}"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="10-digit mobile number"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 font-medium focus:outline-hidden focus:border-[#D32F2F] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[9px] font-black text-slate-500 uppercase tracking-wider mb-1.5">
                        Available Land Area (Sq. Ft.)
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.landArea}
                        onChange={(e) =>
                          setFormData({ ...formData, landArea: e.target.value })
                        }
                        placeholder="e.g., 2,500 Sq. Ft."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 font-medium focus:outline-hidden focus:border-[#D32F2F] focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  {/* Right Column Fields */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[9px] font-black text-slate-500 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="name@example.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 font-medium focus:outline-hidden focus:border-[#D32F2F] focus:bg-white transition-colors"
                      />
                    </div>

                    {/* Area Pincode moved up inside right grid matrix for aesthetic consistency */}
                    <div>
                      <label className="block text-[9px] font-black text-slate-500 uppercase tracking-wider mb-1.5">
                        Area Pincode
                      </label>
                      <input
                        type="text"
                        required
                        pattern="[0-9]{6}"
                        maxLength="6"
                        value={formData.pincode}
                        onChange={(e) =>
                          setFormData({ ...formData, pincode: e.target.value })
                        }
                        placeholder="e.g., 110001"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 font-medium focus:outline-hidden focus:border-[#D32F2F] focus:bg-white transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[9px] font-black text-slate-500 uppercase tracking-wider mb-1.5">
                        Proposed Center Address
                      </label>
                      <textarea
                        rows="1" // Decreased to single row baseline to maintain equal sizing natively with layout grids
                        required
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({ ...formData, address: e.target.value })
                        }
                        placeholder="Complete setup workspace address details"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs text-slate-800 font-medium focus:outline-hidden focus:border-[#D32F2F] focus:bg-white transition-colors resize-none h-[42px] sm:h-[45px]"
                      />
                    </div>
                  </div>
                </div>

                {/* Status Notifications Layer */}
                <div className="pt-2">
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-[10px] text-emerald-700 font-bold uppercase tracking-wide text-center"
                    >
                      ✓ Query Sent Successfully! Lead routed to
                      info@jitmskills.com. Window closes in 7s.
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-[10px] text-rose-700 font-bold uppercase tracking-wide text-center"
                    >
                      ✕ Submission Failed. Please try again or call the desk.
                    </motion.div>
                  )}
                </div>

                {/* Action Submit Button (Stays full-width at the bottom) */}
                <button
                  type="submit"
                  disabled={isSubmitting || submitStatus === "success"}
                  className="w-full bg-[#D32F2F] hover:bg-[#b72424] disabled:bg-slate-200 disabled:text-slate-400 text-white font-black text-[11px] uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md shadow-red-500/10 cursor-pointer mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={14} className="animate-spin" /> Processing
                      Request...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ================= LAND & SPACE COLLABORATION SECTION (PARALLAX FIXED DARK GREEN) ================= */}
      <section className="w-full relative py-28 px-6 overflow-hidden border-t border-white/[0.03] bg-[#030d06]">
        {/* FIXED PARALLAX BACKGROUND: Image stable rahegi aur content iske upar se scroll hoga */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-fixed opacity-[0.15] mix-blend-screen pointer-events-none"
          style={{
            backgroundImage: `url(${landProperty})`,
          }}
        />

        {/* CINEMATIC GRADIENT MASK LAYER */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030d06] via-[#030d06]/95 to-[#030d06]/40 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,transparent_30%,#030d06_85%)] z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* LEFT COLUMN: CONTEXT MATRIX (Scrolls smoothly over the fixed background) */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-md border border-emerald-500/20 inline-block">
                  Space Asset Monetization
                </span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase italic text-white leading-tight">
                  Have Premium Land or <br />
                  <span className="text-[#D32F2F]">Commercial Space?</span>
                </h2>
                <p className="text-sm text-slate-300 font-medium leading-relaxed max-w-xl">
                  JITM Skills is actively looking to partner with visionary
                  space owners, infrastructure developers, and institutional
                  landlords. Turn your vacant property into a high-yielding,
                  socially impactful community asset.
                </p>
              </div>

              {/* Technical Requirements / Perks List (Glassmorphic Emerald-Dark Cards) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                {[
                  {
                    title: "Prime Commercial Space",
                    desc: "Easily accessible ground/first-floor options preferred for public walking access.",
                  },
                  {
                    title: "2,000+ Sq. Ft. Target Area",
                    desc: "Minimum required space threshold to deploy standardized franchise blueprints.",
                  },
                  {
                    title: "Long-Term Lease Security",
                    desc: "Highly stable and consistent institutional rental returns with zero operational hassle.",
                  },
                  {
                    title: "Socio-Economic Impact",
                    desc: "Direct integration with premium setups like Diagnostic Labs and Child Care Centers.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white/[0.02] backdrop-blur-md border border-emerald-500/[0.08] p-4 rounded-2xl hover:border-emerald-500/30 transition-all group duration-300 shadow-lg"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <CheckCircle2
                        size={14}
                        className="text-emerald-400 shrink-0"
                      />
                      <h4 className="text-[11px] font-black uppercase tracking-wider text-slate-100 group-hover:text-emerald-400 transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-400 font-medium leading-normal">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Contextual Notice Box */}
              <div className="bg-[#D32F2F]/10 border border-[#D32F2F]/20 rounded-2xl p-4 max-w-xl">
                <p className="text-[11px] text-slate-300 font-medium leading-relaxed">
                  <b className="text-[#D32F2F] font-black uppercase tracking-wide">
                    Flyer Note:
                  </b>{" "}
                  JITM Skills will fully support and assist in establishing and
                  operating the centers successfully. We bridge the gap between
                  space assets and operational infrastructure.
                </p>
              </div>

              {/* CTA Actions Group */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleOpenModal("Property & Land Allocation")}
                  className="group bg-[#D32F2F] hover:bg-[#b72424] text-white font-black text-[11px] uppercase tracking-widest px-8 py-4 rounded-xl shadow-lg shadow-red-500/10 flex items-center gap-2 transition-all cursor-pointer"
                >
                  Submit Your Property Detail
                  <ArrowUpRight
                    size={14}
                    className="group-hover:rotate-45 transition-transform"
                  />
                </button>

                <a
                  href="tel:9971545133"
                  className="bg-white/[0.02] hover:bg-white/[0.05] text-white border border-white/[0.08] font-black text-[11px] uppercase tracking-widest px-6 py-4 rounded-xl transition-colors block text-center"
                >
                  Call Desk: +91 9971545133
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: HIGH-RES LAND INFRASTRUCTURE IMAGE ACCENT */}
            <div className="lg:col-span-5 relative group">
              {/* Decorative Greenish-Red Outer Glow Ring */}
              <div className="absolute inset-4 bg-gradient-to-tr from-emerald-500/20 to-[#D32F2F]/20 blur-3xl opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none rounded-[36px]" />

              {/* Core Image Container Frame */}
              <div className="relative w-full aspect-[4/5] rounded-[36px] overflow-hidden border border-white/[0.08] bg-[#030d06] shadow-2xl">
                <img
                  src={landProperty} // Open development field corporate shot
                  alt="Commercial Land Plot Real Estate Asset"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Inner Image Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030d06] via-transparent to-transparent opacity-90" />

                {/* Floating UI Spec Box Inside Image Area (Bottom Align) */}
                <div className="absolute bottom-6 left-6 right-6 bg-slate-950/80 backdrop-blur-xl p-5 rounded-2xl border border-white/[0.08] shadow-2xl space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[8px] font-black text-[#D32F2F] uppercase tracking-widest block mb-0.5">
                        Verified Parameters
                      </span>
                      <h3 className="text-sm font-black text-white uppercase tracking-tight">
                        Infrastructure Ready Plots
                      </h3>
                    </div>
                    <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[8px] font-black px-2 py-0.5 rounded uppercase tracking-wider font-mono">
                      Immediate Evaluation
                    </span>
                  </div>

                  <p className="text-[10px] text-slate-400 font-medium leading-relaxed">
                    Our evaluation team conducts technical feasibility checks,
                    demographic studies, and structural approvals within 7
                    business days of request submission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FRANCHISE ONBOARDING & LAUNCH PIPELINE (LIGHT THEME) ================= */}
      <section className="w-full bg-white py-24 px-6 relative overflow-hidden border-t border-slate-100">
        {/* Subtle Graphic Element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-slate-100 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          {/* HEADER SECTION */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#D32F2F] bg-[#D32F2F]/5 px-3 py-1 rounded-md border border-[#D32F2F]/10 inline-block">
              Execution Blueprint
            </span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight uppercase italic text-slate-900">
              4-Step Setup &{" "}
              <span className="text-[#D32F2F]">Launch Journey</span>
            </h2>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">
              Our streamlined onboarding process ensures a smooth and
              hassle-free journey, taking your center from structural compliance
              to a successful grand launch without technical delays.
            </p>
          </div>

          {/* PIPELINE INTERACTIVE STEP CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Background Connecting Line for Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-[1px] bg-slate-200 -translate-y-12 z-0" />

            {[
              {
                step: "Step 01",
                title: "Site Verification & Legal Agreement",
                desc: "A technical audit of your 2,000+ sq. ft. commercial space is conducted, followed by the execution of the formal franchise agreement.",
                badge: "Week 1",
                badgeColor: "bg-blue-50 text-blue-700 border-blue-100",
              },
              {
                step: "Step 02",
                title: "Infrastructure & Branding Setup",
                desc: "Partitions, diagnostic setups, and standardized branding are implemented in accordance with JITM-certified architectural design guidelines.",
                badge: "Week 2 - 3",
                badgeColor: "bg-amber-50 text-amber-700 border-amber-100",
              },
              {
                step: "Step 03",
                title: "Staff Recruitment & Portal Training",
                desc: "Local operators and trainers are recruited and provided with hands-on training on JITM standards, software tools, operational procedures, and compliance modules.",
                badge: "Week 4",
                badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
              },
              {
                step: "Step 04",
                title: "Audit & Grand Operational Launch",
                desc: "After the successful completion of the final audit and quality assurance checks, your center is officially launched with local promotional and marketing campaigns.",
                badge: "Go-Live",
                badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50/60 border border-slate-200/80 rounded-[28px] p-6 flex flex-col justify-between relative z-10 hover:bg-white hover:border-[#D32F2F]/30 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group"
              >
                <div className="space-y-6">
                  {/* Top Bar inside Card */}
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-2xl font-black text-slate-300 group-hover:text-[#D32F2F] transition-colors">
                      {item.step}
                    </span>
                    <span
                      className={`text-[9px] font-black uppercase tracking-wider border px-2.5 py-1 rounded-lg ${item.badgeColor}`}
                    >
                      {item.badge}
                    </span>
                  </div>

                  {/* Content Core */}
                  <div className="space-y-2">
                    <h3 className="text-sm font-black text-slate-800 tracking-tight uppercase group-hover:text-slate-900 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Card Micro-Footer Trigger */}
                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                  <span className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">
                    Standard Timeline
                  </span>
                  <div className="w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center group-hover:bg-[#D32F2F] transition-colors">
                    <ChevronRight
                      size={10}
                      className="text-slate-500 group-hover:text-white transition-colors"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* LOWER SUPPORT MATRIX BANNER */}
          <div className="bg-slate-50 border border-slate-200 p-8 rounded-[32px] grid grid-cols-1 lg:grid-cols-3 gap-8 items-center shadow-xs">
            <div className="space-y-1">
              <h4 className="text-xs font-black uppercase tracking-widest text-[#D32F2F]">
                Continuous Support Matrix
              </h4>
              <h3 className="text-lg font-black text-slate-900 tracking-tight uppercase">
                What Happens Post-Launch?
              </h3>
              <p className="text-[11px] text-slate-400 font-medium">
                Our dedicated support team continuously monitors and assists
                your center to ensure smooth operations, sustainable growth, and
                long-term success.
              </p>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-3 items-start">
                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg shrink-0 mt-0.5 border border-emerald-100">
                  <CheckCircle2 size={14} />
                </div>
                <div>
                  <h5 className="text-[11px] font-black text-slate-800 uppercase tracking-wider">
                    National Marketing & Lead Generation
                  </h5>
                  <p className="text-[11px] text-slate-500 font-medium leading-normal">
                    Through JITM's corporate portal and nationwide marketing
                    campaigns, qualified digital leads are generated and
                    directed to your local center.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg shrink-0 mt-0.5 border border-blue-100">
                  <CheckCircle2 size={14} />
                </div>
                <div>
                  <h5 className="text-[11px] font-black text-slate-800 uppercase tracking-wider">
                    Regular Compliance Audits
                  </h5>
                  <p className="text-[11px] text-slate-500 font-medium leading-normal">
                    Ongoing support is provided for regulatory compliance,
                    infrastructure quality assessments, and digital performance
                    tracking to maintain operational excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BecomeFranchisePartner;
