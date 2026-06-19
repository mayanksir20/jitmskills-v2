import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Home,
  MapPin,
  Globe,
  Calendar,
  GraduationCap,
  Search,
  Upload,
  CheckCircle2,
  XCircle,
  Briefcase,
  Info,
  Sparkles,
  User,
  Phone,
  Mail,
  FileText,
  Users,
  Award,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import { fadeInUp, containerVariants, cardVariants } from "../utils/animations";

import TransformingLives from "../assets/images/Transforming Lives.webp";

const elementFadeIn = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function FacultyOpenings() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Consolidated Unified Search State
  const [searchQuery, setSearchQuery] = useState("");

  // Strict Pagination Layout Config: 2 Columns * 3 Rows = Exact 6 items per page
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  // Form States
  const [formData, setFormData] = useState({
    specialization: "",
    fullName: "",
    location: "",
    contactNo: "",
    email: "",
    resume: null,
    agreeTerms: false,
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  // Background Fetch Engine with Strict Timeout
  useEffect(() => {
    const SHEET_API_URL =
      "https://opensheet.elk.sh/1HDu-qPx5qQtVlT-F3imPlej9z_42T7H39w3W9OJERJg/Sheet1";

    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, 5000);

    fetch(SHEET_API_URL, { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setJobs(data);
        setLoading(false); // ← यहाँ 'Loading' को 'setLoading' में बदलें
        clearTimeout(timeoutId);
      })
      .catch((err) => {
        console.error("Network edge optimization active:", err);
        setLoading(false);
        clearTimeout(timeoutId);
      });

    return () => {
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, []);

  // Filter Pipeline: Single search query scans through Role, Qualification, and Location
  const filteredJobs = jobs.filter((job) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;

    const matchesKeyword = (job["Opning Trainers Job"] || "")
      .toLowerCase()
      .includes(query);
    const matchesQualification = (job["Qualification"] || "")
      .toLowerCase()
      .includes(query);
    const matchesLocation = (job["Location"] || "")
      .toLowerCase()
      .includes(query);

    return matchesKeyword || matchesQualification || matchesLocation;
  });

  // Strict Max 6 Items Split Calculations
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredJobs.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(filteredJobs.length / cardsPerPage);

  const handleApplyNow = (jobTitle, jobLocation) => {
    setFormData((prev) => ({
      ...prev,
      specialization: jobTitle || "",
      location: jobLocation || "",
    }));
    document
      .getElementById("applyFormContainer")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.specialization ||
      !formData.fullName ||
      !formData.contactNo ||
      !formData.email ||
      !formData.agreeTerms
    ) {
      setSubmitStatus("failed");
      return;
    }
    setSubmitStatus("success");
    setTimeout(() => {
      setFormData({
        specialization: "",
        fullName: "",
        location: "",
        contactNo: "",
        email: "",
        resume: null,
        agreeTerms: false,
      });
      setSubmitStatus(null);
    }, 5000);
  };

  return (
    <>
      {/* 1st SECTION: PREMIUM DARK ULTRA-MODERN HERO HEADER */}
      <section className="w-full mt-12 pt-36 pb-20 border-b border-white/[0.04] relative z-10 bg-[#070A13] text-white overflow-hidden">
        {/* Decorative Grid Light Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              {/* Breadcrumb Micro UI */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 border border-slate-700 rounded-full bg-slate-900/40 backdrop-blur-sm text-slate-400 text-[11px] font-semibold uppercase tracking-wider"
                aria-label="Breadcrumb"
              >
                <a
                  href="/"
                  className="flex items-center gap-1 hover:text-red-500 transition-colors"
                >
                  <Home size={11} />
                  <span>Home</span>
                </a>
                <ChevronRight size={10} className="text-slate-700 shrink-0" />
                <a
                  href="/careers"
                  className="hover:text-red-500 transition-colors"
                >
                  <span>Careers</span>
                </a>
                <ChevronRight size={10} className="text-slate-700 shrink-0" />
                <span className="text-slate-300 font-extrabold">
                  Faculty Grid
                </span>
              </div>

              {/* Glowing Dynamic Badge */}
              <div className="block">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-950/40 via-red-900/20 to-transparent border border-red-500/30 text-red-400 px-4 py-2 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-[0_0_20px_rgba(239,68,68,0.05)]">
                  <Globe size={12} className="text-red-500 animate-spin-slow" />
                  <span>Pan-India Skill Mandates</span>
                </div>
              </div>

              {/* Main Animated Title Header */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Join Our Faculty:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-orange-500 drop-shadow-[0_2px_15px_rgba(239,68,68,0.15)]">
                  Empower India
                </span>
              </h1>

              {/* Context Description Text */}
              <p className="text-sm text-slate-400 font-medium leading-relaxed max-w-2xl">
                We are actively hiring certified Trainers, Domain Experts, and
                Faculty Members across various sectors for our vocational
                training centers pan-India. Explore our open center positions
                below.
              </p>
            </div>

            {/* Premium Bento Mini Card Indicator */}
            <div className="lg:col-span-4 w-full flex lg:justify-end">
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 flex items-center justify-between shadow-2xl w-full max-w-sm group hover:border-red-500/30 transition-all duration-300 relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl pointer-events-none" />
                <div className="flex items-center gap-4">
                  <div className="p-3.5 bg-white/[0.03] text-red-500 rounded-xl border border-white/[0.05] group-hover:bg-red-500 group-hover:text-white transition-all duration-500 transform group-hover:rotate-3">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Centres Location
                    </h4>
                    <p className="text-sm font-black text-white mt-0.5">
                      All Over India
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-black px-2.5 py-1 rounded-md text-[9px] uppercase tracking-wider animate-pulse inline-block">
                    Hiring Live
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2nd CORE CONTENT SECTION */}
      <section className="w-full py-20 bg-[#F8FAFC] text-slate-900 relative z-20">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Bento Intro Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-stretch">
            <div className="lg:col-span-7 bg-white border border-slate-200/60 p-8 rounded-3xl shadow-xs flex flex-col justify-center space-y-4">
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-1.5 bg-red-50 border border-red-100 text-[#D32F2F] px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider w-max"
              >
                <Briefcase size={12} />
                <span>JITM Skills Trainer Portal</span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-black tracking-tight text-slate-900"
              >
                Trainer & Faculty{" "}
                <span className="text-[#D32F2F]">Positions</span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-xs text-slate-600 font-medium leading-relaxed"
              >
                We are always looking for skilled, motivated, and
                industry-experienced trainers to deliver quality training across
                multiple sectors. Trainers at JITM Skills play a key role in
                shaping learner success by providing practical knowledge,
                industry-relevant skills, and career-focused guidance to build a
                job-ready workforce.
              </motion.p>
            </div>

            <motion.div
              variants={fadeInUp}
              className="lg:col-span-5 bg-gradient-to-br from-amber-50 to-orange-50/50 border border-amber-200/70 p-8 rounded-3xl flex gap-4 shadow-xs relative overflow-hidden"
            >
              <div className="p-3 bg-amber-500/10 text-amber-700 rounded-2xl h-max border border-amber-500/10">
                <Info size={20} className="shrink-0" />
              </div>

              <div className="space-y-3 relative z-10">
                <span className="font-black uppercase tracking-wider text-amber-800 block text-[10px]">
                  Candidate Navigation Guide
                </span>

                <p className="text-xs font-semibold text-slate-700 leading-relaxed">
                  Candidates can apply using the{" "}
                  <span className="text-slate-900 font-bold underline decoration-amber-500/40">
                    Quick Apply Form
                  </span>{" "}
                  or explore available opportunities under{" "}
                  <span className="text-slate-900 font-bold underline decoration-amber-500/40">
                    Current Openings
                  </span>
                  .
                </p>

                <p className="text-xs text-[#D32F2F] font-medium leading-relaxed pt-2 border-t border-amber-200/60">
                  Our HR team evaluates each application based on skills,
                  experience, and role requirements. Shortlisted candidates will
                  be contacted immediately.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Master Operational Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* LEFT AREA: MODERN FILTERS + GRID */}
            <div className="lg:col-span-8 space-y-6">
              {/* UNIFIED SINGLE SEARCH BAR (HIGH UI IMPROVEMENT) */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={elementFadeIn}
                className="bg-white border border-slate-200/80 rounded-2xl p-3 shadow-xs hover:shadow-md transition-all duration-300 grid grid-cols-1 gap-2"
              >
                <div className="relative flex items-center">
                  <Search
                    size={16}
                    className="absolute left-4 text-slate-400 group-focus-within:text-red-500 transition-colors pointer-events-none"
                  />
                  <input
                    type="text"
                    placeholder="Search by role, specific keyword, or center location (e.g., Solar, Delhi, Degree)..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3.5 pl-11 pr-4 text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-500/30 focus:bg-white focus:ring-4 focus:ring-red-500/5 transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 text-[10px] bg-slate-200/60 hover:bg-slate-200 text-slate-600 font-bold px-2 py-1 rounded-md transition-colors"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </motion.div>

              {/* Core Grid Matrix */}
              {loading ? (
                <div className="flex items-center justify-center gap-3 p-16 bg-white border border-slate-200/60 rounded-2xl shadow-xs">
                  <div className="w-5 h-5 border-2 border-red-500 border-t-transparent rounded-full animate-spin" />
                  <div className="text-xs text-slate-500 font-medium tracking-tight">
                    Syncing live center mandates pipeline...
                  </div>
                </div>
              ) : currentCards.length === 0 ? (
                <div className="text-xs font-semibold text-slate-400 bg-white border border-slate-200/60 rounded-2xl p-16 text-center shadow-xs">
                  No active trainer openings matching "{searchQuery}"
                </div>
              ) : (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <AnimatePresence mode="popLayout">
                    {currentCards.map((job, idx) => (
                      <motion.div
                        key={idx}
                        variants={cardVariants}
                        whileHover="hover"
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="bg-white border border-slate-200/70 rounded-2xl p-6 flex flex-col justify-between min-h-[230px] shadow-[0_2px_4px_rgba(0,0,0,0.01)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.05)] hover:border-red-500/20 transition-all duration-300 group relative overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-red-500/[0.01] to-transparent pointer-events-none group-hover:from-red-500/[0.03] transition-all duration-300" />

                        <div className="space-y-4">
                          <div className="inline-flex items-center gap-1 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-100 text-[10px] font-bold text-slate-500 group-hover:bg-red-50 group-hover:text-red-600 transition-colors">
                            <Sparkles size={10} />
                            <span>Opening Mandate</span>
                          </div>

                          <h3 className="text-sm font-black text-slate-900 group-hover:text-red-600 transition-colors tracking-tight line-clamp-2 leading-snug">
                            {job["Opning Trainers Job"]}
                          </h3>

                          <div className="space-y-3 pt-2">
                            <div className="flex items-start gap-2 text-xs text-slate-600 font-medium bg-slate-50/60 p-2.5 rounded-xl border border-slate-100">
                              <GraduationCap
                                size={15}
                                className="text-slate-400 shrink-0 mt-0.5"
                              />
                              <span className="line-clamp-2 leading-relaxed text-[11px]">
                                <strong className="text-slate-400 text-[9px] font-black uppercase tracking-wider block mb-0.5">
                                  Eligibility Mandate
                                </strong>
                                {job["Qualification"] || "N/A"}
                              </span>
                            </div>

                            <div className="flex flex-wrap items-center gap-3 pt-1 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                              <span className="flex items-center gap-1 normal-case font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg">
                                <MapPin
                                  size={11}
                                  className="text-red-500 shrink-0"
                                />{" "}
                                {job["Location"]}
                              </span>
                              <span className="flex items-center gap-1 font-medium text-slate-500">
                                <Calendar
                                  size={11}
                                  className="text-slate-400"
                                />{" "}
                                {job["Date"] || "Ongoing"}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="pt-6 border-t border-slate-50 mt-4">
                          <button
                            type="button"
                            onClick={() =>
                              handleApplyNow(
                                job["Opning Trainers Job"],
                                job["Location"],
                              )
                            }
                            className="w-full bg-slate-900 hover:bg-red-600 text-white font-bold text-[10px] tracking-wider uppercase py-3 rounded-xl transition-all duration-300 shadow-xs hover:shadow-md active:scale-[0.98]"
                          >
                            Apply For This Position →
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              )}

              {/* Strict Page Number Navigation System */}
              {totalPages > 1 && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={elementFadeIn}
                  className="flex items-center justify-center gap-2 pt-6"
                >
                  <button
                    disabled={currentPage === 1}
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider border border-slate-200 rounded-xl bg-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-all text-slate-700 shadow-xs"
                  >
                    Previous
                  </button>
                  <div className="text-slate-500 text-[10px] font-bold uppercase tracking-wider px-4 bg-white border border-slate-200 py-2 rounded-xl shadow-xs">
                    Page{" "}
                    <span className="text-red-600 font-extrabold">
                      {currentPage}
                    </span>{" "}
                    of {totalPages}
                  </div>
                  <button
                    disabled={currentPage === totalPages}
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider border border-slate-200 rounded-xl bg-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-50 transition-all text-slate-700 shadow-xs"
                  >
                    Next
                  </button>
                </motion.div>
              )}
            </div>

            {/* RIGHT AREA: FORM CONSOLE INTAKE */}
            <div id="applyFormContainer" className="lg:col-span-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={elementFadeIn}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-red-500 to-orange-500" />

                <div className="mb-6 space-y-1 border-b border-slate-100 pb-4">
                  <h3 className="text-base font-black tracking-tight text-slate-900">
                    Apply for Trainer Position
                  </h3>
                  <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">
                    Submissions route to recruitment desk
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <AnimatePresence >
                    {submitStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-3 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-xl text-xs flex items-center gap-2 font-semibold shadow-xs"
                      >
                        <CheckCircle2
                          size={15}
                          className="shrink-0 text-emerald-600"
                        />
                        <span>Application transmitted successfully!</span>
                      </motion.div>
                    )}
                    {submitStatus === "failed" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-3 bg-red-50 border border-red-100 text-red-800 rounded-xl text-xs flex items-center gap-2 font-semibold shadow-xs"
                      >
                        <XCircle size={15} className="shrink-0 text-red-600" />
                        <span>Please complete all mandatory fields.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Specialization / Domain */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1">
                      <Sparkles size={10} className="text-red-500" />{" "}
                      Specialization / Domain
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Solar PV Installer Faculty"
                      value={formData.specialization}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          specialization: e.target.value,
                        })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:bg-white transition-all font-medium"
                    />
                  </div>

                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1">
                      <User size={10} /> Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:bg-white transition-all font-medium"
                    />
                  </div>

                  {/* Location */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1">
                      <MapPin size={10} /> Location
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="City, State"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:bg-white transition-all font-medium"
                    />
                  </div>

                  {/* Contact No */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1">
                      <Phone size={10} /> Contact No
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.contactNo}
                      onChange={(e) =>
                        setFormData({ ...formData, contactNo: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:bg-white transition-all font-medium"
                    />
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1">
                      <Mail size={10} /> Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:bg-white transition-all font-medium"
                    />
                  </div>

                  {/* CV / Resume File Upload */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1">
                      <FileText size={10} /> CV / Resume (PDF/Doc)
                    </label>
                    <div className="border border-dashed border-slate-200 bg-slate-50 rounded-xl p-4 text-center relative hover:border-red-500/30 hover:bg-white transition-all group">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            resume: e.target.files[0] || null,
                          })
                        }
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <Upload
                        size={16}
                        className="mx-auto text-slate-400 group-hover:text-red-500 mb-1.5 transition-colors"
                      />
                      <p className="text-[11px] text-slate-700 font-medium truncate px-2">
                        {formData.resume
                          ? formData.resume.name
                          : "Click to attach your resume"}
                      </p>
                      <p className="text-[9px] text-slate-400 font-bold mt-0.5">
                        Max size 5MB
                      </p>
                    </div>
                  </div>

                  {/* Terms Checkbox */}
                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      type="checkbox"
                      id="policyCheck"
                      required
                      checked={formData.agreeTerms}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          agreeTerms: e.target.checked,
                        })
                      }
                      className="mt-0.5 rounded border-slate-300 accent-red-600 bg-white text-red-600 h-3.5 w-3.5 cursor-pointer shrink-0"
                    />
                    <label
                      htmlFor="policyCheck"
                      className="text-[10px] text-slate-500 leading-normal select-none cursor-pointer font-medium"
                    >
                      I am open to traveling for training sessions within Delhi
                      NCR and agree to follow the company’s transfer policy.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-red-600 hover:bg-slate-950 text-white font-bold text-xs tracking-wider uppercase py-3.5 rounded-xl transition-all duration-300 shadow-xs hover:shadow-md mt-2 active:scale-[0.98]"
                  >
                    Submit Application
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-24 bg-white text-slate-900 relative overflow-hidden border-t border-slate-100">
        {/* Background Decorative Blur Element */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-red-500/[0.02] rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Master Bento Grid Wrapper */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* LEFT SIDE: TEXT CONTENT & MICRO-BENNTOS (8 Columns) */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-10">
              {/* Header Text Block */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="space-y-4"
              >
                <div className="inline-flex items-center gap-1.5 bg-red-50 border border-red-100/80 text-[#D32F2F] px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider">
                  <ShieldCheck size={12} />
                  <span>Our Mission in Action</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 leading-tight">
                  Transforming Lives, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
                    Building Futures.
                  </span>
                </h2>

                <p className="text-xs text-slate-600 font-medium leading-relaxed max-w-xl">
                  At JITM Skills, we believe in the power of education and skill
                  development to create a brighter tomorrow. Our initiatives are
                  designed to empower individuals, strengthen communities, and
                  contribute to national growth.
                </p>
              </motion.div>

              {/* Journey Sub-Header */}
              <div className="space-y-4">
                <div className="border-t border-slate-100 pt-6">
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">
                    A Glimpse of Our Journey
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium mt-1">
                    Every day, we work towards bridging the skill gap and
                    fostering an environment where talent thrives. Here’s what
                    sets us apart:
                  </p>
                </div>

                {/* Micro Bento Features Layout */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                >
                  {/* Feature 1: Nationwide Reach */}
                  <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-2xl flex flex-col justify-between group hover:bg-white hover:border-red-500/20 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300">
                    <div className="p-2.5 bg-red-500/5 text-[#D32F2F] rounded-xl w-max border border-red-500/[0.02] group-hover:bg-[#D32F2F] group-hover:text-white transition-colors duration-300">
                      <Globe size={16} />
                    </div>
                    <div className="mt-4">
                      <h4 className="text-xs font-black text-slate-900 tracking-tight">
                        Nationwide Reach
                      </h4>
                      <p className="text-[10px] text-slate-500 font-medium mt-1 leading-normal">
                        Operating in multiple states, impacting diverse
                        demographics.
                      </p>
                    </div>
                  </div>

                  {/* Feature 2: Strong Partnerships */}
                  <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-2xl flex flex-col justify-between group hover:bg-white hover:border-red-500/20 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300">
                    <div className="p-2.5 bg-orange-500/5 text-orange-600 rounded-xl w-max border border-orange-500/[0.02] group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                      <Users size={16} />
                    </div>
                    <div className="mt-4">
                      <h4 className="text-xs font-black text-slate-900 tracking-tight">
                        Strong Partnerships
                      </h4>
                      <p className="text-[10px] text-slate-500 font-medium mt-1 leading-normal">
                        Collaborating with government bodies, NGOs, and industry
                        leaders.
                      </p>
                    </div>
                  </div>

                  {/* Feature 3: Quality & Excellence */}
                  <div className="bg-slate-50 border border-slate-200/60 p-5 rounded-2xl flex flex-col justify-between group hover:bg-white hover:border-red-500/20 hover:shadow-lg hover:shadow-slate-100/50 transition-all duration-300">
                    <div className="p-2.5 bg-amber-500/5 text-amber-600 rounded-xl w-max border border-amber-500/[0.02] group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                      <Award size={16} />
                    </div>
                    <div className="mt-4">
                      <h4 className="text-xs font-black text-slate-900 tracking-tight">
                        Quality & Excellence
                      </h4>
                      <p className="text-[10px] text-slate-500 font-medium mt-1 leading-normal">
                        Committed to delivering best-in-class training and
                        outcomes.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* RIGHT SIDE: PREMIUM IMAGE GRID CONTEXT (5 Columns) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-5 relative group"
            >
              {/* Outer Subtle Glass Frame */}
              <div className="w-full h-full min-h-[380px] rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 p-3 shadow-xs group-hover:shadow-xl group-hover:border-slate-300/80 transition-all duration-500 flex">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-900">
                  {/* Primary Image Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent z-10" />

                  {/* Main Dynamic Image Placeholder */}
                  <img
                    src={TransformingLives}
                    alt="Vocational Training and Skill Development Journey"
                    className="w-full h-full object-cover opacity-85 scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Floating Content Badge over Image */}
                  <div className="absolute bottom-6 left-6 right-6 z-20 backdrop-blur-md bg-white/[0.07] border border-white/[0.1] rounded-xl p-4 flex items-center justify-between shadow-2xl">
                    <div>
                      <span className="text-[9px] font-black uppercase tracking-widest text-red-400 block">
                        Empowering Youth
                      </span>
                      <p className="text-xs font-bold text-white mt-0.5">
                        Skill-Building Workshops Live
                      </p>
                    </div>
                    <div className="h-8 w-8 rounded-lg bg-white text-slate-950 flex items-center justify-center shadow-md transform group-hover:rotate-45 transition-transform duration-300">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
