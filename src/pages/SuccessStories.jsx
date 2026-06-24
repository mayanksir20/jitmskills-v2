// import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { alumniData } from "../constants/data";
import EnrollmentForm from "../components/EnrollmentForm";
import {
  Home,
  ChevronRight,
  CheckCircle2,
  TrendingUp,
  Globe,
  Zap,
  Sparkles,
  ShieldCheck,
  Building2,
  MapPin,
  Briefcase,
  Search,
  ExternalLink,
  ChevronLeft,
  Handshake,
  X,
  Award,
  FileCheck2,
  Building,
  BookmarkCheck,
  ArrowUpRight,
  BarChart3,
  ArrowRight,
} from "lucide-react";

import {
  staggerContainer,
  fadeInUp,
  containerVariants,
  itemVariants,
} from "../utils/animations";

const pipelineSteps = [
  {
    id: "01",
    title: "Skill Mapping",
    desc: "Counselors map student profiles to ideal job roles based on state & central schemes metrics.",
  },
  {
    id: "02",
    title: "Core Bootcamps",
    desc: "Rigorous domain training along with mandatory soft skills, interview prep, and corporate grooming.",
  },
  {
    id: "03",
    title: "Assessment Clear",
    desc: "NSDC / Sector Skill Council certified third-party testing to lock national transparency certificates.",
  },
];

const corporatePartners = [
  { name: "Vardhman Group", type: "Apparel & Textiles" },
  { name: "Rohan Hospital", type: "Healthcare Supports" },
  { name: "Salwood Retreat", type: "Hospitality & Tourism" },
  { name: "Reliance Retail", type: "Logistics & Operations" },
  { name: "Aditya Birla Group", type: "Industrial Management" },
  { name: "JITM Genes", type: "Technical Services" },
];

const milestones = [
  {
    icon: ShieldCheck,
    title: "NSDC Co-Branded Logos",
    desc: "Every certification carries centralized cross-verification indices from national skill registry blocks.",
    tag: "National Standard",
  },
  {
    icon: FileCheck2,
    title: "State Board Audited",
    desc: "Placement tracks and daily logs are cross-mapped and audited directly under BSDM, WCDC & UPSDM parameters.",
    tag: "100% Transparent",
  },
  {
    icon: Building,
    title: "Center Validation",
    desc: "From Khagaria to Banka, every single vocational training hub operates with top-tier verified industrial labs.",
    tag: "Infrastructure",
  },
];

const demandSectors = [
  {
    title: "Healthcare & GDA Supports",
    rate: "94% Placement Rate",
    metric: "High Demand",
    desc: "Certified assistants and technical support profiles mapped across medical networks and diagnostics setups.",
    skills: [
      "Patient Care Protocols",
      "Emergency Response",
      "Hygiene Management",
    ],
  },
  {
    title: "Apparel & Industrial Knits",
    rate: "88% Placement Rate",
    metric: "Mass Hiring",
    desc: "Advanced SMO training batches absorbing directly into production plants and apparel export hubs.",
    skills: [
      "Industrial Machine Operations",
      "Quality Auditing",
      "Fabric Logistics",
    ],
  },
  {
    title: "Electrical & Electronics Tech",
    rate: "85% Placement Rate",
    metric: "Core Industrial",
    desc: "Field maintenance specialists and domestic wiremen personnel deployed across regional manufacturing modules.",
    skills: [
      "Industrial Wiring",
      "Fault Diagnostics",
      "Appliance Maintenance Safety",
    ],
  },
];

const SuccessStoriesHero = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // 8 items per page for ultra-clean balance

  const tabs = ["All", "Government", "Free", "Paid"];

  // --- FILTER & SEARCH LOGIC ---
  const filteredAlumni = alumniData.filter((alumni) => {
    const matchesTab = activeTab === "All" || alumni.category === activeTab;
    const matchesSearch =
      alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.sector.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  // Pagination Math
  const totalPages = Math.ceil(filteredAlumni.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentAlumni = filteredAlumni.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const [showForm, setShowForm] = useState(false);

  const openFormModal = () => setShowForm(true);
  const closeFormModal = () => setShowForm(false);

  const navigate = useNavigate();

  return (
    <>
      <section className="relative min-h-screen flex items-center pt-12 lg:pt-32 pb-20 overflow-hidden bg-[#0A0F1D]">
        {/* Immersive Parallax Video Backdrop */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none w-full h-full">
          {/* Clean wrapper without undefined motion variables to prevent ESLint errors */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#0F172A]">
            <div className="absolute min-w-[180%] min-h-[120%] sm:min-w-[140%] sm:min-h-[140%] md:min-w-[115%] md:min-h-[115%] w-auto h-auto aspect-video top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <iframe
                className="w-full h-full pointer-events-none object-cover transform scale-110"
                src="https://www.youtube.com/embed/U6fEYBBn2R0?autoplay=1&mute=1&loop=1&playlist=U6fEYBBn2R0&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&enablejsapi=1&iv_load_policy=3"
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

        <div className="max-w-7xl mt-12 mx-auto px-6 w-full relative z-20">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* --- LEFT CONTENT (6 Columns) --- */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-start lg:col-span-7"
            >
              {/* Breadcrumbs Panel with Premium Blur */}
              <motion.nav variants={fadeInUp} className="mb-6 mt-6">
                <div className="flex items-center gap-3 bg-white/[0.03] backdrop-blur-xl px-4 py-2 rounded-xl border border-white/10 shadow-lg">
                  <Link
                    to="/"
                    className="text-white/40 hover:text-[#D32F2F] transition-colors flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest"
                  >
                    <Home size={11} /> Home
                  </Link>
                  <ChevronRight
                    size={10}
                    className="text-white/20 stroke-[3]"
                  />
                  <span className="text-white font-black text-[10px] uppercase tracking-widest">
                    Success Stories
                  </span>
                </div>
              </motion.nav>

              <motion.span
                variants={fadeInUp}
                className="mb-5 px-3 py-1.5 rounded-full border border-[#D32F2F]/40 bg-[#D32F2F]/10 text-white font-bold uppercase tracking-widest text-[9px]"
              >
                Verified Alumni Placements & Impact
              </motion.span>

              <motion.h2
                variants={fadeInUp}
                className="text-5xl md:text-6xl xl:text-7xl font-black text-white italic uppercase mb-6 leading-[0.9] tracking-tighter"
              >
                Real People. <br />
                <span className=" text-red-gradient">Real Impact.</span>
              </motion.h2>

              <motion.div
                variants={fadeInUp}
                className="space-y-4 max-w-xl mb-8 border-l-2 border-[#D32F2F]/50 pl-6"
              >
                <p className="text-white/90 text-base md:text-lg font-medium leading-relaxed italic">
                  From structural skill centers to leading corporate ecosystems,
                  our alumni are breaking career benchmarks.
                </p>
                <p className="text-white/50 text-xs md:text-sm leading-relaxed font-medium">
                  JITM Skills has consistently acted as a catalyst for human
                  resource transformation. Whether clearing centralized
                  assessments in government trades or matching enterprise
                  standards in high-growth tech domains, our students achieve
                  competitive career tracks.
                </p>
              </motion.div>

              {/* Placement Milestones Quick Tags */}
              <div className="flex flex-wrap gap-3 w-full max-w-xl">
                {[
                  "Highest Package: 12 LPA",
                  "26+ States Deployment",
                  "Tier-1 Corporate Tie-ups",
                  "NSDC Verified Alumni Profiles",
                ].map((tag, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 bg-white/[0.02] px-4 py-2.5 rounded-xl border border-white/5 hover:border-[#D32F2F]/30 hover:bg-[#D32F2F]/5 transition-all duration-300"
                  >
                    <CheckCircle2
                      size={12}
                      className="text-[#D32F2F] shrink-0"
                    />
                    <span className="text-[9px] text-slate-300 font-black uppercase tracking-wider">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* --- RIGHT VISUAL: EXCLUSIVE PLACEMENT BENTO (5 Columns) --- */}
            <div className="relative grid grid-cols-2 gap-4 lg:col-span-5 w-full">
              {/* Left Inner Grid Pillar */}
              <div className="pt-10 space-y-4">
                {/* Card 1: Growth Percentage Indicator */}
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-white/[0.03] backdrop-blur-2xl rounded-[36px] border border-white/5 p-6 flex flex-col justify-between h-56 group transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#D32F2F]">
                    <TrendingUp
                      size={20}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </div>
                  <div>
                    <div className="text-white font-black text-4xl italic tracking-tighter mb-0.5">
                      180%
                    </div>
                    <h4 className="text-white font-black text-[10px] uppercase tracking-widest leading-none">
                      Average Salary Hike
                    </h4>
                    <p className="text-[8px] text-slate-500 uppercase tracking-tight mt-1">
                      Post Specialization Track
                    </p>
                  </div>
                </motion.div>

                {/* Card 2: Global Ecosystem Highlight (Solid Accent Theme) */}
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-[#D32F2F] rounded-[36px] p-6 flex flex-col justify-between h-64 shadow-[0_20px_50px_rgba(211,47,47,0.25)] relative overflow-hidden group transition-all duration-300"
                >
                  <Globe
                    className="absolute -bottom-10 -right-10 text-white/10 group-hover:rotate-45 transition-transform duration-700"
                    size={150}
                  />
                  <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
                    <Zap size={18} />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-white font-black text-sm uppercase tracking-wider italic leading-tight mb-1">
                      Pan-India <br />
                      Network
                    </h4>
                    <p className="text-[8px] text-white/80 uppercase font-black tracking-widest">
                      Graduates Working in 150+ Top-Tier Firms
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Right Inner Grid Pillar */}
              <div className="space-y-4">
                {/* Card 3: Top Placed Sectors Meter */}
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-white/[0.05] backdrop-blur-3xl rounded-[36px] border border-white/10 p-6 flex flex-col justify-between h-64 group transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#D32F2F]">
                    <Sparkles
                      size={20}
                      className="group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-[11px] uppercase tracking-widest italic leading-tight mb-3">
                      Corporate <br />
                      Readiness Index
                    </h4>
                    <div className="space-y-2.5 opacity-80">
                      <div>
                        <div className="flex justify-between text-[8px] font-black uppercase text-slate-400 mb-1">
                          <span>Tech & Digital</span>
                          <span>94%</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="w-[94%] h-full bg-[#D32F2F]" />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[8px] font-black uppercase text-slate-400 mb-1">
                          <span>Core Industries</span>
                          <span>87%</span>
                        </div>
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="w-[87%] h-full bg-[#D32F2F]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Card 4: Verified Badge Hub */}
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-white/[0.02] backdrop-blur-xl rounded-[36px] border border-white/5 p-6 flex flex-col justify-between h-56 group transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-emerald-500">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <div className="text-white font-black text-3xl italic tracking-tighter leading-none mb-1">
                      100%
                    </div>
                    <h4 className="text-white font-black text-[9px] uppercase tracking-widest leading-tight">
                      Transparent Placement Logs
                    </h4>
                    <p className="text-[8px] text-slate-500 font-bold uppercase tracking-wider mt-1">
                      NSDC Board Audited Reports
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white min-h-screen relative overflow-hidden px-4 sm:px-6">
        {/* Soft Light Mode Ambient Orbs */}
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-slate-100 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-[#D32F2F]/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* --- FIXED HEADER GRID: TITLES LEFT & SUBHEADING RIGHT --- */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end"
          >
            {/* Left Aligned Title Block (7 Columns) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Top Tracking Badge */}
              <motion.span
                variants={fadeInUp}
                className="inline-block text-[#D32F2F] text-[10px] font-black uppercase  bg-[#D32F2F]/5 px-3 py-1 rounded-full border border-[#D32F2F]/10 mb-5"
              >
                Verified Human Resource Impact
              </motion.span>

              {/* Super Heading Block */}
              <motion.h2
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 italic uppercase tracking-tighter leading-[0.95]"
              >
                Alumni <span className="text-[#D32F2F]">Directory</span>
              </motion.h2>
            </div>

            {/* Right Aligned Subheading Content Layer (5 Columns) */}
            <div className="lg:col-span-5 flex justify-end w-full">
              <div className="relative pr-6 max-w-xl text-right ml-auto">
                {/* Solid Red Right Side End Accent Line */}
                <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-[#D32F2F] rounded-full" />
                <motion.p
                  variants={fadeInUp}
                  className="text-slate-500 text-xs md:text-sm font-medium leading-relaxed italic pr-4"
                >
                  Browse through the live transformation records of our
                  vocational graduates. Filter across specific state
                  initiatives, central government welfare mandates, or
                  independent free tracks to track active corporate deployments.
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* --- CONTROLS PANEL (Tabs + Search) --- */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16 pb-8 border-b border-slate-100">
            {/* Custom Tabs */}
            <div className="flex bg-slate-50 p-1.5 rounded-2xl border border-slate-200 overflow-x-auto no-scrollbar max-w-full">
              <div className="flex gap-1 min-w-max">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => handleTabChange(tab)}
                    className={`relative px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${activeTab === tab ? "text-white" : "text-slate-400 hover:text-slate-700"}`}
                  >
                    <span className="relative z-10">
                      {tab === "Government"
                        ? "Govt Schemes"
                        : tab === "Free"
                          ? "Free Track"
                          : tab}
                    </span>
                    {activeTab === tab && (
                      <motion.div
                        layoutId="alumniTab"
                        className="absolute inset-0 bg-[#D32F2F] z-0 rounded-xl shadow-md shadow-[#D32F2F]/20"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 28,
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Luxury Search Engine */}
            <div className="relative w-full md:w-80">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                size={14}
              />
              <input
                type="text"
                placeholder="Search Name, Company, Sector..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full bg-slate-50 border border-slate-200 pl-11 pr-4 py-3 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#D32F2F] transition-all focus:bg-white"
              />
            </div>
          </div>

          {/* --- DYNAMIC ALUMNI GRID LAYOUT --- */}
          <div className="relative min-h-[500px]">
            <AnimatePresence >
              {currentAlumni.length > 0 ? (
                <motion.div
                  key={activeTab + searchTerm + currentPage}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: 20 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                  {currentAlumni.map((alumni) => (
                    <motion.div
                      key={alumni.id}
                      variants={itemVariants}
                      whileHover={{ y: -8, transition: { duration: 0.3 } }}
                      className="bg-white border border-slate-200/80 rounded-[32px] overflow-hidden flex flex-col justify-between group p-5 hover:border-slate-300 hover:shadow-2xl transition-all duration-300 relative"
                    >
                      <div>
                        <div className="relative w-full h-44 rounded-2xl overflow-hidden mb-5 border border-slate-100">
                          <img loading="lazy"
                            src={alumni.image}
                            alt={alumni.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-100 flex items-center gap-1 shadow-md">
                            <TrendingUp size={10} className="text-[#D32F2F]" />
                            <span className="text-[10px] font-black text-slate-900 italic tracking-tight">
                              {alumni.package}
                            </span>
                          </div>

                          <div className="absolute bottom-3 left-3 bg-[#D32F2F] px-2.5 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest text-white shadow-sm">
                            {alumni.category === "Government"
                              ? alumni.scheme
                              : alumni.category}
                          </div>
                        </div>

                        <div className="space-y-1">
                          <span className="text-[9px] font-black uppercase tracking-wider text-[#D32F2F] block">
                            {alumni.sector}
                          </span>
                          <h4 className="text-lg font-black text-slate-900 tracking-tight uppercase italic leading-none group-hover:text-[#D32F2F] transition-colors duration-300">
                            {alumni.name}
                          </h4>
                          <p className="text-[11px] text-slate-500 font-medium pt-1 flex items-center gap-1.5">
                            <Briefcase size={11} className="text-slate-400" />{" "}
                            {alumni.role}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-100 text-slate-500">
                            <Building2 size={14} />
                          </div>
                          <div>
                            <p className="text-[10px] font-black text-slate-900 uppercase tracking-wide leading-none">
                              {alumni.company}
                            </p>
                            <p className="text-[8px] text-slate-400 uppercase tracking-tighter mt-0.5 flex items-center gap-0.5">
                              <MapPin size={8} /> {alumni.location}
                            </p>
                          </div>
                        </div>

                        <div className="w-7 h-7 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 opacity-0 group-hover:opacity-100 group-hover:bg-[#D32F2F] group-hover:text-white group-hover:border-[#D32F2F] transition-all duration-300 shadow-sm">
                          <ExternalLink size={10} />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="w-full text-center py-20 border border-dashed border-slate-200 rounded-[32px] bg-slate-50"
                >
                  <p className="text-slate-400 text-xs font-black uppercase tracking-widest">
                    No Alumni Data Matches Your Selected Filter
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* --- DYNAMIC RESPONSIVE PAGINATION CONTROLLER --- */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex justify-center items-center gap-3 mt-16 w-full"
            >
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-500 disabled:opacity-30 hover:bg-[#D32F2F] hover:text-white hover:border-[#D32F2F] transition-all shadow-sm"
              >
                <ChevronLeft size={16} />
              </button>

              <div className="flex gap-1.5">
                <div className="flex md:hidden items-center px-4 bg-slate-50 border border-slate-200 h-9 rounded-full text-[10px] font-black text-slate-600 uppercase tracking-wider">
                  Log {currentPage} / {totalPages}
                </div>

                <div className="hidden md:flex gap-1.5">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-9 h-9 rounded-full font-black text-[11px] transition-all ${currentPage === i + 1 ? "bg-[#D32F2F] text-white border border-[#D32F2F]" : "bg-white text-slate-400 border border-slate-200 hover:border-slate-300 hover:text-slate-600"}`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className="p-2.5 rounded-full bg-white border border-slate-200 text-slate-500 disabled:opacity-30 hover:bg-[#D32F2F] hover:text-white hover:border-[#D32F2F] transition-all shadow-sm"
              >
                <ChevronRight size={16} />
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <section className="py-24 bg-[#0A0F1D] relative overflow-hidden px-4 sm:px-6 border-t border-white/5">
        {/* Immersive Dark Mood Ambient Blurs */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#D32F2F]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* --- LEFT SIDE: THE PLACEMENT PIPELINE --- */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="lg:col-span-7 space-y-12"
            >
              <div>
                <span className="text-[#D32F2F] text-[10px] font-black uppercase  bg-[#D32F2F]/10 px-3 py-1 rounded-full border border-[#D32F2F]/20">
                  Our Recruitment Engine
                </span>
                <h3 className="text-4xl md:text-5xl font-black text-white italic uppercase mt-4 tracking-tighter leading-none">
                  How We Secure <br /> Your{" "}
                  <span className="text-[#D32F2F]">Placement</span>
                </h3>
                <div className="h-1 w-16 bg-[#D32F2F] mt-4 rounded-full" />
              </div>

              <div className="space-y-8 relative before:absolute before:left-6 before:top-4 before:bottom-4 before:w-[1px] before:bg-white/10">
                {pipelineSteps.map((step) => (
                  <motion.div
                    key={step.id}
                    variants={fadeInUp}
                    className="flex gap-6 items-start relative group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center font-black text-xs text-slate-400 shrink-0 group-hover:bg-[#D32F2F] group-hover:text-white group-hover:border-[#D32F2F] transition-all duration-300 z-10 shadow-lg">
                      {step.id}
                    </div>
                    <div className="pt-1">
                      <h4 className="text-sm font-black text-white uppercase tracking-wide mb-1 group-hover:text-[#D32F2F] transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed max-w-xl font-medium">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* --- RIGHT SIDE: HIRING PARTNERS MATRIX --- */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 w-full space-y-6"
            >
              <div className="bg-white/[0.02] border border-white/5 p-6 rounded-[28px] backdrop-blur-xl flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h5 className="text-xs font-black text-white uppercase tracking-wider">
                    Zero Fee Processing
                  </h5>
                  <p className="text-[10px] text-slate-500 font-medium">
                    Placements under Govt. schemes are completely free of
                    charge.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {corporatePartners.map((partner, index) => (
                  <div
                    key={index}
                    className="bg-white/[0.01] border border-white/5 hover:border-white/10 p-5 rounded-[24px] transition-all duration-300 hover:bg-white/[0.03] group relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-16 h-16 bg-white/[0.01] rounded-bl-full pointer-events-none group-hover:bg-[#D32F2F]/5 transition-all" />
                    <Building2
                      size={16}
                      className="text-slate-600 mb-3 group-hover:text-[#D32F2F] transition-colors"
                    />
                    <h4 className="text-xs font-black text-white uppercase tracking-wide leading-none">
                      {partner.name}
                    </h4>
                    <span className="text-[8px] font-bold uppercase tracking-widest text-slate-500 mt-1.5 inline-block">
                      {partner.type}
                    </span>
                  </div>
                ))}
              </div>

              {/* --- FIX: Click Handler triggers openFormModal --- */}
              <div
                onClick={openFormModal}
                className="bg-gradient-to-r from-[#D32F2F]/20 to-transparent border border-[#D32F2F]/10 p-5 rounded-[24px] flex items-center justify-between group cursor-pointer hover:from-[#D32F2F]/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <Handshake size={18} className="text-[#D32F2F]" />
                  <span className="text-[10px] font-black uppercase text-slate-200 tracking-wider">
                    Join Next Placement Drive
                  </span>
                </div>
                <span className="text-[#D32F2F] text-[10px] font-black uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                  Register →
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- PREMIUM PIPELINE OVERLAY FORM MODAL --- */}
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
      </section>

      <section className="py-24 bg-white relative overflow-hidden px-4 sm:px-6 border-t border-slate-100">
        {/* Upper Soft Glowing Light Ambient Decor */}
        <div className="absolute top-[-20%] right-[20%] w-[400px] h-[400px] bg-slate-50 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#D32F2F]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* --- SECTION HEADER --- */}
          <div className="text-center mb-16">
            <span className="text-[#D32F2F] text-[10px] font-black uppercase  bg-[#D32F2F]/5 px-4 py-1.5 rounded-full border border-[#D32F2F]/20">
              National Compliance
            </span>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 italic uppercase mt-4 tracking-tighter">
              Recognized by <span className="text-[#D32F2F]">Govt. Boards</span>
            </h3>
            <p className="text-slate-500 text-xs mt-2 font-medium tracking-wide max-w-xl mx-auto">
              Our placement validation pipelines comply strictly with statutory
              industrial skilling frameworks.
            </p>
            <div className="h-1 w-16 bg-[#D32F2F] mx-auto mt-4 rounded-full" />
          </div>

          {/* --- BENTO CARD LAYOUT --- */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {milestones.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -6 }}
                  className="bg-slate-50/50 border border-slate-200/60 p-8 rounded-[32px] hover:border-slate-300 hover:bg-white hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group min-h-[250px]"
                >
                  <div>
                    {/* Icon Block with Red Ambient Aura on Hover */}
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#D32F2F] mb-6 group-hover:bg-[#D32F2F] group-hover:text-white group-hover:border-[#D32F2F] group-hover:shadow-[0_0_15px_rgba(211,47,47,0.3)] transition-all duration-300">
                      <Icon size={18} className="stroke-[2.5]" />
                    </div>

                    {/* Title & Description */}
                    <h4 className="text-base font-black text-slate-900 uppercase tracking-wide mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>

                  {/* Card Footer Tag Element */}
                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                    <span className="text-[9px] font-black uppercase text-slate-500 tracking-widest bg-white border border-slate-200 px-2.5 py-1 rounded-md">
                      {item.tag}
                    </span>
                    <BookmarkCheck
                      size={14}
                      className="text-slate-400 group-hover:text-[#D32F2F] transition-colors"
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* --- BOTTOM QUICK CONVERSION FOOTER BAR --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mt-16 bg-slate-50 border border-slate-200 p-8 rounded-[40px] flex flex-col md:flex-row items-center justify-between gap-6 shadow-inner"
          >
            <div className="flex items-center gap-4 text-center md:text-left flex-col sm:flex-row">
              <div className="w-12 h-12 rounded-full bg-[#D32F2F]/10 flex items-center justify-center text-[#D32F2F] border border-[#D32F2F]/20 animate-pulse">
                <Award size={22} />
              </div>
              <div>
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-wide">
                  Ready to be our next Success Story?
                </h4>
                <p className="text-[11px] text-slate-500 font-medium">
                  Take the free skill assessment test and map your trade sectors
                  immediately.
                </p>
              </div>
            </div>
            <a
              onClick={() => navigate("/TrainingSectors")}
              className="px-6 py-3.5 bg-slate-900 cursor-pointer text-white hover:bg-[#D32F2F] hover:text-white font-black text-[10px] uppercase tracking-widest rounded-xl transition-all duration-300 flex items-center gap-2 shadow-md shrink-0"
            >
              Explore Sectors Again{" "}
              <ArrowUpRight size={12} className="stroke-[3]" />
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-slate-100 relative overflow-hidden px-4 sm:px-6 border-t border-slate-200">
        {/* Background Soft Ambient Graphic Blur */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-white rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* --- SECTION HEADER --- */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-[#D32F2F] text-[10px] font-black uppercase  bg-white px-3 py-1 rounded-full border border-slate-200 shadow-sm flex items-center gap-1 w-max">
                <BarChart3 size={10} className="text-[#D32F2F]" /> Industry
                Demand Matrix
              </span>
              <h3 className="text-3xl md:text-5xl font-black text-slate-900 italic uppercase mt-4 tracking-tighter leading-none">
                Active Placement <span className="text-[#D32F2F]">Sectors</span>
              </h3>
              <div className="h-1 w-16 bg-[#D32F2F] mt-4 rounded-full" />
            </div>
            <p className="text-slate-500 text-xs md:text-sm font-medium max-w-sm lg:mb-2 leading-relaxed">
              Real-time assessment tracking across the core domains where our
              government scheme and free training alumni are actively breaking
              career benchmarks.
            </p>
          </div>

          {/* --- SECTORS BENTO GRID LAYOUT --- */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {demandSectors.map((sector, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="bg-white border border-slate-200/70 p-8 rounded-[36px] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[340px]"
              >
                <div>
                  {/* Top Statistics Data Row */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-[#D32F2F]/5 text-[#D32F2F] px-2.5 py-1 rounded-md text-[8px] font-black uppercase tracking-widest border border-[#D32F2F]/10">
                      {sector.metric}
                    </div>
                    <div className="flex items-center gap-1 text-[10px] font-black text-emerald-600 uppercase">
                      <TrendingUp size={12} /> {sector.rate}
                    </div>
                  </div>

                  {/* Core Title Details */}
                  <div className="space-y-2">
                    <h4 className="text-lg font-black text-slate-900 uppercase italic tracking-tight leading-none">
                      {sector.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium">
                      {sector.desc}
                    </p>
                  </div>

                  {/* Core Skills Sub-tags List */}
                  <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                    <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 block mb-1">
                      Target Skillsets:
                    </span>
                    {sector.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-[10px] font-bold text-slate-700 uppercase"
                      >
                        <CheckCircle2
                          size={11}
                          className="text-[#D32F2F] shrink-0"
                        />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Node Anchor */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-slate-400 group cursor-pointer hover:text-[#D32F2F] transition-colors">
                  <span className="text-[9px] font-black uppercase tracking-wider">
                    View Sector Guidelines
                  </span>
                  <ArrowRight
                    onClick={() => navigate("/TrainingSectors")}
                    size={12}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SuccessStoriesHero;
