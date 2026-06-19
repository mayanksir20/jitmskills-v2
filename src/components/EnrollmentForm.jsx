import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import {
  Send,
  Loader2,
  User,
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  BookOpen,
} from "lucide-react";

const EnrollmentForm = ({
  title = "Quick Enrollment",
  defaultCourse = "",
  defaultType = "free",
  onSuccess,
}) => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formType, setFormType] = useState(defaultType);
  const [selectedCourse, setSelectedCourse] = useState(defaultCourse);

  const freePrograms = [
    "Retail Sector Development",
    "Apparel & Tailoring",
    "Electronics & Mobile Repair",
    "Healthcare & Nursing Assistant",
    "IT & Digital Skills",
    "Hospitality & Tourism Skills",
    "Agriculture & Allied Skills",
    "Custom Corporate Trainings",
    "Construction Industry 4.0",
    "Care Economy & Healthcare",
  ];

  const paidPrograms = [
    "Frontend Developer",
    "Web Design",
    "WordPress & CMS Platforms",
    "Digital Marketing",
    "Computer Basics + Advanced Excel",
    "Customer Care Executive",
    "Sales & Telecalling Training",
    "Office Admin / MIS Executive",
    "HR Recruiter Training",
    "Hotel Management Basics",
    "Front Office Executive",
    "Travel & Tourism Executive",
    "Graphic Design",
    "Video Editing",
    "Film Production Basics",
    "Content Creation & Social Media",
    "Photography Basics",
    "AR/VR Development",
    "Artificial Intelligence (AI) & Tools",
    "Data Analytics",
    "Lab Assistant Training",
    "Phlebotomist",
    "Medical Lab Technician",
    "Medical Equipment Handling Support",
    "Radiology Assistant",
    "OT Assistant (Operation Theatre)",
    "Medical Billing & Coding",
    "Front Desk Executive (Medical)",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 📍 PURE FIELD OBJECT STRUCTURING: Saari exact unique fields map ki hain
    const payloadData = {
      name: e.target.user_name.value,
      email: e.target.user_email.value,
      phone: e.target.user_phone.value,
      location: e.target.user_location.value,
      programType: formType,
      selectedCourse: selectedCourse,
      message: e.target.message.value,
    };

    try {
      // 📍 Dedicated Enrollment Endpoint Hit Matrix
      const response = await fetch("http://localhost:5000/api/v1/student-enrollment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payloadData),
      });

      const result = await response.json();

      if (response.ok && result.status === "success") {
        // --- 7-Second Automatic Auto-Closure Rules integrated ---
        Swal.fire({
          title: '<span style="font-family:sans-serif; font-weight:800; color:#1A1A1A;">Application Sent!</span>',
          html: '<p style="font-family:sans-serif; color:#555; font-size:14px;">Thank you for applying. Your enrollment telemetry details have been sent to info@jitmskills.com.</p>',
          icon: "success",
          confirmButtonColor: "#0F172A",
          timer: 7000,
          timerProgressBar: true,
          customClass: { popup: "rounded-2xl" },
        }).then(() => {
          formRef.current.reset();
          setSelectedCourse("");
          if (onSuccess) onSuccess();
        });
      } else {
        throw new Error(result.message || "Server Transmit Error");
      }
    } catch (error) {
      console.error("Enrollment Matrix Streaming Error:", error);
      Swal.fire({
        title: '<span style="font-family:sans-serif; font-weight:800; color:#D32F2F;">Error!</span>',
        text: "Something went wrong while communicating with the server layer.",
        icon: "error",
        confirmButtonColor: "#D32F2F",
        customClass: { popup: "rounded-2xl" },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-4xl mx-auto bg-white border border-slate-200 rounded-[40px] p-6 md:p-10 shadow-2xl relative overflow-hidden"
    >
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#D32F2F]/5 rounded-full blur-3xl" />

      <div className="text-center mb-6">
        <h2 className="text-3xl font-black text-slate-900 italic uppercase tracking-tighter">
          {title} <span className="text-[#D32F2F]">Now</span>
        </h2>
        <div className="h-1 w-20 bg-[#D32F2F] mx-auto mt-1" />
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4"
      >
        <div className="space-y-4">
          <div className="space-y-1">
            <label className="text-[9px] font-black uppercase text-slate-400 flex items-center gap-2 tracking-widest">
              <User size={12} className="text-[#D32F2F]" /> Full Name
            </label>
            <input
              required
              name="user_name"
              type="text"
              placeholder="Your Name"
              className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-[#D32F2F] outline-none transition-all font-medium text-slate-800"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[9px] font-black uppercase text-slate-400 flex items-center gap-2 tracking-widest">
              <Mail size={12} className="text-[#D32F2F]" /> Email Address
            </label>
            <input
              required
              name="user_email"
              type="email"
              placeholder="email@example.com"
              className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-[#D32F2F] outline-none transition-all font-medium text-slate-800"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[9px] font-black uppercase text-slate-400 flex items-center gap-2 tracking-widest">
              <Phone size={12} className="text-[#D32F2F]" /> Contact Number
            </label>
            <input
              required
              name="user_phone"
              type="tel"
              pattern="[0-9]{10}"
              placeholder="10-digit mobile number"
              className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-[#D32F2F] outline-none transition-all font-medium text-slate-800"
            />
          </div>

          <div className="space-y-1">
            <label className="text-[9px] font-black uppercase text-slate-400 flex items-center gap-2 tracking-widest">
              <MapPin size={12} className="text-[#D32F2F]" /> Your Location
            </label>
            <input
              required
              name="user_location"
              type="text"
              placeholder="City, State"
              className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-[#D32F2F] outline-none transition-all font-medium text-slate-800"
            />
          </div>
        </div>

        <div className="space-y-4 flex flex-col justify-between">
          <div className="p-1 bg-slate-100 rounded-xl flex gap-1">
            <button
              type="button"
              onClick={() => {
                setFormType("free");
                setSelectedCourse("");
              }}
              className={`flex-1 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all cursor-pointer ${formType === "free" ? "bg-white shadow-sm text-[#D32F2F]" : "text-slate-400"}`}
            >
              Free Programs
            </button>
            <button
              type="button"
              onClick={() => {
                setFormType("paid");
                setSelectedCourse("");
              }}
              className={`flex-1 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all cursor-pointer ${formType === "paid" ? "bg-white shadow-sm text-[#D32F2F]" : "text-slate-400"}`}
            >
              Paid Programs
            </button>
          </div>

          <div className="space-y-1">
            <label className="text-[9px] font-black uppercase text-slate-400 flex items-center gap-2 tracking-widest">
              <BookOpen size={12} className="text-[#D32F2F]" /> Apply for Course
            </label>
            <div className="relative">
              <select
                name="selected_course"
                required
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-[#D32F2F] outline-none transition-all appearance-none cursor-pointer font-medium text-slate-800 pr-10"
              >
                <option value="">Select a Course</option>
                {formType === "free"
                  ? freePrograms.map((c, i) => (
                      <option key={i} value={c}>
                        {c}
                      </option>
                    ))
                  : paidPrograms.map((c, i) => (
                      <option key={i} value={c}>
                        {c}
                      </option>
                    ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[9px] font-black uppercase text-slate-400 flex items-center gap-2 tracking-widest">
              <MessageSquare size={12} className="text-[#D32F2F]" /> Any Message
            </label>
            <textarea
              name="message"
              rows="2"
              placeholder="Additional details..."
              className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:border-[#D32F2F] outline-none transition-all resize-none font-medium text-slate-800"
            ></textarea>
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full py-4 bg-slate-900 text-white font-black uppercase text-[10px] tracking-[0.2em] rounded-xl hover:bg-[#D32F2F] transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin" size={16} />
            ) : (
              <>
                <Send size={14} /> Submit Application
              </>
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default EnrollmentForm;