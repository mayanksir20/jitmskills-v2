import { Link } from "react-router-dom";
import {
  Megaphone,
  Briefcase,
  GraduationCap,
  Building2,
  Trash2,
} from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const NotificationPanel = ({ onClose, setNotificationCount }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("user"));
  const token = user?.token;

  useEffect(() => {
    const loadNotifications = async () => {
      try {
        let response;

        if (token) {
          response = await axios.get(`${API_URL}/notifications/user`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          console.log("USER NOTIFICATIONS:", response.data);
        } else {
          response = await axios.get(`${API_URL}/notifications`);

          console.log("GUEST NOTIFICATIONS:", response.data);
        }

        setItems(response.data || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadNotifications();
  }, [token]);

  // First Load

  // dismiss Notification
  const dismissNotification = async (notificationId) => {
    try {
      await axios.post(
        `${API_URL}/notifications/dismiss`,
        {
          notificationId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setItems((prev) => {
        const updatedItems = prev.filter((item) => item._id !== notificationId);

        // Badge count instantly update
        setNotificationCount(updatedItems.length);

        return updatedItems;
      });
    } catch (error) {
      console.log(error);
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
    <div className="fixed top-24 right-5 w-[420px] max-md:w-[95vw] max-md:right-[2.5vw] bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-slate-100 z-[999999] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between p-5 border-b bg-gradient-to-r from-red-50 to-white">
        <div>
          <h3 className="font-bold text-lg text-slate-800">Announcements</h3>

          <p className="text-xs text-slate-500">
            Latest Updates & Announcements
          </p>
        </div>

        <div className="flex pb-5 items-center gap-2">
          {token && (
            <span className="text-xs text-green-600 font-medium"></span>
          )}

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
        {loading ? (
          <div className="p-5 space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="animate-pulse flex gap-3 border-b pb-4"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-200"></div>

                <div className="flex-1">
                  <div className="h-3 w-32 bg-slate-200 rounded mb-2"></div>
                  <div className="h-3 w-full bg-slate-100 rounded mb-2"></div>
                  <div className="h-3 w-3/4 bg-slate-100 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        ) : items.length === 0 ? (
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
              <div className="flex gap-3 items-start">
                {getIcon(item.type)}

                {/* CONTENT */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-xs text-slate-800">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-500 mt-1">{item.message}</p>

                  {item.link && (
                    <Link
                      to={item.link}
                      className="inline-flex items-center gap-2 mt-3 px-4 py-2 rounded-xl bg-[#D32F2F] text-white text-xs font-semibold hover:bg-red-700 transition-all"
                    >
                      Know More →
                    </Link>
                  )}
                </div>

                {/* DELETE BUTTON ONLY FOR LOGGED IN USERS */}
                {token && (
                  <button
                    onClick={() => dismissNotification(item._id)}
                    className="h-8 w-8 flex items-center justify-center rounded-lg text-red-500 hover:bg-red-100 transition shrink-0"
                    title="Dismiss Notification"
                  >
                    <Trash2 size={14} />
                  </button>
                )}
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
