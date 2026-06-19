import { Link } from "react-router-dom";
import logoUrl from "../assets/images/jitm skills logo white.png";

import galleryimages1 from "../assets/images/Gallery/footergallery1.webp";
import galleryimages2 from "../assets/images/Gallery/footergallery2.webp";
import galleryimages3 from "../assets/images/Gallery/footergallery3.webp";
import galleryimages4 from "../assets/images/Gallery/footergallery4.webp";
import galleryimages5 from "../assets/images/Gallery/footergallery5.webp";
import galleryimages6 from "../assets/images/Gallery/footergallery6.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Optimized Array with 6 Compact Images
  const galleryImages = [
    {
      id: 1,
      src: galleryimages1,
      alt: "Training Lab",
    },
    {
      id: 2,
      src: galleryimages2,
      alt: "Tech Session",
    },
    {
      id: 3,
      src: galleryimages3,
      alt: "Workshop",
    },
    {
      id: 4,
      src: galleryimages4,
      alt: "Vocational Excellence",
    },

    {
      id: 5,
      src: galleryimages5,
      alt: "Skill Assessment",
    },
    {
      id: 6,
      src: galleryimages6,
      alt: "Development Hub",
    },
  ];

  return (
    <footer className="bg-[#0F172A] text-slate-400 pt-20 pb-10 font-sans relative overflow-hidden border-t border-slate-800/50">
      {/* Premium Ambient Background Background Glows */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[350px] h-[350px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-red-600/5 rounded-full blur-[120px] -mr-32 -mb-32 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* --- Column 1: Brand Identity & Social Icons --- */}
          <div className="space-y-6">
         
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter text-white leading-none">
                  <Link to="/" className="flex items-center shrink-0">
                    <img
                      src={logoUrl}
                      alt="JITM Skills"
                      className="h-10 md:h-11 w-auto min-w-max"
                    />
                  </Link>
                </span>
              </div>
           
            <p className="text-slate-400 text-xs leading-relaxed font-medium">
              India's leading vocational training partner empowering youth
              through industrial excellence and verified skill development
              programs.
            </p>

            {/* Social Connection Elements with standard vector icons */}
            <div className="space-y-3">
              <span className="text-[9px] font-black tracking-wider uppercase text-slate-500 block">
                Follow Our Impact
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href="https://www.facebook.com/jitmskills"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#1877F2] hover:border-transparent transition-all duration-300"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/jitm.skills/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#E4405F] hover:border-transparent transition-all duration-300"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a
                  href="https://in.linkedin.com/company/jitm-skills"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0077B5] hover:border-transparent transition-all duration-300"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@jitmskills1080"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#FF0000] hover:border-transparent transition-all duration-300"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/jitm_skills?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-black hover:border-transparent transition-all duration-300"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* --- Column 2: Navigation Links (Clean Layout without arrows) --- */}
          <div>
            <h4 className="text-white font-black text-xs mb-6 uppercase tracking-[0.2em] border-l-4 border-red-500 pl-3">
              Navigation
            </h4>
            <ul className="space-y-3.5 text-xs font-bold uppercase tracking-wider">
              <li>
                <a
                  href="/"
                  className="hover:text-red-500 transition-colors duration-300 text-slate-400 block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-red-500 transition-colors duration-300 text-slate-400 block"
                >
                  About JITM
                </a>
              </li>
              <li>
                <a
                  href="/TrainingSectors"
                  className="hover:text-red-500 transition-colors duration-300 text-slate-400 block"
                >
                  Training Programs
                </a>
              </li>
              <li>
                <a
                  href="/OurVerticals"
                  className="hover:text-red-500 transition-colors duration-300 text-slate-400 block"
                >
                  Our Verticals
                </a>
              </li>
              <li>
                <a
                  href="/JobOpenings"
                  className="hover:text-red-500 transition-colors duration-300 text-slate-400 block"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/ContactUs"
                  className="hover:text-red-500 transition-colors duration-300 text-slate-400 block"
                >
                  Connect With Us
                </a>
              </li>
            </ul>
          </div>

          {/* --- Column 3: Impact Gallery (Custom 6 Photo Grid Array) --- */}
          <div>
            <h4 className="text-white font-black text-xs mb-6 uppercase tracking-[0.2em] border-l-4 border-red-500 pl-3">
              Impact Gallery
            </h4>

            {/* 6 Grid Container Block */}
            <div className="grid grid-cols-3 gap-2 max-w-[210px] mb-4">
              {galleryImages.map((img) => (
                <div
                  key={img.id}
                  className="aspect-square rounded-lg overflow-hidden bg-slate-900 border border-slate-800/60 relative group cursor-pointer shadow-sm"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  />
                </div>
              ))}
            </div>

            <a
              href="/gallery"
              className="group inline-flex items-center gap-1.5 text-[10px] font-black tracking-widest text-slate-400 hover:text-red-500 uppercase transition-all duration-300 border-b border-slate-800 hover:border-red-500/40 pb-0.5"
            >
              <span>Work Gallery</span>
            </a>
          </div>

          {/* --- Column 4: Corporate Office --- */}
          <div>
            <h4 className="text-white font-black text-xs mb-6 uppercase tracking-[0.2em] border-l-4 border-red-500 pl-3">
              Corporate Office
            </h4>
            <div className="space-y-4 text-xs font-semibold text-slate-400">
              {/* --- 📍 Google Maps Location Trigger --- */}
              <a
                href="https://maps.google.com/?q=JITM+Skills,+D-87,+Sector+2,+Vyapar+Marg,+Noida+201301"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:opacity-90 transition-opacity duration-200 group block"
              >
                <span className="text-red-500 pt-0.5 group-hover:scale-110 transition-transform">
                  📍
                </span>
                <p className="leading-relaxed text-slate-300 font-bold text-sm group-hover:text-red-400 transition-colors">
                  D-87, Sector 2, <br />
                  Vyapar Marg, Noida – 201301
                </p>
              </a>

              {/* --- 📞 Click to Call Desk Interaction --- */}
              <div className="space-y-3">
                {/* Mobile Connect */}
                <a
                  href="tel:+919971545133"
                  className="flex items-start gap-3 hover:opacity-90 transition-opacity duration-200 group block"
                >
                  <span className="text-red-500 pt-0.5 group-hover:scale-110 transition-transform">
                    📞
                  </span>
                  <div className="flex flex-col">
                    <span className="text-slate-300 font-bold text-sm group-hover:text-red-400 transition-colors">
                      +91 99715 45133
                    </span>
                  </div>
                </a>

                {/* Landline Connect */}
                <a
                  href="tel:01204282837"
                  className="flex items-start gap-3 pl-6 hover:opacity-90 transition-opacity duration-200 group block -mt-2"
                >
                  <div className="flex flex-col">
                    <span className="text-[11px] text-slate-500 font-medium group-hover:text-slate-400 transition-colors">
                      0120 428 2837 (Landline)
                    </span>
                  </div>
                </a>
              </div>

              {/* --- ✉️ Click to Mail Integration --- */}
              <a
                href="mailto:info@jitmskills.com?subject=Inquiry%20from%20Website"
                className="flex items-start gap-3 hover:opacity-90 transition-opacity duration-200 group block"
              >
                <span className="text-red-500 pt-0.5 group-hover:scale-110 transition-transform">
                  ✉️
                </span>
                <p className="text-slate-300 font-bold text-sm group-hover:text-red-400 transition-colors">
                  info@jitmskills.com
                </p>
              </a>
            </div>
          </div>
        </div>

        {/* --- Bottom Section: Auto-updating Dynamic Copyright & Legal Policies --- */}
        <div className="pt-8 border-t border-slate-900 flex flex-col xl:flex-row justify-between items-center gap-6">
          <div>
            <p className="text-[9px] text-slate-600 uppercase font-black tracking-wider">
              © {currentYear} JITM SKILLS PVT LTD. All Rights Reserved.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[9px] font-black uppercase tracking-widest text-slate-500">
            <a href="/faq" className="hover:text-red-500 transition-colors">
              FAQ
            </a>
            <a
              href="/privacy-policy"
              className="hover:text-red-500 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/refund-policy"
              className="hover:text-red-500 transition-colors"
            >
              Refund & Return Policy
            </a>
            <a href="/terms" className="hover:text-red-500 transition-colors">
              Terms & Conditions
            </a>

            <div className="flex items-center gap-1.5 text-red-400 bg-red-500/5 px-2.5 py-1 rounded-full border border-red-500/10">
              <span>National Presence</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- Floating Sticky WhatsApp Icon Button --- */}
      <a
        href="https://wa.me/919971545133?text=Hello%20JITM%20Skills,%20I%20have%20an%20inquiry."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-1 z-50 flex items-center justify-center group hover:scale-110 active:scale-95 transition-all duration-300 drop-shadow-xl"
        title="Chat on WhatsApp"
      >
        {/* Ambient Glowing Wave */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping group-hover:animate-none opacity-75 pointer-events-none scale-90" />

        {/* WhatsApp High-Quality PNG Icon */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp Connect"
          className="w-14 h-14 object-contain relative z-10"
        />
      </a>
    </footer>
  );
};

export default Footer;
