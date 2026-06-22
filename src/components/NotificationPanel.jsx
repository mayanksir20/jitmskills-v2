import { Link } from "react-router-dom";
import { Megaphone, Briefcase, GraduationCap, Building2 } from "lucide-react";
import { useState } from "react";
import axios from "axios";

const NotificationPanel = ({ onClose }) => {
  const [items, setItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  // Load Notifications
  const loadNotifications = async () => {
    try {
      const { data } = await axios.get(
        "https://jitmskills-v2.onrender.com/api/notifications",
      );

      setItems(data || []);
    } catch (error) {
      console.log("Notification Load Error:", error);
    } finally {
      setLoaded(true);
    }
  };

  // First Load
  if (!loaded) {
    loadNotifications();
  }

  const clearAll = async () => {
    try {
      await axios.delete(
        "https://jitmskills-v2.onrender.com/api/notifications",
      );

      setItems([]);
    } catch (error) {
      console.log("Clear Error:", error);
    }
  };

  const getIcon = (type) => {
    switch (type) {
      case "franchise":
        return (
          <div className="p-2 rounded-xl bg-red-100 text-[#D32F2F]">
            <Building2 size={18} />
          </div>
        );

      case "course":
        return (
          <div className="p-2 rounded-xl bg-blue-100 text-blue-600">
            <GraduationCap size={18} />
          </div>
        );

      case "career":
        return (
          <div className="p-2 rounded-xl bg-green-100 text-green-600">
            <Briefcase size={18} />
          </div>
        );

      default:
        return (
          <div className="p-2 rounded-xl bg-slate-100">
            <Megaphone size={18} />
          </div>
        );
    }
  };

  return (
    <div className="absolute right-0 md:right-0 max-md:right-[-120px] top-14 w-[420px] max-md:w-[320px] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-slate-100 z-[9999] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-5 border-b bg-gradient-to-r from-red-50 to-white">
        <div>
          <h3 className="font-bold text-lg text-slate-800">Announcements</h3>

          <p className="text-xs text-slate-500">
            Latest Updates & Announcements
          </p>
        </div>

        <div className="flex pb-5 items-center gap-2">
          <button
            onClick={clearAll}
            className="px-3 p-2  text-xs rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition"
          >
            Dismiss
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-red-600 hover:bg-red-100 transition"
          >
            ✕
          </button>
        </div>
      </div>

      {/* List */}
      <div className="max-h-[420px] overflow-y-auto">
        {items.length === 0 ? (
          <div className="p-10 text-center">
            <Megaphone size={40} className="mx-auto text-slate-300 mb-3" />

            <p className="text-slate-500">No Announcements available</p>
          </div>
        ) : (
          items.map((item) => (
            <div
              key={item._id}
              className="p-4 border-b hover:bg-slate-50 transition-all"
            >
              <div className="flex gap-3">
                {getIcon(item.type)}

                <div className="flex-1">
                  <h4 className="font-semibold text-xs text-slate-800">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-500 mb-0">{item.message}</p>

                  {item.link && (
                    <Link
                      to={item.link}
                      className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl bg-[#D32F2F] text-white text-xs font-semibold hover:bg-red-700 transition-all"
                    >
                      Know More →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      {/* {items.length > 0 && (
        <div className="p-4 border-t bg-slate-50">
          <button
            onClick={clearAll}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white border hover:bg-red-50 hover:text-[#D32F2F] transition"
          >
            <Trash2 size={16} />
            Clear All Notifications
          </button>
        </div>
      )} */}
    </div>
  );
};

export default NotificationPanel;
