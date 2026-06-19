import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  User,
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
} from "lucide-react";
import Swal from "sweetalert2";

const GetInTouch = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // 🚀 Added loading state control

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 📍 Alag dedicated endpoint par hit kiya jisse koi field mix na ho
      const response = await fetch(
        "http://https://jitmskills-v2.onrender.com/api/v1/contact-inquiry",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            city: formData.city,
            state: formData.state,
            message: formData.message,
          }),
        },
      );

      const result = await response.json();

      if (response.ok && result.status === "success") {
        onClose();

        Swal.fire({
          icon: "success",
          title:
            '<span style="font-family:sans-serif; font-weight:800; color:#1A1A1A;">Inquiry Logged!</span>',
          html: '<p style="font-family:sans-serif; color:#555; font-size:14px;">Your message has been safely delivered to info@jitmskills.com. We will review your parameters shortly.</p>',
          confirmButtonColor: "#0F172A",
          timer: 7000,
          timerProgressBar: true,
          customClass: { popup: "rounded-2xl" },
        });

        // Form fields completely reset
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          state: "",
          message: "",
        });
      } else {
        throw new Error(result.message || "Server Error");
      }
    } catch (error) {
      console.error("Transmission Error:", error);
      Swal.fire({
        icon: "error",
        title:
          '<span style="font-family:sans-serif; font-weight:800; color:#D32F2F;">Submission Failed</span>',
        text: "Failed to route data through the server layer. Please try again.",
        confirmButtonColor: "#D32F2F",
        customClass: { popup: "rounded-2xl" },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-8 overflow-hidden">
        {/* Full Backdrop Mask */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/95 backdrop-blur-md"
        />

        {/* 80% Scale Dynamic Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ type: "spring", damping: 25, stiffness: 250 }}
          className="relative w-full max-w-4xl h-[85vh] md:h-[80vh] bg-white rounded-[40px] overflow-hidden shadow-2xl z-10 flex flex-col border border-slate-100"
        >
          {/* Header Area */}
          <div className="bg-[#0F172A] p-6 md:p-8 text-white relative shrink-0">
            <button
              onClick={onClose}
              disabled={isSubmitting}
              className="absolute top-6 right-6 p-2.5 bg-white/5 hover:bg-red-600 text-white rounded-xl transition-all disabled:opacity-50"
            >
              <X size={20} />
            </button>
            <span className="text-[9px] bg-red-600 text-white px-3 py-1 rounded-full font-black uppercase tracking-widest block w-fit mb-2">
              JITM Desk Connection
            </span>
            <h3 className="text-2xl font-black uppercase tracking-tight italic">
              Get In Touch With Us
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Submit your inquiry details below to initialize processing
              mapping.
            </p>
          </div>

          {/* Form Scroll Context Core */}
          <form
            onSubmit={handleSubmit}
            className="p-6 md:p-10 space-y-5 overflow-y-auto flex-1 text-left"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Full Name */}
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">
                  Full Name *
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-slate-400">
                    <User size={16} />
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-600 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">
                  Email Address *
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-slate-400">
                    <Mail size={16} />
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@domain.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-600 focus:bg-white transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Phone Number */}
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">
                  Contact Number *
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-slate-400">
                    <Phone size={16} />
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-Digit Mobile"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-600 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* City */}
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">
                  City *
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-slate-400">
                    <MapPin size={16} />
                  </span>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Dehradun"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-600 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* State */}
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">
                  State *
                </label>
                <div className="relative flex items-center">
                  <span className="absolute left-4 text-slate-400">
                    <MapPin size={16} />
                  </span>
                  <input
                    type="text"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="e.g. Uttarakhand"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-600 focus:bg-white transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Message Textarea */}
            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">
                Message Description *
              </label>
              <div className="relative flex items-start">
                <span className="absolute left-4 top-4 text-slate-400">
                  <MessageSquare size={16} />
                </span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your requirement parameters..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3.5 pl-11 pr-4 text-xs font-bold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-red-600 focus:bg-white transition-all resize-none"
                />
              </div>
            </div>

            {/* Submission Control */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#0F172A] text-white py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-red-600 transition-all shadow-xl flex items-center justify-center gap-2 mt-2 disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span>Processing Stream...</span>
              ) : (
                <>
                  <span>Submit Framework Request</span>
                  <Send size={14} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default GetInTouch;
