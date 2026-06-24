import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
import axios from "axios";
import { GraduationCap } from "lucide-react";
import logoUrl from "./assets/images/jitm skills logo-old.webp";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Profile = lazy(() => import("./pages/Profile"));
const About = lazy(() => import("./pages/About"));
const OurCenters = lazy(() => import("./pages/OurCenters"));
const OurVerticals = lazy(() => import("./pages/OurVerticals"));
const TrainingSectors = lazy(() => import("./pages/TrainingSectors"));
const SuccessStories = lazy(() => import("./pages/SuccessStories"));
const CorporateConnect = lazy(() => import("./pages/CorporateConnect"));
const WorkGallery = lazy(() => import("./pages/WorkGallery"));
const DownloadsBrochures = lazy(() => import("./pages/DownloadsBrochures"));
const JobOpenings = lazy(() => import("./pages/JobOpenings"));
const NewsEvents = lazy(() => import("./pages/NewsEvents"));
const TrainerRecruitment = lazy(() => import("./pages/TrainerRecruitment"));
const VerifyCertificate = lazy(() => import("./pages/VerifyCertificate"));
const InternshipsCareers = lazy(() => import("./pages/InternshipsCareers"));
const StudentRegistration = lazy(() => import("./pages/StudentRegistration"));
const BecomeFranchisePartner = lazy(
  () => import("./pages/BecomeFranchisePartner"),
);
const ContactUs = lazy(() => import("./pages/ContactUs"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AdminNotifications = lazy(() => import("./pages/AdminNotifications"));
const WebsiteControl = lazy(() => import("./pages/WebsiteControl"));

const OurCourse = lazy(() => import("./components/OurCourse.jsx"));
const GetInTouch = lazy(() => import("./components/GetInTouch.jsx"));
const Chatbot = lazy(() => import("./components/Chatbot.jsx"));
const InstitutionalAwards = lazy(
  () => import("./components/InstitutionalAwards.jsx"),
);

const MaintenancePage = lazy(() => import("./pages/MaintenancePage"));
const AdminRoute = lazy(() => import("./components/AdminRoute"));

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
        const res = await axios.get(
          "https://jitmskills-v2.onrender.com/api/website-status",
        );

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

  if (maintenance && location.pathname !== "/website-control") {
    return <MaintenancePage />;
  }

  return (
    <Router>
      <ScrollToTop />
      <AppLayout>
        <Suspense
          fallback={
            <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]">
              <GraduationCap className="w-16 h-16 text-[#D32F2F] animate-bounce" />

              <h2 className="mt-4 text-2xl font-bold text-gray-800">
                <img
                  loading="lazy"
                  src={logoUrl}
                  alt="JITM Skills"
                  className="h-10 md:h-11 w-auto min-w-max"
                />
              </h2>

              <p className="mt-2 text-gray-500">Loading your experience...</p>

              <div className="mt-6 flex gap-2">
                <div className="w-3 h-3 bg-[#D32F2F] rounded-full animate-bounce"></div>
                <div
                  className="w-3 h-3 bg-[#D32F2F] rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-3 h-3 bg-[#D32F2F] rounded-full animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          }
        >
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
            <Route
              path="/TrainerRecruitment"
              element={<TrainerRecruitment />}
            />
            <Route
              path="/InternshipsCareers"
              element={<InternshipsCareers />}
            />
            <Route path="/VerifyCertificate" element={<VerifyCertificate />} />

            <Route
              path="/StudentRegistration"
              element={<StudentRegistration />}
            />

            <Route
              path="/DownloadsBrochures"
              element={<DownloadsBrochures />}
            />

            <Route path="/NewsEvents" element={<NewsEvents />} />
            <Route path="/ContactUs" element={<ContactUs />} />

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

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </AppLayout>

      <Suspense fallback={null}>
        <Chatbot />
      </Suspense>
    </Router>
  );
}

export default App;
