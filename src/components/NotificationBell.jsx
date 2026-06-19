import { Bell } from "lucide-react";

const NotificationBell = ({ onClick, unread }) => {
  return (
    <button
      onClick={onClick}
      className="p-2.5 rounded-xl relative bg-gradient-to-br from-red-50 to-orange-50 text-[#D32F2F] border border-red-100 shadow-sm hover:shadow-md hover:scale-105 transition-all"
    >
      <Bell size={18} />

      {unread > 0 && (
        <span className="notification-badge absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full text-white text-[10px] font-bold flex items-center justify-center shadow-lg">
          {unread > 99 ? "99+" : unread}
        </span>
      )}
    </button>
  );
};

export default NotificationBell;
