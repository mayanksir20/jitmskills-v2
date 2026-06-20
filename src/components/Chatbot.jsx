import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { MessageSquare, X, Send, Loader2 } from "lucide-react";

// =========================================================================
// 🚀 CONNECTION STEP: Apne frontend data.js file se knowledge mapping import ki
// =========================================================================
import { WEBSITE_AI_KNOWLEDGE } from "../constants/data"; // Path check kar lena agar file alag folder me ho

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Live JITM node backend execution endpoint mapping
  const API_URL = "https://jitmskills-v2.onrender.com";

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading, isOpen]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
    setLoading(true);

    try {
      // =========================================================================
      // ⚡ PIPELINE IMPLEMENTATION: Message ke sath dynamic database object send kiya
      // =========================================================================
      const response = await axios.post(`${API_URL}/api/chat`, {
        message: currentInput,
        websiteData: WEBSITE_AI_KNOWLEDGE // 👈 Ye poora object ab backend server ko pass hoga
      });

      const aiMessage = { sender: "ai", text: response.data.reply };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "Sorry, could not connect to the server. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-2 z-[9999] font-sans selection:bg-[#D32F2F]/20">
      {/* 💬 FLOATING CHAT TRIGGER BUTTON */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2.5 bg-[#D32F2F] hover:bg-[#b72424] text-white px-6 py-3.5 rounded-full shadow-2xl shadow-red-600/20 text-xs font-black uppercase tracking-widest cursor-pointer border border-white/10"
          >
            <MessageSquare size={16} className="stroke-[2.5]" />
            <span>Ask AI</span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* 📦 PREMIUM BENTO GLASSMORPHIC CHAT WINDOW BOX */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="w-80 sm:w-96 h-[520px] bg-white rounded-[28px] shadow-2xl shadow-slate-950/20 flex flex-col border border-slate-200/80 overflow-hidden"
          >
            {/* Header Area */}
            <div className="bg-[#030d06] text-white p-4 flex justify-between items-center border-b border-white/[0.04]">
              <div className="flex items-center gap-2.5">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-sm shadow-emerald-400" />
                <div>
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-emerald-400">
                    JITM Navigation Core
                  </h4>
                  <p className="text-[9px] text-slate-400 font-medium">
                    Data-Engine Agent Active
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1.5 rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
              >
                <X size={16} />
              </button>
            </div>

            {/* Chat Body Streams */}
            <div className="flex-1 p-4 overflow-y-auto bg-slate-50/60 flex flex-col gap-3.5">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-xs font-medium leading-relaxed shadow-xs border ${
                    msg.sender === "user"
                      ? "self-end bg-[#D32F2F] text-white border-transparent rounded-tr-none"
                      : "self-start bg-white text-slate-800 border-slate-200/60 rounded-tl-none"
                  }`}
                >
                  {msg.text}
                </div>
              ))}

              {loading && (
                <div className="self-start bg-white text-slate-400 border border-slate-200/60 px-4 py-3 rounded-2xl rounded-tl-none text-xs font-medium flex items-center gap-1.5 shadow-xs">
                  <Loader2 size={12} className="animate-spin text-[#D32F2F]" />
                  <span className="italic">
                    AI is fetching data blueprints...
                  </span>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Action Submit Input Bar Frame */}
            <form
              onSubmit={handleSendMessage}
              className="p-3 border-t border-slate-100 flex gap-2 bg-white items-center"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about pages, verticals, data arrays..."
                className="flex-1 bg-slate-50 border border-slate-200/80 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 font-medium focus:outline-hidden focus:border-[#D32F2F] focus:bg-white transition-colors disabled:opacity-50"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                className="bg-[#D32F2F] hover:bg-[#b72424] text-white p-2.5 rounded-xl disabled:bg-slate-100 disabled:text-slate-400 transition-all cursor-pointer flex items-center justify-center shrink-0"
              >
                <Send size={14} className="stroke-[2.5]" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;