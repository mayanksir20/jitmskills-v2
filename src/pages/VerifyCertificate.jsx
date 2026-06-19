import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Home,
  ShieldCheck,
  FileCheck,
  Search,
  CheckCircle2,
  Award,
  Calendar,
  User,
  IdCard,
} from "lucide-react";

export default function CertificateHeroSection() {
  const [rollNumber, setRollNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [student, setStudent] = useState(null);
  const [error, setError] = useState("");

  const verifyCertificate = async () => {
    if (!rollNumber.trim()) return;

    setLoading(true);
    setError("");
    setStudent(null);

    try {
      const response = await fetch(
        `http://localhost:5000/api/students/verify/${rollNumber}`,
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Certificate not found");
        setLoading(false);
        return;
      }

      setStudent(data.student);
    } catch (err) {
      console.log(err);
      setError("Verification failed");
    }

    setLoading(false);
  };

  const getCourseStatus = (createdAt) => {
    const startDate = new Date(createdAt);

    const endDate = new Date(startDate);

    endDate.setMonth(endDate.getMonth() + 3);

    const today = new Date();

    if (today >= endDate) {
      return endDate.toLocaleDateString();
    }

    return "Training Currently In Progress";
  };

  return (
    <>
      <section className="w-full mt-12 pt-36 pb-20 border-b border-white/[0.04] relative z-10 bg-[#070A13] text-white overflow-hidden">
        {/* Decorative Grid Light Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* LEFT SIDE: BREADCRUMB & HEADING TEXT */}
            <div className="lg:col-span-8 space-y-6">
              {/* Breadcrumb Micro UI (Updated for Certificate) */}
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
                  href="/services"
                  className="hover:text-red-500 transition-colors"
                >
                  <span>Services</span>
                </a>
                <ChevronRight size={10} className="text-slate-700 shrink-0" />
                <span className="text-slate-300 font-extrabold">
                  Certificate Verification
                </span>
              </div>

              {/* Glowing Dynamic Badge */}
              <div className="block">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-950/40 via-red-900/20 to-transparent border border-red-500/30 text-red-400 px-4 py-2 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-[0_0_20px_rgba(239,68,68,0.05)]">
                  <ShieldCheck size={12} className="text-red-500" />
                  <span>Secured Registry Console</span>
                </div>
              </div>

              {/* Main Animated Title Header */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                JITM Skills{" "}
                <span className="text-[#D32F2F]">Certificate Verification</span>
              </h1>

              {/* Context Description Text */}
              <p className="text-sm text-slate-400 font-medium leading-relaxed max-w-2xl">
                Validate and authenticate your credentials instantly through our
                secure student registry system. Enter your unique reference ID
                to verify course alignment, training completion data, and
                authorized NSDC/SSC standard certifications.
              </p>
            </div>

            {/* RIGHT SIDE: PREMIUM BENTO INDICATOR CARD */}
            <div className="lg:col-span-4 w-full flex lg:justify-end">
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 flex items-center justify-between shadow-2xl w-full max-w-sm group hover:border-red-500/30 transition-all duration-300 relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-red-500/5 rounded-full blur-xl pointer-events-none" />
                <div className="flex items-center gap-4">
                  <div className="p-3.5 bg-white/[0.03] text-red-500 rounded-xl border border-white/[0.05] group-hover:bg-red-500 group-hover:text-white transition-all duration-500 transform group-hover:rotate-3">
                    <FileCheck size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Registry Node
                    </h4>
                    <p className="text-sm font-black text-white mt-0.5">
                      Instant 1-Click Verification
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-black px-2.5 py-1 rounded-md text-[9px] uppercase tracking-wider inline-block">
                    Active System
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full min-h-screen bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Hero */}

          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 px-4 py-2 rounded-full mb-5">
              <ShieldCheck size={16} className="text-[#D32F2F]" />
              <span className="text-xs font-bold text-[#D32F2F] uppercase tracking-wider">
                Certificate Verification Portal
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              Verify Student
              <span className="text-[#D32F2F] block">
                Certification Records
              </span>
            </h1>

            <p className="max-w-3xl mx-auto mt-5 text-slate-600 text-lg">
              Verify the authenticity of JITM Skills certifications using the
              official Roll Number issued at the time of admission.
            </p>
          </div>

          {/* Process */}

          <div className="grid md:grid-cols-3 gap-6 mb-14">
            <div className="bg-white rounded-2xl p-6 shadow-sm border">
              <Home className="text-[#D32F2F] mb-3" size={32} />

              <h3 className="font-bold text-lg mb-2">Enter Roll Number</h3>

              <p className="text-sm text-slate-500">
                Enter the student roll number exactly as issued by JITM Skills.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border">
              <Search className="text-[#D32F2F] mb-3" size={32} />

              <h3 className="font-bold text-lg mb-2">Verify Record</h3>

              <p className="text-sm text-slate-500">
                System checks student records stored in the secure database.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border">
              <FileCheck className="text-[#D32F2F] mb-3" size={32} />

              <h3 className="font-bold text-lg mb-2">View Certification</h3>

              <p className="text-sm text-slate-500">
                Instantly view verified course and certification details.
              </p>
            </div>
          </div>

          {/* Search Box */}

          <div className="bg-white rounded-3xl border shadow-sm p-8 max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                placeholder="Enter Roll Number (Example: JITM12345)"
                className="flex-1 border rounded-xl px-5 py-4 font-semibold focus:outline-none focus:border-[#D32F2F]"
              />

              <button
                onClick={verifyCertificate}
                className="bg-[#D32F2F] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-slate-900 transition-all"
              >
                Verify
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Loading */}

          {loading && (
            <div className="text-center mt-10 font-bold text-slate-600">
              Verifying Certificate...
            </div>
          )}

          {/* Error */}

          {error && (
            <div className="mt-8 text-center">
              <div className="inline-flex bg-red-50 border border-red-200 text-red-600 px-5 py-3 rounded-xl font-bold">
                {error}
              </div>
            </div>
          )}

          {/* Success Card */}

          <AnimatePresence>
            {student && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 max-w-5xl mx-auto"
              >
                <div className="bg-white rounded-3xl border shadow-xl overflow-hidden">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-500 p-8 text-center text-white">
                    <motion.div
                      animate={{
                        scale: [1, 1.15, 1],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                      }}
                      className="flex justify-center mb-4"
                    >
                      <CheckCircle2 size={70} />
                    </motion.div>

                    <h2 className="text-3xl font-black">
                      Certificate Verified Successfully
                    </h2>

                    <p className="mt-2 text-green-100">
                      This certification record is valid and authentic.
                    </p>
                  </div>

                  <div className="p-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="border rounded-2xl p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <IdCard size={18} />
                          <span className="font-bold">Roll Number</span>
                        </div>

                        <p className="font-black text-xl text-[#D32F2F]">
                          {student.rollNumber}
                        </p>
                      </div>

                      <div className="border rounded-2xl p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <User size={18} />
                          <span className="font-bold">Student Name</span>
                        </div>

                        <p className="font-black text-xl">{student.fullName}</p>
                      </div>

                      <div className="border rounded-2xl p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <User size={18} />
                          <span className="font-bold">Father's Name</span>
                        </div>

                        <p className="font-semibold">{student.fatherName}</p>
                      </div>

                      <div className="border rounded-2xl p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <Award size={18} />
                          <span className="font-bold">Course</span>
                        </div>

                        <p className="font-semibold">
                          {student.courseName === "Others"
                            ? student.customCourse
                            : student.courseName}
                        </p>
                      </div>

                      <div className="border rounded-2xl p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar size={18} />
                          <span className="font-bold">Start Date</span>
                        </div>

                        <p>
                          {new Date(student.createdAt).toLocaleDateString()}
                        </p>
                      </div>

                      <div className="border rounded-2xl p-5">
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar size={18} />
                          <span className="font-bold">End Date</span>
                        </div>

                        <p
                          className={
                            getCourseStatus(student.createdAt) ===
                            "Training Currently In Progress"
                              ? "text-orange-600 font-bold"
                              : "text-green-600 font-bold"
                          }
                        >
                          {getCourseStatus(student.createdAt)}
                        </p>
                      </div>

                      <div className="border rounded-2xl p-5 md:col-span-2">
                        <span className="font-bold block mb-2">
                          Course Duration
                        </span>

                        <p className="text-green-600 font-black text-lg">
                          3 Months Training Program
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
