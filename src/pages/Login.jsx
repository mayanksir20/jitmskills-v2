import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { useNavigate } from "react-router-dom";
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-4 lg:p-0 overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-red-50 rounded-full blur-[120px] opacity-60" />

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVars}
        className="max-w-5xl w-full grid lg:grid-cols-2 bg-white/80 backdrop-blur-xl rounded-[40px] shadow-2xl border border-white relative z-10 overflow-hidden"
      >
        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-between p-12 bg-[#1A1A1A] text-white">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-12">
              <div className="w-10 h-10 bg-[#D32F2F] rounded-xl flex items-center justify-center rotate-3">
                <Sparkles size={20} className="text-white" />
              </div>
              <span className="font-black tracking-tighter text-2xl ">
                JITM.
              </span>
            </div>
            <h1 className="text-5xl font-black leading-[1.1] tracking-tighter mb-6 ">
              Master New <br />{" "}
              <span className="text-[#D32F2F]">Industrial</span> Skills
            </h1>
          </div>
          <div className="relative z-10 flex items-center gap-4 bg-white/5 p-4 rounded-3xl border border-white/10">
            <ShieldCheck className="text-[#D32F2F]" size={24} />
            <p className="text-[10px] font-black  tracking-widest text-slate-300">
              Certified NSQF Partner
            </p>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="p-8 lg:p-16 flex flex-col justify-center">
          <div className="inline-flex p-1 bg-slate-100 rounded-2xl mb-10 w-fit mx-auto lg:mx-0">
            <button
              onClick={() => setIsLogin(true)}
              className={`px-8 py-2.5 rounded-xl text-[10px] font-black  tracking-widest transition-all ${isLogin ? "bg-white text-[#D32F2F] shadow-sm" : "text-slate-400"}`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`px-8 py-2.5 rounded-xl text-[10px] font-black  tracking-widest transition-all ${!isLogin ? "bg-white text-[#D32F2F] shadow-sm" : "text-slate-400"}`}
            >
              Register
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <AnimatePresence>
              {!isLogin && (
                <motion.div variants={itemVars} className="relative">
                  <label className="text-[10px] font-black text-slate-400  tracking-widest ml-1 mb-2 block">
                    Full Name
                  </label>
                  <div className="relative group">
                    <User
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#D32F2F]"
                      size={18}
                    />
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl py-4 pl-12 pr-4 text-xs font-bold  tracking-widest focus:outline-none focus:border-[#D32F2F]/20 focus:bg-white transition-all"
                      onChange={handleInputChange}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Email Field */}
            <motion.div variants={itemVars} className="relative">
              <label className="text-[10px] font-black text-slate-400 tracking-widest ml-1 mb-2 block">
                Email Address
              </label>
              <div className="relative group">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#D32F2F]"
                  size={18}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="admin@jitm.com"
                  required
                  className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl py-4 pl-12 pr-4 text-xs font-bold  tracking-widest focus:outline-none focus:border-[#D32F2F]/20 focus:bg-white transition-all"
                  onChange={handleInputChange}
                />
              </div>
            </motion.div>

            {/* Password Field */}
            <motion.div variants={itemVars} className="relative">
              <label className="text-[10px] font-black text-slate-400 tracking-widest ml-1 mb-2 block">
                Password
              </label>
              <div className="relative group">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#D32F2F]"
                  size={18}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••"
                  required
                  className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl py-4 pl-12 pr-12 text-xs font-bold tracking-widest focus:outline-none focus:border-[#D32F2F]/20 focus:bg-white transition-all"
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-[#D32F2F]"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </motion.div>

            {/* Submit Button - Icons Fixed Here */}
            <motion.button
              variants={itemVars}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-[#1A1A1A] text-white py-5 rounded-2xl font-black text-[10px] flex items-center justify-center gap-3 hover:bg-[#D32F2F] transition-all shadow-xl mt-4"
            >
              {isLogin ? <LogIn size={14} /> : <UserPlus size={14} />}
              {isLogin ? "Authenticate" : "Create Profile"}
              <ArrowRight size={14} />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
