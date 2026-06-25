import { Link } from "react-router-dom";
import {
  Home,
  ChevronRight,
  GraduationCap,
  Sparkles,
  Briefcase,
  Award,
  User,
  Phone,
  Mail,
  Upload,
  CheckCircle2,
  XCircle,
  BookOpen,
  Eye,
  X,
  FileCheck,
  ShieldAlert,
  QrCode,
  Database,
  Users,
  ArrowUpRight,
  Globe,
  Compass,
  Handshake,
  TrendingUp,
  MapPin,
  Rocket,
  UserCheck,
} from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeInUp,
  containerVariants,
  cardVariants,
  itemVariants,
} from "../utils/animations";
import JitmLogo from "../assets/images/jitm skills logo-old.png";
import LearnersTrained from "../assets/images/Learners Trained.webp";
const API_URL = import.meta.env.VITE_API_URL;

export default function InternshipHero() {
  // Modal State for Certificate Preview
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form Operational States
  const [formData, setFormData] = useState({
    domain: "",
    fullName: "",
    phoneNo: "",
    emailId: "",
    document: null,
    agreeTerms: false,
  });
  const [submitStatus, setSubmitStatus] = useState(null);

  // Auto-close notification alert handler (Strict 7-Second Rule)
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.domain ||
      !formData.fullName ||
      !formData.phoneNo ||
      !formData.emailId ||
      !formData.agreeTerms
    ) {
      setSubmitStatus("failed");
      return;
    }

    setIsSubmitting(true);

    try {
      // File payload structure mapping (Multipart form data infrastructure)
      const dataPayload = new FormData();
      dataPayload.append("domain", formData.domain);
      dataPayload.append("fullName", formData.fullName);
      dataPayload.append("phoneNo", formData.phoneNo);
      dataPayload.append("emailId", formData.emailId);
      if (formData.document) {
        dataPayload.append("document", formData.document);
      }

      const response = await fetch(`${API_URL}/v1/internship-apply`, {
        method: "POST",
        body: dataPayload, // No explicit Content-Type header to let browser set boundary parameters automatically
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        setSubmitStatus("success");
        setFormData({
          domain: "",
          fullName: "",
          phoneNo: "",
          emailId: "",
          document: null,
          agreeTerms: false,
        });
      } else {
        setSubmitStatus("failed");
      }
    } catch (error) {
      console.error("Dossier Ingest Error:", error);
      setSubmitStatus("failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const coreDomains = [
    "Training Operations",
    "HR & Talent Development",
    "Project Coordination & MIS",
    "CSR & Govt Program Support",
    "Digital Marketing & Content",
    "Monitoring & Evaluation",
    "Geriatric Care & Old Age Caregiving",
    "Healthcare Services & Medical Assistance",
    "Biomedical Tech & Medical Equipment Management",
    "Civil Infrastructure & Construction Management",
    "UI/UX & Advanced Graphic Designing",
    "AR/VR Development & Immersive Technologies",
  ];
  return (
    <>
      <section className="w-full mt-6 lg:mt-12 pt-24 lg:pt-36 pb-20 border-b border-white/[0.04] relative z-10 bg-[#070A13] text-white overflow-hidden">
        {/* Decorative Grid Light Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* LEFT SIDE: BREADCRUMB & HEADING TEXT */}
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
                  Internships
                </span>
              </div>

              {/* Glowing Dynamic Badge */}
              <div className="block">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-950/40 via-red-900/20 to-transparent border border-red-500/30 text-red-400 px-4 py-2 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-[0_0_20px_rgba(239,68,68,0.05)]">
                  <Sparkles size={12} className="text-red-500" />
                  <span>Launch Your Career</span>
                </div>
              </div>

              {/* Main Animated Title Header */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                JITM Skills{" "}
                <span className=" text-[#D32F2F]">Internship Program</span>
              </h1>

              {/* Context Description Text */}
              <p className="text-sm text-slate-400 font-medium leading-relaxed max-w-2xl">
                We don't just provide training; we prepare students for the
                corporate world. Work on real-world projects through our live
                internship programs, learn directly from industry experts, and
                give your career the perfect headstart.
              </p>
            </div>

            {/* RIGHT SIDE: PREMIUM BENTO INDICATOR CARD */}
            <div className="lg:col-span-4 w-full flex lg:justify-end">
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 flex items-center justify-between shadow-2xl w-full max-w-sm group hover:border-red-500/30 transition-all duration-300 relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-red-500/5 rounded-full blur-xl pointer-events-none" />
                <div className="flex items-center gap-4">
                  <div className="p-3.5 bg-white/[0.03] text-red-500 rounded-xl border border-white/[0.05] group-hover:bg-red-500 group-hover:text-white transition-all duration-500 transform group-hover:rotate-3">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      For Students
                    </h4>
                    <p className="text-sm font-black text-white mt-0.5">
                      Live Industry Projects
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-black px-2.5 py-1 rounded-md text-[9px] uppercase tracking-wider inline-block">
                    Apply Now
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-20 bg-[#F8FAFC] text-slate-900 relative z-20">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Master 12-Column Grid Matrix */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* ================= LEFT SIDE: INSIGHTS & BENEFITS (7 Columns) ================= */}
            <div className="lg:col-span-7 space-y-8">
              {/* Top Introductory Bento Header */}
              <div className="bg-white border border-slate-200/60 p-8 rounded-3xl shadow-[0_2px_4px_rgba(0,0,0,0.01)] space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-1.5 bg-red-50 border border-red-100 text-[#D32F2F] px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider w-max"
                >
                  <BookOpen size={12} />
                  <span>For Students & Fresh Graduates</span>
                </motion.div>

                <h2 className="text-3xl font-black tracking-tight text-slate-900">
                  Internship{" "}
                  <span className="text-[#D32F2F]">Opportunities</span>
                </h2>

                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  JITM Skills offers structured internship programs designed to
                  build practical skills, professional confidence, and career
                  clarity through real-world exposure in the social impact,
                  healthcare, and infrastructure development sectors.
                </p>
              </div>

              {/* Sub-Section 1: Internship Domains */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 px-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D32F2F]" />
                  <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-400">
                    Available Corporate Domains
                  </h3>
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                >
                  {coreDomains.map((domain, index) => (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      whileHover={{ y: -3, transition: { duration: 0.2 } }}
                      className="bg-white border border-slate-200/70 p-4 rounded-xl flex items-center justify-between group hover:border-red-500/20 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-slate-300 group-hover:bg-[#D32F2F] transition-colors" />
                        <span className="text-xs font-bold text-slate-800 group-hover:text-slate-950">
                          {domain}
                        </span>
                      </div>
                      <ChevronRight
                        size={14}
                        className="text-slate-300 group-hover:text-[#D32F2F] transform group-hover:translate-x-0.5 transition-all"
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Sub-Section 2: Key Benefits */}
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-2 px-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#D32F2F]" />
                  <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-400">
                    Key Professional Benefits
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {[
                    "National-level Projects",
                    "Mentorship from Experts",
                    "Field Operation Exposure",
                    "Certificate of Internship",
                    "Performance-based LOR",
                  ].map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-slate-50 border border-slate-200/60 p-4 rounded-xl text-center flex flex-col justify-between items-center group hover:bg-white hover:border-slate-300 transition-all"
                    >
                      <span className="text-slate-400 group-hover:text-[#D32F2F] font-black text-xs block transition-colors">
                        0{index + 1}
                      </span>
                      <p className="text-[10px] font-bold text-slate-700 leading-snug mt-2">
                        {benefit}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sub-Section 3: Completion Mandate Card WITH MODAL TRIGGER */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/[0.02] rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/[0.04] text-red-400 border border-white/[0.05] rounded-xl shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-red-400 block">
                      Upon Successful Completion
                    </span>
                    <h4 className="text-sm font-black text-white tracking-tight mt-0.5">
                      Official Internship Certificate
                    </h4>
                    <p className="text-[11px] text-slate-400 font-medium mt-0.5">
                      Verified credentials aligned with global corporate
                      industry benchmarks.
                    </p>
                  </div>
                </div>

                {/* Dynamic Interactive Action Trigger */}
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.12] hover:bg-red-600 hover:border-red-500 hover:text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-2.5 rounded-xl text-slate-200 shrink-0 transition-all duration-300 active:scale-95 group/btn"
                >
                  <Eye
                    size={13}
                    className="text-red-400 group-hover/btn:text-white transition-colors"
                  />
                  <span>View Sample</span>
                </button>
              </div>
            </div>

            {/* ================= RIGHT SIDE: APPLICATION FORM CONSOLE (5 Columns) ================= */}
            <div className="lg:col-span-5">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#D32F2F] to-orange-500" />

                <div className="mb-6 space-y-2 border-b border-slate-100 pb-5">
                  <h3 className="text-lg font-black tracking-tight text-slate-900">
                    Apply for Internship
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    Kickstart your career journey with us and become part of a
                    purpose-driven organization. Explore opportunities to grow.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <AnimatePresence>
                    {submitStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-3.5 bg-emerald-50 border border-emerald-100 text-emerald-800 rounded-xl text-xs flex items-center gap-2 font-semibold shadow-sm"
                      >
                        <CheckCircle2
                          size={15}
                          className="shrink-0 text-emerald-600"
                        />
                        <span>
                          Application transmitted successfully! It will close in
                          7s.
                        </span>
                      </motion.div>
                    )}
                    {submitStatus === "failed" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-3.5 bg-red-50 border border-red-100 text-red-800 rounded-xl text-xs flex items-center gap-2 font-semibold shadow-sm"
                      >
                        <XCircle size={15} className="shrink-0 text-red-600" />
                        <span>
                          Please complete all mandatory profile fields.
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Dropdown Input */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1">
                      <Briefcase size={10} className="text-[#D32F2F]" /> Select
                      Domain
                    </label>
                    <select
                      required
                      value={formData.domain}
                      onChange={(e) =>
                        setFormData({ ...formData, domain: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-red-500 focus:bg-white transition-all font-semibold cursor-pointer"
                    >
                      <option value="" disabled>
                        Choose your interest...
                      </option>
                      {coreDomains.map((domain, idx) => (
                        <option key={idx} value={domain}>
                          {domain}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Text Inputs */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1">
                      <User size={10} /> Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your complete name"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:bg-white transition-all font-medium"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1">
                      <Phone size={10} /> Phone No
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phoneNo}
                      onChange={(e) =>
                        setFormData({ ...formData, phoneNo: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:bg-white transition-all font-medium"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1">
                      <Mail size={10} /> Email ID
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@college.com"
                      value={formData.emailId}
                      onChange={(e) =>
                        setFormData({ ...formData, emailId: e.target.value })
                      }
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-red-500 focus:bg-white transition-all font-medium"
                    />
                  </div>

                  {/* Upload Section */}
                  <div className="space-y-1">
                    <label className="text-[9px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1">
                      <Upload size={10} /> Upload CV / College ID
                    </label>
                    <div className="border border-dashed border-slate-200 bg-slate-50 rounded-xl p-4 text-center relative hover:border-red-500/30 hover:bg-white transition-all group">
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            document: e.target.files[0] || null,
                          })
                        }
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <Upload
                        size={16}
                        className="mx-auto text-slate-400 group-hover:text-red-500 mb-1.5 transition-colors"
                      />
                      <p className="text-[11px] text-slate-700 font-medium truncate px-2">
                        {formData.document
                          ? formData.document.name
                          : "Attach asset dossier"}
                      </p>
                      <p className="text-[9px] text-slate-400 font-bold mt-0.5">
                        PDF, DOC, or Image up to 5MB
                      </p>
                    </div>
                  </div>

                  {/* Compliance Checkbox */}
                  <div className="flex items-start gap-2.5 pt-2">
                    <input
                      type="checkbox"
                      id="relocationCheck"
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
                      htmlFor="relocationCheck"
                      className="text-[10px] text-slate-500 leading-normal select-none cursor-pointer font-medium"
                    >
                      Willing to attend internship sessions across Delhi NCR and
                      comply with company transfer and relocation policies.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#D32F2F] hover:bg-slate-950 text-white font-bold text-xs tracking-wider uppercase py-3.5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md mt-2 active:scale-[0.98] disabled:bg-slate-400"
                  >
                    {isSubmitting
                      ? "Processing Asset Routing..."
                      : "Submit Application"}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ================================================================================= */}
        {/* ============ NO-SCROLLBAR HIGHLY RESPONSIVE CERTIFICATE PREVIEW MODAL =========== */}
        {/* ================================================================================= */}
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-4">
              {/* Backdrop Blur Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="absolute inset-0 bg-slate-950/50 backdrop-blur-md"
              />

              {/* Modal Container: Optimized aspect box with strictly NO scrollbars */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ type: "spring", duration: 0.4 }}
                className="bg-white border border-slate-200 w-full max-w-2xl rounded-2xl shadow-2xl relative z-10 overflow-hidden flex flex-col"
              >
                {/* Modal Top Header Area */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 bg-slate-50">
                  <div className="flex items-center gap-2">
                    <FileCheck size={14} className="text-emerald-600" />
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-700">
                      Official Document Verification Preview
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="p-1 rounded-md bg-white border border-slate-200 hover:bg-slate-50 text-slate-400 hover:text-slate-900 transition-all"
                  >
                    <X size={14} />
                  </button>
                </div>

                {/* Viewport Center Matrix: Perfect clean bounding layout with NO scrollbar */}
                <div className="p-4 sm:p-6 bg-slate-50 flex justify-center items-center overflow-hidden">
                  {/* ---------------- HARDCORE HIGH-END PREMIUM CERTIFICATE DESIGN ---------------- */}
                  <div className="w-full aspect-[1.414/1] bg-white border-[6px] sm:border-[10px] border-slate-900 p-4 sm:p-6 md:p-8 relative shadow-lg overflow-hidden flex flex-col justify-between select-none">
                    {/* Luxury Corner Geometry Accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#D32F2F] m-1" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#D32F2F] m-1" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#D32F2F] m-1" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#D32F2F] m-1" />

                    {/* 1. ACTUAL LOGO AS WATERMARK IN BACKGROUND CENTERED */}
                    <div className="absolute inset-0 opacity-[0.04] flex flex-col items-center justify-center pointer-events-none select-none">
                      <img
                        loading="lazy"
                        src={JitmLogo}
                        alt="JITM Skills Watermark"
                        className="w-1/3 object-contain mb-1"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }} // Fallback safe if image path changes
                      />
                      <span className="text-xl sm:text-2xl font-black tracking-widest text-slate-900">
                        JITM SKILLS
                      </span>
                    </div>

                    {/* Top Certificate Header With PNG BRAND LOGO */}
                    <div className="text-center relative z-10 space-y-1">
                      <div className="flex items-center justify-center gap-2">
                        {/* 2. REAL PNG LOGO ASSET IMPLEMENTATION */}
                        <img
                          loading="lazy"
                          src={JitmLogo}
                          alt="JITM Skills Logo"
                          className="h-5 sm:h-7 object-contain"
                          placeholder="branding-logo"
                        />
                      </div>
                      <div className="h-[1.5px] w-10 bg-[#D32F2F] mx-auto" />
                      <p className="text-[7px] uppercase font-black tracking-widest text-slate-400">
                        Corporate Training & Impact Ventures
                      </p>
                    </div>

                    {/* Main Core Validation Content */}
                    <div className="text-center my-2 sm:my-3 relative z-10 space-y-2">
                      <span className="text-[9px] italic font-serif font-medium text-slate-400 block">
                        This credential explicitly validates that
                      </span>

                      <h4 className="text-sm sm:text-lg font-serif font-black tracking-tight text-slate-900 border-b border-slate-200 max-w-xs mx-auto pb-0.5 px-2">
                        John Doe
                      </h4>

                      <p className="text-[8px] sm:text-[10px] text-slate-500 max-w-md mx-auto font-medium leading-relaxed">
                        has successfully executed all corporate responsibilities
                        and demonstrated expert proficiency during the tenure of
                        the professional immersion program as an intern in the
                        domain of
                      </p>

                      <span className="text-[8px] sm:text-[10px] font-black text-[#D32F2F] tracking-wide uppercase bg-red-50 border border-red-100/60 px-3 py-0.5 rounded-md inline-block">
                        Advanced UI/UX & Frontend Implementations
                      </span>
                    </div>

                    {/* Footer Corporate Verification Row with Colorful Sign/DB Badges */}
                    <div className="grid grid-cols-3 items-end pt-2 border-t border-slate-100 relative z-10">
                      {/* Authorized Signatory 1 + COLORFUL AWARD ICON */}
                      <div className="text-center space-y-1">
                        <div className="font-serif italic text-[9px] text-slate-800 font-bold h-4 flex items-center justify-center gap-1">
                          <Award
                            size={11}
                            className="text-amber-500 fill-amber-400"
                          />
                          <span className="text-[9px]">Director Sign</span>
                        </div>
                        <div className="h-[1px] w-16 bg-slate-200 mx-auto" />
                        <span className="text-[6px] font-black uppercase tracking-wider text-slate-400 block">
                          Managing Director
                        </span>
                      </div>

                      {/* Tamperproof QR & LIVE COLORFUL DATABASE SUCCESS ICON */}
                      <div className="flex flex-col items-center justify-center space-y-1">
                        <div className="flex items-center gap-1 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded-full text-[6px] font-black uppercase tracking-wider text-emerald-700">
                          <Database
                            size={8}
                            className="text-emerald-500 fill-emerald-500 animate-pulse"
                          />
                          <span>DB Verified</span>
                        </div>
                        <QrCode size={24} className="text-slate-800" />
                        <span className="text-[5px] font-mono text-slate-400">
                          ID: JITM-2026-8941
                        </span>
                      </div>

                      {/* Authorized Signatory 2 + COLORFUL SUCCESS SPARKLE */}
                      <div className="text-center space-y-1">
                        <div className="font-serif italic text-[9px] text-slate-800 font-bold h-4 flex items-center justify-center gap-1">
                          <Sparkles
                            size={11}
                            className="text-blue-500 fill-blue-400"
                          />
                          <span className="text-[9px]">HR Exec Sign</span>
                        </div>
                        <div className="h-[1px] w-16 bg-slate-200 mx-auto" />
                        <span className="text-[6px] font-black uppercase tracking-wider text-slate-400 block">
                          Head of Talent
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* ---------------- END OF CERTIFICATE DESIGN ---------------- */}
                </div>

                {/* Modal Informative Bottom Warning Bar */}
                <div className="bg-slate-950 text-slate-400 text-[8px] sm:text-[9px] px-4 py-2 border-t border-slate-800 flex items-center gap-1.5 font-medium">
                  <ShieldAlert size={10} className="text-red-500 shrink-0" />
                  <span>
                    This model displays a cryptographically secure sample
                    framework. Active certificates include tamperproof
                    holographic metadata layer arrays.
                  </span>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>

      <section className="w-full py-24 bg-[#0B0F19] text-white overflow-hidden relative">
        {/* Premium Background Ambient Glow Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/[0.03] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/[0.02] rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* ================= LEFT COLUMN: HERO CONTENT METADATA (7 Columns) ================= */}
            <div className="lg:col-span-7 space-y-8">
              {/* Top Stats Floating Indicator (50K+ Learners Trained) */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-3 bg-white/[0.03] border border-white/[0.08] p-2 pr-5 rounded-full backdrop-blur-md"
              >
                <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-[#D32F2F] to-orange-500 flex items-center justify-center text-white shadow-lg">
                  <Users size={18} />
                </div>
                <div>
                  <div className="text-sm font-black tracking-tight text-white">
                    50K+
                  </div>
                  <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                    Learners Trained Effectively
                  </div>
                </div>
              </motion.div>

              {/* Main Branding Typography */}
              <div className="space-y-4">
                <motion.span
                  variants={itemVariants}
                  className="text-[11px] font-black uppercase tracking-[0.25em] text-[#D32F2F] block"
                >
                  Powering India's Youth
                </motion.span>

                <motion.h2
                  variants={itemVariants}
                  className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white"
                >
                  Shaping a Skilled <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                    Nation, One Learner
                  </span>{" "}
                  <br />
                  <span className="text-[#D32F2F]">at a Time.</span>
                </motion.h2>

                <motion.p
                  variants={itemVariants}
                  className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed max-w-2xl pt-2"
                >
                  JITM Skills is at the forefront of the vocational training
                  revolution in India. From remote villages to bustling urban
                  centers, our training programs bridge the gap between
                  potential and employability. We don't just teach; we
                  transform.
                </motion.p>
              </div>

              {/* Interactive Dynamic Navigation CTA Router */}
              <motion.div variants={itemVariants} className="pt-2">
                <Link
                  to="/contactUs"
                  className="inline-flex items-center gap-3 bg-[#D32F2F] hover:bg-white hover:text-slate-950 text-white text-xs font-black uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300 group shadow-[0_4px_20px_rgba(211,47,47,0.25)] hover:shadow-white/[0.1] active:scale-95"
                >
                  <span>Explore Opportunities</span>
                  <ArrowUpRight
                    size={16}
                    className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                  />
                </Link>
              </motion.div>

              {/* Bottom Secondary Grid Matrix (Pan-India & Accredited Grid + 200+ Centers Placement) */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-white/[0.06]"
              >
                {/* Box 1: Pan India */}
                <div className="bg-white/[0.02] border border-white/[0.05] p-5 rounded-2xl space-y-2 hover:bg-white/[0.04] transition-colors group">
                  <div className="p-2.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-xl w-max group-hover:scale-110 transition-transform">
                    <Globe size={16} />
                  </div>
                  <h4 className="text-xs font-black tracking-wide uppercase text-white">
                    Pan-India Presence
                  </h4>
                  <p className="text-[11px] font-bold text-slate-400 leading-snug">
                    Active deployment footprint in 15+ States.
                  </p>
                </div>

                {/* Box 2: Accredited Framework */}
                <div className="bg-white/[0.02] border border-white/[0.05] p-5 rounded-2xl space-y-2 hover:bg-white/[0.04] transition-colors group">
                  <div className="p-2.5 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-xl w-max group-hover:scale-110 transition-transform">
                    <Award size={16} />
                  </div>
                  <h4 className="text-xs font-black tracking-wide uppercase text-white">
                    Accredited Core
                  </h4>
                  <p className="text-[11px] font-bold text-slate-400 leading-snug">
                    NSDC & Sector Skill Council (SSC) Aligned Operations.
                  </p>
                </div>

                {/* Box 3: BOTTOM PLACEMENT FOR 200+ TRAINING CENTERS */}
                <div className="bg-gradient-to-br from-[#111625] to-[#161d30] border border-white/[0.08] p-5 rounded-2xl flex flex-col justify-between relative overflow-hidden group hover:border-red-500/30 transition-all shadow-inner">
                  <div className="absolute -bottom-4 -right-4 text-white/[0.01] font-black text-7xl select-none pointer-events-none group-hover:text-white/[0.02] transition-colors">
                    200
                  </div>
                  <div className="p-2.5 bg-red-500/10 text-red-400 border border-red-500/20 rounded-xl w-max group-hover:scale-110 transition-transform">
                    <Compass size={16} />
                  </div>
                  <div className="mt-4">
                    <h4 className="text-lg font-black tracking-tight text-white group-hover:text-[#D32F2F] transition-colors">
                      200+ Centers
                    </h4>
                    <p className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mt-0.5">
                      Vibrant Training Infrastructure
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* ================= RIGHT COLUMN: HIGH-IMPACT PREMIUM IMAGE MATRIX (5 Columns) ================= */}
            <div className="lg:col-span-5 relative">
              <motion.div
                variants={itemVariants}
                className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border border-white/[0.1] shadow-2xl group bg-[#111622]"
              >
                {/* Premium Gradient Overlay Coating */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent opacity-80 z-10 transition-opacity group-hover:opacity-60" />
                <div className="absolute inset-0 bg-[#D32F2F]/10 mix-blend-color opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                {/* Core Image Element Asset */}
                <img
                  loading="lazy"
                  src={LearnersTrained}
                  alt="Shaping a Skilled Nation"
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Floating Geometric Card Inside Image Asset Matrix */}
                <div className="absolute bottom-6 left-6 right-6 p-5 bg-[#0B0F19]/80 backdrop-blur-xl border border-white/[0.08] rounded-2xl z-20 space-y-1 transform group-hover:translate-y-[-4px] transition-transform duration-300">
                  <span className="text-[9px] font-black text-[#D32F2F] uppercase tracking-widest block">
                    Vocational Revolution
                  </span>
                  <h3 className="text-sm font-black text-white tracking-tight">
                    Transforming Potential into Global Employability
                  </h3>
                </div>
              </motion.div>

              {/* Decorative Grid Mesh Background Artifact under the Image */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-500/10 rounded-full blur-xl pointer-events-none -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none -z-10" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="w-full py-20 bg-[#F8FAFC] text-slate-900 overflow-hidden relative">
        {/* Structural Subtle Glow Accents */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-red-500/[0.02] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/[0.02] rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Typography Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D32F2F] bg-red-50 border border-red-100/80 px-3 py-1 rounded-md inline-block">
              Our Operational Footprint
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
              Empowering Communities Through{" "}
              <span className="text-[#D32F2F]">Measurable Impact</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-xl mx-auto">
              A comprehensive overview of our commitment toward skill
              development, corporate alignments, and sustainable livelihood
              generation across India.
            </p>
          </div>

          {/* Master Bento Grid Console (3 Columns Layout) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Card 1: CSR Partners */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-[0_2px_4px_rgba(0,0,0,0.01)] flex flex-col justify-between group hover:border-red-500/20 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className="p-3 bg-red-50 text-[#D32F2F] border border-red-100 rounded-2xl w-max group-hover:scale-110 transition-transform">
                <Handshake size={22} className="fill-red-500/10" />
              </div>
              <div className="mt-8 space-y-1">
                <div className="text-4xl font-black tracking-tight text-slate-900 group-hover:text-[#D32F2F] transition-colors">
                  100+
                </div>
                <h3 className="text-xs font-black tracking-wider uppercase text-slate-400">
                  CSR Partners
                </h3>
                <p className="text-[11px] font-medium text-slate-500 pt-1 leading-relaxed">
                  Trusted by top-tier conglomerates for corporate social
                  responsibility delivery matrix execution.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Placement Rate (Highlighted Premium Look) */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-lg flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/[0.04] rounded-full blur-2xl pointer-events-none" />
              <div className="p-3 bg-white/[0.04] text-emerald-400 border border-white/[0.06] rounded-2xl w-max group-hover:scale-110 transition-transform">
                <TrendingUp size={22} />
              </div>
              <div className="mt-8 space-y-1 relative z-10">
                <div className="text-4xl font-black tracking-tight text-white flex items-baseline gap-1">
                  <span>85%</span>
                  <span className="text-xs font-bold text-emerald-400">
                    Placement Track
                  </span>
                </div>
                <h3 className="text-xs font-black tracking-wider uppercase text-slate-500">
                  Placement Rate
                </h3>
                <p className="text-[11px] font-medium text-slate-400 pt-1 leading-relaxed">
                  Robust ecosystem matching skilled labor pools directly with
                  active industry demand aggregates.
                </p>
              </div>
            </motion.div>

            {/* Card 3: Cities Covered */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-[0_2px_4px_rgba(0,0,0,0.01)] flex flex-col justify-between group hover:border-red-500/20 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className="p-3 bg-blue-50 text-blue-600 border border-blue-100 rounded-2xl w-max group-hover:scale-110 transition-transform">
                <MapPin size={22} className="fill-blue-500/10" />
              </div>
              <div className="mt-8 space-y-1">
                <div className="text-4xl font-black tracking-tight text-slate-900 group-hover:text-[#D32F2F] transition-colors">
                  500+
                </div>
                <h3 className="text-xs font-black tracking-wider uppercase text-slate-400">
                  Cities Covered
                </h3>
                <p className="text-[11px] font-medium text-slate-500 pt-1 leading-relaxed">
                  Deep horizontal saturation driving vocational training assets
                  into tier-2 and tier-3 ecosystems.
                </p>
              </div>
            </motion.div>

            {/* Card 4: Students Trained */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-[0_2px_4px_rgba(0,0,0,0.01)] flex flex-col justify-between group hover:border-red-500/20 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className="p-3 bg-purple-50 text-purple-600 border border-purple-100 rounded-2xl w-max group-hover:scale-110 transition-transform">
                <GraduationCap size={22} className="fill-purple-500/10" />
              </div>
              <div className="mt-8 space-y-1">
                <div className="text-4xl font-black tracking-tight text-slate-900 group-hover:text-[#D32F2F] transition-colors">
                  2.5L+
                </div>
                <h3 className="text-xs font-black tracking-wider uppercase text-slate-400">
                  Students Trained
                </h3>
                <p className="text-[11px] font-medium text-slate-500 pt-1 leading-relaxed">
                  Massive legacy framework scaling generational upskilling
                  modules across specialized domains.
                </p>
              </div>
            </motion.div>

            {/* Card 5: Live Projects */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-[0_2px_4px_rgba(0,0,0,0.01)] flex flex-col justify-between group hover:border-red-500/20 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className="p-3 bg-amber-50 text-amber-600 border border-amber-100 rounded-2xl w-max group-hover:scale-110 transition-transform">
                <Rocket size={22} className="fill-amber-500/10" />
              </div>
              <div className="mt-8 space-y-1">
                <div className="text-4xl font-black tracking-tight text-slate-900 group-hover:text-[#D32F2F] transition-colors">
                  50+
                </div>
                <h3 className="text-xs font-black tracking-wider uppercase text-slate-400">
                  Live Projects
                </h3>
                <p className="text-[11px] font-medium text-slate-500 pt-1 leading-relaxed">
                  Active deployment models simultaneously running across
                  multi-state industry divisions.
                </p>
              </div>
            </motion.div>

            {/* Card 6: Expert Mentors */}
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-3xl shadow-[0_2px_4px_rgba(0,0,0,0.01)] flex flex-col justify-between group hover:border-red-500/20 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
            >
              <div className="p-3 bg-cyan-50 text-cyan-600 border border-cyan-100 rounded-2xl w-max group-hover:scale-110 transition-transform">
                <UserCheck size={22} className="fill-cyan-500/10" />
              </div>
              <div className="mt-8 space-y-1">
                <div className="text-4xl font-black tracking-tight text-slate-900 group-hover:text-[#D32F2F] transition-colors">
                  200+
                </div>
                <h3 className="text-xs font-black tracking-wider uppercase text-slate-400">
                  Expert Mentors
                </h3>
                <p className="text-[11px] font-medium text-slate-500 pt-1 leading-relaxed">
                  Certified pedagogues and industry practitioners leading
                  on-ground human resource development.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
