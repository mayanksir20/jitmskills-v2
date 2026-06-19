import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NotificationBell from "../components/NotificationBell";
import NotificationPanel from "../components/NotificationPanel";
import UserMenu from "../components/UserMenu";
import axios from "axios";
import {
  Menu,
  X,
  ChevronDown,
  Images,
  Newspaper,
  Handshake,
  Download,
  PhoneCall,
  LogIn,
  LogOut,
  Globe,
  Building2,
  GraduationCap,
  BriefcaseBusiness,
  Briefcase,
  BadgeCheck,
} from "lucide-react";

import { Link, useNavigate, useLocation } from "react-router-dom";
import logoUrl from "../assets/images/jitm skills logo-old.webp";
import logoUrl2 from "../assets/images/skill-india.png";
import logoUrl3 from "../assets/images/learning-india.png";
import Swal from "sweetalert2";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const notificationRef = useRef(null);

  // 👇 SINGLE SOURCE OF TRUTH (IMPORTANT)
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user"));
  });

  const isLoggedIn = !!user;

  // UI STATES
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationCount, setNotificationCount] = useState(0);

  const sectors = [
    {
      name: "News & Events",
      icon: <Newspaper size={18} />,
      path: "/NewsEvents",
    },
    {
      name: "Workshop Gallery",
      icon: <Images size={18} />,
      path: "/WorkGallery",
    },
    {
      name: "Download Brochure",
      icon: <Download size={18} />,
      path: "/DownloadsBrochures",
    },
  ];

  const careerDropdownItems = [
    {
      name: "Job Openings",
      icon: <Briefcase size={18} />,
      path: "/JobOpenings",
    },
    {
      name: "Trainer Job Recruitment",
      icon: <BriefcaseBusiness size={18} />,
      path: "/TrainerRecruitment",
    },
    {
      name: "Internship Opportunities",
      icon: <GraduationCap size={18} />,
      path: "/InternshipsCareers",
    },
    {
      name: "Student Registration",
      icon: <BadgeCheck size={18} />,
      path: "/StudentRegistration",
    },
    {
      name: "Certificate Verification",
      icon: <BadgeCheck size={18} />,
      path: "/VerifyCertificate",
    },
  ];

  const servicesDropdownItems = [
    {
      name: "Key Training Sectors",
      icon: <GraduationCap size={18} />,
      path: "/TrainingSectors",
    },
    {
      name: "Become a Franchise Partner",
      icon: <Handshake size={18} />,
      path: "/BecomeFranchisePartner",
    },
    {
      name: "Corporate Connect",
      icon: <Building2 size={18} />,
      path: "/CorporateConnect",
    },
  ];

  const aboutDropdownItems = [
    { name: "About JITM", path: "/about", icon: <Building2 size={18} /> },
    { name: "Our Centers", path: "/OurCenters", icon: <Globe size={18} /> },
    {
      name: "Success Stories",
      path: "/SuccessStories",
      icon: <GraduationCap size={18} />,
    },
  ];

  // Outside Click Handling
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotification(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchNotificationCount = async () => {
      try {
        const res = await axios.get("http://https://jitmskills-v2.onrender.com/api/notifications");

        setNotificationCount(res.data?.length || 0);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNotificationCount();
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNotification = () => {
    setShowNotification((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);

    Swal.fire({
      icon: "success",
      title: "Logged Out",
      timer: 1200,
      showConfirmButton: false,
    });

    setTimeout(() => {
      window.location.replace("/");
    }, 1200);
  };

const handleContactClick = () => {
  Swal.fire({
    title: `
      <div style="
        font-family: 'Inter', sans-serif;
        font-size: 15px;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        color: #D32F2F;
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 2px;
      ">
        <span>⚡</span> Connect With Us
      </div>
    `,
    html: `
      <div style="
        font-family: 'Inter', sans-serif;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 5px;
      ">
        
        <a href="tel:+919971545133" style="
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          padding: 10px 14px;
          border-radius: 12px;
          background: #FAFAFA;
          border: 1px solid #E4E4E7;
          color: #18181B;
          transition: all 0.2s ease;
          width: 100%;
          box-sizing: border-box;
        " onmouseover="this.style.borderColor='#D32F2F'; this.style.background='#FFF5F5'" onmouseout="this.style.borderColor='#E4E4E7'; this.style.background='#FAFAFA'">
          <span style="font-size: 18px; background: #FFF5F5; padding: 6px; border-radius: 8px; display: flex; flex-shrink: 0;">📞</span>
          <div style="text-align: left; line-height: 1.3;">
            <div style="font-size: 9px; font-weight: 700; color: #71717A; text-transform: uppercase; letter-spacing: 0.02em;">Call Center</div>
            <div style="font-size: 13px; font-weight: 700; color: #09090B; white-space: nowrap;">+91 9971545133</div>
          </div>
        </a>

        <a href="mailto:info@jitmskills.com" style="
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          padding: 10px 14px;
          border-radius: 12px;
          background: #FAFAFA;
          border: 1px solid #E4E4E7;
          color: #18181B;
          transition: all 0.2s ease;
          width: 100%;
          box-sizing: border-box;
        " onmouseover="this.style.borderColor='#D32F2F'; this.style.background='#FFF5F5'" onmouseout="this.style.borderColor='#E4E4E7'; this.style.background='#FAFAFA'">
          <span style="font-size: 18px; background: #FFF5F5; padding: 6px; border-radius: 8px; display: flex; flex-shrink: 0;">✉️</span>
          <div style="text-align: left; line-height: 1.3;">
            <div style="font-size: 9px; font-weight: 700; color: #71717A; text-transform: uppercase; letter-spacing: 0.02em;">Desk Support</div>
            <div style="font-size: 13px; font-weight: 700; color: #09090B; white-space: nowrap;">info@jitmskills.com</div>
          </div>
        </a>

        <a href="https://maps.google.com/?q=JITM+Skills+Pvt+Ltd+D-87+Sector+2+Noida"
          target="_blank"
          rel="noopener noreferrer"
          style="
            display: flex;
            align-items: flex-start;
            gap: 12px;
            text-decoration: none;
            padding: 12px 14px;
            border-radius: 12px;
            background: #FAFAFA;
            border: 1px solid #E4E4E7;
            color: #18181B;
            transition: all 0.2s ease;
            width: 100%;
            box-sizing: border-box;
          " onmouseover="this.style.borderColor='#D32F2F'; this.style.background='#FFF5F5'" onmouseout="this.style.borderColor='#E4E4E7'; this.style.background='#FAFAFA'">
          <span style="font-size: 18px; background: #FFF5F5; padding: 6px; border-radius: 8px; display: flex; flex-shrink: 0; margin-top: 2px;">📍</span>
          <div style="text-align: left; line-height: 1.3;">
            <div style="font-size: 9px; font-weight: 700; color: #71717A; text-transform: uppercase; letter-spacing: 0.02em; margin-bottom: 2px;">Corporate Headquarters</div>
            <div style="font-size: 12px; font-weight: 800; color: #09090B;">JITM Skills Pvt. Ltd.</div>
            <div style="font-size: 11px; font-weight: 500; color: #3F3F46; margin-top: 1px;">
              D-87, Sector 2, Vyapar Marg, Noida, UP - 201301
            </div>
          </div>
        </a>

      </div>
    `,
    showConfirmButton: false,
    showCloseButton: true,
    width: 410, // Sized perfectly to keep single-line strings intact
    padding: "1.25rem",
    customClass: {
      popup: "custom-swal-z-index-layer",
    },
    didOpen: () => {
      // High-order layout stacking injection
      const swalContainer = Swal.getContainer();
      if (swalContainer) {
        swalContainer.style.zIndex = "999999";
      }
    }
  });

  setIsMobileMenuOpen(false);
};

  const isActive = (path) => location.pathname === path;
  const aboutRoutes = aboutDropdownItems.map((item) => item.path);
  const serviceRoutes = servicesDropdownItems.map((item) => item.path);
  const ecosystemRoutes = sectors.map((item) => item.path);
  const careerRoutes = careerDropdownItems.map((item) => item.path);
  const isDropdownActive = (routes) => routes.includes(location.pathname);

  return (
    <header className="fixed top-0 w-full z-[5000] bg-white transition-all duration-300">
      {/* ================= DESKTOP TOP HEADER ================= */}
      <AnimatePresence initial={false}>
        {!scrolled && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
            className="hidden lg:block bg-white border-b border-slate-100 py-4 px-8"
          >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <div className="flex items-center gap-8">
                <Link to="/" className="flex items-center gap-2.5 group">
                  <img src={logoUrl} alt="NSDC" className="h-10" />
                </Link>
                <div className="flex items-center gap-5 border-l border-slate-200 pl-6 ml-2">
                  <img src={logoUrl2} alt="Skill India" className="h-12" />
                  <img src={logoUrl3} alt="NSDC" className="h-12" />
                </div>
              </div>

              <div className="flex items-center gap-3">
                {/* NOTIFICATION (TOP DESKTOP) */}
                <div ref={notificationRef} className="relative">
                  <NotificationBell
                    unread={notificationCount}
                    onClick={toggleNotification}
                  />
                  <AnimatePresence>
                    {showNotification && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-0 right-0 h-full w-[380px] z-[99999]"
                      >
                        <NotificationPanel
                          onClose={() => setShowNotification(false)}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* LOGIN / USER SECTION */}
                {isLoggedIn ? (
                  <UserMenu user={user} onLogout={handleLogout} />
                ) : (
                  <button
                    onClick={() => navigate("/login")}
                    className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full"
                  >
                    <LogIn size={16} />
                    Login
                  </button>
                )}
                <button
                  onClick={handleContactClick}
                  className="p-2.5 rounded-xl bg-red-50 text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white transition-all"
                >
                  <PhoneCall size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= MAIN NAVBAR ================= */}
      <nav
        className={`w-full transition-all duration-300 z-[5100] relative ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3 px-4 md:px-8 border-b border-slate-200"
            : "bg-white py-4 px-4 md:px-8 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div
            className={`overflow-hidden transition-all duration-300 ${
              scrolled
                ? "w-auto opacity-100 mr-6"
                : "lg:w-0 lg:opacity-0 lg:mr-0 w-auto opacity-100 mr-6"
            }`}
          >
            <Link to="/" className="flex items-center shrink-0">
              <img
                src={logoUrl}
                alt="JITM Skills"
                className="h-10 md:h-11 w-auto min-w-max"
              />
            </Link>
          </div>

          {/* DESKTOP MENU LINKS */}
          <ul className="hidden lg:flex font-semibold items-center gap-6 xl:gap-8 text-[13px] xl:text-[15px] whitespace-nowrap text-slate-600 flex-nowrap flex-1 justify-center">
            <li
              className={`transition-colors ${isActive("/") ? "text-[#D32F2F]" : "text-slate-600 hover:text-[#D32F2F]"}`}
            >
              <Link to="/">Home</Link>
            </li>

            {/* About Dropdown */}
            <li
              className={`relative group flex items-center gap-1 cursor-pointer transition-colors ${isDropdownActive(aboutRoutes) ? "text-[#D32F2F]" : "hover:text-[#D32F2F]"}`}
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              About Us
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${activeDropdown === "about" ? "rotate-180" : ""}`}
              />
              <AnimatePresence>
                {activeDropdown === "about" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute top-6 left-0 w-72 bg-white shadow-2xl rounded-xl border border-slate-100 py-2 z-[5500]"
                  >
                    {aboutDropdownItems.map((item) => (
                      <Link
                        key={item.path} // ✅ FIXED (unique key)
                        to={item.path}
                        className={`flex items-center gap-4 px-6 py-4 transition-all ${
                          isActive(item.path)
                            ? "bg-red-50 text-[#D32F2F]"
                            : "hover:bg-red-50 hover:text-[#D32F2F]"
                        }`}
                      >
                        <span
                          className={
                            isActive(item.path)
                              ? "text-[#D32F2F]"
                              : "text-slate-500"
                          }
                        >
                          {item.icon}
                        </span>

                        <span
                          className={`text-[14px] font-medium ${
                            isActive(item.path)
                              ? "text-[#D32F2F]"
                              : "text-slate-700"
                          }`}
                        >
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li
              className={`transition-colors ${isActive("/OurVerticals") ? "text-[#D32F2F]" : "text-slate-600 hover:text-[#D32F2F]"}`}
            >
              <Link to="/OurVerticals">Our Verticals</Link>
            </li>

            {/* Services Dropdown */}
            <li
              className={`relative group flex items-center gap-1 cursor-pointer transition-colors ${isDropdownActive(serviceRoutes) ? "text-[#D32F2F]" : "hover:text-[#D32F2F]"}`}
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              Services
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${activeDropdown === "services" ? "rotate-180" : ""}`}
              />
              <AnimatePresence>
                {activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute top-6 left-0 w-72 bg-white shadow-2xl rounded-xl border border-slate-100 py-2 z-[5500]"
                  >
                    {servicesDropdownItems.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        className={`flex items-center gap-4 px-6 py-4 transition-all ${isActive(item.path) ? "bg-red-50 text-[#D32F2F]" : "hover:bg-red-50 hover:text-[#D32F2F]"}`}
                      >
                        <span
                          className={
                            isActive(item.path)
                              ? "text-[#D32F2F]"
                              : "text-slate-500"
                          }
                        >
                          {item.icon}
                        </span>
                        <span
                          className={`text-[14px] font-medium ${isActive(item.path) ? "text-[#D32F2F]" : "text-slate-700"}`}
                        >
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Ecosystem & Media Dropdown */}
            <li
              className={`relative group flex items-center gap-1 cursor-pointer transition-colors ${isDropdownActive(ecosystemRoutes) ? "text-[#D32F2F]" : "hover:text-[#D32F2F]"}`}
              onMouseEnter={() => setActiveDropdown("sectors")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              Ecosystem & Media
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${activeDropdown === "sectors" ? "rotate-180" : ""}`}
              />
              <AnimatePresence>
                {activeDropdown === "sectors" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute top-6 left-0 w-64 bg-white shadow-2xl rounded-xl border border-slate-100 py-2 z-[5500]"
                  >
                    {sectors.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        className={`flex items-center gap-4 px-6 py-4 transition-all ${isActive(item.path) ? "bg-red-50 text-[#D32F2F]" : "hover:bg-red-50 hover:text-[#D32F2F]"}`}
                      >
                        <span
                          className={
                            isActive(item.path)
                              ? "text-[#D32F2F]"
                              : "text-slate-500"
                          }
                        >
                          {item.icon}
                        </span>
                        <span
                          className={`text-[14px] font-medium ${isActive(item.path) ? "text-[#D32F2F]" : "text-slate-700"}`}
                        >
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Careers Dropdown */}
            <li
              className={`relative group flex items-center gap-1 cursor-pointer transition-colors ${isDropdownActive(careerRoutes) ? "text-[#D32F2F]" : "hover:text-[#D32F2F]"}`}
              onMouseEnter={() => setActiveDropdown("careers")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              Careers
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${activeDropdown === "careers" ? "rotate-180" : ""}`}
              />
              <AnimatePresence>
                {activeDropdown === "careers" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute top-6 left-0 w-72 bg-white shadow-2xl rounded-xl border border-slate-100 py-2 z-[5500]"
                  >
                    {careerDropdownItems.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        className={`flex items-center gap-4 px-6 py-4 transition-all ${isActive(item.path) ? "bg-red-50 text-[#D32F2F]" : "hover:bg-red-50 hover:text-[#D32F2F]"}`}
                      >
                        <span
                          className={
                            isActive(item.path)
                              ? "text-[#D32F2F]"
                              : "text-slate-500"
                          }
                        >
                          {item.icon}
                        </span>
                        <span
                          className={`text-[14px] font-medium ${isActive(item.path) ? "text-[#D32F2F]" : "text-slate-700"}`}
                        >
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li
              className={`transition-colors ${isActive("/ContactUs") ? "text-[#D32F2F]" : "text-slate-600 hover:text-[#D32F2F]"}`}
            >
              <Link to="/ContactUs">Contact Us</Link>
            </li>
          </ul>

          {/* RIGHT SIDE ACTIONS */}
          <div className="flex items-center gap-2">
            {scrolled && (
              <div className="hidden lg:flex items-center gap-3">
                {/* NOTIFICATION (SCROLLED DESKTOP) */}
                <div ref={notificationRef} className="relative">
                  <NotificationBell
                    unread={notificationCount}
                    onClick={toggleNotification}
                  />
                  <AnimatePresence>
                    {showNotification && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-0 right-0 h-full w-[380px] z-[99999]"
                      >
                        <NotificationPanel
                          onClose={() => setShowNotification(false)}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {isLoggedIn ? (
                  <UserMenu user={user} onLogout={handleLogout} />
                ) : (
                  <button
                    onClick={() => navigate("/login")}
                    className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full"
                  >
                    <LogIn size={16} />
                    Login
                  </button>
                )}
                <button
                  onClick={handleContactClick}
                  className="p-2.5 rounded-xl bg-red-50 text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white"
                >
                  <PhoneCall size={18} />
                </button>
              </div>
            )}

            {/* MOBILE LAYOUT ACTIONS */}
            <div className="flex lg:hidden items-center gap-2">
              {/* NOTIFICATION (MOBILE) */}
              <div ref={notificationRef} className="relative">
                <NotificationBell
                  unread={notificationCount}
                  onClick={toggleNotification}
                />
                <AnimatePresence>
                  {showNotification && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 md:right-0 max-md:left-1/2 max-md:-translate-x-1/2 top-14 z-[99999]"
                    >
                      <NotificationPanel
                        onClose={() => setShowNotification(false)}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {isLoggedIn ? (
                <UserMenu user={user} onLogout={handleLogout} />
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="p-2 rounded-xl bg-slate-900 text-white"
                >
                  <LogIn size={18} />
                </button>
              )}
              <button
                onClick={handleContactClick}
                className="p-2 rounded-xl bg-red-50 text-[#D32F2F]"
              >
                <PhoneCall size={18} />
              </button>
              <button
                className="p-2 rounded-xl bg-slate-900 text-white"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE SIDEBAR DRAWER ================= */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* BACKGROUND BACKDROP OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-[6000]"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* SIDEBAR CONTAINER */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed top-0 left-0 w-[280px] h-full bg-white z-[6500] shadow-2xl lg:hidden flex flex-col"
            >
              {/* TOP MOBILE SIDEBAR (HEADER & LOGO) */}
              <div className="p-6 border-b bg-slate-50">
                <div className="flex justify-between items-center">
                  <span className="font-black text-xl italic uppercase tracking-tighter">
                    <Link
                      to="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center shrink-0"
                    >
                      <img
                        src={logoUrl}
                        alt="JITM Skills"
                        className="h-10 md:h-11 w-auto min-w-max"
                      />
                    </Link>
                  </span>
                  <X
                    size={20}
                    className="text-[#D32F2F] cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                </div>
              </div>

              {/* MIDDLE SCROLLABLE NAVIGATION LINKS */}
              <div className="flex-1 overflow-y-auto p-6 space-y-5 text-left">
                {/* --- Home --- */}
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-[16px] font-semibold border-b border-slate-100 pb-3 transition-colors ${
                    location.pathname === "/"
                      ? "text-[#D32F2F]"
                      : "text-slate-800 hover:text-[#D32F2F]"
                  }`}
                >
                  Home
                </Link>

                {/* --- About Us Mobile Dropdown --- */}
                <div className="border-b border-slate-100 pb-3">
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === "m_about" ? null : "m_about",
                      )
                    }
                    className={`flex items-center justify-between w-full text-[16px] font-semibold transition-colors ${
                      isDropdownActive(aboutRoutes)
                        ? "text-[#D32F2F]"
                        : "text-slate-800"
                    }`}
                  >
                    About Us
                    <ChevronDown
                      size={18}
                      className={`${
                        activeDropdown === "m_about" ? "rotate-180" : ""
                      } transition-transform duration-300`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === "m_about" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-slate-50 rounded-lg mt-2"
                      >
                        {aboutDropdownItems.map((item) => (
                          <Link
                            key={item.path} // ✅ FIXED
                            to={item.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`flex items-center gap-3 p-4 text-[14px] font-medium border-b border-white last:border-0 transition-all ${
                              location.pathname === item.path
                                ? "bg-red-50 text-[#D32F2F]"
                                : "text-slate-600 hover:bg-red-50 hover:text-[#D32F2F]"
                            }`}
                          >
                            <span className="text-[#D32F2F]">{item.icon}</span>
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* --- Our Verticals --- */}
                <Link
                  to="/OurVerticals"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-[16px] font-semibold border-b border-slate-100 pb-3 transition-colors ${
                    location.pathname === "/OurVerticals"
                      ? "text-[#D32F2F]"
                      : "text-slate-800 hover:text-[#D32F2F]"
                  }`}
                >
                  Our Verticals
                </Link>

                {/* --- Services Mobile Dropdown --- */}
                <div className="border-b border-slate-100 pb-3">
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === "m_services" ? null : "m_services",
                      )
                    }
                    className={`flex items-center justify-between w-full text-[16px] font-semibold transition-colors ${
                      isDropdownActive(serviceRoutes)
                        ? "text-[#D32F2F]"
                        : "text-slate-800"
                    }`}
                  >
                    Services
                    <ChevronDown
                      size={18}
                      className={`${
                        activeDropdown === "m_services" ? "rotate-180" : ""
                      } transition-transform duration-300`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === "m_services" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-slate-50 rounded-lg mt-2"
                      >
                        {servicesDropdownItems.map((s, i) => (
                          <Link
                            key={i}
                            to={s.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`flex items-center gap-3 p-4 text-[14px] font-medium border-b border-white last:border-0 transition-all ${
                              location.pathname === s.path
                                ? "bg-red-50 text-[#D32F2F]"
                                : "text-slate-600 hover:bg-red-50 hover:text-[#D32F2F]"
                            }`}
                          >
                            <span className="text-[#D32F2F]">{s.icon}</span>
                            {s.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* --- Ecosystem Mobile Dropdown --- */}
                <div className="border-b border-slate-100 pb-3">
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === "m_special" ? null : "m_special",
                      )
                    }
                    className={`flex items-center justify-between w-full text-[16px] font-semibold transition-colors ${
                      isDropdownActive(ecosystemRoutes)
                        ? "text-[#D32F2F]"
                        : "text-slate-800"
                    }`}
                  >
                    Ecosystem & Media
                    <ChevronDown
                      size={18}
                      className={`${
                        activeDropdown === "m_special" ? "rotate-180" : ""
                      } transition-transform duration-300`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === "m_special" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-slate-50 rounded-lg mt-2"
                      >
                        {sectors.map((s, i) => (
                          <Link
                            key={i}
                            to={s.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`flex items-center gap-3 p-4 text-[14px] font-medium border-b border-white last:border-0 transition-all ${
                              location.pathname === s.path
                                ? "bg-red-50 text-[#D32F2F]"
                                : "text-slate-600 hover:bg-red-50 hover:text-[#D32F2F]"
                            }`}
                          >
                            <span className="text-[#D32F2F]">{s.icon}</span>
                            {s.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* --- Career Mobile Dropdown --- */}
                <div className="border-b border-slate-100 pb-3">
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === "m_careers" ? null : "m_careers",
                      )
                    }
                    className={`flex items-center justify-between w-full text-[16px] font-semibold transition-colors ${
                      isDropdownActive(careerRoutes)
                        ? "text-[#D32F2F]"
                        : "text-slate-800"
                    }`}
                  >
                    Career
                    <ChevronDown
                      size={18}
                      className={`${
                        activeDropdown === "m_careers" ? "rotate-180" : ""
                      } transition-transform duration-300`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === "m_careers" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden bg-slate-50 rounded-lg mt-2"
                      >
                        {careerDropdownItems.map((s, i) => (
                          <Link
                            key={i}
                            to={s.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`flex items-center gap-3 p-4 text-[14px] font-medium border-b border-white last:border-0 transition-all ${
                              location.pathname === s.path
                                ? "bg-red-50 text-[#D32F2F]"
                                : "text-slate-600 hover:bg-red-50 hover:text-[#D32F2F]"
                            }`}
                          >
                            <span className="text-[#D32F2F]">{s.icon}</span>
                            {s.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* --- Contact Us --- */}
                <Link
                  to="/ContactUs"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-[16px] font-semibold border-b border-slate-100 pb-3 transition-colors ${
                    location.pathname === "/ContactUs"
                      ? "text-[#D32F2F]"
                      : "text-slate-800 hover:text-[#D32F2F]"
                  }`}
                >
                  Contact Us
                </Link>
              </div>

              {/* BOTTOM MOBILE SIDEBAR (ACTION BUTTONS) */}
              <div className="p-6 mt-auto border-t border-slate-200 bg-white space-y-3">
                <button
                  onClick={handleContactClick}
                  className="w-full flex items-center justify-center gap-3 bg-[#D32F2F] hover:bg-[#b71c1c] text-white py-3.5 rounded-xl font-semibold text-sm shadow-md transition-all duration-300"
                >
                  <PhoneCall size={18} />
                  Connect Support
                </button>

                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-3 bg-red-50 hover:bg-red-100 text-[#D32F2F] py-3.5 rounded-xl font-semibold text-sm border border-red-100 transition-all duration-300"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      navigate("/login");
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white py-3.5 rounded-xl font-semibold text-sm shadow-md transition-all duration-300"
                  >
                    <LogIn size={18} />
                    Login
                  </button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
