import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  ChevronRight,
  FileText,
  Download,
  Eye,
  Search,
  ShieldCheck,
  Mail,
  PhoneCall,
  FileSpreadsheet,
  ArrowUpRight,
  Sparkles,
  CheckCircle,
  LayoutGrid,
  Award,
  MapPin,
} from "lucide-react";

import { documentsData } from "../constants/Brochuresdata";
import TransparencyImage from "../assets/images/Transparency-Report.webp";
import CredibilityImage from "../assets/images/business-growth.webp";

export default function DownloadsBrochures() {
  const [activeCategory, setActiveCategory] = useState("All Downloads");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All Downloads",
    "Course Brochures",
    "Placement Reports",
    "Corporate Profiles",
    "Center Manuals",
  ];

  // Filter & Search Matrix Processing
  const filteredDocuments = documentsData.filter((doc) => {
    const matchesCategory =
      activeCategory === "All Downloads" || doc.category === activeCategory;
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const insightsFeatures = [
    {
      id: 1,
      icon: <ShieldCheck size={16} className="text-[#D32F2F]" />,
      title: "Transparency",
      desc: "Direct access to verified data and project reports.",
    },
    {
      id: 2,
      icon: <Award size={16} className="text-[#D32F2F]" />,
      title: "Credibility",
      desc: "Trusted by 15+ State Governments and Ministries.",
    },
    {
      id: 3,
      icon: <MapPin size={16} className="text-[#D32F2F]" />,
      title: "National Footprint",
      desc: "Coverage of over 200+ training centers across India.",
    },
  ];

  return (
    <>
      <section className="w-full min-h-screen bg-slate-50 font-sans antialiased text-slate-800 pb-24">
        {/* ========================================================================= */}
        {/* ======================= HERO: LEFT TEXT & RIGHT BREADCRUMB ============== */}
        {/* ========================================================================= */}
        <section className="w-full bg-[#0B0F19] pt-52 pb-24 px-4 sm:px-6 lg:px-8 border-b border-white/5 relative overflow-hidden">
          {/* Backdrop Matrix Effects */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
          <div className="absolute -top-40 left-1/3 w-[600px] h-[600px] bg-[#D32F2F]/5 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            {/* LEFT SIDE: EXACT TYPOGRAPHY MANDATED */}
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-[#D32F2F]">
                <FileText size={16} className="animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Official Resource Repository
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
                Information{" "}
                <span className="text-[#D32F2F] bg-gradient-to-r from-[#D32F2F] to-red-500 bg-clip-text text-transparent">
                  Media Vault
                </span>
              </h1>

              <p className="text-xs md:text-sm font-medium text-slate-400 max-w-2xl leading-relaxed">
                Humare training modules, multi-state operational placement
                matrix catalogs, corporate infrastructure guidelines, aur
                structural syllabi files ka direct authentic data asset access
                path.
              </p>
            </div>

            {/* RIGHT SIDE: DYNAMIC BREADCRUMB HOUSING */}
            <div className="lg:col-span-4 flex lg:justify-end">
              <motion.nav
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 px-4 py-2.5 rounded-xl shadow-xl"
              >
                <a
                  href="/"
                  className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-300 transition-colors group"
                >
                  <Home
                    size={12}
                    className="text-slate-500 group-hover:text-slate-300"
                  />
                  <span>Home</span>
                </a>

                <ChevronRight size={10} className="text-slate-600 shrink-0" />

                <span className="text-xs font-bold text-slate-400 select-none">
                  Resources
                </span>

                <ChevronRight size={10} className="text-slate-600 shrink-0" />

                <span className="text-xs font-black text-white tracking-wide select-none">
                  Vault
                </span>
              </motion.nav>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* ======================== NEW RE-DESIGNED INTERFACE CONTROL ============== */}
        {/* ========================================================================= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -translate-y-8 relative z-20 space-y-5">
          {/* Full-width Search Input Component Dock */}
          <div className="bg-white border border-slate-200/80 shadow-xl rounded-2xl p-2 flex items-center relative">
            <Search
              size={16}
              className="absolute left-5 text-slate-400 pointer-events-none"
            />
            <input
              type="text"
              placeholder="Type terms to search documents database archive instantly..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-transparent rounded-xl text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none"
            />
          </div>

          {/* Clean Bento Token Chip Cloud (No Sliders / No Left Overflow Panels) */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/5 backdrop-blur-md p-2 rounded-2xl border border-slate-200/40">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs font-black tracking-wide transition-all cursor-pointer ${
                    isActive
                      ? "bg-slate-950 text-white shadow-md shadow-black/10"
                      : "bg-white text-slate-600 border border-slate-200 hover:text-slate-950 hover:bg-slate-50"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* ============================ CARD RESULTS MATRIX ======================== */}
        {/* ========================================================================= */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredDocuments.length > 0 ? (
                filteredDocuments.map((doc) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    key={doc.id}
                    className="bg-white border border-slate-200/80 rounded-2xl p-6 flex flex-col justify-between group hover:border-slate-300 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="bg-red-50 text-[#D32F2F] text-[9px] font-black tracking-widest uppercase border border-red-100 px-2.5 py-1 rounded-md">
                          {doc.format} FILE
                        </div>
                        <span className="text-[10px] font-black text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                          {doc.size}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-sm font-black text-slate-950 tracking-tight leading-snug group-hover:text-[#D32F2F] transition-colors">
                          {doc.title}
                        </h3>
                        <p className="text-xs font-medium text-slate-500 leading-relaxed">
                          {doc.description}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-slate-100 pt-5 mt-6 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <ShieldCheck size={13} className="text-emerald-600" />
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-wide">
                          Verified
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {/* PREVIEW BUTTON INTERFACE */}
                        <a
                          href={doc.fileUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Preview Asset File"
                          className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-500 hover:text-slate-900 hover:border-slate-300 transition-all cursor-pointer active:scale-95 flex items-center justify-center"
                        >
                          <Eye size={13} />
                        </a>

                        {/* DOWNLOAD BUTTON INTERFACE */}
                        <a
                          href={doc.fileUrl}
                          download={`${doc.title}.pdf`} // Ye line system local download auto force karegi
                          title="Download Asset File"
                          className="flex items-center gap-1.5 bg-[#D32F2F] text-white text-[11px] font-black tracking-wider uppercase px-4 py-2.5 rounded-xl hover:bg-red-600 transition-all cursor-pointer active:scale-95"
                        >
                          <Download size={12} />
                          <span>Download</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  layout
                  className="col-span-full py-16 border border-dashed border-slate-200 rounded-2xl bg-white flex flex-col items-center justify-center text-center space-y-1.5"
                >
                  <div className="text-slate-300 font-black text-xs uppercase tracking-widest">
                    No matching files registered
                  </div>
                  <p className="text-[11px] font-medium text-slate-400">
                    Please refine your query tags or select another filter node
                    category.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </main>
      </section>

      <section className="w-full bg-[#0B0F19] py-24 px-4 sm:px-6 lg:px-8 border-t border-b border-white/5 font-sans antialiased text-white relative overflow-hidden">
        {/* Immersive Geometric Backdrop Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* Cinematic Deep Red Ambient Spotlights */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#D32F2F]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-20 left-10 w-80 h-80 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* ───────────────────────────────────────────────────────────────── */}
            {/* LEFT COLUMN: DYNAMIC TEXT HOUSING & ACTIONABLE INTERFACES         */}
            {/* ───────────────────────────────────────────────────────────────── */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#D32F2F]">
                  <Sparkles size={14} className="animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    B2B Executive Alliance Portal
                  </span>
                </div>

                <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-none">
                  Need a Custom <br />
                  <span className="text-[#D32F2F] bg-gradient-to-r from-[#D32F2F] to-red-500 bg-clip-text text-transparent">
                    Presentation?
                  </span>
                </h2>

                <p className="text-xs md:text-sm font-black text-slate-200 leading-snug pt-1">
                  Are you a government body or a prospective partner? Request a
                  tailored media kit for your specific needs.
                </p>

                <p className="text-xs md:text-sm font-medium text-slate-400 max-w-xl leading-relaxed">
                  Get customized insights aligned with your objectives and
                  engagement scope. Our presentations are systematically built
                  to highlight impact, scale, and multi-state implementation
                  capability.
                </p>
              </div>

              {/* Micro Feature Bullet Group */}
              <div className="flex flex-wrap gap-x-5 gap-y-2.5 pt-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                  <CheckCircle size={13} className="text-emerald-500" />
                  <span>Impact Logistics Data</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                  <CheckCircle size={13} className="text-emerald-500" />
                  <span>Operational Audits Included</span>
                </div>
              </div>

              {/* DUAL INTERACTIVE BUTTON PIPELINE STRIP */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
                {/* PRIMARY ACTION: DIRECT SECURE EMAIL TRIGGER */}
                <a
                  href="mailto:info@jitmskills.com?subject=Request for Custom Media Kit and Corporate Presentation"
                  className="flex items-center justify-center gap-2 bg-[#D32F2F] text-white text-xs font-black tracking-wider uppercase px-6 py-3.5 rounded-xl shadow-md shadow-red-600/10 hover:bg-red-600 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Mail size={13} />
                  <span>Email Us</span>
                </a>

                {/* SECONDARY ACTION: INTERNAL ROUTING CONTACT REDIRECT */}
                <a
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-slate-900 text-slate-200 border border-white/10 text-xs font-black tracking-wider uppercase px-6 py-3.5 rounded-xl hover:bg-white hover:text-slate-950 hover:border-white shadow-xs transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <PhoneCall size={13} />
                  <span>Contact Us</span>
                </a>
              </div>
            </div>

            {/* ───────────────────────────────────────────────────────────────── */}
            {/* RIGHT COLUMN: HIGH-FIDELITY GLASS BENTO MOCKUP IMAGE VIEW       */}
            {/* ───────────────────────────────────────────────────────────────── */}
            <div className="lg:col-span-6 flex items-center justify-center relative">
              <div className="w-full max-w-md bg-slate-900/40 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl space-y-6 relative group hover:border-[#D32F2F]/30 transition-all duration-300">
                {/* Internal Window Accent Elements */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md">
                    Executive_Summary_v2.pdf
                  </div>
                </div>

                {/* Mock Presentation Content Layout Stack */}
                <div className="space-y-3.5">
                  <div className="h-6 w-2/3 bg-white/10 rounded-md animate-pulse" />
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-white/5 rounded-md" />
                    <div className="h-3 w-11/12 bg-white/5 rounded-md" />
                    <div className="h-3 w-4/5 bg-white/5 rounded-md" />
                  </div>
                </div>

                {/* Visual Decorative Data Grid Node Chart */}
                <div className="bg-slate-950 text-white rounded-xl p-4 flex items-center justify-between relative overflow-hidden border border-white/5">
                  <div className="space-y-1 relative z-10">
                    <span className="text-[9px] font-black uppercase tracking-wider text-slate-500">
                      Project Execution Cap
                    </span>
                    <div className="text-base font-black text-slate-200 tracking-tight">
                      Verified Infrastructure Map
                    </div>
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-xl border border-white/10 relative z-10 text-white group-hover:text-[#D32F2F] transition-colors">
                    <FileSpreadsheet size={16} />
                  </div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#D32F2F]/10 rounded-bl-full blur-md" />
                </div>

                {/* Floating Element Layer Badge */}
                <div className="absolute -bottom-4 -right-4 bg-slate-900 border border-white/10 p-3 rounded-xl shadow-xl flex items-center gap-2 transform group-hover:scale-105 transition-transform duration-300">
                  <div className="bg-red-950 text-[#D32F2F] p-1.5 rounded-lg border border-red-900/30">
                    <ArrowUpRight size={14} />
                  </div>
                  <div className="text-left">
                    <div className="text-[10px] font-black text-white leading-none">
                      Media Kit Ready
                    </div>
                    <div className="text-[9px] font-bold text-slate-500 mt-0.5">
                      High Impact Core
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-slate-100 py-24 px-4 sm:px-6 lg:px-8 border-t border-b border-slate-200 font-sans antialiased text-slate-800 relative overflow-hidden">
        {/* Background Decorative Matrix Grid Patterns */}

        <div className="max-w-7xl mx-auto relative z-10 space-y-16">
          {/* ───────────────────────────────────────────────────────────────── */}
          {/* UPPER BLOCK: RESOURCE CENTER MASTER REGISTRY HEADER               */}
          {/* ───────────────────────────────────────────────────────────────── */}
          <div className="border-b border-slate-200/80 pb-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
            <div className="lg:col-span-7 space-y-2.5">
              <div className="flex items-center gap-2 text-[#D32F2F]">
                <FileText size={14} className="animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Resource Center 2026
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tight leading-none">
                Official Downloads &{" "}
                <span className="text-[#D32F2F] bg-gradient-to-r from-[#D32F2F] to-red-600 bg-clip-text text-transparent">
                  Brochures
                </span>
              </h2>
            </div>
            <div className="lg:col-span-5 flex items-stretch">
              {/* Left Side Accent Vertical Line */}
              <div className="w-1 bg-[#D32F2F] rounded-full shrink-0 mr-4 opacity-80" />

              {/* Content Container */}
              <p className="text-xs md:text-sm font-medium text-slate-500 leading-relaxed">
                Download high-resolution corporate profiles, detailed program
                brochures, and national impact reports. These resources are
                curated for stakeholders, partners, and government institutions.
                They reflect our scale, transparency, and measurable outcomes.
              </p>
            </div>
          </div>

          {/* ───────────────────────────────────────────────────────────────── */}
          {/* LOWER BLOCK: INSIGHTS DESCRIPTION VS IMAGE MATRIX MONTAGE        */}
          {/* ───────────────────────────────────────────────────────────────── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* LEFT CONTAINER: EXPLICIT CORE TYPOGRAPHY */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Sparkles size={12} className="text-[#D32F2F]" />
                  <span className="text-[9px] font-black uppercase tracking-widest">
                    Corporate Core Core Vision
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight leading-snug">
                  Why Media & <br />
                  <span className="text-[#D32F2F]">Insights Matters?</span>
                </h3>

                <p className="text-xs md:text-sm font-medium text-slate-500 leading-relaxed bg-white/40 border border-slate-200 p-4 rounded-xl shadow-2xs">
                  At JITM Skills, transparency and credibility are our greatest
                  assets. We firmly believe in backing the impact we create with
                  verified data and official documentation.
                </p>
              </div>

              {/* Systematic Linear Loop Blocks */}
              <div className="space-y-4">
                {insightsFeatures.map((feat) => (
                  <div
                    key={feat.id}
                    className="flex items-start gap-4 p-4 bg-white/60 border border-slate-200/80 rounded-xl hover:bg-white hover:border-slate-300 transition-all duration-200 shadow-2xs group"
                  >
                    <div className="bg-red-50 p-2.5 rounded-lg border border-red-100 shrink-0 group-hover:bg-[#fff] group-hover:text-white transition-colors">
                      {feat.icon}
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="text-xs font-black text-slate-950 tracking-wide">
                        {feat.title}
                      </h4>
                      <p className="text-[11px] font-semibold text-slate-500 leading-normal">
                        {feat.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT CONTAINER: MODERN OVERLAPPING IMAGE OVERLAYS */}
            <div className="lg:col-span-6 grid grid-cols-12 gap-4 items-center relative">
              {/* Ambient Red Blur Backing Tag */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#D32F2F]/5 rounded-full blur-2xl pointer-events-none" />

              {/* Large Primary Base Image Container */}
              <div className="col-span-7 bg-white p-2 rounded-2xl border border-slate-200 shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
                <div className="w-full h-64 md:h-80 bg-slate-200 rounded-xl overflow-hidden relative group">
                  <img
                    src="/src/assets/images/training-lab-1.jpg" // Replace with real asset path
                    alt="JITM Training Center Infrastructure"
                    className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = TransparencyImage; // Fallback image on error
                    }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950/40 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Stacked Offset Secondary Image Container */}
              <div className="col-span-5 space-y-4">
                <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-md transform hover:translate-y-1 transition-transform duration-300">
                  <div className="w-full h-40 bg-slate-200 rounded-xl overflow-hidden relative group">
                    <img
                      src="/src/assets/images/student-classroom.jpg" // Replace with real asset path
                      alt="Verified Student Classroom Batch"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.target.src = CredibilityImage; // Fallback image on error
                      }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/30 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Functional Floating Info Node Badge */}
                <div className="bg-slate-950 border border-slate-800 p-4 rounded-xl shadow-lg text-white space-y-1.5 relative overflow-hidden">
                  <div className="bg-white/10 p-1.5 rounded-md text-[#D32F2F] inline-block">
                    <LayoutGrid size={14} />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-black tracking-widest text-slate-400 uppercase">
                      Live Operations
                    </div>
                    <div className="text-xs font-black text-slate-200">
                      100% On-Ground Auditing
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-[#D32F2F]/10 rounded-full blur-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
