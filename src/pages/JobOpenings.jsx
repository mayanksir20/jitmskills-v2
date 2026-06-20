import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  staggerContainer,
  fadeInUp,
  itemVariants,
  containerVariants,
} from "../utils/animations";
import {
  ChevronRight,
  Home,
  Briefcase,
  Sparkles,
  Search,
  FileText,
  Send,
  X,
  Info,
  MapPin,
  Award,
  Target,
  HelpCircle,
  ArrowUp,
  Bell,
  Mail,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function JobOpeningsHeader() {
  const SHEET_CSV_URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQZ8R5TL5z8P145dbs1hipiCw_whZ3CUBSEM-EhX3hqA7UQaMa1e-eVM_K8lMWDva3_o1DQugsZzK2B/pub?output=csv";

  const [liveJobs, setLiveJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [popupJob, setPopupJob] = useState(null);
  const [submitStatus, setSubmitStatus] = useState("default");

  // Track continuous scroll state
  const tickerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const [formData, setFormData] = useState({
    applyingFor: "",
    fullName: "",
    phone: "",
    email: "",
    qualification: "",
    experience: "",
    currentCompany: "",
    currentDesignation: "",
    currentSalary: "",
    expectedSalary: "",
    keySkills: "",
    reasonChange: "",
    relocate: false,
    transferPolicy: false,
  });

  // Fetch Live Jobs
  useEffect(() => {
    async function fetchJobs() {
      try {
        const response = await fetch(
          `${SHEET_CSV_URL}&t=${new Date().getTime()}`,
        );
        if (!response.ok) throw new Error("Data sync failure");
        const csvText = await response.text();
        const rows = csvText.split(/\r?\n/).filter((row) => row.trim() !== "");
        const parsedJobs = [];

        if (rows.length > 1) {
          for (let i = 1; i < rows.length; i++) {
            const columns = rows[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
            const jobRole = columns[0]?.replace(/"/g, "").trim();
            const hiringString = columns[1]?.replace(/"/g, "").trim() || "";
            const loc = columns[2]?.replace(/"/g, "").trim() || "Pan India";

            if (jobRole && jobRole !== "") {
              parsedJobs.push({
                id: i,
                title: jobRole,
                companyDetails: hiringString,
                location: loc,
              });
            }
          }
          setLiveJobs(parsedJobs);
        }
      } catch (err) {
        console.error("Error fetching live jobs:", err);
      }
    }
    fetchJobs();
  }, []);

  // 🔴 PURE JS AUTOSCROLL ENGINE (News Channel Style)
  useEffect(() => {
    const container = tickerRef.current;
    if (!container || isHovered) return;

    const scrollSpeed = 1;
    const interval = setInterval(() => {
      if (
        container.scrollTop + container.clientHeight >=
        container.scrollHeight - 2
      ) {
        container.scrollTop = 1;
      } else {
        container.scrollTop += scrollSpeed;
      }
    }, 25);

    return () => clearInterval(interval);
  }, [isHovered, liveJobs, searchQuery]);

  // 7 Seconds Auto-Close Popup Trigger
  useEffect(() => {
    let timer;
    if (popupJob) {
      timer = setTimeout(() => {
        setPopupJob(null);
      }, 7000); // Strict 7 seconds hook
    }
    return () => clearTimeout(timer);
  }, [popupJob]);

  const handleApplyAction = (jobTitle) => {
    setFormData((prev) => ({ ...prev, applyingFor: jobTitle }));
    setPopupJob(jobTitle);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus("default");
    const submissionForm = new FormData();
    Object.keys(formData).forEach((key) =>
      submissionForm.append(key, formData[key]),
    );

    const fileInput = document.getElementById("cv-file-node");
    if (fileInput && fileInput.files[0]) {
      submissionForm.append("cvFile", fileInput.files[0]);
    }

    try {
      const response = await fetch("careers-handler.php", {
        method: "POST",
        body: submissionForm,
      });
      setSubmitStatus(response.ok ? "success" : "error");
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    }
  };

  const filteredJobs = liveJobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.companyDetails.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Mimicking rapid network pipeline action
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail("");
    }, 1000);
  };

  return (
    <>
      <section className="w-full bg-[#0B0F19] pt-24 lg:pt-52 pb-24 px-4 sm:px-6 lg:px-8 border-b border-white/5 relative overflow-hidden">
        {/* Background Micro Glow Dot */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#D32F2F]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mt-8 mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-5">
          <nav className="inline-flex items-center gap-2 px-4 py-2 border border-slate-700 rounded-full bg-slate-900/40 backdrop-blur-sm text-slate-400 text-[11px] font-semibold uppercase tracking-wider">
            <Link
              to="/"
              className="flex items-center gap-1.5 hover:text-white transition-colors group"
            >
              <Home
                size={12}
                className="group-hover:text-[#D32F2F] transition-colors"
              />
              <span>Home</span>
            </Link>

            <ChevronRight size={10} className="text-slate-600" />

            <Link
              to="/CareersPage"
              className="hover:text-white transition-colors"
            >
              Careers
            </Link>

            <ChevronRight size={10} className="text-slate-600" />

            <span className="text-slate-300 font-extrabold">
              Job Openings
            </span>
          </nav>

          {/* ───────────────────────────────────────────────────────────────── */}
          {/* PAGE TITLE & SUBTITLE BLOCK                                       */}
          {/* ───────────────────────────────────────────────────────────────── */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[#D32F2F]">
              <Sparkles size={13} className="animate-pulse" />
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                Live Registry Hub
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-1">
                <h1 className="text-2xl md:text-4xl font-black tracking-tight text-white flex items-center gap-3">
                  <Briefcase
                    size={24}
                    className="text-[#D32F2F] hidden md:block"
                  />
                  <span>
                    Current Strategic{" "}
                    <span className="text-[#D32F2F]">Openings</span>
                  </span>
                </h1>
                <p className="text-xs font-medium text-slate-400 max-w-xl leading-relaxed">
                  Explore available core career slots. Find verified
                  opportunities across technology, management operations, and
                  skill development structures.
                </p>
              </div>

              {/* Status Indicator Pill */}
              <div className="self-start md:self-auto flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-xl text-emerald-400 text-[10px] font-black uppercase tracking-wider">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>Accepting Applications</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <motion.section
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="w-full bg-slate-50 min-h-screen text-slate-800 font-sans antialiased pb-24 relative selection:bg-red-200"
      >
        {/* HERO SECTION */}
        <div className="bg-white border-b border-slate-200 pt-12 lg:pt-28 pb-12 px-4 sm:px-6 lg:px-8 shadow-xs">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="max-w-3xl space-y-3">
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center gap-1.5 bg-red-50 border border-red-200 text-[#D32F2F] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider"
              >
                <Briefcase size={11} />
                <span>JITM Skills Careers Portal</span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-none"
              >
                Career Opportunities{" "}
                <span className="text-[#D32F2F]">@ JITM Skills</span>
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-sm text-slate-600 font-medium leading-relaxed"
              >
                Build a meaningful career with JITM Skills and be part of
                large-scale national skill development initiatives. Work on
                government, CSR, and multi-state projects that create real
                social and economic impact. Grow professionally while
                contributing to India’s skilled and empowered workforce.
              </motion.p>
            </div>

            {/* Feature Highlights Grid */}
            <motion.div
              variants={containerVariants || staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-slate-100 pt-6"
            >
              <motion.div
                variants={itemVariants || fadeInUp}
                className="flex gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100"
              >
                <Target className="text-[#D32F2F] shrink-0" size={20} />
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                    National Frameworks
                  </h4>
                  <p className="text-[11px] text-slate-500 font-semibold mt-0.5">
                    Engage inside large scale prominent central government
                    mandates.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants || fadeInUp}
                className="flex gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100"
              >
                <Award className="text-[#D32F2F] shrink-0" size={20} />
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                    Career Advancement
                  </h4>
                  <p className="text-[11px] text-slate-500 font-semibold mt-0.5">
                    Review channels built intentionally for consistent vertical
                    team scale.
                  </p>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants || fadeInUp}
                className="flex gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100"
              >
                <HelpCircle className="text-[#D32F2F] shrink-0" size={20} />
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                    Step Into Your Future
                  </h4>
                  <p className="text-[11px] text-slate-500 font-semibold mt-0.5">
                    Fill out our quick application form to initiate real-time
                    profile screening.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Alert Guide Banner */}
            <motion.div
              variants={fadeInUp}
              className="bg-amber-50 border border-amber-200 text-amber-900 p-4 rounded-xl text-xs flex gap-3 shadow-xs"
            >
              <Info size={18} className="text-amber-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-black uppercase tracking-wider text-amber-800 block text-[10px]">
                  Candidate Navigation Guide
                </span>
                <p className="font-medium text-slate-700 leading-relaxed">
                  If you want to apply generally, please use the{" "}
                  <span className="font-bold text-slate-900">
                    Quick Apply form
                  </span>{" "}
                  on the left. Alternatively, you can explore specific roles
                  under{" "}
                  <span className="font-bold text-slate-900">
                    Current Openings
                  </span>{" "}
                  on the right side and click 'Apply' to submit your
                  application.{" "}
                  <span className="text-[#D32F2F] font-semibold">
                    Even if your preferred vacancy is not currently listed, you
                    are encouraged to submit the form by specifying your current
                    position; our HR team will review your profile and contact
                    you as soon as a matching opportunity aligns.
                  </span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* SEARCH BAR ELEMENT Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 space-y-4">
          <motion.div
            variants={fadeInUp}
            className="bg-white border border-slate-200 p-2.5 rounded-xl flex items-center shadow-xs max-w-md focus-within:border-slate-400 transition-colors"
          >
            <Search size={14} className="text-slate-400 ml-2 mr-2 shrink-0" />
            <input
              type="text"
              placeholder="Search active roles by titles or locations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-xs font-bold focus:outline-none text-slate-800"
            />
          </motion.div>

          {/* DYNAMIC SEARCH RESULTS LIST POPPED TOGGLE */}
          <AnimatePresence mode="popLayout">
            {searchQuery && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="max-w-xl bg-slate-100 border border-slate-200 p-4 rounded-2xl space-y-3 max-h-[400px] overflow-y-auto shadow-inner no-scrollbar"
              >
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">
                  Search Results ({filteredJobs.length})
                </div>
                {filteredJobs.map((job) => (
                  <div
                    key={`search-res-${job.id}`}
                    className="group/card bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between gap-3 shadow-2xs transition-all duration-300 hover:border-slate-400 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1.5 flex-1 text-left">
                        <strong className="text-xs font-black text-slate-900 block tracking-tight group-hover/card:text-[#D32F2F] transition-colors">
                          {job.title}
                        </strong>
                        <div className="text-[11px] font-semibold text-slate-600 leading-relaxed max-h-[34px] overflow-hidden group-hover/card:max-h-[800px] whitespace-pre-line transition-all duration-500">
                          {job.companyDetails}
                        </div>
                        <div className="flex items-center gap-1 text-[9px] text-[#D32F2F] font-black uppercase tracking-wider pt-0.5">
                          <MapPin size={9} />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleApplyAction(job.title)}
                        className="shrink-0 py-2 px-3 bg-slate-900 text-white text-[10px] font-black uppercase tracking-wider rounded-lg hover:bg-[#D32F2F] transition-all cursor-pointer shadow-xs"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                ))}
                {filteredJobs.length === 0 && (
                  <div className="text-center py-6 text-slate-400 text-xs font-bold">
                    No matching jobs found.
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* MAIN FORMS CONTAINER WITH GRID */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT APPLICATION FORM */}
          <motion.form
            variants={fadeInUp}
            onSubmit={handleFormSubmit}
            className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 space-y-6 shadow-xs"
          >
            <div className="border-b border-slate-100 pb-3">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">
                Quick Application Interface
              </h3>
              <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                Please provide true records matching your credentials.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Applying For Field */}
              <div className="md:col-span-2 space-y-1">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                  Applying For *
                </label>
                <input
                  type="text"
                  name="applyingFor"
                  required
                  value={formData.applyingFor}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold focus:bg-white focus:border-[#D32F2F] focus:outline-none text-slate-800 transition-all"
                  placeholder="Select job from right panel or specify general track"
                />
              </div>
              {/* Full Name Field */}
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold focus:bg-white focus:border-[#D32F2F] focus:outline-none text-slate-800 transition-all"
                />
              </div>
              {/* Phone Number Field */}
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold focus:bg-white focus:border-[#D32F2F] focus:outline-none text-slate-800 transition-all"
                />
              </div>
              {/* Email Address Field */}
              <div className="md:col-span-2 space-y-1">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold focus:bg-white focus:border-[#D32F2F] focus:outline-none text-slate-800 transition-all"
                />
              </div>
              {/* Qualification Input */}
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                  Qualification *
                </label>
                <input
                  type="text"
                  name="qualification"
                  required
                  value={formData.qualification}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold focus:bg-white focus:border-[#D32F2F] focus:outline-none text-slate-800 transition-all"
                  placeholder="e.g. Graduate / B.Tech"
                />
              </div>
              {/* Total Experience Input */}
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                  Total Experience *
                </label>
                <input
                  type="text"
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold focus:bg-white focus:border-[#D32F2F] focus:outline-none text-slate-800 transition-all"
                  placeholder="e.g. 2 Years"
                />
              </div>
              {/* File Upload CV Node */}
              <div className="md:col-span-2 space-y-1">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                  Upload CV * (PDF / Word Format)
                </label>
                <div className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs font-bold flex items-center relative">
                  <FileText size={14} className="text-slate-400 mr-2" />
                  <input
                    type="file"
                    id="cv-file-node"
                    required
                    accept=".pdf,.doc,.docx"
                    className="w-full text-slate-500 file:py-1 file:px-2 file:rounded file:border-0 file:text-[10px] file:font-black file:bg-slate-200 hover:file:bg-slate-300"
                  />
                </div>
              </div>
              {/* Current Company Field */}
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                  Current Company
                </label>
                <input
                  type="text"
                  name="currentCompany"
                  value={formData.currentCompany}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold focus:bg-white focus:border-[#D32F2F] focus:outline-none text-slate-800 transition-all"
                />
              </div>
              {/* Current Designation Field */}
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                  Current Designation
                </label>
                <input
                  type="text"
                  name="currentDesignation"
                  value={formData.currentDesignation}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold focus:bg-white focus:border-[#D32F2F] focus:outline-none text-slate-800 transition-all"
                />
              </div>
              {/* Salary CTC Fields */}
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                  Current Salary (CTC P.A.)
                </label>
                <input
                  type="text"
                  name="currentSalary"
                  value={formData.currentSalary}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold focus:bg-white focus:border-[#D32F2F] focus:outline-none text-slate-800 transition-all"
                  placeholder="e.g. 3,60,000"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                  Expected Salary *
                </label>
                <input
                  type="text"
                  name="expectedSalary"
                  required
                  value={formData.expectedSalary}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold focus:bg-white focus:border-[#D32F2F] focus:outline-none text-slate-800 transition-all"
                  placeholder="e.g. 4,50,000"
                />
              </div>
              {/* Textarea Skills Blocks */}
              <div className="md:col-span-2 space-y-1">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                  Key Skills *
                </label>
                <textarea
                  name="keySkills"
                  required
                  rows={2}
                  value={formData.keySkills}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold focus:bg-white focus:border-[#D32F2F] focus:outline-none text-slate-800 transition-all resize-none"
                  placeholder="e.g. Center Operations, Team Management"
                />
              </div>
              <div className="md:col-span-2 space-y-1">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                  Reason for Job Change
                </label>
                <textarea
                  name="reasonChange"
                  rows={2}
                  value={formData.reasonChange}
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs font-bold focus:bg-white focus:border-[#D32F2F] focus:outline-none text-slate-800 transition-all resize-none"
                />
              </div>
            </div>

            {/* Relocation Policy Checkboxes */}
            <div className="space-y-2 pt-3 border-t border-slate-100">
              <label className="flex items-start gap-2.5 text-[11px] font-semibold text-slate-600 cursor-pointer select-none">
                <input
                  type="checkbox"
                  name="relocate"
                  checked={formData.relocate}
                  onChange={handleInputChange}
                  className="mt-0.5 rounded border-slate-300 bg-slate-50 text-[#D32F2F] focus:ring-0 accent-[#D32F2F]"
                />
                <span>
                  Ready to relocate and work in the Delhi NCR area.{" "}
                  <span className="text-slate-400 font-medium">
                    (non-required)
                  </span>
                </span>
              </label>
              <label className="flex items-start gap-2.5 text-[11px] font-semibold text-slate-600 cursor-pointer select-none">
                <input
                  type="checkbox"
                  name="transferPolicy"
                  checked={formData.transferPolicy}
                  onChange={handleInputChange}
                  className="mt-0.5 rounded border-slate-300 bg-slate-50 text-[#D32F2F] focus:ring-0 accent-[#D32F2F]"
                />
                <span>
                  I agree to the company’s transfer policy and relocation
                  requirements.{" "}
                  <span className="text-slate-400 font-medium">
                    (non-required)
                  </span>
                </span>
              </label>
            </div>

            {/* Submit Status Variant Button */}
            <button
              type="submit"
              className={`w-full py-4 rounded-xl text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 text-white transition-all duration-300 cursor-pointer ${
                submitStatus === "success"
                  ? "bg-emerald-600"
                  : submitStatus === "error"
                    ? "bg-rose-600"
                    : "bg-black"
              }`}
            >
              <Send size={13} />
              <span>
                {submitStatus === "success"
                  ? "Submit Successful"
                  : submitStatus === "error"
                    ? "Submission Error - Retry"
                    : "Submit Application"}
              </span>
            </button>
          </motion.form>

          {/* RIGHT SIDE FEED PANEL WITH TICKER */}
          <div className="lg:col-span-5 space-y-4">
            <motion.div
              variants={fadeInUp}
              className="flex items-center justify-between"
            >
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">
                  Current Openings
                </h3>
                <p className="text-[10px] text-slate-500 font-bold mt-0.5">
                  Hover to pause scroll & expand full description.
                </p>
              </div>
              <div className="flex items-center gap-1 bg-white border border-slate-200 px-2.5 py-1 rounded-lg text-[10px] font-black text-slate-600 uppercase tracking-wider">
                <span>Live Feed</span>
                <ArrowUp size={11} className="text-[#D32F2F] animate-bounce" />
              </div>
            </motion.div>

            {/* Interactive Scroll Feed Wrapper */}
            <motion.div
              variants={fadeInUp}
              className="w-full bg-slate-100 border border-slate-200 rounded-2xl h-[680px] overflow-hidden relative shadow-inner"
            >
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-slate-100 via-slate-100/80 to-transparent z-20 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-100 via-slate-100/80 to-transparent z-20 pointer-events-none" />

              <div
                ref={tickerRef}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="w-full h-full overflow-y-auto p-4 space-y-3 no-scrollbar select-none"
              >
                {[
                  ...filteredJobs,
                  ...filteredJobs,
                  ...filteredJobs,
                  ...filteredJobs,
                ].map((job, idx) => (
                  <div
                    key={`${job.id}-${idx}`}
                    className="group/card bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between gap-3 shadow-2xs transition-all duration-300 hover:border-slate-400 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1.5 flex-1 text-left">
                        <strong className="text-xs font-black text-slate-900 block tracking-tight group-hover/card:text-[#D32F2F] transition-colors">
                          {job.title}
                        </strong>
                        <div className="text-[11px] font-semibold text-slate-600 leading-relaxed transition-all duration-500 max-h-[34px] overflow-hidden group-hover/card:max-h-[800px] whitespace-pre-line">
                          {job.companyDetails}
                        </div>
                        <div className="flex items-center gap-1 text-[9px] text-[#D32F2F] font-black uppercase tracking-wider pt-0.5">
                          <MapPin size={9} />
                          <span>{job.location}</span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleApplyAction(job.title)}
                        className="shrink-0 py-2 px-3 bg-slate-900 text-white text-[10px] font-black uppercase tracking-wider rounded-lg hover:bg-[#D32F2F] transition-all cursor-pointer shadow-xs"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                ))}
                {filteredJobs.length === 0 && (
                  <div className="text-center py-24 text-slate-400 text-xs font-bold">
                    No active profiles loaded.
                  </div>
                )}
              </div>
            </motion.div>

            {/* Talent Newsletter Static Widget */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="w-full bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-2xl p-5 shadow-xs text-left relative overflow-hidden group transition-all duration-300 hover:shadow-md hover:border-slate-300"
            >
              {/* Subtle background ambient glow on hover */}
              <div className="absolute -right-12 -top-12 w-24 h-24 bg-red-500/5 rounded-full blur-xl group-hover:bg-red-500/10 transition-all duration-500 pointer-events-none" />

              <AnimatePresence >
                {!isSubscribed ? (
                  <motion.div
                    key="subscription-form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    {/* Header section with Badge Accent */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 bg-red-50 rounded-lg text-[#D32F2F]">
                          <Bell size={14} className="animate-pulse" />
                        </div>
                        <div>
                          <h4 className="text-[11px] font-black uppercase tracking-widest text-slate-900">
                            Career Alerts
                          </h4>
                          <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                            Live Updates
                          </p>
                        </div>
                      </div>
                      <span className="bg-slate-100 text-slate-600 font-bold px-2 py-0.5 rounded-md text-[9px] uppercase tracking-wider">
                        Internal Pool
                      </span>
                    </div>

                    {/* Description Body */}
                    <p className="text-[11px] font-semibold text-slate-500 leading-relaxed">
                      Don't miss out on upcoming mass recruitment drives and
                      mandate-specific postings at JITM Skills. Subscribe to our
                      distribution list.
                    </p>

                    {/* Form Interaction Elements */}
                    <form onSubmit={handleSubscribe} className="space-y-2">
                      <div className="bg-slate-50 border border-slate-200 focus-within:border-slate-400 focus-within:bg-white p-2 rounded-xl flex items-center shadow-2xs transition-all duration-200">
                        <Mail
                          size={13}
                          className="text-slate-400 ml-1 mr-2 shrink-0"
                        />
                        <input
                          type="email"
                          required
                          placeholder="Enter email for job alerts..."
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-transparent text-[11px] font-bold text-slate-800 placeholder-slate-400 focus:outline-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-2.5 bg-slate-900 text-white text-[10px] font-black uppercase tracking-wider rounded-xl hover:bg-[#D32F2F] active:scale-[0.99] transition-all cursor-pointer shadow-xs flex items-center justify-center gap-1.5 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        <span>
                          {isLoading ? "Connecting..." : "Join Talent Pool"}
                        </span>
                        {!isLoading && (
                          <ArrowRight
                            size={11}
                            className="group-hover:translate-x-0.5 transition-transform"
                          />
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  /* SUCCESS STATE (Fully Interactive & Premium) */
                  <motion.div
                    key="success-state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-4 text-center space-y-3"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, type: "spring", stiffness: 200 }}
                      className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-100"
                    >
                      <CheckCircle2 size={20} />
                    </motion.div>
                    <div className="space-y-1">
                      <h5 className="text-xs font-black uppercase tracking-wider text-slate-900">
                        Successfully Subscribed!
                      </h5>
                      <p className="text-[11px] font-medium text-slate-500 px-2">
                        Aapka email alert pipeline active ho gaya hai. Critical
                        job drivers trigger hote hi updates mil jayenge.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsSubscribed(false)}
                      className="text-[10px] font-black text-[#D32F2F] uppercase tracking-widest hover:underline cursor-pointer pt-1"
                    >
                      Change Email
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>

        {/* PIPELINE WORKFLOW POPUP OVERLAY */}
        <AnimatePresence>
          {popupJob && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed bottom-6 right-6 z-[9999] max-w-sm w-full bg-slate-900 border-l-4 border-l-[#D32F2F] shadow-2xl rounded-xl p-4 text-white text-left"
            >
              <div className="flex items-start justify-between border-b border-white/10 pb-2 mb-2">
                <div className="flex items-center gap-1.5 text-amber-400">
                  <Info size={14} />
                  <span className="text-[10px] font-black uppercase tracking-widest">
                    Workflow Guide System
                  </span>
                </div>
                <button
                  onClick={() => setPopupJob(null)}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X size={14} />
                </button>
              </div>

              <div className="space-y-2.5 text-[11px] font-medium leading-relaxed text-slate-300">
                <p>
                  Selected Profile:{" "}
                  <span className="text-white font-black underline decoration-red-500 underline-offset-2">
                    {popupJob}
                  </span>
                </p>
                <div className="space-y-1.5 text-slate-400 font-semibold bg-black/30 p-2 rounded-lg border border-white/5">
                  <div>
                    <strong className="text-slate-200">1. How to fill?</strong>{" "}
                    Please complete the Quick Apply form with accurate details
                    to best showcase your skills. Upload your CV.
                  </div>
                  <div className="pt-1 border-t border-white/5">
                    <strong className="text-slate-200">2. What next?</strong>{" "}
                    The HR team will review your profile to match roles. We'll
                    connect soon.
                  </div>
                </div>
                <div className="text-[9px] text-slate-500 font-black uppercase tracking-widest flex items-center justify-between pt-1">
                  <span>System Pipeline Node</span>
                  <span className="text-[#D32F2F] animate-pulse">
                    7s Auto-dismiss
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      {/* ───────────────────────────────────────────────────────────────── */}
      {/* DARK THEME BENTO GRID: JITM GROWTH & CULTURE METRICS             */}
      {/* ───────────────────────────────────────────────────────────────── */}
      <section className="pt-20 pb-16 bg-slate-950 text-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* LEFT SIDE: CAREER CENTRIC HEADLINE (Takes 5 Columns) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <motion.span
                  variants={fadeInUp}
                  className="text-[#D32F2F] text-[10px] font-black uppercase tracking-widest block"
                >
                  WORK CULTURE & FUTURE HUB
                </motion.span>

                <motion.h2
                  variants={fadeInUp}
                  className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none"
                >
                  Grow Your <br />
                  <span className="text-[#D32F2F] italic">Career With Us</span>
                </motion.h2>

                <motion.p
                  variants={fadeInUp}
                  className="text-xs font-semibold text-slate-400 leading-relaxed pt-2"
                >
                  At JITM Skills, we don't just offer jobs; we build sustainable
                  career trajectories. Work in a dynamic ecosystem that directly
                  impacts national development, operations management, and
                  corporate scale execution.
                </motion.p>
              </div>

              {/* Highlighted Internal Culture Quote */}
              <motion.div
                variants={fadeInUp}
                className="p-5 bg-slate-900 rounded-2xl border-l-4 border-[#D32F2F] shadow-md mt-auto"
              >
                <p className="text-slate-200 font-bold italic text-[11px] leading-relaxed">
                  "We value ownership, transparency, and consistent execution.
                  Every role here directly contributes to transforming India's
                  professional talent matrix."
                </p>
              </motion.div>
            </div>

            {/* RIGHT SIDE: PREMIUM JOB BENEFIT BENTO GRID (Takes 7 Columns) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Bento Card 1: Professional Growth Track */}
              <motion.div
                variants={fadeInUp}
                className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex flex-col justify-between group hover:border-slate-700 transition-all duration-300 shadow-md"
              >
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-red-950/50 text-[#D32F2F] flex items-center justify-center font-black text-xs border border-red-900/30">
                    01
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-white group-hover:text-[#D32F2F] transition-colors">
                    Vertical Scale Track
                  </h4>
                  <p className="text-[11px] font-medium text-slate-400 leading-normal">
                    Structured appraisal frameworks and periodic evaluation
                    timelines designed intentionally for consistent team
                    leadership scaling.
                  </p>
                </div>
                <span className="text-[9px] font-black tracking-widest uppercase text-slate-500 pt-4 block border-t border-slate-800 mt-4">
                  Career Advancement
                </span>
              </motion.div>

              {/* Bento Card 2: National Impact Scale (Intentionally Highlighted/Contrasted) */}
              <motion.div
                variants={fadeInUp}
                className="bg-white text-slate-950 p-5 rounded-2xl flex flex-col justify-between shadow-xl"
              >
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center font-black text-xs">
                    02
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-950">
                    Large Scale Mandates
                  </h4>
                  <p className="text-[11px] font-bold text-slate-700 leading-normal">
                    Get direct hands-on exposure working inside prominent
                    central government flagship schemes, multi-state projects,
                    and CSR tasks.
                  </p>
                </div>
                <span className="text-[9px] font-black tracking-widest uppercase text-slate-400 pt-4 block border-t border-slate-200 mt-4">
                  Project Exposure
                </span>
              </motion.div>

              {/* Bento Card 3: Work Environment & Collaboration */}
              <motion.div
                variants={fadeInUp}
                className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex flex-col justify-between group hover:border-slate-700 transition-all duration-300 shadow-md"
              >
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-red-950/50 text-[#D32F2F] flex items-center justify-center font-black text-xs border border-red-900/30">
                    03
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-white group-hover:text-[#D32F2F] transition-colors">
                    Collaborative Ecosystem
                  </h4>
                  <p className="text-[11px] font-medium text-slate-400 leading-normal">
                    Work closely with cross-functional technical teams, sector
                    specialists, and industry consultants to build modern
                    solutions.
                  </p>
                </div>
                <span className="text-[9px] font-black tracking-widest uppercase text-slate-500 pt-4 block border-t border-slate-800 mt-4">
                  Team Culture
                </span>
              </motion.div>

              {/* Bento Card 4: Skill Development Domain */}
              <motion.div
                variants={fadeInUp}
                className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex flex-col justify-between group hover:border-slate-700 transition-all duration-300 shadow-md"
              >
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-red-950/50 text-[#D32F2F] flex items-center justify-center font-black text-xs border border-red-900/30">
                    04
                  </div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-white group-hover:text-[#D32F2F] transition-colors">
                    Skill Domain Mastery
                  </h4>
                  <p className="text-[11px] font-medium text-slate-400 leading-normal">
                    Deep-dive into industrial training frameworks, vocational
                    standards, and operational architectures of active skill
                    sectors.
                  </p>
                </div>
                <span className="text-[9px] font-black tracking-widest uppercase text-slate-500 pt-4 block border-t border-slate-800 mt-4">
                  Domain Expertise
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────────── */}
      {/* LIGHT THEME: INTRO & CULTURE BENCHMARKS SECTION                  */}
      {/* ───────────────────────────────────────────────────────────────── */}
      <section className="pt-20 pb-16 bg-slate-100 text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            {/* TOP COMPONENT: HERO TEXT GRID */}
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <motion.span
                  variants={fadeInUp}
                  className="text-[#D32F2F] text-[10px] font-black uppercase tracking-widest block"
                >
                  Careers at JITM Skills
                </motion.span>

                <motion.h2
                  variants={fadeInUp}
                  className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none"
                >
                  Build a Career <br />
                  <span className="text-[#D32F2F] italic">
                    that Creates Impact
                  </span>
                </motion.h2>

                <motion.p
                  variants={fadeInUp}
                  className="text-xs font-semibold text-slate-500 leading-relaxed pt-2 max-w-2xl"
                >
                  At JITM Skills, careers are not just about jobs—they are about
                  empowering lives, strengthening communities, and shaping
                  India’s skilled workforce. We invite passionate professionals,
                  trainers, and young talents to join us in delivering
                  large-scale skill development, employability, and
                  entrepreneurship initiatives across the country.
                </motion.p>
              </div>

              {/* Right Side: Quote Card */}
              <div className="lg:col-span-5 lg:pt-8">
                <motion.div
                  variants={fadeInUp}
                  className="p-6 bg-white rounded-2xl border border-slate-200 shadow-2xs relative overflow-hidden group"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#D32F2F]" />
                  <p className="text-slate-800 font-bold italic text-xs leading-relaxed">
                    "JITM Skills provides a platform to learn, lead, and make a
                    difference."
                  </p>
                  <span className="text-[9px] font-black tracking-widest uppercase text-slate-400 block pt-3">
                    — Leadership Core Vision
                  </span>
                </motion.div>
              </div>
            </div>

            {/* BOTTOM COMPONENT: WHY WORK WITH US (4-COLUMN CARD CONTAINER) */}
            <div className="space-y-6">
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-2 border-b border-slate-200 pb-3"
              >
                <Sparkles size={14} className="text-[#D32F2F]" />
                <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-900">
                  Why Work With Us
                </h3>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Card 1: Government & CSR */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white p-5 rounded-2xl border border-slate-200/80 flex flex-col justify-between hover:border-slate-400 transition-all shadow-2xs"
                >
                  <div className="space-y-2">
                    <div className="w-7 h-7 rounded-lg bg-red-50 text-[#D32F2F] flex items-center justify-center font-black text-[11px]">
                      01
                    </div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                      Government & CSR
                    </h4>
                    <p className="text-[11px] font-medium text-slate-500 leading-normal">
                      Opportunity to work directly on prestigious Govt of India
                      & State Skill Missions.
                    </p>
                  </div>
                </motion.div>

                {/* Card 2: Multi-State Exposure */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white p-5 rounded-2xl border border-slate-200/80 flex flex-col justify-between hover:border-slate-400 transition-all shadow-2xs"
                >
                  <div className="space-y-2">
                    <div className="w-7 h-7 rounded-lg bg-red-50 text-[#D32F2F] flex items-center justify-center font-black text-[11px]">
                      02
                    </div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                      Multi-State Exposure
                    </h4>
                    <p className="text-[11px] font-medium text-slate-500 leading-normal">
                      Gain immense exposure to multi-state operations and
                      diverse sectors across India.
                    </p>
                  </div>
                </motion.div>

                {/* Card 3: Professional Culture */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white p-5 rounded-2xl border border-slate-200/80 flex flex-col justify-between hover:border-slate-400 transition-all shadow-2xs"
                >
                  <div className="space-y-2">
                    <div className="w-7 h-7 rounded-lg bg-red-50 text-[#D32F2F] flex items-center justify-center font-black text-[11px]">
                      03
                    </div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                      Professional Culture
                    </h4>
                    <p className="text-[11px] font-medium text-slate-500 leading-normal">
                      Transparent processes, ethical governance, and a
                      professional work environment.
                    </p>
                  </div>
                </motion.div>

                {/* Card 4: Learning & Growth */}
                <motion.div
                  variants={fadeInUp}
                  className="bg-white p-5 rounded-2xl border border-slate-200/80 flex flex-col justify-between hover:border-slate-400 transition-all shadow-2xs"
                >
                  <div className="space-y-2">
                    <div className="w-7 h-7 rounded-lg bg-red-50 text-[#D32F2F] flex items-center justify-center font-black text-[11px]">
                      04
                    </div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                      Learning & Growth
                    </h4>
                    <p className="text-[11px] font-medium text-slate-500 leading-normal">
                      Continuous learning mechanisms and rapid career growth
                      opportunities for every professional.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
