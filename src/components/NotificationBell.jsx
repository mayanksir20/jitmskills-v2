import { Megaphone } from "lucide-react";

const NotificationBell = ({ onClick, unread }) => {
  return (
    <button
      onClick={onClick}
      className="p-2.5 rounded-xl relative bg-gradient-to-br from-red-50 to-orange-50 text-[#D32F2F] border border-red-100 shadow-sm hover:shadow-md hover:scale-105 transition-all"
    >
      <Megaphone size={18} />

      {unread > 0 && (
        <span className="absolute -top-2.5 -right-2.5 min-w-[22px] h-[22px] px-1 rounded-full bg-[#D32F2F] text-white text-[11px] font-bold flex items-center justify-center shadow-lg border-2 border-white animate-pulse">
          {unread > 99 ? "99+" : unread}
        </span>
      )}
    </button>
  );
};

export default NotificationBell;
