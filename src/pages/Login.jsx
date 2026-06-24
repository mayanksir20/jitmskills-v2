import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoUrl from "../assets/images/jitm skills logo white.webp";
import {
  LogIn,
  UserPlus,
  Mail,
  Lock,
  User,
  ArrowRight,
  Eye,
  EyeOff,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? "/api/auth/login" : "/api/auth/register";
    try {
      const { data } = await axios.post(
        `https://jitmskills-v2.onrender.com${endpoint}`,
        formData,
      );
      localStorage.setItem("user", JSON.stringify(data));

      Swal.fire({
        icon: "success",
        title: isLogin ? "Welcome Back!" : "Account Created!",
        text: `Hello ${data.name}, preparation complete.`,
        timer: 1500,
        showConfirmButton: false,
      });

      setTimeout(() => {
        navigate("/");
        window.location.reload();
      }, 1500);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Access Denied",
        text: error.response?.data?.message || "Invalid credentials.",
      });
    }
  };

  // Animation Variants
  const containerVars = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.08, delayChildren: 0.15, duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4 lg:p-6 overflow-hidden relative">
      {/* Premium Ambient Background Blobs */}
      <div className="absolute top-[-15%] left-[-10%] w-[50vw] h-[50vw] bg-rose-100/60 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[40vw] h-[40vw] bg-blue-50/50 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVars}
        className="max-w-5xl w-full grid lg:grid-cols-2 bg-white/90 backdrop-blur-md rounded-[32px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.06)] border border-slate-100 relative z-10 overflow-hidden"
      >
        {/* Left Side Panel (Premium Slate/Crimson Gradient Layout) */}
        <div className="hidden lg:flex flex-col justify-between p-14 bg-gradient-to-br from-zinc-900 via-neutral-950 to-black text-white relative">
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-16">
              <div className="w-10 h-10 bg-gradient-to-tr from-rose-600 to-red-500 rounded-xl flex items-center justify-center shadow-lg shadow-red-900/20 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <Sparkles size={18} className="text-white" />
              </div>
              <span className="font-black tracking-tighter text-2xl">
                <Link to="/" className="flex items-center gap-2.5 group">
                  <img
                    loading="lazy"
                    src={logoUrl}
                    alt="JITM Skills"
                    className="h-9 opacity-95 group-hover:opacity-100 transition-opacity"
                  />
                </Link>
              </span>
            </div>
            
            <h1 className="text-[44px] font-black leading-[1.15] tracking-tight mb-5 text-zinc-50">
              Master New <br />
              <span className="bg-gradient-to-r from-red-500 to-rose-500 bg-clip-text text-transparent">Industrial</span> Skills
            </h1>
            
            {/* Added Modern Paragraph Subtext */}
            <p className="text-sm font-medium text-zinc-400 leading-relaxed max-w-sm tracking-wide">
              Access government recognized trade modules, live assessment tracking dashboards, and certified skill portfolios optimized for the evolving industrial ecosystem.
            </p>
          </div>
          
          <div className="relative z-10 flex items-center gap-3.5 bg-white/[0.03] backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-inner">
            <div className="p-2 bg-red-500/10 rounded-lg text-red-400">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-[10px] font-black tracking-wider text-zinc-400 uppercase">Verification Framework</p>
              <p className="text-xs font-bold text-zinc-200 mt-0.5">Certified NSQF Executive Training Partner</p>
            </div>
          </div>
        </div>

        {/* Right Side (Form Control Layer) */}
        <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center bg-white">
          {/* Custom Switcher Controls */}
          <div className="inline-flex p-1 bg-slate-100/80 rounded-2xl mb-8 w-fit mx-auto lg:mx-0 border border-slate-200/40">
            <button
              onClick={() => setIsLogin(true)}
              className={`px-8 py-2.5 rounded-xl text-[11px] font-extrabold tracking-wider uppercase transition-all duration-200 ${isLogin ? "bg-white text-rose-600 shadow-sm" : "text-slate-400 hover:text-slate-600"}`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`px-8 py-2.5 rounded-xl text-[11px] font-extrabold tracking-wider uppercase transition-all duration-200 ${!isLogin ? "bg-white text-rose-600 shadow-sm" : "text-slate-400 hover:text-slate-600"}`}
            >
              Register
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <AnimatePresence mode="wait">
              {!isLogin && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                  className="relative overflow-hidden"
                >
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider ml-1 mb-1.5 block">
                    Full Name
                  </label>
                  <div className="relative group">
                    <User
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-rose-500 transition-colors duration-200"
                      size={16}
                    />
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="w-full bg-slate-50/80 border border-slate-200 rounded-2xl py-3.5 pl-12 pr-4 text-xs font-bold tracking-wide focus:outline-none focus:border-rose-500/30 focus:ring-4 focus:ring-rose-500/5 focus:bg-white transition-all duration-200"
                      onChange={handleInputChange}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Email Field */}
            <motion.div variants={itemVars} className="relative">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider ml-1 mb-1.5 block">
                Email Address
              </label>
              <div className="relative group">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-rose-500 transition-colors duration-200"
                  size={16}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="admin@jitm.com"
                  required
                  className="w-full bg-slate-50/80 border border-slate-200 rounded-2xl py-3.5 pl-12 pr-4 text-xs font-bold tracking-wide focus:outline-none focus:border-rose-500/30 focus:ring-4 focus:ring-rose-500/5 focus:bg-white transition-all duration-200"
                  onChange={handleInputChange}
                />
              </div>
            </motion.div>

            {/* Password Field */}
            <motion.div variants={itemVars} className="relative">
              <div className="flex justify-between items-center mb-1.5 px-1">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-wider block">
                  Password
                </label>
                {isLogin && (
                  <a href="#forgot" className="text-[10px] font-extrabold text-rose-500 hover:text-rose-600 transition-colors">
                    Forgot?
                  </a>
                )}
              </div>
              <div className="relative group">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-rose-500 transition-colors duration-200"
                  size={16}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  required
                  className="w-full bg-slate-50/80 border border-slate-200 rounded-2xl py-3.5 pl-12 pr-12 text-xs font-bold tracking-wide focus:outline-none focus:border-rose-500/30 focus:ring-4 focus:ring-rose-500/5 focus:bg-white transition-all duration-200"
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-rose-500 transition-colors duration-200"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </motion.div>

            {/* Submit Action Button */}
            <motion.button
              variants={itemVars}
              whileHover={{ scale: 1.005, backgroundColor: "#000" }}
              whileTap={{ scale: 0.995 }}
              type="submit"
              className="w-full bg-zinc-900 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all duration-200 shadow-lg shadow-zinc-900/10 mt-6"
            >
              {isLogin ? <LogIn size={14} /> : <UserPlus size={14} />}
              {isLogin ? "Authenticate" : "Create Profile"}
              <ArrowRight size={14} className="ml-0.5" />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;