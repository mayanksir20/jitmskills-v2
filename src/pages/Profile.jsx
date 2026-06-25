import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Lock,
  Save,
  Camera,
  ArrowLeft,
  Smartphone,
} from "lucide-react"; // Smartphone icon add kiya
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
const API_URL = import.meta.env.VITE_API_URL;

const Profile = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [formData, setFormData] = useState(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    return {
      id: savedUser?._id || savedUser?.id || "",
      name: savedUser?.name || "",
      email: savedUser?.email || "",
      phone: savedUser?.phone || "", // 💡 Phone state add ki
      password: "",
    };
  });

  const handleUpdate = async (e) => {
    e.preventDefault();

    console.log("Form Data being sent:", formData);

    if (!formData.id || formData.id === "") {
      Swal.fire(
        "Error",
        "Invalid User Session. Please logout and login again.",
        "error",
      );
      return;
    }

    try {
      // 💡 LocalStorage se token nikala jisse middleware pass ho sake
      const savedUser = JSON.parse(localStorage.getItem("user"));
      const token = savedUser?.token;

      const { data } = await axios.put(`${API_URL}/auth/profile`, formData, {
        // 💡 Bearer Token headers me attach kiya taaki protect middleware block na kare
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);

      await Swal.fire({
        icon: "success",
        title: "Profile Updated!",
        timer: 1500,
        showConfirmButton: false,
      });

      window.location.reload();
    } catch (error) {
      console.log("Full Error Response:", error.response?.data);
      Swal.fire({
        icon: "error",
        title:
          error.response?.status === 401
            ? "Session Expired"
            : "Server Error (500)",
        text:
          error.response?.data?.message ||
          "Something went wrong on the server.",
      });
    }
  };

  if (!user)
    return <div className="p-20 text-center font-black">UNAUTHORIZED</div>;

  return (
    <div className="min-h-screen bg-[#f8fafc] pt-32 pb-20 px-4">
      <motion.button
        onClick={() => navigate(-1)}
        className="max-w-2xl mx-auto mb-6 flex items-center gap-2 text-slate-400 hover:text-[#D32F2F] font-black text-[10px] uppercase tracking-widest"
      >
        <ArrowLeft size={16} /> Back
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto bg-white rounded-[40px] shadow-2xl border border-white overflow-hidden relative"
      >
        <div className="h-40 bg-[#1A1A1A] relative">
          <div className="absolute -bottom-14 left-10 group">
            <div className="w-28 h-28 bg-[#D32F2F] rounded-[32px] border-8 border-white flex items-center justify-center text-white text-4xl font-black shadow-xl relative overflow-hidden">
              {user?.name?.charAt(0).toUpperCase()}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                <Camera size={24} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-10 pt-20">
          <h2 className="text-3xl font-black text-[#1A1A1A] uppercase tracking-tighter italic">
            Edit <span className="text-[#D32F2F]">Profile</span>
          </h2>
          <form onSubmit={handleUpdate} className="space-y-6 mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Full Name Field */}
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Full Name
                </label>
                <div className="relative group">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#D32F2F]"
                    size={18}
                  />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl py-4 pl-12 pr-4 text-xs font-bold uppercase focus:outline-none focus:border-[#D32F2F]/20 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Email Address Field */}
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  Email Address
                </label>
                <div className="relative group">
                  <Mail
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#D32F2F]"
                    size={18}
                  />
                  <input
                    type="email"
                    value={formData.email}
                    placeholder="Not Provided"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl py-4 pl-12 pr-4 text-xs font-bold focus:outline-none focus:border-[#D32F2F]/20 focus:bg-white transition-all"
                  />
                </div>
              </div>
            </div>

            {/* 💡 Added: Phone Number Input Field */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Phone Number
              </label>
              <div className="relative group">
                <Smartphone
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#D32F2F]"
                  size={18}
                />
                <input
                  type="tel"
                  value={formData.phone}
                  placeholder="Not Provided"
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl py-4 pl-12 pr-4 text-xs font-bold focus:outline-none focus:border-[#D32F2F]/20 focus:bg-white transition-all"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                New Password (Leave blank to keep current)
              </label>
              <div className="relative group">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#D32F2F]"
                  size={18}
                />
                <input
                  type="password"
                  placeholder="••••••••"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl py-4 pl-12 pr-4 text-xs font-bold uppercase focus:outline-none focus:border-[#D32F2F]/20 focus:bg-white transition-all"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-[#1A1A1A] text-white py-5 rounded-2xl font-black text-[10px] uppercase flex items-center justify-center gap-3 hover:bg-[#D32F2F] transition-all shadow-xl"
            >
              <Save size={14} /> Commit Changes
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Profile;
