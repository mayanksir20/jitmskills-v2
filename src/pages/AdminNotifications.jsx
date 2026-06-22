import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Trash2, Plus } from "lucide-react";

const AdminNotifications = () => {
  const [notifications, setNotifications] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    message: "",
    link: "",
  });

  // Load Notifications
  useEffect(() => {
    const loadNotifications = async () => {
      try {
        const { data } = await axios.get(
          "https://jitmskills-v2.onrender.com/api/notifications",
        );

        setNotifications(data);
      } catch (error) {
        console.log(error);
      }
    };

    loadNotifications();
  }, []);

  // Reusable Fetch Function
  const fetchNotifications = async () => {
    try {
      const { data } = await axios.get(
        "https://jitmskills-v2.onrender.com/api/notifications",
      );

      setNotifications(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Add Notification
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://jitmskills-v2.onrender.com/api/notifications",
        formData,
      );

      Swal.fire({
        icon: "success",
        title: "Notification Added",
        timer: 1500,
        showConfirmButton: false,
      });

      setFormData({
        title: "",
        message: "",
        link: "",
      });

      fetchNotifications();
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Single
  const deleteNotification = async (id) => {
    try {
      await axios.delete(
        `https://jitmskills-v2.onrender.com/api/notifications/${id}`,
      );

      fetchNotifications();
    } catch (error) {
      console.log(error);
    }
  };

  // Clear All
  const clearAll = async () => {
    try {
      await axios.delete(
        "https://jitmskills-v2.onrender.com/api/notifications",
      );

      fetchNotifications();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-52 pb-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-black">Manage Announcements</h1>

          <button
            onClick={clearAll}
            className="bg-red-100 text-red-600 px-3 py-1 rounded-lg text-sm font-medium"
          >
            Dismiss
          </button>
        </div>

        {/* Form */}
        <div className="bg-white p-6 rounded-2xl shadow mb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Notification Title"
              className="w-full border p-3 rounded-xl"
              value={formData.title}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  title: e.target.value,
                })
              }
              required
            />

            <textarea
              placeholder="Notification Message"
              className="w-full border p-3 rounded-xl"
              rows={4}
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
              required
            />

            <input
              type="text"
              placeholder="/BecomeFranchisePartner"
              className="w-full border p-3 rounded-xl"
              value={formData.link}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  link: e.target.value,
                })
              }
            />

            <button
              type="submit"
              className="bg-[#D32F2F] text-white px-6 py-3 rounded-xl flex items-center gap-2"
            >
              <Plus size={18} />
              Add Notification
            </button>
          </form>
        </div>

        {/* Notification List */}
        <div className="bg-white rounded-2xl shadow overflow-hidden">
          <div className="p-5 border-b">
            <h2 className="font-bold">
              All Notifications ({notifications.length})
            </h2>
          </div>

          {notifications.length === 0 ? (
            <div className="p-8 text-center text-slate-500">
              No Announcements Found
            </div>
          ) : (
            notifications.map((item) => (
              <div
                key={item._id}
                className="p-5 border-b flex justify-between items-center"
              >
                <div>
                  <h3 className="font-bold">{item.title}</h3>

                  <p className="text-slate-500 text-sm">{item.message}</p>

                  <p className="text-[#D32F2F] text-xs mt-1">{item.link}</p>
                </div>

                <button
                  onClick={() => deleteNotification(item._id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminNotifications;
