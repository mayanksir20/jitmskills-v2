import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote, Camera, X, Send, SquarePen, User } from "lucide-react";
import api from "../services/api";

// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", text: "", img: "" });

  const isReviewEnabled = true;

  // --- 1. FETCH REVIEWS ---
  useEffect(() => {
    const fetchAllReviews = async () => {
      try {
        const response = await api.get("/testimonials");
        setTestimonials(response.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchAllReviews();
  }, []);

  // --- 2. IMAGE PICKER LOGIC ---
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 50 * 1024) {
        alert("Image too large! Please use a photo under 50KB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => setFormData({ ...formData, img: reader.result });
      reader.readAsDataURL(file);
    }
  };

  // --- 3. SUBMIT REVIEW ---
  const handleSubmit = async (e) => {
    e.preventDefault();

    const words = formData.text
      .trim()
      .split(/\s+/)
      .filter((w) => w !== "");
    if (words.length > 50) {
      alert("Review exceeds 50 words limit!");
      return;
    }

    setLoading(true);
    try {
      await api.post("/testimonials", formData);

      setShowForm(false);
      setFormData({ name: "", text: "", img: "" });

      const response = await api.get("/testimonials");
      setTestimonials(response.data);

      alert("Review posted successfully!");
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Failed to post review.";
      alert(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-6"
      >
        {/* Header Section */}
        <div className="flex flex-col border-b pb-6 md:flex-row justify-between items-center gap-8 mb-10">
          <motion.div variants={fadeInUp} className="text-center md:text-left">
            <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter text-[#0F172A]">
              Student{" "}
              <span className="text-red-600 underline decoration-4 underline-offset-8">
                Voices
              </span>
            </h2>
          </motion.div>

          {isReviewEnabled && (
            <motion.button
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowForm(true)}
              className="group px-8 py-4 bg-black text-white rounded-full flex items-center gap-3 transition-colors hover:bg-red-600 shadow-xl"
            >
              <SquarePen
                size={16}
                className="group-hover:scale-110 transition-transform"
              />
              <span className="font-black uppercase text-[10px] tracking-widest">
                Write Review
              </span>
            </motion.button>
          )}
        </div>

        {/* Testimonials Slider */}
        <motion.div variants={fadeInUp}>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{ delay: 4000 }}
            pagination={{ clickable: true }}
            className="review-swiper !pb-16"
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t._id}>
                {/* Fixed Card Frame without Hover Movement */}
                <div className="bg-[#F8FAFC] p-10 rounded-[50px] border border-gray-100 h-[380px] flex flex-col justify-between relative group hover:bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  
                  {/* Decorative Background Quote */}
                  <Quote
                    className="absolute top-8 right-8 text-red-600/10 group-hover:text-red-600/20 transition-colors duration-500"
                    size={60}
                  />
                  
                  {/* Default Content Viewport */}
                  <div className="relative z-10 h-[180px] overflow-hidden">
                    <p className="text-gray-500 font-medium italic text-lg leading-relaxed line-clamp-4">
                      "{t.text}"
                    </p>
                  </div>

                  {/* SMOOTH OVERLAY INNER WRAPPER FOR FULL TEXT ON HOVER */}
                  <div className="absolute inset-x-0 top-0 bg-white/95 backdrop-blur-sm p-10 h-[260px] overflow-y-auto opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-500 z-20 border-b border-gray-100 rounded-t-[50px] custom-scrollbar">
                    <p className="text-slate-800 font-semibold italic text-base leading-relaxed text-left">
                      "{t.text}"
                    </p>
                  </div>

                  {/* Fixed Bottom Profile Layer - Never Shifts */}
                  <div className="flex items-center gap-5 pt-6 border-t border-gray-200/50 relative z-30 bg-inherit">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-white shadow-lg border-2 border-white ring-2 ring-red-600/10 shrink-0">
                      {t.img ? (
                        <img
                          src={t.img}
                          className="w-full h-full object-cover"
                          alt={t.name}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-100">
                          <User className="text-gray-300" size={24} />
                        </div>
                      )}
                    </div>
                    <h4 className="font-black text-[#0F172A] uppercase text-[10px] italic tracking-[0.2em]">
                      {t.name}
                    </h4>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Form Modal */}
        <AnimatePresence>
          {showForm && (
            <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                className="bg-white w-full max-w-lg rounded-[60px] p-12 relative shadow-2xl"
              >
                <button
                  onClick={() => setShowForm(false)}
                  className="absolute top-10 right-10 text-gray-300 hover:text-red-600 transition-all"
                >
                  <X size={32} />
                </button>
                <h3 className="text-4xl font-black italic uppercase mb-2">
                  Share <span className="text-red-600">Story</span>
                </h3>
                <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-10">
                  Max 50 Words Only
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="flex items-center gap-6 p-4 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-100">
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center overflow-hidden border">
                      {formData.img ? (
                        <img
                          src={formData.img}
                          className="w-full h-full object-cover"
                          alt="preview"
                        />
                      ) : (
                        <Camera className="text-gray-200" size={30} />
                      )}
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="text-[10px] font-black text-gray-400 cursor-pointer"
                    />
                  </div>
                  <input
                    required
                    placeholder="Full Name"
                    className="w-full bg-gray-50 p-6 rounded-3xl outline-none focus:ring-2 focus:ring-red-600 font-bold"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                  <textarea
                    required
                    rows="4"
                    placeholder="Describe your experience..."
                    className="w-full bg-gray-50 p-6 rounded-3xl outline-none focus:ring-2 focus:ring-red-600 font-bold resize-none"
                    value={formData.text}
                    onChange={(e) =>
                      setFormData({ ...formData, text: e.target.value })
                    }
                  ></textarea>
                  <button
                    disabled={loading}
                    type="submit"
                    className="w-full bg-red-600 text-white p-6 rounded-3xl font-black uppercase tracking-widest hover:bg-black transition-all flex items-center justify-center gap-3 disabled:bg-gray-400"
                  >
                    {loading ? "Posting..." : "Post Review"} <Send size={20} />
                  </button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Testimonials;