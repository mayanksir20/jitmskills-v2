import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trainingSectors } from "../constants/data";
import EnrollmentForm from "./EnrollmentForm";
import {
  CheckCircle2,
  Clock,
  X,
  ArrowRight,
  Star,
  Target,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { containerVariants, itemVariants } from "../utils/animations";

const OurCourse = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeTab, setActiveTab] = useState("All");
  const [activeSector, setActiveSector] = useState("All Sectors");
  const [showForm, setShowForm] = useState(false);
  const [enrollData, setEnrollData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;

  const categories = ["All", "Government", "Free", "Paid"];
  const paidSectors = [
    "All Sectors",
    "IT & Digital",
    "Job-Oriented",
    "Hospitality",
    "Creative & Media",
    "Emerging Tech",
    "Medical Diagnostic",
  ];

  // Filtering Logic
  const filteredCourses = trainingSectors.filter((course) => {
    // Basic Category Match
    let categoryMatch = activeTab === "All" || course.category === activeTab;

    // Special Rule: "Free" tab should show both "Free" and "Government"
    if (activeTab === "Free") {
      categoryMatch =
        course.category === "Free" || course.category === "Government";
    }

    const sectorMatch =
      activeTab !== "Paid" ||
      activeSector === "All Sectors" ||
      course.sector === activeSector;
    return categoryMatch && sectorMatch;
  });

  // Pagination Math
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCourses.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(filteredCourses.length / cardsPerPage);

  const handleEnrollClick = (course) => {
    setEnrollData(course);
    setSelectedCourse(null);
    setShowForm(true);
  };

  const closeAll = () => {
    setShowForm(false);
    setSelectedCourse(null);
    setEnrollData(null);
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-[#F8FAFC] min-h-screen relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* --- HEADER ANIMATION --- */}
          <div className="flex flex-col xl:flex-row xl:items-end justify-between mb-12 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, type: "spring" }}
              className="w-full xl:max-w-3xl"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 italic uppercase tracking-tighter leading-none mb-4">
                Training <span className="text-[#D32F2F]">Sectors</span>
              </h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-slate-500 text-xs md:text-sm border-l-2 border-[#D32F2F] pl-4 italic leading-relaxed"
              >
                JITM Skills provides a diverse learning ecosystem through
                government-funded schemes (PMKVY/UPSDM) for free certified
                training, alongside specialized free courses for digital
                literacy and community welfare. For those aiming for high-growth
                careers, our premium Paid Programs offer advanced industry
                specializations in tech, healthcare, and creative arts. Every
                program is industry-aligned to ensure that every student
                graduates with the practical expertise and confidence needed to
                secure immediate employment.
              </motion.p>
            </motion.div>

            {/* Tabs Animation - Horizontal scrollable on mobile devices */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="flex bg-white p-1.5 rounded-2xl md:rounded-[22px] border border-slate-200 shadow-xl overflow-x-auto max-w-full no-scrollbar shrink-0"
            >
              <div className="flex gap-1 min-w-max">
                {categories.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      setActiveSector("All Sectors");
                      setCurrentPage(1);
                    }}
                    className={`relative px-4 py-2.5 md:px-6 md:py-3.5 rounded-xl md:rounded-[18px] text-[10px] font-black uppercase tracking-widest transition-all duration-500 ${activeTab === tab ? "text-white" : "text-slate-400 hover:text-slate-600"}`}
                  >
                    <span className="relative z-10">
                      {tab === "Government"
                        ? "Govt Schemes"
                        : tab === "Free"
                          ? "Free Courses"
                          : tab}
                    </span>
                    {activeTab === tab && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-[#D32F2F] z-0 rounded-xl md:rounded-[18px]"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* --- SECTOR FILTER ANIMATION --- */}
          <AnimatePresence>
            {activeTab === "Paid" && (
              <motion.div
                initial={{ opacity: 0, y: -20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -20, height: 0 }}
                className="flex flex-wrap gap-2 mb-10 p-3 md:p-4 bg-slate-100/50 rounded-2xl md:rounded-[30px] border border-slate-200 overflow-hidden"
              >
                {paidSectors.map((sector) => (
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    key={sector}
                    onClick={() => {
                      setActiveSector(sector);
                      setCurrentPage(1);
                    }}
                    className={`px-3 py-2 md:px-4 md:py-2.5 rounded-full text-[9px] font-bold uppercase tracking-wider transition-all ${activeSector === sector ? "bg-slate-900 text-white shadow-lg" : "bg-white text-slate-500 border border-transparent hover:border-[#D32F2F]"}`}
                  >
                    {sector}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* --- GRID WITH SLIDE & STAGGER ANIMATION --- */}
          <div className="relative min-h-[600px]">
            <AnimatePresence >
              <motion.div
                key={currentPage + activeTab + activeSector}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, x: -50 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
              >
                {currentCards.map((course) => (
                  <motion.div
                    variants={itemVariants}
                    whileHover={{ y: -6, transition: { duration: 0.3 } }}
                    key={course.id}
                    onClick={() => setSelectedCourse(course)}
                    className="group cursor-pointer bg-white border border-slate-200 rounded-3xl md:rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col sm:flex-row h-auto lg:h-[280px] w-full"
                  >
                    {/* Image Layer */}
                    <div className="w-full sm:w-[40%] h-48 sm:h-full overflow-hidden relative border-b sm:border-b-0 sm:border-r border-slate-100">
                      <img loading="lazy"
                        src={course.image}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        alt={course.title}
                      />
                      <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-[8px] font-black uppercase text-[#D32F2F] shadow-sm z-10">
                        {course.category}
                      </div>
                    </div>

                    {/* Content Layer */}
                    <div className="p-6 md:p-8 sm:w-[60%] flex flex-col justify-between bg-white">
                      <div className="overflow-hidden">
                        <h3 className="text-lg md:text-xl font-black text-slate-900 uppercase italic mb-2 md:mb-3 leading-tight line-clamp-2">
                          {course.title}
                        </h3>
                        <p className="text-slate-500 text-[11px] leading-relaxed line-clamp-3 mb-4">
                          {course.subContent}
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto">
                        <div className="flex items-center gap-2 text-slate-400 font-bold text-[10px] uppercase">
                          <Clock size={12} className="text-[#D32F2F]" />
                          {course.duration}
                        </div>
                        <div className="text-[#D32F2F] flex items-center gap-1 font-black text-[10px] uppercase">
                          Details <ArrowRight size={12} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* --- SMART ALL-DEVICE RESPONSIVE PAGINATION --- */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex justify-center items-center gap-3 mt-16 w-full"
            >
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => p - 1)}
                className="p-2.5 md:p-3 rounded-full bg-white border border-slate-200 disabled:opacity-30 hover:bg-[#D32F2F] hover:text-white transition-all shadow-sm"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Dynamic Numbers Engine */}
              <div className="flex gap-1.5 max-w-full overflow-hidden">
                {/* Mobile Friendly Adaptive View */}
                <div className="flex md:hidden items-center px-4 bg-white border border-slate-200 h-9 rounded-full shadow-sm text-[11px] font-black text-slate-700 uppercase tracking-wider">
                  Page {currentPage} / {totalPages}
                </div>

                {/* Tablet and Desktop View */}
                <div className="hidden md:flex gap-1.5">
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-9 h-9 rounded-full font-black text-[11px] transition-all ${currentPage === i + 1 ? "bg-[#D32F2F] text-white" : "bg-white text-slate-400 border border-slate-200 hover:border-slate-300"}`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </div>

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => p + 1)}
                className="p-2.5 md:p-3 rounded-full bg-white border border-slate-200 disabled:opacity-30 hover:bg-[#D32F2F] hover:text-white transition-all shadow-sm"
              >
                <ChevronRight size={18} />
              </button>
            </motion.div>
          )}
        </div>

        {/* --- MODALS (DETAILS & ENROLL) --- */}
        <AnimatePresence>
          {selectedCourse && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedCourse(null)}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
              />
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 100 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 100 }}
                className="bg-white w-full max-w-5xl max-h-[90vh] md:max-h-[95vh] rounded-[32px] md:rounded-[40px] overflow-hidden relative z-10 shadow-2xl flex flex-col md:flex-row"
              >
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-slate-100 rounded-full hover:bg-[#D32F2F] hover:text-white transition-all z-50"
                >
                  <X size={18} />
                </button>

                <div className="w-full md:w-2/5 h-48 md:h-auto shrink-0 overflow-hidden relative">
                  <img loading="lazy"
                    src={selectedCourse.image}
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </div>

                <div className="p-6 md:p-12 w-full md:w-3/5 overflow-y-auto no-scrollbar flex flex-col justify-between">
                  <div>
                    <span className="text-[#D32F2F] text-[9px] font-black uppercase tracking-widest">
                      {selectedCourse.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 italic uppercase mt-1 mb-4 leading-tight">
                      {selectedCourse.title}
                    </h2>
                    <p className="text-slate-500 text-xs md:text-sm mb-6 md:mb-8 leading-relaxed">
                      {selectedCourse.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="text-[10px] font-black text-slate-900 uppercase mb-3 border-b pb-1.5 flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-[#D32F2F]" />{" "}
                          Key Areas
                        </h4>
                        <div className="space-y-1.5">
                          {selectedCourse.keyAreas?.map((item, i) => (
                            <p
                              key={i}
                              className="text-[10px] text-slate-600 leading-tight"
                            >
                              • {item}
                            </p>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black text-slate-900 uppercase mb-3 border-b pb-1.5 flex items-center gap-2">
                          <Target size={14} className="text-[#D32F2F]" />{" "}
                          Outcomes
                        </h4>
                        <div className="space-y-1.5">
                          {selectedCourse.outcomes?.map((item, i) => (
                            <p
                              key={i}
                              className="text-[10px] text-slate-600 font-bold flex items-center gap-1.5 italic uppercase"
                            >
                              <Star size={10} className="text-[#D32F2F]" />{" "}
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => handleEnrollClick(selectedCourse)}
                    className="w-full py-4 md:py-5 bg-slate-900 text-white font-black uppercase text-[10px] md:text-[11px] rounded-xl md:rounded-2xl hover:bg-[#D32F2F] transition-all shadow-xl active:scale-95 mt-auto"
                  >
                    Enroll Now
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* --- FORM OVERLAY SYSTEM --- */}
        <AnimatePresence>
          {showForm && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeAll}
                className="absolute inset-0 bg-black/80 backdrop-blur-md"
              />
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "100%", opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative w-full max-w-5xl z-10 max-h-[95vh] overflow-y-auto no-scrollbar"
              >
                <button
                  onClick={closeAll}
                  className="absolute -top-10 right-2 md:right-0 p-2 text-white hover:text-[#D32F2F] transition-all z-50"
                >
                  <X size={24} />
                </button>
                <div className="w-full overflow-hidden">
                  <EnrollmentForm
                    key={enrollData?.id || "manual"}
                    title="Quick Apply"
                    defaultCourse={enrollData?.title}
                    onSuccess={closeAll}
                    defaultType={
                      enrollData?.category === "Government" ||
                      enrollData?.category === "Free"
                        ? "free"
                        : "paid"
                    }
                  />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default OurCourse;
