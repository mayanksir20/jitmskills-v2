import { useState, useEffect, useMemo } from "react"; // Added hooks for animation
import { motion, AnimatePresence } from "framer-motion"; // Added AnimatePresence

import { Link } from "react-router-dom";
import {
  Home,
  ChevronRight,
  MapPin,
  Globe,
  Building2,
  ArrowUpRight,
  Monitor,
  LogOut,
  Check,
  ArrowRight,
  Plus,
  ChevronUp,
  Search,
  Heart,
  Compass,
  Users,
  Stars,
} from "lucide-react";
import {
  staggerContainer,
  fadeInUp,
  containerVariants,
} from "../utils/animations"; // Adjust path
import { centersData } from "../constants/data";

// Image import
import classRoomLab from "../assets/images/lab-jitm.webp";
import trainingImage from "../assets/images/UPSDM.webp";
import successImage from "../assets/images/center-150.webp";
import trainingImageLab from "../assets/images/learning-ecosystem.webp";

const OurCenters = () => {
  const points = [
    {
      title: "Smart Classrooms",
      desc: "Interactive AV-enabled learning spaces",
    },
    {
      title: "NSDC Practical Labs",
      desc: "Industry-standard technical setups",
    },
    { title: "Digital Content", desc: "24/7 accessible e-learning resources" },
    { title: "Sector Tools", desc: "Advanced machinery & equipment" },
    { title: "Career Placement", desc: "Expert counseling & job support" },
  ];

  const IMPACT_STORIES = [
    {
      id: 1,
      title: "Breaking Geographical Barriers",
      subtitle: "High-Altitude & Border Zones",
      desc: "Deploying training infrastructures to remote mountainous terrains and border sectors where digital connectivity is traditionally stagnant. We plug rural youth directly into mainstream tech-ecosystems.",
      metric: "40%+",
      metricLabel: "Remote Area Enrolments",
    },
    {
      id: 2,
      title: "Bridging the Financial Divide",
      subtitle: "Free Boarding & Zero-Cost Model",
      desc: "Providing 100% free residential facilities, meals, and specialized vocational courses to students from marginalized communities, neutralizing any socioeconomic overheads from day one.",
      metric: "0/-",
      metricLabel: "Cost to Underprivileged Students",
    },
    {
      id: 3,
      title: "Empowering Rural Women",
      subtitle: "Grassroots Nari Shakti Footprint",
      desc: "Enabling young women in tier-3 blocks of Bihar and Uttarakhand to master core hardware domains like CCTV surveillance and advanced IT setups, securing localized economic independence.",
      metric: "10K+",
      metricLabel: "Rural Women Uplifted",
    },
  ];

  // --- Dynamic Locations Logic for Card 4 ---
  const locations = [
    "Jharkhand",
    "Bihar",
    "Uttar Pradesh",
    "Uttarakhand",
    "J&K",
    "North-East",
  ];
  const [locIndex, setLocIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setLocIndex((prev) => (prev + 1) % locations.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [locations.length]);

  // state for filtering centers
  const [activeState, setActiveState] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleLimit, setVisibleLimit] = useState(12);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // 1. Unique States List
  const statesList = useMemo(() => {
    return ["All", ...new Set(centersData.map((c) => c.state))];
  }, []);

  // 2. Filter Logic
  const filteredCenters = useMemo(() => {
    return centersData.filter((center) => {
      const matchesSearch =
        center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        center.address.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesState =
        activeState === "All" || center.state === activeState;
      return matchesSearch && matchesState;
    });
  }, [searchTerm, activeState]);

  // 3. Pagination Logic
  const displayedCenters = filteredCenters.slice(0, visibleLimit);
  const hasMore = visibleLimit < filteredCenters.length;

  // 4. Event Handlers (Fixes the setState in Effect error)
  const handleStateChange = (state) => {
    setActiveState(state);
    setVisibleLimit(12); // Direct reset on interaction
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setVisibleLimit(12); // Direct reset on interaction
  };

  const handleViewMore = () => {
    setVisibleLimit((prev) => prev + 12);
  };

  // 5. Scroll to Top Logic
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* --- HERO SECTION: EXACT STYLE MATCH TO ABOUT JITM SKILLS --- */}
      <section className="relative min-h-screen flex items-center pt-12 lg:pt-32 pb-20 overflow-hidden bg-[#0F172A] isolate">
        {/* Background Video Parallax (Exact logic match) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none w-full h-full">
          {/* Clean wrapper without undefined motion variables to prevent ESLint errors */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-[#0F172A]">
            <div className="absolute min-w-[180%] min-h-[120%] sm:min-w-[140%] sm:min-h-[140%] md:min-w-[115%] md:min-h-[115%] w-auto h-auto aspect-video top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <iframe
                className="w-full h-full pointer-events-none object-cover transform scale-110"
                src="https://www.youtube.com/embed/EKmfS5KPy44?autoplay=1&mute=1&loop=1&playlist=EKmfS5KPy44&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&enablejsapi=1&iv_load_policy=3"
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

        <div className="max-w-7xl pt-16 mx-auto px-6 w-full relative z-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT: Full Story Impact with Centers Context */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-start"
            >
              {/* Breadcrumb Section (Exact style match) */}
              <motion.nav variants={fadeInUp} className="mb-6  md:mt-0">
                <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
                  <Link
                    to="/"
                    className="text-white/50 hover:text-[#D32F2F] transition-colors flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest"
                  >
                    <Home size={12} /> Home
                  </Link>
                  <ChevronRight size={12} className="text-white/20" />
                  <span className="text-white font-black text-[10px] uppercase tracking-widest">
                    Our Centers
                  </span>
                </div>
              </motion.nav>

              {/* Badge (Style match) */}
              <motion.span
                variants={fadeInUp}
                className="badge mb-6 border border-[#D32F2F]/30 bg-[#D32F2F]/10 text-white text-[10px]"
              >
                A Nation-Wide Network of Excellence
              </motion.span>

              {/* Super Heading (Exact typography match) */}
              <motion.h1
                variants={fadeInUp}
                className="h-super text-white italic uppercase mb-6 leading-tight"
              >
                Global <br />
                <span className="text-red-gradient">Presence</span>
              </motion.h1>

              {/* Impactful Paragraphs (Matching style and borders) */}
              <motion.div
                variants={fadeInUp}
                className="space-y-4 max-w-xl mb-12"
              >
                <p className="text-white/80 text-lg font-medium leading-relaxed italic">
                  With over <b className="text-white">150+ Skill Centres</b>{" "}
                  across India, JITM is bridging the gap between industry and
                  opportunity. We don't just provide space; we create{" "}
                  <b className="text-[#D32F2F]">ecosystems of learning</b>.
                </p>

                <p className="text-white/60 text-sm leading-relaxed border-l-2 border-[#D32F2F] pl-4">
                  From our state-of-the-art corporate IT logistics centers to
                  our NSDC-certified skill centers in{" "}
                  <b className="text-white">J&K, Uttarakhand,</b>
                  and the North-East, our footprint ensures quality is never a
                  matter of chance. We are present in{" "}
                  <b className="text-white">26+ States</b>, preparing India for
                  a digital future.
                </p>
              </motion.div>

              {/* Tags Section (Centers Context) */}
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 gap-4 w-full max-w-lg mb-12"
              >
                {[
                  {
                    icon: <Building2 size={16} />,
                    text: "150+ Training Centres",
                  },
                  { icon: <MapPin size={16} />, text: "26+ States Covered" },
                  { icon: <Globe size={16} />, text: "Pan-India Logistics" },
                  { icon: <LogOut size={16} />, text: "Placement Hubs" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-[#D32F2F]/10 transition-colors group"
                  >
                    <div className="text-[#D32F2F] group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-[9px] text-white/80 font-black uppercase tracking-widest">
                      {item.text}
                    </span>
                  </div>
                ))}
              </motion.div>

              {/* Call to Action Button */}
              <motion.div variants={fadeInUp}>
                <button
                  onClick={() => {
                    const element = document.getElementById("centerFind");
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }
                  }}
                  className="btn-jitm group uppercase text-[11px] tracking-widest px-10"
                >
                  Find Nearest Center{" "}
                  <ArrowUpRight
                    className="group-hover:rotate-45 transition-transform"
                    size={18}
                  />
                </button>
              </motion.div>
            </motion.div>

            {/* RIGHT VISUAL: INTERACTIVE DATA CARDS (MATCHING STYLE) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="relative perspective-1000"
            >
              <div className="relative z-10 grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  {/* Card 1: Pan-India Coverage */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotateZ: -1, y: -5 }}
                    className="h-52 bg-white/5 backdrop-blur-2xl rounded-[40px] border border-white/10 p-8 flex flex-col justify-between group hover:bg-[#D32F2F]/10 transition-all cursor-pointer relative overflow-hidden shadow-2xl"
                  >
                    <div className="flex justify-between items-start">
                      <Globe
                        className="text-[#D32F2F] group-hover:animate-spin-slow transition-all"
                        size={32}
                      />
                      <div className="text-right">
                        <div className="text-white font-black text-2xl italic leading-none tracking-tighter">
                          26+
                        </div>
                        <div className="text-[7px] text-white/40 font-black uppercase tracking-widest mt-1">
                          States & UTs
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white font-black text-xs uppercase tracking-widest">
                        Pan-India
                      </h4>
                      <p className="text-[9px] text-white/30 font-bold uppercase tracking-tighter mt-1">
                        Coverage Network
                      </p>
                      <div className="w-full h-[1px] bg-white/10 mt-3 group-hover:bg-[#D32F2F]/50 transition-colors" />
                    </div>
                  </motion.div>

                  {/* Card 2: Key Regional Hubs (Main Red Card) */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotateZ: 1, y: -5 }}
                    className="h-64 bg-[#D32F2F] rounded-[40px] p-8 flex flex-col justify-between shadow-[0_30px_60px_rgba(211,47,47,0.4)] cursor-pointer relative overflow-hidden group"
                  >
                    <MapPin
                      className="absolute -bottom-6 -right-6 text-white/10 group-hover:scale-110 transition-transform"
                      size={150}
                    />
                    <div className="flex justify-between items-start relative z-10">
                      <Building2 className="text-white" size={32} />
                    </div>
                    <div className="relative z-10 space-y-1">
                      <div className="text-white font-black text-3xl italic tracking-tighter leading-none">
                        3+
                      </div>
                      <h4 className="text-white font-black text-xs uppercase tracking-widest">
                        Corporate
                      </h4>
                      <p className="text-[9px] text-white/70 font-bold uppercase tracking-tighter">
                        Logistics Hubs
                      </p>
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-6 pt-12">
                  {/* Card 3: NSDC Centres (Matching Placement style) */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotateZ: 1, y: -5 }}
                    className="h-64 bg-white/10 backdrop-blur-xl rounded-[40px] border border-white/10 p-8 flex flex-col justify-between hover:border-[#D32F2F]/50 transition-all cursor-pointer shadow-2xl group"
                  >
                    <div className="flex justify-between items-start">
                      <Monitor className="text-[#D32F2F]" size={32} />
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse mt-2"></span>
                    </div>
                    <div>
                      <h4 className="text-white font-black text-xs uppercase tracking-widest mb-3 italic">
                        150+ Centres
                      </h4>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden mb-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "95%" }} // Visual rep
                          transition={{ duration: 2, ease: "easeOut" }}
                          className="h-full bg-[#D32F2F]"
                        />
                      </div>
                      <p className="text-[8px] text-white/30 font-black uppercase tracking-tighter">
                        NSDC & Private Skill Centres
                      </p>
                    </div>
                  </motion.div>

                  {/* Card 4: Main Locations (With Dynamic Animation) */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotateZ: -1, y: -5 }}
                    className="h-52 bg-white/5 backdrop-blur-2xl rounded-[40px] border border-white/10 p-8 flex flex-col justify-between cursor-pointer group overflow-hidden shadow-2xl"
                  >
                    <div className="flex justify-between items-start">
                      <MapPin className="text-[#D32F2F]" size={32} />
                      <div className="flex flex-col items-end">
                        <div className="flex gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F] animate-bounce"></span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F] animate-bounce delay-100"></span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D32F2F] animate-bounce delay-200"></span>
                        </div>
                      </div>
                    </div>

                    <div className="relative h-10 my-2">
                      <AnimatePresence>
                        <motion.h4
                          key={locations[locIndex]}
                          initial={{ y: 20, opacity: 0, filter: "blur(8px)" }}
                          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                          exit={{ y: -20, opacity: 0, filter: "blur(8px)" }}
                          transition={{ duration: 0.6, ease: "backOut" }}
                          className="absolute inset-0 text-white font-black text-xl italic uppercase tracking-tighter leading-none"
                        >
                          {locations[locIndex]}
                        </motion.h4>
                      </AnimatePresence>
                    </div>

                    <div>
                      <div className="w-full h-[1px] bg-white/10 mb-2" />
                      <p className="text-[8px] text-white/30 font-black uppercase tracking-widest">
                        Core Training Regions (UP, Bihar, J&K, Uttarakhand,
                        North-East)
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
              {/* Rotating background ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full -z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left: Minimalist Text Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-3 mb-4"
              >
                <div className="h-[2px] w-8 bg-[#D32F2F]"></div>
                <span className="text-[#D32F2F] font-black text-[10px] uppercase ">
                  Network Infrastructure
                </span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-black text-slate-900 italic uppercase mb-6"
              >
                Our Training <span className="text-[#D32F2F]">Ecosystem</span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-slate-500 text-sm leading-relaxed mb-10 max-w-lg font-medium"
              >
                We operate a strong network of{" "}
                <b className="text-slate-900">150+ training centres</b> across
                India, designed to bridge the gap between classroom learning and
                industrial requirements through certified infrastructure and
                career-focused support.
              </motion.p>

              {/* List Layout - Replaces Cards */}
              <motion.div variants={staggerContainer} className="space-y-6">
                {points.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="flex items-start gap-5 group cursor-default"
                  >
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-[#D32F2F] group-hover:bg-[#D32F2F] transition-all duration-300">
                      <Check
                        size={12}
                        className="text-slate-400 group-hover:text-white transition-colors"
                      />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-black text-[11px] uppercase tracking-widest italic leading-none mb-1 group-hover:text-[#D32F2F] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-slate-400 text-[10px] font-bold uppercase tracking-tight">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: Modern Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="relative rounded-[3rem] overflow-hidden border-[12px] border-slate-100 aspect-video lg:aspect-square">
                <img
                  src={trainingImageLab}
                  alt="Training Lab"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/60 to-transparent"></div>

                {/* Overlay Stat Box */}
                <div className="absolute bottom-10 left-10 bg-white p-6 rounded-3xl shadow-2xl">
                  <div className="text-3xl font-black text-slate-900 italic tracking-tighter">
                    150+
                  </div>
                  <div className="text-[#D32F2F] text-[8px] font-black uppercase tracking-[0.2em]">
                    Centres Nationwide
                  </div>
                </div>
              </div>

              {/* Background Decorative Circles */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-slate-50 rounded-full -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white min-h-screen" id="centerFind">
        <div className="min-h-screen bg-[#f8f9fa] py-12 px-4 md:px-8 relative overflow-hidden">
          {/* --- Background Decorative Elements --- */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-500/5 rounded-full blur-3xl -z-10" />

          <div className="max-w-7xl mx-auto">
            {/* --- Header Section with Reveal Animation --- */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6"
            >
              <div>
                <h1 className="text-4xl font-black text-slate-900 italic uppercase leading-none">
                  JITM <span className="text-red-600">Training Hubs</span>
                </h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-slate-400 font-bold text-[10px]  uppercase mt-3 flex items-center gap-2"
                >
                  <span className="w-8 h-[1px] bg-red-600"></span>
                  Showing {displayedCenters.length} of {filteredCenters.length}{" "}
                  Centers
                </motion.p>
              </div>

              {/* Search Bar with Focus Animation */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-full md:w-96"
              >
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search city, center or pin..."
                  className="w-full pl-12 pr-4 py-4 rounded-2xl border-none bg-white shadow-2xl shadow-slate-200/50 text-sm focus:ring-4 focus:ring-red-600/10 transition-all outline-none font-medium"
                  onChange={handleSearchChange}
                />
              </motion.div>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-8">
              {/* --- LEFT SIDE: Sidebar with Slide-in --- */}
              <aside className="w-full md:w-64 shrink-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="sticky top-8 bg-white p-6 rounded-[32px] shadow-xl shadow-slate-200/50 max-h-[80vh] overflow-y-auto custom-scrollbar border border-slate-50"
                >
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <Building2 size={14} className="text-red-600" /> Select
                    State
                  </h3>
                  <div className="flex flex-col gap-2">
                    {statesList.map((state) => (
                      <motion.button
                        key={state}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleStateChange(state)}
                        className={`text-left px-5 py-3 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all ${
                          activeState === state
                            ? "bg-red-600 text-white shadow-lg shadow-red-200"
                            : "text-slate-500 hover:bg-slate-50"
                        }`}
                      >
                        {state}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </aside>

              {/* --- RIGHT SIDE: Grid with Stagger Animation --- */}
              <main className="flex-1">
                <motion.div
                  variants={containerVariants} // <-- Error fixed here
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  <AnimatePresence mode="popLayout">
                    {displayedCenters.map((center, idx) => (
                      <motion.div
                        key={center.name + idx}
                        layout
                        whileHover={{ y: -10 }}
                        className="group bg-white border border-slate-100 p-6 rounded-[28px] hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-500">
                              <MapPin size={20} />
                            </div>
                            <span className="text-[8px] font-black text-slate-400 uppercase tracking-[0.2em] bg-slate-50 px-2 py-1 rounded-lg group-hover:bg-red-50 group-hover:text-red-600 transition-colors">
                              {center.state}
                            </span>
                          </div>

                          <h3 className="text-slate-900 font-black text-[13px] uppercase italic tracking-wide mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
                            {center.name}
                          </h3>

                          <p className="text-slate-500 text-[10px] font-medium mb-6 line-clamp-3 leading-relaxed">
                            {center.address}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                          <motion.button
                            whileHover={{ gap: "12px" }}
                            className="flex items-center gap-2 text-red-600 text-[9px] font-black uppercase tracking-widest"
                          >
                            Details <ArrowRight size={12} />
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>

                {/* View More Button with Pulse Effect */}
                <div className="mt-12 flex justify-center">
                  {hasMore ? (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleViewMore}
                      className="flex items-center gap-3 bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-xl"
                    >
                      <Plus size={16} /> View More Centers
                    </motion.button>
                  ) : (
                    filteredCenters.length > 0 && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-slate-400 font-bold text-[10px] uppercase tracking-widest"
                      >
                        ✨ You've reached the end
                      </motion.p>
                    )
                  )}
                </div>
              </main>
            </div>
          </div>

          {/* Scroll to Top with Spring Animation */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, y: 20, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.5 }}
                whileHover={{ scale: 1.1, backgroundColor: "#0f172a" }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="fixed bottom-36 right-1 w-14 h-14 bg-red-600 text-white rounded-full shadow-2xl flex items-center justify-center z-50 shadow-red-500/30"
              >
                <ChevronUp size={24} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </section>

      <section className="py-12 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* LEFT: CONTENT SECTION */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full lg:w-2/5"
            >
              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-3 mb-6"
              >
                <div className="h-[2px] w-12 bg-[#D32F2F]"></div>
                <span className="text-[#D32F2F] font-black text-[10px] uppercase tracking-[0.4em]">
                  Our Network
                </span>
              </motion.div>

              <motion.h2
                variants={fadeInUp}
                className="text-5xl font-black text-slate-900 italic uppercase mb-8 leading-[0.9]"
              >
                Our <span className="text-[#D32F2F]">Presence</span>
              </motion.h2>

              <motion.p
                variants={fadeInUp}
                className="text-slate-500 text-sm leading-relaxed mb-10 font-medium"
              >
                With a massive network across India, we are committed to
                bridging the gap between industry and talent. Our strategic
                presence allows us to empower thousands of students through
                world-class vocational training.
              </motion.p>

              <motion.div variants={staggerContainer} className="space-y-4">
                {[
                  { t: "56 PMKK Centres", d: "Pradhan Mantri Kaushal Kendra" },
                  { t: "UPSDM Centres", d: "Uttar Pradesh Skill Development" },
                  { t: "700+ Schools", d: "Vocational Training Jharkhand" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-slate-50 hover:border-red-100 hover:bg-red-50/30 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-[#D32F2F]">
                      <Check
                        size={14}
                        className="text-slate-400 group-hover:text-white"
                      />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-black text-[10px] uppercase tracking-widest leading-none">
                        {item.t}
                      </h4>
                      <p className="text-slate-400 text-[9px] font-bold uppercase">
                        {item.d}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT: 3-IMAGE GRID */}
            <div className="w-full lg:w-3/5 grid grid-cols-12 gap-4 h-[500px]">
              {/* Main Large Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="col-span-8 h-full rounded-[2rem] overflow-hidden border-8 border-slate-50 shadow-xl"
              >
                <img
                  src={classRoomLab}
                  alt="Lab"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>

              {/* Two Smaller Images Stacked */}
              <div className="col-span-4 flex flex-col gap-4">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="h-1/2 rounded-[2rem] overflow-hidden border-8 border-slate-50 shadow-lg"
                >
                  <img
                    src={trainingImage}
                    alt="Training"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="h-1/2 rounded-[2rem] overflow-hidden border-8 border-slate-50 shadow-lg relative bg-[#D32F2F]"
                >
                  <img
                    src={successImage}
                    alt="Success"
                    className="w-full h-full object-cover mix-blend-overlay opacity-50 grayscale hover:grayscale-0 transition-all"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                    <span className="text-3xl font-black italic italic">
                      150+
                    </span>
                    <span className="text-[8px] font-black uppercase tracking-[0.2em] text-center">
                      Centres India
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="lastMileImpact"
        className="py-24 bg-slate-200 mt-5 relative overflow-hidden"
      >
        {/* Structural Decorative Lines to guide the eye */}
        <div className="absolute inset-y-0 right-1/4 w-[1px] bg-gray-100 hidden lg:block" />

        <div className="max-w-7xl mx-auto px-6">
          {/* HEADER BLOCK */}
          <div className="max-w-3xl mb-20">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
              <span className="text-red-600 font-black uppercase tracking-widest text-[10px] block">
                Beyond Commercial Training
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-[#0F172A] uppercase italic leading-none tracking-tighter mb-6">
              Grassroots Impact: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900">
                Where No One Reaches
              </span>
            </h2>

            <p className="text-gray-500 text-sm md:text-base leading-relaxed italic border-l-4 border-red-600 pl-6">
              Moving past standard urban training markets, we prioritize
              deployment networks across India's most remote interior sectors,
              bringing enterprise-grade digital skilling to underserved
              communities.
            </p>
          </div>

          {/* BENTO-STYLE IMPACT STORIES GRID */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {IMPACT_STORIES.map((story) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: story.id * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-50/60 border border-gray-100 rounded-[45px] p-8 md:p-10 flex flex-col justify-between hover:bg-[#0F172A] hover:border-[#0F172A] group transition-all duration-500"
              >
                <div>
                  {/* Visual Indicator Row */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all shadow-sm">
                      {story.id === 1 && <Compass size={22} />}
                      {story.id === 2 && <Heart size={22} />}
                      {story.id === 3 && <Users size={22} />}
                    </div>

                    {/* Dynamic Big Metric Counter inside Card */}
                    <div className="text-right">
                      <div className="text-3xl font-black text-[#0F172A] group-hover:text-red-500 transition-colors italic tracking-tighter">
                        {story.metric}
                      </div>
                      <div className="text-[7px] text-gray-400 group-hover:text-white/40 font-black uppercase tracking-widest mt-0.5">
                        {story.metricLabel}
                      </div>
                    </div>
                  </div>

                  {/* Subtitle / Zone Tag */}
                  <span className="text-[9px] font-black uppercase tracking-widest text-red-600 block mb-2">
                    {story.subtitle}
                  </span>

                  {/* Title */}
                  <h4 className="text-xl md:text-2xl font-black text-[#0F172A] group-hover:text-white uppercase italic mb-4 transition-colors">
                    {story.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-500 group-hover:text-white/60 text-xs leading-relaxed font-medium">
                    {story.desc}
                  </p>
                </div>

                {/* Bottom Card Design Divider */}
                <div className="mt-8 pt-6 border-t border-gray-200/60 group-hover:border-white/10 flex items-center justify-between text-gray-300 group-hover:text-red-500 transition-colors">
                  <span className="text-[8px] font-black uppercase tracking-widest text-gray-400 group-hover:text-white/40">
                    Mission Inclusivity
                  </span>
                  <Stars size={14} className="animate-pulse" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* BOTTOM REALITY METRIC STATEMENT BANNER */}
          <div className="bg-[#0F172A] text-white rounded-[40px] p-8 md:p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <span className="text-red-500 font-black uppercase tracking-widest text-[9px] block mb-2">
                  Our Core Philosophy
                </span>
                <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tight mb-3">
                  "Skilling Every Citizen, Empowering Every Corner"
                </h3>
                <p className="text-white/60 text-xs md:text-sm leading-relaxed max-w-2xl">
                  JITM Skills is built on the principle that geographic location
                  or financial status should never dictate an individual's
                  potential. We mobilize physical pipelines straight into rural
                  blocks to actively train and transition underrepresented
                  talent into organized enterprise roles.
                </p>
              </div>

              <div className="flex justify-start md:justify-end">
                <button className="bg-red-600 hover:bg-red-700 text-white font-black uppercase text-[10px] tracking-widest px-8 py-4 rounded-xl transition-all shadow-xl shadow-red-600/20 flex items-center gap-3 group">
                  View Impact Gallery{" "}
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurCenters;
