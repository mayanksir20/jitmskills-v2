import axios from "axios";
import { useState } from "react";

const WebsiteControl = () => {
  const [loading, setLoading] = useState(false);

  const updateStatus = async (status) => {
    try {
      setLoading(true);

      await axios.post(
        "http://localhost:5000/api/website-status",
        {
          maintenanceMode: status,
        }
      );

      alert(
        status
          ? "Maintenance Enabled"
          : "Maintenance Disabled"
      );
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-10 pt-52">
      <h1 className="text-3xl font-bold mb-8">
        Website Control Panel
      </h1>

      <div className="flex gap-4">
        <button
          disabled={loading}
          onClick={() => updateStatus(true)}
          className="bg-red-600 text-white px-6 py-3 rounded-lg"
        >
          Maintenance ON
        </button>

        <button
          disabled={loading}
          onClick={() => updateStatus(false)}
          className="bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          Maintenance OFF
        </button>
      </div>
    </div>
  );
};

export default WebsiteControl;