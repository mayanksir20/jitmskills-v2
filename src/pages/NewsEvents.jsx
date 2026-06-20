import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Home,
  CalendarRange,
  ArrowUpRight,
  Calendar,
  Clock,
  ChevronLeft,
  X,
  Flame,
  Newspaper,
  Mail,
  Send,
  Radio,
  Languages,
  Users,
  Eye,
  Award,
} from "lucide-react";
import {
  tickerNewsData,
  masterNewsDatabase,
  pressReleaseDatabase,
} from "../constants/newsdata";
import InstitutionalAwards from "../components/InstitutionalAwards.jsx"; // Institutional Awards component

const NewsEventsHero = () => {
  const duplicatedNews = [
    ...tickerNewsData,
    ...tickerNewsData,
    ...tickerNewsData,
  ];
  const [lang, setLang] = useState("en");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedNews, setSelectedNews] = useState(null);
  const [activeLeftNews, setActiveLeftNews] = useState(masterNewsDatabase);
  const [emailInput, setEmailInput] = useState("");

  const itemsPerPage = 4;
  const totalNewsCount = activeLeftNews.length;
  const totalPages = Math.ceil(totalNewsCount / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDisplayedNews = activeLeftNews.slice(
    indexOfFirstItem,
    indexOfLastItem,
  );

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const injectTrendingToMainFocus = (newsItem) => {
    const filteredSource = activeLeftNews.filter(
      (item) => item.id !== newsItem.id,
    );
    const updatedLeftSource = [newsItem, ...filteredSource];
    setActiveLeftNews(updatedLeftSource);
    setCurrentPage(1);
  };

  const [activeFilter, setActiveFilter] = useState("All Coverage");
  const [lightboxImage, setLightboxImage] = useState(null);

  // Filters Configuration
  const filterCategories = [
    "All Coverage",
    "Motivation",
    "Placements",
    "Events",
    "Government",
  ];

  // Filtering Logic
  const filteredReleases =
    activeFilter === "All Coverage"
      ? pressReleaseDatabase
      : pressReleaseDatabase.filter(
          (item) => item.category.toLowerCase() === activeFilter.toLowerCase(),
        );

  /* ════════ PAGINATION STATE ENGINE ════════ */
  const [currentNews, setCurrentNews] = useState(1);
  const itemsPerNews = 6;

  // Pagination calculation vectors
  const releaseIndexOfLastItem = currentNews * itemsPerNews;
  const releaseIndexOfFirstItem = releaseIndexOfLastItem - itemsPerNews;
  const currentItems = filteredReleases.slice(
    releaseIndexOfFirstItem,
    releaseIndexOfLastItem,
  );
  const releaseTotalPages =
    Math.ceil(filteredReleases.length / itemsPerNews) || 1;

  const handlePrevPage = () => {
    if (currentNews > 1) setCurrentNews((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentNews < releaseTotalPages) setCurrentNews((prev) => prev + 1);
  };
  return (
    <>
      <section className="w-full bg-[#0F172A] pt-28 lg:pt-52 pb-12 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden border-b border-white/10 relative">
        {/* Editorial Background Elements: Subtle Newspaper Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* Premium Ambient Dark Mesh Glows */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D32F2F]/5 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* ================= SPLIT HEADER BLOCK ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start lg:items-end">
            {/* LEFT SIDE: HEAVY TYPOGRAPHY TEXT (NEWSPAPER FORMAT) */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:col-span-8 space-y-4 lg:border-l-2 lg:border-[#D32F2F] lg:pl-6"
            >
              {/* Volume/Edition Tag Format */}
              <div className="flex items-center gap-3">
                <div className="inline-flex items-center gap-2 bg-white/5 text-[#D32F2F] text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-md border border-white/10 backdrop-blur-md">
                  <CalendarRange size={12} className="mt-[-1px]" />
                  <span>Media & Updates</span>
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500 border-l border-white/10 pl-3">
                  Live Edition // JITM Dispatch
                </span>
              </div>

              {/* Editorial Heavy Head */}
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.95]">
                News & Media <br />
                <span className="text-[#D32F2F] bg-gradient-to-r from-[#D32F2F] to-red-500 bg-clip-text text-transparent italic font-serif pr-2">
                  Ecosystem Events
                </span>
              </h1>

              {/* Lead Paragraph Style */}
              <p className="text-xs md:text-sm font-semibold text-slate-400 max-w-2xl leading-relaxed first-letter:text-xl first-letter:font-black first-letter:text-[#D32F2F]">
                Stay updated with the latest happenings, skill development
                drives, corporate placement meets, and institutional
                achievements at JITM Skills. We document our journey toward
                nation-building.
              </p>
            </motion.div>

            {/* RIGHT SIDE: PAGE BREADCRUMB COMPONENT (DARK GLASSMORPHISM) */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              className="lg:col-span-4 flex lg:justify-end w-full"
            >
              <nav className="inline-flex items-center gap-2 bg-slate-900/60 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-xl shadow-2xl">
                {/* Home Link */}
                <a
                  href="/"
                  className="flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-slate-300 transition-colors group"
                >
                  <Home
                    size={13}
                    className="text-slate-500 group-hover:text-slate-300 transition-colors"
                  />
                  <span>Home</span>
                </a>

                {/* Separator 1 */}
                <ChevronRight size={12} className="text-slate-600 shrink-0" />

                {/* Parent Category Link Node */}
                <span className="text-xs font-bold text-slate-400 hover:text-slate-200 cursor-pointer transition-colors select-none">
                  Ecosystem & Media
                </span>

                {/* Separator 2 */}
                <ChevronRight size={12} className="text-slate-600 shrink-0" />

                {/* Active Page Node */}
                <span className="text-xs font-black text-slate-200 tracking-wide select-none">
                  News & Events
                </span>
              </nav>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#090D16] border-y border-white/10 h-12 flex items-center overflow-hidden relative font-sans select-none shadow-inner">
        <div className="absolute left-0 top-0 bottom-0 bg-[#D32F2F] text-white px-5 flex items-center justify-center font-black uppercase text-[10px] tracking-widest z-30 shadow-[6px_0_15px_rgba(0,0,0,0.4)] border-r border-white/20">
          <span className="flex h-1.5 w-1.5 rounded-full bg-white animate-ping mr-2.5" />
          Breaking News
        </div>

        {/* INFINITE TICKER STREAM CONTROLLER */}
        <div className="w-full h-full flex items-center pl-[135px]">
          <motion.div
            className="flex items-center gap-16 whitespace-nowrap pr-16"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              ease: "linear",
              duration: 22,
              repeat: Infinity,
            }}
          >
            {duplicatedNews.map((news, idx) => {
              // FIX: Capitalized reference conversion logic applied here
              const IconComponent = news.icon;

              return (
                <div
                  key={`${news.id}-${idx}`}
                  className="flex items-center gap-3 group cursor-pointer"
                >
                  {/* Dynamic Category Mini-Badge */}
                  <span
                    className={`text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md border ${news.badgeColor}`}
                  >
                    {news.label}
                  </span>

                  {/* Icon Engine with extracted layout */}
                  <div className="shrink-0 transform group-hover:rotate-12 transition-transform duration-300">
                    <IconComponent size={12} className="text-current" />
                  </div>

                  {/* Headline Text Anchor */}
                  <span className="text-xs font-bold text-slate-200 group-hover:text-[#D32F2F] transition-colors tracking-wide">
                    {news.text}
                  </span>

                  {/* Decorative Divider Bullet */}
                  <ArrowUpRight
                    size={10}
                    className="text-slate-600 group-hover:text-white transition-colors ml-1 opacity-40 group-hover:opacity-100"
                  />
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Right Shadow Vignette Layer */}
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#090D16] to-transparent pointer-events-none z-20" />
      </section>

      <section className="w-full bg-slate-100 pb-24 pt-4 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden text-slate-800">
        <div className="max-w-7xl mx-auto">
          {/* ================= CONTROLLER HEADLINE COUNTER & LANGUAGE PANEL ================= */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-300 pb-6 mb-12 gap-4">
            <div className="flex items-center gap-3">
              <div className="bg-[#D32F2F]/10 border border-[#D32F2F]/20 p-2 rounded-xl text-[#D32F2F]">
                <Newspaper size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                  {lang === "en"
                    ? "Data Feed Monitoring"
                    : "डेटा फीड मॉनिटरिंग"}
                </p>
                <h2 className="text-xl md:text-2xl font-black tracking-tight text-slate-900">
                  {lang === "en" ? "Live Bulletin Grid" : "लाइव बुलेटिन ग्रिड"}
                </h2>
              </div>
            </div>

            {/* INTERACTIVE CONTROLS ENGINE */}
            <div className="flex items-center gap-4 self-end sm:self-auto">
              {/* 🌐 TRANSLATION TOGGLE BUTTON */}
              <button
                onClick={() => setLang(lang === "en" ? "hi" : "en")}
                className="flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider text-slate-700 transition-all active:scale-95 cursor-pointer"
              >
                <Languages size={14} className="text-[#D32F2F]" />
                <span>
                  {lang === "en" ? "हिन्दी में पढ़ें" : "Read in English"}
                </span>
              </button>

              {/* Total Count Matrix */}
              <div className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-center shadow-sm">
                <span className="block text-xl font-black text-[#D32F2F] leading-none">
                  {String(totalNewsCount).padStart(2, "0")}
                </span>
                <span className="text-[8px] font-black uppercase tracking-wider text-slate-500">
                  {lang === "en" ? "Total Stories" : "कुल खबरें"}
                </span>
              </div>
            </div>
          </div>

          {/* ================= PRIMARY TWO-COLUMN SPLIT DESKTOP GRID ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* ════════ LEFT COLUMN: MAIN BULLETIN CARDS AREA (8/12) ════════ */}
            <div className="lg:col-span-8 space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <AnimatePresence>
                  {currentDisplayedNews.map((news) => {
                    const CategoryIcon = news.icon;
                    return (
                      <motion.div
                        key={news.id}
                        initial={{ opacity: 0, scale: 0.97, y: 15 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.97, y: -15 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between group shadow-md hover:shadow-xl hover:border-slate-300 transition-all"
                      >
                        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-200">
                          <img
                            src={news.image}
                            alt={news.title[lang]}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80" />

                          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md border border-slate-200 px-2.5 py-1 rounded-lg flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-slate-800 shadow-sm">
                            <CategoryIcon
                              size={10}
                              className="text-[#D32F2F]"
                            />
                            <span>{news.sector[lang]}</span>
                          </div>
                        </div>

                        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                          <div className="space-y-2">
                            <div className="flex items-center gap-3 text-slate-500 text-[10px] font-bold">
                              <span className="flex items-center gap-1">
                                <Calendar
                                  size={11}
                                  className="text-[#D32F2F]"
                                />{" "}
                                {news.date}
                              </span>
                              <span className="h-1 w-1 bg-slate-300 rounded-full" />
                              <span className="flex items-center gap-1">
                                <Clock size={11} /> {news.readTime[lang]}
                              </span>
                            </div>

                            <h3 className="text-sm font-black text-slate-900 tracking-tight leading-snug group-hover:text-[#D32F2F] transition-colors line-clamp-2">
                              {news.title[lang]}
                            </h3>

                            <p className="text-[11px] font-medium text-slate-500 leading-relaxed line-clamp-2">
                              {news.desc[lang]}
                            </p>
                          </div>

                          <button
                            onClick={() => setSelectedNews(news)}
                            className="w-full bg-slate-50 border border-slate-200 hover:bg-[#D32F2F] hover:text-white hover:border-[#D32F2F] py-2 px-4 rounded-xl text-center text-[10px] font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                          >
                            <span>
                              {lang === "en"
                                ? "Read Full Story"
                                : "पूरी खबर पढ़ें"}
                            </span>
                            <ArrowUpRight
                              size={12}
                              className="transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                            />
                          </button>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>

              {/* CONTROL PANEL PAGINATION */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-300">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                  {lang === "en"
                    ? `Showing Page ${currentPage} of ${totalPages || 1}`
                    : `पृष्ठ ${currentPage} का ${totalPages || 1} देख रहे हैं`}
                </p>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-40 transition-colors disabled:cursor-not-allowed shadow-sm"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (pageNum) => (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`h-8 w-8 rounded-xl font-bold text-xs transition-all ${
                          currentPage === pageNum
                            ? "bg-[#D32F2F] text-white shadow-md border border-[#D32F2F]"
                            : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {pageNum}
                      </button>
                    ),
                  )}

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages || totalPages === 0}
                    className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 disabled:opacity-40 transition-colors disabled:cursor-not-allowed shadow-sm"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* ════════ RIGHT COLUMN: SIDE FEED WIDGET ENGINE (4/12) ════════ */}
            <div className="lg:col-span-4 space-y-6">
              {/* WIDGET 1: VERTICAL TRENDING SLIDER */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 relative overflow-hidden h-[420px] flex flex-col shadow-md">
                <div className="flex items-center gap-2 border-b border-slate-200 pb-3 mb-4 shrink-0">
                  <Flame size={14} className="text-[#D32F2F]" />
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                    {lang === "en"
                      ? "Trending JITM Updates"
                      : "ट्रेंडिंग JITM अपडेट्स"}
                  </h4>
                </div>

                <div className="flex-1 overflow-hidden relative group/track">
                  <motion.div
                    className="space-y-4 absolute w-full"
                    animate={{ y: ["0%", "-50%"] }}
                    transition={{
                      ease: "linear",
                      duration: 15,
                      repeat: Infinity,
                    }}
                    style={{ top: 0 }}
                  >
                    {[...masterNewsDatabase, ...masterNewsDatabase].map(
                      (item, idx) => (
                        <div
                          key={`trending-${item.id}-${idx}`}
                          onClick={() => injectTrendingToMainFocus(item)}
                          className="bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#D32F2F]/30 p-3 rounded-xl flex gap-3 cursor-pointer transition-all duration-300 shadow-xs"
                        >
                          <div className="h-14 w-14 rounded-lg overflow-hidden shrink-0 bg-slate-200">
                            <img
                              src={item.image}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </div>

                          <div className="space-y-1 min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-[8px] font-black uppercase text-[#D32F2F] tracking-wider">
                                {item.sector[lang]}
                              </span>
                              <span className="text-[8px] text-slate-400 font-bold flex items-center gap-0.5">
                                <Clock size={8} /> {item.date}
                              </span>
                            </div>
                            <h5 className="text-[13px] font-bold text-slate-900 truncate tracking-tight">
                              {item.title[lang]}
                            </h5>
                            <span className="text-[8px] text-slate-400 font-bold flex items-center gap-0.5">
                              <Clock size={8} /> {item.date}
                            </span>
                            {/* <p className="text-[10px] font-medium text-slate-500 line-clamp-1 leading-normal">
                              {item.desc[lang]}
                            </p> */}
                          </div>
                        </div>
                      ),
                    )}
                  </motion.div>
                  <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white via-transparent to-transparent pointer-events-none z-10" />
                  <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white via-transparent to-transparent pointer-events-none z-10" />
                </div>
              </div>

              {/* WIDGET 2: ACTIONABLE NEWSLETTER BLOCK */}
              <form
                action="mailto:info@jitmskills.com"
                method="post"
                encType="text/plain"
                className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-5 border border-white/5 shadow-lg space-y-4"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-white/5 rounded-xl text-[#D32F2F] border border-white/10">
                    <Mail size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider">
                      {lang === "en"
                        ? "Join Our Newsletter"
                        : "न्यूज़लेटर से जुड़ें"}
                    </h4>
                    <p className="text-[10px] text-slate-400 font-medium">
                      {lang === "en"
                        ? "Get live vocational dispatches instantly."
                        : "तुरंत लाइव व्यावसायिक समाचार प्राप्त करें।"}
                    </p>
                  </div>
                </div>

                <div className="relative flex items-center">
                  <input
                    type="email"
                    name="Subscriber-Email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder={
                      lang === "en"
                        ? "Enter institutional email..."
                        : "संस्थागत ईमेल दर्ज करें..."
                    }
                    required
                    className="w-full bg-white/5 border border-white/10 focus:border-[#D32F2F] text-xs px-4 py-3 rounded-xl outline-none placeholder-slate-500 font-medium pr-12 transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 p-2 bg-[#D32F2F] hover:bg-red-700 text-white rounded-lg transition-colors cursor-pointer"
                  >
                    <Send size={12} />
                  </button>
                </div>
              </form>

              {/* WIDGET 3: LIVE TV EMBED COMPONENT WITH INTEGRATED COMPONENT PLAYLIST */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-md space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-red-50 rounded-xl text-red-600 border border-red-100 animate-pulse">
                    <Radio size={16} />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                      {lang === "en"
                        ? "Watch Live Coverage"
                        : "लाइव कवरेज देखें"}
                    </h4>
                    <p className="text-[10px] text-slate-500 font-medium">
                      {lang === "en"
                        ? "Our YouTube channel featuring student success stories."
                        : "हमारा यूट्यूब चैनल जो छात्रों की सफलता की कहानियां दिखाता है।"}
                    </p>
                  </div>
                </div>

                {/* AUTOMATED HARDWARE TELEVISION SYSTEM PANEL */}
                <div className="relative bg-slate-950 p-2.5 rounded-3xl border-4 border-slate-800 shadow-2xl">
                  <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-black shadow-inner">
                    <iframe
                      className="w-full h-full object-cover"
                      src="https://www.youtube.com/embed/videoseries?list=UUxMbQA7yrFum0AmLLdx4yWg&autoplay=1&mute=1&loop=1"
                      title="JITM Skills YouTube Live Stream"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-12 h-2 bg-slate-700 rounded-b-md" />
                </div>

                {/* REDIRECT OUTBOUND BUTTON */}
                <a
                  href="https://www.youtube.com/@jitmskills1080/videos"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#D32F2F] hover:bg-red-700 text-white py-2.5 px-4 rounded-xl text-center text-[10px] font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <svg
                    className="h-3.5 w-3.5 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  <span>
                    {lang === "en"
                      ? "Visit Our YouTube Channel"
                      : "हमारे यूट्यूब चैनल पर जाएं"}
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* ================= MODAL DETAILED VIEW ARCHITECTURE ================= */}
          <AnimatePresence>
            {selectedNews && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-slate-950/60 backdrop-blur-md flex items-center justify-center p-4 z-50 overflow-y-auto"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 30 }}
                  transition={{ type: "spring", duration: 0.4 }}
                  className="bg-white border border-slate-200 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative my-auto text-slate-800"
                >
                  <div className="relative aspect-[21/9] w-full bg-slate-100">
                    <img
                      src={selectedNews.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />

                    <button
                      onClick={() => setSelectedNews(null)}
                      className="absolute top-4 right-4 bg-white/90 hover:bg-[#D32F2F] hover:text-white text-slate-700 p-2 rounded-xl border border-slate-200 transition-colors shadow-lg cursor-pointer"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  <div className="p-6 md:p-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="bg-[#D32F2F]/10 border border-[#D32F2F]/20 text-[#D32F2F] text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md">
                        {selectedNews.sector[lang]}
                      </span>
                      <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold">
                        <span className="flex items-center gap-1">
                          <Calendar size={11} /> {selectedNews.date}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                      {selectedNews.title[lang]}
                    </h3>

                    <div className="h-px bg-slate-200 w-full" />

                    <p className="text-xs md:text-sm text-slate-600 font-medium leading-relaxed tracking-wide">
                      {selectedNews.fullStory[lang]}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <div className="section">
        <InstitutionalAwards />
      </div>

      <section className="w-full bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 font-sans border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          {/* ================= SECTION HEADER ================= */}
          <div className="flex items-center gap-3 border-b border-slate-200 pb-6 mb-10">
            <div className="bg-[#D32F2F]/10 border border-[#D32F2F]/20 p-2 rounded-xl text-[#D32F2F]">
              <Newspaper size={20} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">
                {lang === "en"
                  ? "Print & Media Archives"
                  : "प्रिंट और मीडिया अभिलेखागार"}
              </p>
              <h2 className="text-xl md:text-2xl font-black tracking-tight text-slate-900">
                {lang === "en" ? "Press Release Coverage" : "प्रेस रिलीज कवरेज"}
              </h2>
            </div>
          </div>

          {/* ================= MAIN SPLIT CONTENT GRID ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            {/* ════════ LEFT COLUMN: SIDE FILTER BUTTONS (3/12) ════════ */}
            <div className="lg:col-span-3 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 scrollbar-none shrink-0 sticky top-6 z-10">
              {filterCategories.map((category) => {
                const isActive = activeFilter === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-3 rounded-xl text-left text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap border cursor-pointer w-full flex items-center justify-between ${
                      isActive
                        ? "bg-gradient-to-r from-[#D32F2F] to-red-700 text-white border-[#D32F2F] shadow-md shadow-red-900/10 translate-x-1"
                        : "bg-white border-slate-200 text-slate-600 hover:bg-slate-100 hover:border-slate-300"
                    }`}
                  >
                    <span>{category}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="h-1.5 w-1.5 bg-white rounded-full hidden lg:block"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* ════════ RIGHT COLUMN: 6-CARD CLIPPING GRID (9/12) WITH PAGINATION ════════ */}
            <div className="lg:col-span-9 flex flex-col space-y-10">
              <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                <AnimatePresence>
                  {currentItems.length > 0 ? (
                    currentItems.map((release) => (
                      <motion.div
                        key={release.id}
                        layout
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-2xl border border-slate-200 p-4 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:border-slate-300 transition-all"
                      >
                        {/* Interactive Image Clipping Framework */}
                        <div
                          onClick={() => setLightboxImage(release.image)}
                          className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-100 cursor-zoom-in group/img border border-slate-150 shadow-inner"
                        >
                          <img
                            src={release.image}
                            alt={release.title[lang]}
                            className="w-full h-full transition-transform duration-500 group-hover/img:scale-102"
                          />
                          {/* Blur Overlay Hover Effect */}
                          <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-xs">
                            <div className="bg-white text-slate-900 p-3 rounded-full shadow-lg transform translate-y-2 group-hover/img:translate-y-0 transition-transform">
                              <Eye size={16} className="text-[#D32F2F]" />
                            </div>
                          </div>
                          {/* Inline Tag Indicator */}
                          <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md">
                            {release.category}
                          </span>
                        </div>

                        {/* Meta Context Content Layer */}
                        <div className="pt-4 flex-1 flex flex-col justify-between space-y-2">
                          <div className="space-y-1.5">
                            <div className="flex items-center gap-1.5 text-slate-400 text-[10px] font-bold">
                              <Calendar size={11} className="text-[#D32F2F]" />
                              <span>{release.date}</span>
                            </div>
                            <h3 className="text-xs font-black text-slate-900 tracking-tight leading-snug line-clamp-2">
                              {release.title[lang]}
                            </h3>
                            <p className="text-[11px] font-medium text-slate-500 leading-relaxed line-clamp-2">
                              {release.desc[lang]}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="col-span-full bg-white border border-dashed border-slate-300 rounded-2xl py-12 text-center text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {lang === "en"
                        ? "No Media Coverage Found in This Filter"
                        : "इस फ़िल्टर में कोई मीडिया कवरेज नहीं मिला"}
                    </div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* ════════ DYNAMIC CUSTOM PAGINATION SYSTEM ════════ */}
              {filteredReleases.length > itemsPerPage && (
                <div className="flex items-center justify-center gap-3 border-t border-slate-200/80 pt-6">
                  <button
                    onClick={handlePrevPage}
                    disabled={currentNews === 1}
                    className={`p-2 rounded-xl border transition-all cursor-pointer ${
                      currentNews === 1
                        ? "bg-slate-100 border-slate-200 text-slate-300 cursor-not-allowed"
                        : "bg-white border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    <ChevronLeft size={16} />
                  </button>

                  {/* Left Counter Box: Active Page Number */}
                  <div className="bg-gradient-to-r from-[#D32F2F] to-red-700 text-white px-4 py-2 rounded-xl text-xs font-black min-w-[36px] text-center shadow-md shadow-red-900/10">
                    {currentNews}
                  </div>

                  {/* Right Counter Box: Static Total Count Scope */}
                  <div className="bg-white border border-slate-200 text-slate-500 px-4 py-2 rounded-xl text-xs font-bold min-w-[60px] text-center">
                    of {releaseTotalPages}
                  </div>

                  <button
                    onClick={handleNextPage}
                    disabled={currentNews === releaseTotalPages}
                    className={`p-2 rounded-xl border transition-all cursor-pointer ${
                      currentNews === releaseTotalPages
                        ? "bg-slate-100 border-slate-200 text-slate-300 cursor-not-allowed"
                        : "bg-white border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* ================= HIGH-DENSITY MEDIA HIGHLIGHTS DASHBOARD ================= */}
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white rounded-3xl p-8 border border-white/5 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

            <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-white/10 text-center md:text-left">
              <div className="flex flex-col justify-center space-y-2 pb-6 md:pb-0">
                <div className="flex items-center justify-center md:justify-start gap-2 text-[#D32F2F]">
                  <Flame size={18} className="animate-pulse" />
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    {lang === "en"
                      ? "Core Institutional Blueprint"
                      : "मूल संस्थागत खाका"}
                  </h4>
                </div>
                <p className="text-sm font-black tracking-tight leading-snug text-white italic">
                  "Making India Skilled since 2012"
                </p>
              </div>

              <div className="pt-6 md:pt-0 md:pl-8 flex flex-col justify-center space-y-1">
                <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400">
                  <Calendar size={13} />
                  <span className="text-[8px] font-black uppercase tracking-widest">
                    Legacy Timeline
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-[#D32F2F] tracking-tight leading-none">
                  14+ Years
                </h3>
                <p className="text-[10px] font-bold text-slate-400">
                  {lang === "en"
                    ? "Sustained Operational Excellence"
                    : "निरंतर परिचालन उत्कृष्टता"}
                </p>
              </div>

              <div className="pt-6 md:pt-0 md:pl-8 flex flex-col justify-center space-y-1">
                <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400">
                  <Award size={13} />
                  <span className="text-[8px] font-black uppercase tracking-widest">
                    National Credential
                  </span>
                </div>
                <h3 className="text-md md:text-lg font-black text-white tracking-tight leading-tight uppercase">
                  Partnership with NSDC
                </h3>
                <p className="text-[10px] font-bold text-slate-400">
                  {lang === "en"
                    ? "Empowering Citizens Nationally"
                    : "राष्ट्रीय स्तर पर नागरिकों का सशक्तिकरण"}
                </p>
              </div>

              <div className="pt-6 md:pt-0 md:pl-8 flex flex-col justify-center space-y-1">
                <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400">
                  <Users size={13} />
                  <span className="text-[8px] font-black uppercase tracking-widest">
                    Single Drive Peak
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-emerald-500 tracking-tight leading-none">
                  96+ Candidates
                </h3>
                <p className="text-[10px] font-bold text-slate-400">
                  {lang === "en"
                    ? "Selected in Single Drive"
                    : "एकल ड्राइव में चयनित सदस्य"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= LIGHTBOX OVERLAY WINDOW ================= */}
        <AnimatePresence>
          {lightboxImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxImage(null)}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-lg flex items-center justify-center p-4 z-50 cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="relative max-w-4xl max-h-[85vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={lightboxImage}
                  alt="High Resolution Newspaper Cutting"
                  className="w-full h-full object-contain"
                />
                <button
                  onClick={() => setLightboxImage(null)}
                  className="absolute top-4 right-4 bg-black/60 hover:bg-[#D32F2F] text-white p-2.5 rounded-xl border border-white/10 transition-colors shadow-xl cursor-pointer"
                >
                  <X size={16} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default NewsEventsHero;
