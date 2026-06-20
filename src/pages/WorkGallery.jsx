import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Home,
  ChevronRight,
  Images,
  LayoutGrid,
  ShieldCheck,
  Eye,
  X,
  CheckCircle2,
  SlidersHorizontal,
  Tv,
  Video,
  Users,
  Award,
  MapPin,
  Building2,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";
import { containerVariants, itemVariants } from "../utils/animations";
import { galleryMockData } from "../constants/gallerydata.js";
// ==================== VITE LOCAL IMAGE ASSET IMPORTS ====================

// ─── HIGH PERFORMANCE VANILLA COUNT UP COMPONENT ───
export const CountUpNumber = ({ value, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(value.toString().replace(/,/g, ""), 10);
    if (start === end) return;

    let totalMiliseconds = duration * 1000;
    let separatorStep = Math.floor(totalMiliseconds / end);
    // Setting threshold limit for high values
    let stepTime = Math.max(separatorStep, 16);
    let increment = Math.ceil(end / (totalMiliseconds / stepTime));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count.toLocaleString("en-IN")}</span>;
};

const WorkGallery = ({ lang = "en" }) => {
  const [activeCategory, setActiveCategory] = useState("Our Complete Journey");
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Strict Matrix Limit: Exactly 3 Rows * 3 Columns = 9 Items Per Page
  const itemsPerPage = 9;

  const categories = [
    "Our Complete Journey",
    "Skill Classrooms & Labs",
    "Hands-on Practical Training",
    "Placement Drives & Success",
    "Certification Ceremonies",
    "Community Outreach (Rural)",
    "Media & Official Events",
  ];

  // ─── RUNTIME FILTER AND PAGINATION LOGIC ───
  const filteredItems =
    activeCategory === "Our Complete Journey"
      ? galleryMockData
      : galleryMockData.filter((item) => item.category === activeCategory);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage) || 1;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const handleCategorySwitch = (category) => {
    setActiveCategory(category);
    setCurrentPage(1); // Safely reset matrix indexing pages
    setIsMobileFilterOpen(false); // Mobile pe selection ke baad menu close ho jaye
  };

  const keyHighlights = [
    "Lakhs of candidates trained across multiple skill sectors.",
    "Thousands successfully placed in private and government-linked jobs.",
    "Real video feedback shared directly by our learners on YouTube.",
    "Strong partnerships with employers and industry experts.",
    "A growing community built on trust, skills, and results.",
  ];

  return (
    <>
      <section className="w-full bg-[#0B0F19] pt-28 lg:pt-52 pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/5 relative overflow-hidden">
        {/* Pure Gallery Geometric Grid Lines Backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

        {/* Cinematic Backdrop Radial Spotlights */}
        <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] bg-[#D32F2F]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-20 right-20 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          {/* ─── STRICT BREADCRUMB COMPONENT (TOP ALIGNED GLASSMORPHISM) ─── */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex"
          >
            <nav className="inline-flex items-center gap-2 bg-slate-950/40 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-xl shadow-xl">
              <a
                href="/"
                className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-300 transition-colors group"
              >
                <Home
                  size={13}
                  className="text-slate-500 group-hover:text-slate-300 transition-colors"
                />
                <span>Home</span>
              </a>

              <ChevronRight size={11} className="text-slate-600 shrink-0" />

              <span className="text-xs font-bold text-slate-400 hover:text-slate-200 cursor-pointer transition-colors select-none">
                Ecosystem & Media
              </span>

              <ChevronRight size={11} className="text-slate-600 shrink-0" />

              <span className="text-xs font-black text-white tracking-wide select-none">
                Work Gallery
              </span>
            </nav>
          </motion.div>

          {/* ─── PURE IMMERSIVE GALLERY HEADER TEXT (NO NEWS PATTERNS) ─── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="lg:col-span-8 space-y-3"
            >
              <div className="flex items-center gap-2 text-[#D32F2F]">
                <Images size={16} className="animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Visual Frame Vault
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
                On-Ground{" "}
                <span className="text-[#D32F2F] bg-gradient-to-r from-[#D32F2F] to-red-500 bg-clip-text text-transparent">
                  Impact Gallery
                </span>
              </h1>

              <p className="text-xs md:text-sm font-medium text-slate-400 max-w-2xl leading-relaxed">
                JITM Skills centers ke functional workshops, operational
                machines, smart learning labs, aur ground-level activities ka
                snapshot view. Ek comprehensive space jo hmare resources ko
                purely visually define karti hai.
              </p>
            </motion.div>

            {/* Right Side Status Element to set Gallery Tone */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-4 flex lg:justify-end"
            >
              <div className="flex items-center gap-2 bg-slate-900/50 border border-slate-800 px-4 py-2.5 rounded-xl text-slate-400 text-xs font-bold">
                <LayoutGrid size={14} className="text-[#D32F2F]" />
                <span>Media Mode: Images Only</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8 font-sans antialiased text-slate-800 relative">
        {/* Soft Background Mesh Matrix Subtle Lines */}
        <div className="absolute inset-0 " />

        {/* ─── FLOATING TOGGLE BUTTON FOR MOBILE DEVICES ─── */}
        <div className="lg:hidden w-full mb-6 flex justify-start sticky top-[80px] z-30">
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="flex items-center gap-2 bg-slate-900 text-white text-xs font-black tracking-wide px-5 py-3 rounded-xl shadow-lg border border-slate-800 hover:bg-slate-800 transition-all cursor-pointer active:scale-95"
          >
            <SlidersHorizontal size={14} className="text-[#D32F2F]" />
            <span>Filters</span>
          </button>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* ───────────────────────────────────────────────────────────────── */}
            {/* LEFT COMPONENT COLUMN: DESKTOP ROADMAP TIMELINE FILTERS           */}
            {/* ───────────────────────────────────────────────────────────────── */}
            <div className="hidden lg:block lg:col-span-4 bg-slate-50/70 border border-slate-200/60 p-6 rounded-3xl backdrop-blur-xl sticky top-28 shadow-sm">
              <div className="space-y-1 mb-6 px-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#D32F2F]">
                  Navigation Path
                </span>
                <h3 className="text-lg font-black text-slate-900 tracking-tight">
                  Journey Roadmap
                </h3>
              </div>

              {/* Vertical Structural Timeline Container */}
              <div className="relative pl-6 space-y-3">
                {/* Core Vertical Connective Roadmap Wire Line */}
                <div className="absolute left-[33px] top-4 bottom-4 w-[2px] bg-slate-200 pointer-events-none" />

                {categories.map((category) => {
                  const isActive = activeCategory === category;
                  return (
                    <button
                      key={category}
                      onClick={() => handleCategorySwitch(category)}
                      className={`w-full text-left pl-10 pr-4 py-3.5 rounded-2xl text-xs font-bold transition-all duration-300 relative flex items-center justify-between group cursor-pointer ${
                        isActive
                          ? "bg-white text-slate-900 shadow-md shadow-slate-200/60 border border-slate-200"
                          : "text-slate-500 hover:text-slate-900 hover:bg-white/40"
                      }`}
                    >
                      {/* Active Left Indicator Roadmap Connector Node Ring Nodule */}
                      <div className="absolute left-[-1px] top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                        <div
                          className={`h-4 w-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                            isActive
                              ? "bg-[#D32F2F] border-[#D32F2F] scale-110 shadow-sm shadow-red-200"
                              : "bg-white border-slate-300 group-hover:border-slate-400"
                          }`}
                        >
                          {isActive && (
                            <div className="h-1.5 w-1.5 rounded-full bg-white" />
                          )}
                        </div>
                      </div>

                      <span className="tracking-wide">{category}</span>

                      {isActive && (
                        <CheckCircle2
                          size={13}
                          className="text-[#D32F2F] shrink-0 ml-2"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ───────────────────────────────────────────────────────────────── */}
            {/* RIGHT COMPONENT COLUMN: HEADER INFRA BRIEF + 3x3 DYNAMIC MATRIX   */}
            {/* ───────────────────────────────────────────────────────────────── */}
            <div className="lg:col-span-8 space-y-8">
              {/* BRAND BRIEF TYPOGRAPHY COMPONENT */}
              <div className="border-b border-slate-200/60 pb-6 space-y-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">
                  Live Center Operations Repository
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                  {activeCategory}{" "}
                  <span className="text-[#D32F2F]">Records</span>
                </h2>
                <p className="text-xs font-medium text-slate-500 leading-relaxed max-w-3xl">
                  Humare centers ki functional activities aur absolute
                  operational footprint ka verified visual registry dashboard.
                  Neeche ka dynamic framework is process catalog ko exact
                  3-column rows array formats mein map karta hai.
                </p>
              </div>

              {/* DYNAMIC PHOTO WORKSPACE MATRIX ARCHITECTURE */}
              <div className="min-h-[500px]">
                {/* Exact md:grid-cols-3 Rule (Strict 3 columns layout per desktop display line) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full">
                  {currentItems.length > 0 ? (
                    currentItems.map((item) => (
                      <div
                        key={item.id}
                        className="bg-white border border-slate-200 rounded-2xl p-2.5 flex flex-col justify-between group hover:border-slate-300 hover:shadow-xl transition-all duration-300"
                      >
                        <div>
                          {/* Image Capsule Shell Frame */}
                          <div
                            onClick={() => setLightboxImage(item.image)}
                            className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200/60 cursor-zoom-in group/img"
                          >
                            <img
                              src={item.image}
                              alt={item.category}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-103"
                              loading="lazy"
                            />

                            {/* Hover Interactive Veil Shield Overlay */}
                            <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px] duration-300">
                              <div className="bg-white text-slate-900 p-2.5 rounded-full shadow-2xl transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
                                <Eye size={13} className="text-[#D32F2F]" />
                              </div>
                            </div>
                          </div>

                          {/* Minimalist Micro Footer Token Badge */}
                          <div className="flex items-center justify-between border-t border-slate-100 pt-2.5 mt-2.5 px-0.5">
                            <div className="flex items-center gap-1">
                              <ShieldCheck
                                size={12}
                                className="text-emerald-600 shrink-0"
                              />
                              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
                                {lang === "en" ? "Verified" : "सत्यापित"}
                              </span>
                            </div>
                            <span className="text-[10px] font-bold text-slate-300 select-none">
                              ✓
                            </span>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-full h-64 border border-dashed border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 text-xs font-bold uppercase tracking-widest bg-slate-50">
                      No Records Available In This Grid Node
                    </div>
                  )}
                </div>
              </div>

              {/* PAGINATION INTERACTIVE CONTROLLER STRIP INTERFACE */}
              {filteredItems.length > itemsPerPage && (
                <div className="flex items-center justify-center gap-2 border-t border-slate-200 pt-6 mt-4">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className={`p-2 rounded-xl border border-slate-200 bg-white text-slate-400 hover:text-slate-800 transition-all cursor-pointer shadow-xs ${currentPage === 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-slate-50"}`}
                  >
                    <ChevronRight size={14} className="rotate-180" />
                  </button>

                  <div className="bg-slate-900 text-white px-3.5 py-1.5 rounded-xl text-[10px] font-black min-w-[32px] text-center shadow-sm">
                    {currentPage}
                  </div>
                  <div className="bg-white border border-slate-200 text-slate-400 px-3.5 py-1.5 rounded-xl text-[10px] font-bold min-w-[55px] text-center">
                    of {totalPages}
                  </div>

                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-xl border border-slate-200 bg-white text-slate-400 hover:text-slate-800 transition-all cursor-pointer shadow-xs ${currentPage === totalPages ? "opacity-30 cursor-not-allowed" : "hover:bg-slate-50"}`}
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isMobileFilterOpen && (
          <>
            {/* Backdrop Blur Mesh Overlay Veil */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Left Side Slide-in Panel Content Grid Sheet */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 bottom-0 left-0 w-[290px] max-w-[85vw] bg-white z-50 p-6 shadow-2xl border-r border-slate-200 flex flex-col justify-between lg:hidden font-sans"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-black uppercase tracking-widest text-[#D32F2F]">
                      Navigation
                    </span>
                    <h4 className="text-sm font-black text-slate-950">
                      Journey Roadmap
                    </h4>
                  </div>
                  <button
                    onClick={() => setIsMobileFilterOpen(false)}
                    className="p-1.5 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all cursor-pointer"
                  >
                    <X size={14} />
                  </button>
                </div>

                {/* Mobile Roadmap Options Stack */}
                <div className="relative pl-5 space-y-2.5">
                  <div className="absolute left-[24px] top-3 bottom-3 w-[2px] bg-slate-100 pointer-events-none" />

                  {categories.map((category) => {
                    const isActive = activeCategory === category;
                    return (
                      <button
                        key={category}
                        onClick={() => handleCategorySwitch(category)}
                        className={`w-full text-left pl-8 pr-3 py-3 rounded-xl text-[11px] font-bold transition-all duration-200 relative flex items-center justify-between cursor-pointer ${
                          isActive
                            ? "bg-slate-50 text-slate-950 border border-slate-200"
                            : "text-slate-500"
                        }`}
                      >
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
                          <div
                            className={`h-3 w-3 rounded-full border-2 transition-all ${
                              isActive
                                ? "bg-[#D32F2F] border-[#D32F2F] scale-110"
                                : "bg-white border-slate-300"
                            }`}
                          />
                        </div>
                        <span>{category}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="text-[10px] text-slate-400 font-bold tracking-wide border-t border-slate-100 pt-4 text-center">
                Select category to reload grid items
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-xs flex items-center justify-center p-4 z-50 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.97, y: 8 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.97, y: 8 }}
              transition={{ type: "spring", damping: 28 }}
              className="relative max-w-5xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl bg-black flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage}
                alt="Enlarged Visual Spec Component Document"
                className="w-full h-full object-contain max-h-[85vh]"
              />
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 bg-slate-900/80 hover:bg-[#D32F2F] text-white p-2 rounded-lg border border-white/10 transition-colors cursor-pointer shadow-xl"
              >
                <X size={14} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="w-full bg-[#0B0F19] py-24 px-4 sm:px-6 lg:px-8 border-t border-b border-white/5 font-sans antialiased text-white relative overflow-hidden">
        {/* Immersive Geometric Backdrop Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* Cinematic Deep Red Ambient Spotlights */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#D32F2F]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-20 left-10 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-14">
          {/* ───────────────────────────────────────────────────────────────── */}
          {/* HEADER BLOCK: PREMIUM TYPOGRAPHY DESCRIPTION                      */}
          {/* ───────────────────────────────────────────────────────────────── */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="flex items-center justify-center gap-2 text-[#D32F2F]">
              <BarChart3 size={14} className="animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Operational Statistics Registry
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-none text-white">
              Numbers That{" "}
              <span className="text-[#D32F2F] bg-gradient-to-r from-[#D32F2F] to-red-500 bg-clip-text text-transparent">
                Define Us
              </span>
            </h2>

            <p className="text-xs md:text-sm font-medium text-slate-400 leading-relaxed">
              Hmare multi-state operational footprint ka complete statistical
              review layout. Verified industrial partnerships, live batch
              records aur infrastructure scaling metrics ka analytical
              dashboard.
            </p>
          </div>

          {/* ───────────────────────────────────────────────────────────────── */}
          {/* BENTO GRID FRAMEWORK MATRIX USING DYNAMIC COUNTING ANIMATIONS    */}
          {/* ───────────────────────────────────────────────────────────────── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* CARD 1: TOTAL TRAINED ALUMNI (Large Main Card Column Span 2) */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-2 bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between group hover:border-[#D32F2F]/30 transition-all duration-300 shadow-xl"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#D32F2F]/5 rounded-bl-full blur-xl pointer-events-none group-hover:bg-[#D32F2F]/10 transition-colors" />

              <div className="flex items-center justify-between">
                <div className="bg-red-950/50 p-3 rounded-2xl border border-red-900/30 text-[#D32F2F]">
                  <Users size={22} />
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                  Live Audited
                </span>
              </div>

              <div className="space-y-2 mt-12">
                <div className="text-4xl md:text-6xl font-black text-white tracking-tight">
                  <CountUpNumber value={150000} />
                  <span className="text-[#D32F2F]">+</span>
                </div>
                <h3 className="text-base font-black text-slate-200 tracking-wide">
                  Lakhs of Candidates Trained
                </h3>
                <p className="text-xs font-medium text-slate-400 max-w-xl leading-relaxed">
                  Across multiple domain tracks, corporate batches, and core
                  operational skill sets aimed at bridging the critical
                  industrial employment gaps effectively.
                </p>
              </div>
            </motion.div>

            {/* CARD 2: PLACEMENT SUCCESS RATE */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-900/80 to-slate-950/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl flex flex-col justify-between group hover:border-[#D32F2F]/30 transition-all duration-300 shadow-xl relative"
            >
              <div className="flex items-center justify-between">
                <div className="bg-blue-950/50 p-3 rounded-2xl border border-blue-900/30 text-blue-400">
                  <Award size={22} />
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-slate-500 group-hover:text-white transition-colors"
                />
              </div>

              <div className="space-y-1.5 mt-10">
                <div className="text-5xl font-black text-white tracking-tight">
                  <CountUpNumber value={85} />
                  <span className="text-[#D32F2F]">%</span>
                </div>
                <h3 className="text-sm font-black text-slate-200 tracking-wide">
                  Tracked Placement Success
                </h3>
                <p className="text-[11px] font-medium text-slate-400 leading-relaxed">
                  Thousands successfully aligned and established within leading
                  private systems and associated corporate sectors.
                </p>
              </div>
            </motion.div>

            {/* CARD 3: NATIONWIDE CENTERS FOOTPRINT */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-slate-900/80 to-slate-950/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl flex flex-col justify-between group hover:border-[#D32F2F]/30 transition-all duration-300 shadow-xl"
            >
              <div className="flex items-center justify-between">
                <div className="bg-amber-950/50 p-3 rounded-2xl border border-amber-900/30 text-amber-500">
                  <MapPin size={22} />
                </div>
              </div>

              <div className="space-y-1.5 mt-10">
                <div className="text-5xl font-black text-white tracking-tight">
                  <CountUpNumber value={15} />
                  <span className="text-[#D32F2F]">+</span>
                </div>
                <h3 className="text-sm font-black text-slate-200 tracking-wide">
                  Operational Training Centers
                </h3>
                <p className="text-[11px] font-medium text-slate-400 leading-relaxed">
                  Fully functional hubs equipped with modern industrial tools
                  and learning frameworks across active regional territories.
                </p>
              </div>
            </motion.div>

            {/* CARD 4: INDUSTRY ACCREDITATION (Wide Custom Card Span 2) */}
            <motion.div
              variants={itemVariants}
              className="md:col-span-2 bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between group hover:border-[#D32F2F]/30 transition-all duration-300 shadow-xl"
            >
              <div className="absolute -bottom-10 right-0 w-64 h-64 bg-blue-600/5 rounded-tl-full blur-xl pointer-events-none" />

              <div className="flex items-center justify-between">
                <div className="bg-emerald-950/50 p-3 rounded-2xl border border-emerald-900/30 text-emerald-400">
                  <Building2 size={22} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 items-end">
                <div className="space-y-2">
                  <div className="text-4xl font-black text-white tracking-tight">
                    <CountUpNumber value={25} />
                    <span className="text-[#D32F2F]">+</span>
                  </div>
                  <h3 className="text-sm font-black text-slate-200 tracking-wide">
                    Strategic Trade Sectors
                  </h3>
                  <p className="text-[11px] font-medium text-slate-400 leading-relaxed">
                    Diversified industrial streams covering high-demand
                    technical skill sets and vocational trades.
                  </p>
                </div>

                {/* Secondary internal mini structural block list */}
                <div className="border-t sm:border-t-0 sm:border-l border-white/5 pt-4 sm:pt-0 sm:pl-6 space-y-3.5">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck size={14} className="text-emerald-500" />
                    <span className="text-xs font-bold text-slate-300">
                      100% Practical Machinery Labs
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck size={14} className="text-emerald-500" />
                    <span className="text-xs font-bold text-slate-300">
                      Corporate Linked Hiring Drives
                    </span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck size={14} className="text-emerald-500" />
                    <span className="text-xs font-bold text-slate-300">
                      Verified Quality Standards
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="w-full bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 border-t border-b border-slate-200/60 font-sans antialiased text-slate-800 relative overflow-hidden">
        {/* Background Structural Mesh Backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-80" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#D32F2F]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* ───────────────────────────────────────────────────────────────── */}
            {/* LEFT COLUMN: BRAND TEXT CONTENT & COMPREHENSIVE REVIEWS LIST      */}
            {/* ───────────────────────────────────────────────────────────────── */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#D32F2F]">
                  <Video size={14} className="animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Student Verification Chronicles
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  Our Journey & <br />
                  <span className="text-[#D32F2F] bg-gradient-to-r from-[#D32F2F] to-red-600 bg-clip-text text-transparent">
                    Real Feedback
                  </span>
                </h2>

                <p className="text-xs md:text-sm font-medium text-slate-500 leading-relaxed">
                  Over the years, our skill development journey has transformed
                  thousands of lives. Learners from rural and urban backgrounds
                  have gained real skills, real confidence, and real employment
                  opportunities.
                </p>
              </div>

              {/* Metric Checkboxes List Mapping */}
              <div className="space-y-3.5">
                {keyHighlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-200/60 shadow-xs hover:border-slate-300 transition-colors duration-200"
                  >
                    <div className="bg-red-50 p-1.5 rounded-lg shrink-0 mt-0.5">
                      <CheckCircle2 size={13} className="text-[#D32F2F]" />
                    </div>
                    <span className="text-xs md:text-[13px] font-bold text-slate-700 tracking-wide leading-snug">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mini Quantitative Dashboard */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/60">
                <div className="space-y-0.5">
                  <div className="text-lg font-black text-slate-900">4.8★</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Rating
                  </div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-lg font-black text-slate-900">100k+</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Alumni
                  </div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-lg font-black text-slate-900">500+</div>
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Drives
                  </div>
                </div>
              </div>
            </div>

            {/* ───────────────────────────────────────────────────────────────── */}
            {/* RIGHT COLUMN: YOUR EXACT SMART TV MOCKUP STRIP WITH PERFORMANCE  */}
            {/* ───────────────────────────────────────────────────────────────── */}
            <div className="lg:col-span-7 flex flex-col items-center justify-center">
              <div className="w-full max-w-2xl relative group">
                {/* Diffused Glow Accent Layer Behind TV Chassis */}
                <div className="absolute -inset-1.5 bg-slate-900/10 rounded-3xl blur-md group-hover:bg-[#D32F2F]/5 transition-colors duration-500" />

                {/* EXACT TV STRUCTURE CODED BY YOU */}
                <div className="relative bg-slate-950 p-2.5 rounded-3xl border-4 border-slate-800 shadow-2xl">
                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-black shadow-inner">
                    {/* Direct Embed: Page load hote hi automatically muted loop mein playlist chalegi */}
                    <iframe
                      className="w-full h-full object-cover"
                      src="https://www.youtube.com/embed/videoseries?list=UUxMbQA7yrFum0AmLLdx4yWg&autoplay=1&mute=1&loop=1&playlist=videoseries"
                      title="YouTube Live Stream Feedback Feed"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  {/* Underneath Central Stand Connector Cap Node */}
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-12 h-2 bg-slate-700 rounded-b-md" />
                </div>
              </div>

              {/* Outer Link Interface Node Badge */}
              <a
                href="https://www.youtube.com/playlist?list=UUxMbQA7yrFum0AmLLdx4yWg"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center gap-2 bg-white hover:bg-slate-900 hover:text-white border border-slate-200 px-4 py-2 rounded-xl text-[11px] font-black tracking-widest uppercase text-slate-600 shadow-xs transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Tv size={12} className="text-[#D32F2F]" />
                <span>Visit Official Channel Portal</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkGallery;
