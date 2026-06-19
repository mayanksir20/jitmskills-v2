import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  ShieldCheck,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";

import { strategicAwards } from "../constants/data";

export default function InstitutionalAwards({ lang = "en" }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [isAutoplayActive, setIsAutoplayActive] = useState(true);
  const [direction, setDirection] = useState(0);

  // Changing to 12 items to perfectly render 2 rows of 6 cards each on desktop
  const itemsPerPage = 8;
  const autoplayTimer = useRef(null);

  // Scaled up dataset to easily test 2 rows and pagination boundaries

  const totalPages = Math.ceil(strategicAwards.length / itemsPerPage) || 1;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = strategicAwards.slice(indexOfFirstItem, indexOfLastItem);

  // ════════ HIGH LEVEL TIMING AUTOPLAY ENGINE ════════
  useEffect(() => {
    if (isAutoplayActive && totalPages > 1) {
      autoplayTimer.current = setInterval(() => {
        setDirection(1);
        setCurrentPage((prev) => (prev === totalPages ? 1 : prev + 1));
      }, 5000);
    }

    return () => {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    };
  }, [isAutoplayActive, totalPages, currentPage]);

  const handlePrevPage = () => {
    setIsAutoplayActive(false);
    setDirection(-1);
    setCurrentPage((prev) => (prev === 1 ? totalPages : prev - 1));
  };

  const handleNextPage = () => {
    setIsAutoplayActive(false);
    setDirection(1);
    setCurrentPage((prev) => (prev === totalPages ? 1 : prev + 1));
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.99,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (dir) => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
      scale: 0.99,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section className="w-full bg-slate-900 py-20 px-4 sm:px-6 lg:px-8 font-sans border-t border-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ================= SECTION HEADER ================= */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-6 mb-10">
          <div className="flex items-center gap-3">
            <div className="bg-[#D32F2F]/10 border border-[#D32F2F]/30 p-2 rounded-xl text-[#D32F2F]">
              <Award size={20} className="animate-pulse" />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                {lang === "en" ? "Institutional Merits" : "संस्थागत योग्यता"}
              </p>
              <h2 className="text-xl md:text-2xl font-black tracking-tight text-white">
                {lang === "en"
                  ? "Awards & Certifications"
                  : "पुरस्कार और प्रमाणपत्र"}
              </h2>
            </div>
          </div>

          <button
            onClick={() => setIsAutoplayActive(!isAutoplayActive)}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors text-[9px] font-black tracking-wider uppercase cursor-pointer"
          >
            {isAutoplayActive ? (
              <>
                <Pause
                  size={10}
                  className="text-emerald-500 fill-emerald-500"
                />
                <span>Live Feed</span>
              </>
            ) : (
              <>
                <Play size={10} className="text-[#D32F2F] fill-[#D32F2F]" />
                <span>Paused</span>
              </>
            )}
          </button>
        </div>

        {/* ================= CINEMATIC 2-ROWS VIEWPORT OVERLAY ================= */}
        <div className="relative overflow-hidden min-h-[440px]">
          <AnimatePresence initial={false}  custom={direction}>
            <motion.div
              key={currentPage}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              // Desktop par exact 4 columns set kar diye hain (lg:grid-cols-4)
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full"
            >
              {currentItems.map((item) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-slate-950/50 border border-slate-800/80 rounded-2xl p-3 flex flex-col justify-between group hover:border-[#D32F2F]/50 hover:shadow-lg hover:shadow-red-950/10 transition-all duration-300 backdrop-blur-md"
                >
                  <div>
                    {/* Image Box */}
                    <div
                      onClick={() => setLightboxImage(item.image)}
                      className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-800/60 cursor-zoom-in group/img shadow-md"
                    >
                      <img
                        src={item.image}
                        alt={item.title[lang]}
                        className="w-full h-full transition-transform duration-500 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs duration-300">
                        <div className="bg-white text-slate-900 p-2.5 rounded-full shadow-2xl transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
                          <Eye size={12} className="text-[#D32F2F]" />
                        </div>
                      </div>
                      <span className="absolute top-2 left-2 bg-slate-950/90 text-slate-400 text-[6px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded border border-white/5">
                        {item.type}
                      </span>
                    </div>

                    {/* Meta Info */}
                    <div className="mt-3 space-y-1">
                      {/* Minimalist Micro-Footer with Left-Aligned Verified Token */}
                      <div className="flex items-center justify-between border-t border-slate-800/40 pt-2 mt-2">
                        <div className="flex items-center gap-1">
                          <ShieldCheck
                            size={11}
                            className="text-emerald-500 shrink-0"
                          />
                          <span className="text-[9px] font-black uppercase tracking-wider text-emerald-500">
                            {lang === "en" ? "Verified" : "सत्यापित"}
                          </span>
                        </div>

                        {/* Optional Right Node: Double Check Tick for Visual Balance */}
                        <span className="text-[9px] font-bold text-slate-600 tracking-tight">
                          ✓
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ================= PAGINATION CONTROL INTERFACE ================= */}
        {strategicAwards.length > itemsPerPage && (
          <div className="flex items-center justify-center gap-2 border-t border-slate-800/60 pt-6 mt-8">
            <button
              onClick={handlePrevPage}
              className="p-1.5 rounded-lg border border-slate-800 bg-slate-950 text-slate-400 hover:bg-slate-800 hover:text-white transition-all cursor-pointer"
            >
              <ChevronLeft size={14} />
            </button>

            <div className="bg-gradient-to-r from-[#D32F2F] to-red-700 text-white px-3 py-1 rounded-lg text-[10px] font-black min-w-[28px] text-center shadow-md">
              {currentPage}
            </div>
            <div className="bg-slate-950 border border-slate-800 text-slate-400 px-3 py-1 rounded-lg text-[10px] font-bold min-w-[50px] text-center">
              of {totalPages}
            </div>

            <button
              onClick={handleNextPage}
              className="p-1.5 rounded-lg border border-slate-800 bg-slate-950 text-slate-400 hover:bg-slate-800 hover:text-white transition-all cursor-pointer"
            >
              <ChevronRight size={14} />
            </button>
          </div>
        )}
      </div>

      {/* ================= PURE IMAGE ONLY LIGHTBOX WINDOW ================= */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 z-50 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl bg-black flex items-center justify-center border border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage}
                alt="Enlarged Certification Resource Spec"
                className="w-full h-full object-contain max-h-[85vh]"
              />
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 bg-slate-950/80 hover:bg-[#D32F2F] text-white p-2.5 rounded-xl border border-white/10 transition-colors shadow-2xl cursor-pointer"
              >
                <X size={14} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
