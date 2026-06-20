import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect, useState } from "react";
import MaintenancePage from "./pages/MaintenancePage";
import axios from "axios";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import About from "./pages/About";
import OurCenters from "./pages/OurCenters";
import OurVerticals from "./pages/OurVerticals";
import TrainingSectors from "./pages/TrainingSectors";
import OurCourse from "./components/OurCourse.jsx";
import SuccessStories from "./pages/SuccessStories";
import GetInTouch from "./components/GetInTouch.jsx"; // Tumhara form component
import Chatbot from "./components/Chatbot.jsx";
import InstitutionalAwards from "./components/InstitutionalAwards.jsx"; // Institutional Awards component
import CorporateConnect from "./pages/CorporateConnect.jsx";
import WorkGallery from "./pages/WorkGallery.jsx"; // Our Course page
import DownloadsBrochures from "./pages/DownloadsBrochures.jsx"; // Downloads & Brochures page
import JobOpenings from "./pages/JobOpenings.jsx"; // Our Course page
import NewsEvents from "./pages/NewsEvents.jsx"; // News & Events page
import TrainerRecruitment from "./pages/TrainerRecruitment.jsx";
import VerifyCertificate from "./pages/VerifyCertificate.jsx";
import InternshipsCareers from "./pages/InternshipsCareers.jsx";
import StudentRegistration from "./pages/StudentRegistration.jsx";
import BecomeFranchisePartner from "./pages/BecomeFranchisePartner.jsx";
import ContactUs from "./pages/ContactUs.jsx"; // Our Course page
import NotFound from "./pages/NotFound"; //Not Found page

import AdminNotifications from "./pages/AdminNotifications";
import AdminRoute from "./components/AdminRoute";
import WebsiteControl from "./pages/WebsiteControl";

// ScrollToTop Component: Page change hone par auto-scroll up karega
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Layout Manager: Login page par Header/Footer hide karne ke liye
const AppLayout = ({ children }) => {
  const location = useLocation();
  const hideLayout = location.pathname === "/login";

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#D32F2F] selection:text-white font-sans bg-[#fcfcfd]">
      {!hideLayout && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!hideLayout && <Footer />}
    </div>
  );
};

function App() {
  const [maintenance, setMaintenance] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await axios.get("https://jitmskills-v2.onrender.com/api/website-status");

        setMaintenance(res.data.maintenanceMode);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
  }, []);

  if (loading) {
    return null;
  }

if (
  maintenance &&
  location.pathname !== "/website-control"
) {
  return <MaintenancePage />;
}


  

  return (
    <Router>
      <ScrollToTop />
      <AppLayout>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/About" element={<About />} />
          <Route path="/OurCenters" element={<OurCenters />} />
          <Route path="/OurVerticals" element={<OurVerticals />} />
          <Route path="/TrainingSectors" element={<TrainingSectors />} />
          <Route path="/OurCourse" element={<OurCourse />} />
          <Route path="/SuccessStories" element={<SuccessStories />} />
          <Route path="/WorkGallery" element={<WorkGallery />} />
          <Route path="/GetInTouch" element={<GetInTouch />} />
          <Route path="/CorporateConnect" element={<CorporateConnect />} />
          <Route path="/website-control" element={<WebsiteControl />} />
          <Route
            path="/BecomeFranchisePartner"
            element={<BecomeFranchisePartner />}
          />
          <Route
            path="/InstitutionalAwards"
            element={<InstitutionalAwards />}
          />
          <Route path="/JobOpenings" element={<JobOpenings />} />
          <Route path="/TrainerRecruitment" element={<TrainerRecruitment />} />
          <Route path="/InternshipsCareers" element={<InternshipsCareers />} />
          <Route path="/VerifyCertificate" element={<VerifyCertificate />} />
          <Route
            path="/StudentRegistration"
            element={<StudentRegistration />}
          />
          <Route path="/DownloadsBrochures" element={<DownloadsBrochures />} />
          <Route path="/NewsEvents" element={<NewsEvents />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          {/* Sector Specific Routes - Aap inke liye bhi alag files bana sakte hain */}
          <Route
            path="/industrial"
            element={
              <div className="pt-60 text-center h-screen font-black text-4xl uppercase tracking-tighter">
                Industrial Skills{" "}
                <span className="text-[#D32F2F]">Training</span>
              </div>
            }
          />
          <Route
            path="/technical"
            element={
              <div className="pt-60 text-center h-screen font-black text-4xl uppercase tracking-tighter">
                Technical <span className="text-[#D32F2F]">Education</span>
              </div>
            }
          />
          <Route
            path="/digital"
            element={
              <div className="pt-60 text-center h-screen font-black text-4xl uppercase tracking-tighter">
                Digital <span className="text-[#D32F2F]">Literacy</span>
              </div>
            }
          />
          <Route
            path="/placement"
            element={
              <div className="pt-60 text-center h-screen font-black text-4xl uppercase tracking-tighter">
                Placement <span className="text-[#D32F2F]">Cell</span>
              </div>
            }
          />
          <Route
            path="/admin/notifications"
            element={
              <AdminRoute>
                <AdminNotifications />
              </AdminRoute>
            }
          />

          {/* Fallback 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppLayout>
      <Chatbot />
    </Router>
  );
}

export default App;
