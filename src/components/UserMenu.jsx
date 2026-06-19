import { useState } from "react";
import { Link } from "react-router-dom";
import { User, LogOut } from "lucide-react";

const UserMenu = ({ user, onLogout }) => {
  const [open, setOpen] = useState(false);

  const getInitials = (name = "") => {
    const parts = name.trim().split(" ");
    const first = parts[0]?.[0] || "";
    const last = parts[1]?.[0] || "";
    return (first + last).toUpperCase();
  };

  return (
    <div className="relative z-[6000]">
      {/* ICON */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white font-bold hover:bg-[#D32F2F] transition"
      >
        {getInitials(user?.name)}
      </button>

      {/* DROPDOWN */}
      {open && (
        <>
          {/* backdrop close */}
          <div
            className="fixed inset-0 z-[5999]"
            onClick={() => setOpen(false)}
          />

          <div className="absolute right-0 sm:right-0 max-[375px]:-right-[25px] mt-3 w-72 bg-white shadow-2xl rounded-2xl border overflow-hidden z-[6000]">
            
            {/* HEADER */}
            <div className="px-4 py-3 bg-gradient-to-r from-red-50 to-white border-b">
              <h3 className="text-sm font-bold text-slate-800">
                User Profile Details
              </h3>
            </div>

            {/* USER INFO */}
            <div className="p-5 text-center border-b">
              <div className="w-14 h-14 mx-auto rounded-full bg-slate-900 text-white flex items-center justify-center text-lg font-bold">
                {getInitials(user?.name)}
              </div>

              <p className="mt-3 font-semibold text-slate-800">
                {user?.name}
              </p>
            </div>

            {/* MENU */}
            <div className="p-2">
              <Link
                to="/profile"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-4 py-3 text-sm hover:bg-slate-50 rounded-lg"
              >
                <User size={16} />
                Profile
              </Link>

              {/* ADMIN */}
              {user?.role === "admin" && (
                <Link
                  to="/admin/notifications"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-4 py-3 text-sm text-[#D32F2F] hover:bg-red-50 rounded-lg"
                >
                  🔔 Manage Notifications
                </Link>
              )}

              {/* LOGOUT */}
              <button
                onClick={onLogout}
                className="w-full flex items-center gap-2 px-4 py-3 text-sm text-red-600 hover:bg-red-50 rounded-lg border-t mt-1"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserMenu;