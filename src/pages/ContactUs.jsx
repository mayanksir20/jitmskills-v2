import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const API_URL = import.meta.env.VITE_API_URL;
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ChevronRight,
  MessageSquare,
  Sparkles,
  ArrowUpRight,
  HelpCircle,
} from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Front-end Validation Check
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setIsSubmitting(false);
      Swal.fire({
        icon: "error",
        title:
          '<span style="font-family:sans-serif; font-weight:800; color:#D32F2F;">Transmission Failed</span>',
        text: "Please fill all required fields before dispatching.",
        confirmButtonColor: "#D32F2F",
        customClass: { popup: "rounded-[24px]" },
      });
      return;
    }

    try {
      // 📍 Node.js Dedicated Corporate Endpoint Matrix
      const response = await fetch(`${API_URL}/v1/corporate-contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        // --- 7-Second Automatic Auto-Closure Rules integrated cleanly ---
        Swal.fire({
          icon: "success",
          title:
            '<span style="font-family:sans-serif; font-weight:800; color:#1A1A1A;">Message Dispatched!</span>',
          html: '<p style="font-family:sans-serif; color:#555; font-size:14px;">Your query data has been logged and safely channeled to info@jitmskills.com.</p>',
          confirmButtonColor: "#0F172A",
          timer: 7000,
          timerProgressBar: true,
          customClass: { popup: "rounded-[24px]" },
        });

        // Reset fields state directly
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Server Error");
      }
    } catch (error) {
      console.error("Transmission System Failure:", error);
      Swal.fire({
        icon: "error",
        title:
          '<span style="font-family:sans-serif; font-weight:800; color:#D32F2F;">Transmission Error</span>',
        text: "Failed to route data through the server layer. Please try again later.",
        confirmButtonColor: "#D32F2F",
        customClass: { popup: "rounded-[24px]" },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen text-[#0F172A] font-sans antialiased overflow-x-hidden">
      {/* 🚀 1. HERO BREADCRUMB HEADER (PREMIUM DARK COMPLEX) */}
      <div className="relative bg-[#0F172A] pt-28 lg:pt-48 pb-20 px-6 overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-600/5 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <nav className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md mb-8">
            <Link
              to="/"
              className="text-xs font-bold text-slate-400 hover:text-white transition-colors"
            >
              Home
            </Link>
            <ChevronRight size={12} className="text-slate-600" />
            <span className="text-xs font-black text-red-500 uppercase tracking-wider">
              Contact Matrix
            </span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <span className="text-red-500 font-black uppercase tracking-[0.25em] text-[10px] block mb-3">
                Connect Ecosystem
              </span>
              <h1 className="text-4xl lg:text-6xl font-black text-white italic uppercase leading-none">
                Let's Build <span className="text-red-600">Together</span>
              </h1>
            </div>
            <p className="text-slate-400 text-xs lg:text-sm font-medium italic max-w-md lg:max-w-xl border-l-2 border-red-600 pl-4 lg:mb-1 leading-relaxed">
              Direct operational routing for corporate queries, structural
              development tracks, and institutional partnerships across regions.
            </p>
          </div>
        </div>
      </div>

      {/* 🚀 MAIN CONTENT BODY CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 px-3 py-1 rounded-md mb-4">
            <HelpCircle size={14} className="text-red-600" />
            <span className="text-[10px] font-black uppercase tracking-widest text-red-600">
              Corporate Help Desk
            </span>
          </div>
          <h2 className="text-2xl lg:text-4xl font-black text-[#0F172A] uppercase italic mb-3">
            Communication channels <span className="text-red-600">&</span> Query
            Ingestor
          </h2>
          <p className="text-slate-500 text-xs lg:text-sm font-medium leading-relaxed">
            Select your preferred channel below. You can directly locate our
            primary corporate parameters or stream your requirements through our
            secure client inquiry management pipeline.
          </p>
        </div>

        {/* 🚀 2. PERFECT EQUALIZED BENTO GRID LAYOUT */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* --- LEFT SIDE: UNIFIED DATA CARD --- */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#0F172A] rounded-[32px] p-8 lg:p-10 text-white relative overflow-hidden group shadow-xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/10 blur-[60px] pointer-events-none" />

            <div className="relative z-10 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-md mb-4">
                  <Sparkles size={12} className="text-red-500" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">
                    HQ Parameters
                  </span>
                </div>
                <h3 className="text-2xl font-black uppercase italic text-white">
                  Corporate Headquarter
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-red-500 shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-0.5">
                      Location Hub
                    </h5>
                    <p className="text-xs text-slate-200 font-medium leading-relaxed">
                      JITM Skills Pvt. Ltd.
                      <br />
                      Plot No. 44, Sector 44, Institutional Area,
                      <br />
                      Gurugram, Haryana - 122003, India.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-blue-400 shrink-0">
                    <Phone size={16} />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-0.5">
                      Call Matrix
                    </h5>
                    <a
                      href="tel:+9101204282837"
                      className="block text-xs font-bold text-slate-100 hover:text-red-500 transition-colors"
                    >
                      +91 0120 428 2837
                    </a>
                    <a
                      href="tel:+919971545133"
                      className="block text-xs font-bold text-slate-100 hover:text-red-500 transition-colors"
                    >
                      +91 9971545133
                    </a>
                    <span className="block text-[11px] text-slate-500 font-medium mt-1">
                      Alternative Desk: +91 9971515084
                    </span>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-emerald-400 shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-0.5">
                      Digital Inflow
                    </h5>
                    <a
                      href="mailto:info@jitmskills.com"
                      className="block text-xs font-bold text-slate-100 hover:text-red-500 transition-colors"
                    >
                      info@jitmskills.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-amber-400 shrink-0">
                    <Clock size={16} />
                  </div>
                  <div>
                    <h5 className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-0.5">
                      Operational Windows
                    </h5>
                    <p className="text-xs text-slate-200 font-semibold">
                      Mon - Sat / 09:30 AM - 06:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span className="font-bold uppercase tracking-widest text-[9px]">
                Awaiting Instructions
              </span>
              <div className="w-7 h-7 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                <ArrowUpRight size={14} />
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: MODERN FORM INTERFACE --- */}
          <div className="lg:col-span-7 bg-white rounded-[32px] p-8 lg:p-10 border border-slate-200/50 shadow-xl shadow-slate-100/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-600">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-[#0F172A] uppercase italic">
                    Secure Routing Hub
                  </h3>
                  <p className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                    Initialize Client Correspondence
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      Identity Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your clean identity"
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3.5 text-xs font-semibold outline-none focus:border-red-500 focus:bg-white transition-all text-[#0F172A]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="name@domain.com"
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3.5 text-xs font-semibold outline-none focus:border-red-500 focus:bg-white transition-all text-[#0F172A]"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="10 digit vector (Optional)"
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3.5 text-xs font-semibold outline-none focus:border-red-500 focus:bg-white transition-all text-[#0F172A]"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      Subject Intent
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Query Classification"
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3.5 text-xs font-semibold outline-none focus:border-red-500 focus:bg-white transition-all text-[#0F172A]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                    Core Context Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Describe your requirements in detail..."
                    className="w-full bg-slate-50 border border-slate-200/80 rounded-xl px-4 py-3.5 text-xs font-semibold outline-none focus:border-red-500 focus:bg-white transition-all resize-none text-[#0F172A]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-red-600 text-white p-4 rounded-xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-[#0F172A] active:scale-[0.99] transition-all duration-300 shadow-md disabled:bg-slate-300 cursor-pointer border-none outline-none mt-2"
                >
                  {isSubmitting ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <span>Transmit Request</span>
                      <Send size={14} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* 🚀 3. HIGH-END MAP */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full h-[400px] relative bg-slate-200 overflow-hidden border-t border-slate-200/60"
      >
        <iframe
          title="Corporate HQ Map Vector"
          src="https://maps.google.com/maps?q=JITM%20Skills%20Pvt.%20Ltd.%20Plot%20No.%2044,%20Sector%2044,%20Gurugram&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-none filter grayscale opacity-95 contrast-[1.1] hover:grayscale-0 transition-all duration-1000"
          allowFullScreen=""
          loading="lazy"
        />

        <div className="absolute bottom-6 left-6 bg-[#0F172A] text-white py-2.5 px-4 rounded-lg shadow-xl flex items-center gap-3 border border-white/5 pointer-events-none">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
          <span className="text-[9px] font-black uppercase tracking-widest text-slate-300">
            Live Server Tracking Active
          </span>
        </div>
      </motion.div>
    </div>
  );
}
