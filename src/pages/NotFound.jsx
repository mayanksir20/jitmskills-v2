import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Large Text */}
      <h1 className="text-[25vw] font-black text-slate-50 absolute pointer-events-none select-none tracking-tighter">
        404
      </h1>

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-[#D32F2F] font-black uppercase tracking-[0.4em] text-xs">
            Error Found
          </span>
          <h2 className="text-6xl md:text-7xl font-black text-[#1A1A1A] mt-4 mb-6 tracking-tighter uppercase leading-none">
            Lost in <br /> <span className="text-[#D32F2F]">Industry?</span>
          </h2>
          <p className="text-slate-500 max-w-md mx-auto font-medium mb-10 leading-relaxed">
            The page you are looking for has been moved, deleted, or possibly 
            never existed in our training modules.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="flex items-center gap-3 bg-[#1A1A1A] text-white px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-[#D32F2F] transition-all shadow-2xl shadow-black/10 active:scale-95 w-full sm:w-auto"
            >
              <Home size={16} /> Return to Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-3 bg-slate-50 text-slate-600 px-8 py-4 rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-slate-200 transition-all w-full sm:w-auto"
            >
              <ArrowLeft size={16} /> Go Back
            </button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-[-10%] -left-10 w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-[-10%] -right-10 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-50" />
    </div>
  );
};

export default NotFound;