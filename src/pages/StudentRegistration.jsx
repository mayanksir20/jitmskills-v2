import { useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  MapPin,
  GraduationCap,
  BookOpen,
  Upload,
  CheckCircle2,
  AlertCircle,
  IdCard,
  Calendar,
  QrCode,
  UserPlus,
  ChevronRight,
  Home,
  Fingerprint,
  Printer,
  FileSpreadsheet,
  Eye,
  EyeOff,
} from "lucide-react";

export default function StudentRegistrationForm() {
  const [formStatus, setFormStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const [generatedICard, setGeneratedICard] = useState(null);
  const [showAdminCode, setShowAdminCode] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [exportAdminCode, setExportAdminCode] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    motherName: "",
    dob: "",
    gender: "",
    category: "",
    aadhaarNum: "",

    mobile: "",
    altMobile: "",
    email: "",
    address: "",
    state: "",
    district: "",
    pinCode: "",

    qualification: "",
    board: "",
    passingYear: "",
    percentage: "",

    courseName: "",
    customCourse: "",
    sectorTrade: "",
    batchPreference: "",
    trainingLocation: "",
    mode: "",

    declaration: false,
    terms: false,

    adminCode: "",
  });

  const [files, setFiles] = useState({
    passportPhoto: null,
    aadhaarCard: null,
    resume: null,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files: selectedFiles } = e.target;

    setFiles((prev) => ({
      ...prev,
      [name]: selectedFiles[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage("");
    setFormStatus("loading");

    try {
      const formPayload = new FormData();

      Object.keys(formData).forEach((key) => {
        formPayload.append(key, formData[key]);
      });

      if (files.passportPhoto) {
        formPayload.append("passportPhoto", files.passportPhoto);
      }

      if (files.aadhaarCard) {
        formPayload.append("aadhaarCard", files.aadhaarCard);
      }

      if (files.resume) {
        formPayload.append("resume", files.resume);
      }

      const response = await fetch(
        "https://jitmskills-v2.onrender.com/api/students/register",
        {
          method: "POST",
          body: formPayload,
        },
      );

      const data = await response.json();

      if (!response.ok) {
        setFormStatus("error");
        setErrorMessage(data.message || "Submission Failed");
        return;
      }

      const photoURL = files.passportPhoto
        ? URL.createObjectURL(files.passportPhoto)
        : "";

      const newICard = {
        fullName: data.student.fullName,
        fatherName: data.student.fatherName,

        course:
          data.student.courseName === "Others"
            ? data.student.customCourse
            : data.student.courseName,

        rollNumber: data.student.rollNumber,

        admissionDate: new Date(data.student.createdAt).toLocaleDateString(),

        photo: photoURL,
      };

      setGeneratedICard(newICard);

      // FORM RESET
      setFormData({
        fullName: "",
        fatherName: "",
        motherName: "",
        dob: "",
        gender: "",
        category: "",
        aadhaarNum: "",

        mobile: "",
        altMobile: "",
        email: "",
        address: "",
        state: "",
        district: "",
        pinCode: "",

        qualification: "",
        board: "",
        passingYear: "",
        percentage: "",

        courseName: "",
        customCourse: "",
        sectorTrade: "",
        batchPreference: "",
        trainingLocation: "",
        mode: "",

        declaration: false,
        terms: false,

        adminCode: "",
      });

      // FILE RESET
      setFiles({
        passportPhoto: null,
        aadhaarCard: null,
        resume: null,
      });

      // FILE INPUT RESET
      document.querySelectorAll('input[type="file"]').forEach((input) => {
        input.value = "";
      });

      setTimeout(() => {
        setFormStatus("success");
      }, 1200);
    } catch (error) {
      console.log(error);

      setFormStatus("error");
      setErrorMessage(error.message || "Something went wrong");
    }
  };

  const exportStudentsExcel = async () => {
    try {
      const response = await fetch(
        "https://jitmskills-v2.onrender.com/api/students/export",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            adminCode: exportAdminCode,
          }),
        },
      );

      const data = await response.json();

      // Wrong Admin Key
      if (!response.ok) {
        alert(data.message || "Invalid Admin Code");
        return;
      }

      // Convert Student Data To Excel Format
      const excelData = data.students.map((student) => ({
        "Roll Number": student.rollNumber,
        Name: student.fullName,
        Mobile: student.mobile,
        Email: student.email,
        Course:
          student.courseName === "Others"
            ? student.customCourse
            : student.courseName,
        "Admission Date": new Date(student.createdAt).toLocaleDateString(),
      }));

      // Create Sheet
      const worksheet = XLSX.utils.json_to_sheet(excelData);

      // Create Workbook
      const workbook = XLSX.utils.book_new();

      XLSX.utils.book_append_sheet(workbook, worksheet, "Students");

      // Generate Excel File
      const excelBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });

      const blob = new Blob([excelBuffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      // Download Excel
      saveAs(blob, "JITM_Students.xlsx");

      // Close Popup After Success
      setShowExportModal(false);
      setExportAdminCode("");
    } catch (error) {
      console.log(error);

      alert("Failed To Export Student Sheet");
    }
  };

  const printAdmissionForm = () => {
    const printContent = document.getElementById("admission-form");

    if (!printContent) return;

    const printWindow = window.open("", "_blank");

    printWindow.document.write(`
<!DOCTYPE html>
<html>
  <head>
    <title>JITM Student Admission Form</title>

    <!-- Tailwind CDN (only if needed for print styling) -->
    <script src="https://cdn.tailwindcss.com"></script>

    <style>
      body {
        padding: 20px;
        background: #fff;
        font-family: Arial, sans-serif;
      }

      .no-print {
        display: none !important;
      }

      /* Better print formatting */
      @media print {
        body {
          -webkit-print-color-adjust: exact;
        }
      }
    </style>
  </head>

  <body>
    ${printContent.outerHTML}
  </body>
</html>
`);

    printWindow.document.close();

    setTimeout(() => {
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    }, 1000);
  };

  return (
    <>
      <section className="w-full mt-6 lg:mt-12 pt-24 lg:pt-36 pb-20 border-b border-white/[0.04] relative z-10 bg-[#070A13] text-white overflow-hidden">
        {/* Decorative Grid Light Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#D32F2F]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* LEFT SIDE: BREADCRUMB & HEADING TEXT */}
            <div className="lg:col-span-8 space-y-6">
              {/* Breadcrumb Micro UI (Updated for Student Onboarding) */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 border border-slate-700 rounded-full bg-slate-900/40 backdrop-blur-sm text-slate-400 text-[11px] font-semibold uppercase tracking-wider"
                aria-label="Breadcrumb"
              >
                <a
                  href="/"
                  className="flex items-center gap-1 hover:text-[#D32F2F] transition-colors"
                >
                  <Home size={11} />
                  <span>Home</span>
                </a>
                <ChevronRight size={10} className="text-slate-700 shrink-0" />
                <a
                  href="/admissions"
                  className="hover:text-[#D32F2F] transition-colors"
                >
                  <span>Admissions</span>
                </a>
                <ChevronRight size={10} className="text-slate-700 shrink-0" />
                <span className="text-slate-300 font-extrabold">
                  Student Registration
                </span>
              </div>

              {/* Glowing Dynamic Badge */}
              <div className="block">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-950/40 via-red-900/20 to-transparent border border-red-500/30 text-red-400 px-4 py-2 rounded-full text-[10px] font-extrabold uppercase tracking-widest shadow-[0_0_20px_rgba(211,47,47,0.05)]">
                  <Fingerprint size={12} className="text-[#D32F2F]" />
                  <span>Secure Onboarding Node</span>
                </div>
              </div>

              {/* Main Animated Title Header */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                JITM Skills{" "}
                <span className="text-[#D32F2F]">Student Registration</span>
              </h1>

              {/* Context Description Text */}
              <p className="text-sm text-slate-400 font-medium leading-relaxed max-w-2xl">
                Initialize your professional training profile across our
                network. Fill in your matrix registry parameters below to align
                your enrollment with verified skill initiatives, NSDC skill
                standards, and centralized database frameworks.
              </p>
            </div>

            {/* RIGHT SIDE: PREMIUM BENTO INDICATOR CARD */}
            <div className="lg:col-span-4 w-full flex lg:justify-end">
              <div className="bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 flex items-center justify-between shadow-2xl w-full max-w-sm group hover:border-red-500/30 transition-all duration-300 relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-red-500/5 rounded-full blur-xl pointer-events-none" />
                <div className="flex items-center gap-4">
                  <div className="p-3.5 bg-white/[0.03] text-[#D32F2F] rounded-xl border border-white/[0.05] group-hover:bg-[#D32F2F] group-hover:text-white transition-all duration-500 transform group-hover:rotate-3">
                    <UserPlus size={18} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Admission Matrix
                    </h4>
                    <p className="text-sm font-black text-white mt-0.5">
                      Real-Time Allocation
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-black px-2.5 py-1 rounded-md text-[9px] uppercase tracking-wider inline-block">
                    Gateway Active
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full min-h-screen bg-slate-50 text-slate-800 antialiased font-sans pb-16">
        {/* CORE FRAMEWORK CONTAINER (Tightly locked at 90% Width Layout) */}
        <div className="max-w-[90%] mx-auto mt-8">
          <AnimatePresence >
            {formStatus !== "success" ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {/* Clean Typography Header */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                    JITM Skills{" "}
                    <span className="text-[#D32F2F]">
                      Admission Management Panel
                    </span>
                  </h1>
                  <p className="text-xs text-slate-500 mt-1 font-medium">
                    Please fill out the corporate integration registry fields.
                    Mandatory segments are marked with an asterisk (*).
                  </p>

                  <div className="flex justify-end gap-4 no-print">
                    <Printer
                      size={22}
                      onClick={printAdmissionForm}
                      className="cursor-pointer text-slate-600 hover:text-[#D32F2F]"
                    />

                    <div
                      onClick={() => setShowExportModal(true)}
                      className="flex items-center gap-2 cursor-pointer text-emerald-600 hover:text-emerald-700 transition-all"
                    >
                      <FileSpreadsheet size={20} />
                      <span className="text-sm font-semibold">
                        Export Student Sheet
                      </span>
                    </div>
                  </div>
                </div>

                {/* White Background Master Form Node Section */}
                <div id="admission-form">
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    autoComplete="off"
                  >
                    {/* SECTION 1: PERSONAL DETAILS */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
                      <h3 className="text-xs font-black uppercase tracking-wider text-[#D32F2F] flex items-center gap-1.5 border-b border-slate-100 pb-2.5">
                        <User size={14} /> 1. Personal Information Matrix
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#D32F2F] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                            Father's Name *
                          </label>
                          <input
                            type="text"
                            name="fatherName"
                            required
                            value={formData.fatherName}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#D32F2F] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                            Mother's Name
                          </label>
                          <input
                            type="text"
                            name="motherName"
                            value={formData.motherName}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#D32F2F] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                            Date of Birth *
                          </label>
                          <input
                            type="date"
                            name="dob"
                            required
                            value={formData.dob}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#D32F2F] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                            Gender *
                          </label>
                          <select
                            name="gender"
                            required
                            value={formData.gender}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#D32F2F] transition-colors"
                          >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                            Category
                          </label>
                          <select
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#D32F2F] transition-colors"
                          >
                            <option value="">Select Category</option>
                            <option value="General">General</option>
                            <option value="OBC">OBC</option>
                            <option value="SC">SC</option>
                            <option value="ST">ST</option>
                          </select>
                        </div>
                        <div className="md:col-span-3">
                          <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                            Aadhaar Number Security Validation String
                          </label>
                          <input
                            type="text"
                            name="aadhaarNum"
                            maxLength={12}
                            placeholder="Protected Numerical Ingestion Vector"
                            value={formData.aadhaarNum}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#D32F2F] transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    {/* SECTION 2: CONTACT DETAILS */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
                      <h3 className="text-xs font-black uppercase tracking-wider text-[#D32F2F] flex items-center gap-1.5 border-b border-slate-100 pb-2.5">
                        <MapPin size={14} /> 2. Contact Communications Network
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                            Mobile Number *
                          </label>
                          <input
                            type="tel"
                            name="mobile"
                            required
                            value={formData.mobile}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#D32F2F] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                            Alternate Mobile Number
                          </label>
                          <input
                            type="tel"
                            name="altMobile"
                            value={formData.altMobile}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#D32F2F] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#D32F2F] transition-colors"
                          />
                        </div>
                        <div className="md:col-span-3">
                          <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                            Full Address *
                          </label>
                          <input
                            type="text"
                            name="address"
                            required
                            value={formData.address}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#D32F2F] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                            State *
                          </label>
                          <input
                            type="text"
                            name="state"
                            required
                            value={formData.state}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#D32F2F] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                            District *
                          </label>
                          <input
                            type="text"
                            name="district"
                            required
                            value={formData.district}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#D32F2F] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                            PIN Code *
                          </label>
                          <input
                            type="text"
                            name="pinCode"
                            required
                            value={formData.pinCode}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#D32F2F] transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    {/* SECTION 3: EDUCATIONAL MATRIX */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
                      <h3 className="text-xs font-black uppercase tracking-wider text-[#D32F2F] flex items-center gap-1.5 border-b border-slate-100 pb-2.5">
                        <GraduationCap size={14} /> 3. Academic & Qualification
                        Profile
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                          <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                            Highest Qualification *
                          </label>
                          <input
                            type="text"
                            name="qualification"
                            required
                            value={formData.qualification}
                            onChange={handleInputChange}
                            placeholder="e.g., Graduate, 12th"
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#D32F2F] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                            Board / University
                          </label>
                          <input
                            type="text"
                            name="board"
                            value={formData.board}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#D32F2F] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                            Passing Year
                          </label>
                          <input
                            type="text"
                            name="passingYear"
                            value={formData.passingYear}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#D32F2F] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                            Percentage / Grade
                          </label>
                          <input
                            type="text"
                            name="percentage"
                            value={formData.percentage}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#D32F2F] transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    {/* SECTION 4: COURSE & SPECIALIZATION (THE DYNAMIC SPLIT DROPDOWN LOGIC) */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
                      <h3 className="text-xs font-black uppercase tracking-wider text-[#D32F2F] flex items-center gap-1.5 border-b border-slate-100 pb-2.5">
                        <BookOpen size={14} /> 4. Domain & Specialization
                        Parameters
                      </h3>

                      {/* Dynamic Column Resizing Core Block */}
                      <div
                        className={`grid gap-4 ${formData.courseName === "Others" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}
                      >
                        <div>
                          <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                            Course Name / Track *
                          </label>
                          <select
                            name="courseName"
                            required
                            value={formData.courseName}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#D32F2F] transition-colors"
                          >
                            <option value="">
                              Select Specialization Domain
                            </option>
                            <option value="Frontend Engineering (React)">
                              Frontend Engineering (React/Vite/Tailwind)
                            </option>
                            <option value="Full-Stack Web Architecture">
                              Full-Stack Web Architecture
                            </option>
                            <option value="Industrial Consulting Sync">
                              Industrial Consulting Sync
                            </option>
                            <option value="Others">Others</option>
                          </select>
                        </div>

                        {/* Conditional input appearing precisely side by side on "Others" selection */}
                        {formData.courseName === "Others" && (
                          <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                          >
                            <label className="text-[10px] font-black uppercase tracking-wider text-red-600 block mb-1">
                              Specify Custom Domain Track *
                            </label>
                            <input
                              type="text"
                              name="customCourse"
                              required={formData.courseName === "Others"}
                              value={formData.customCourse}
                              onChange={handleInputChange}
                              placeholder="Enter your program node track"
                              className="w-full bg-slate-50 border border-red-200 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#D32F2F] transition-colors"
                            />
                          </motion.div>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                          <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                            Sector / Trade *
                          </label>
                          <input
                            type="text"
                            name="sectorTrade"
                            required
                            value={formData.sectorTrade}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#D32F2F] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                            Batch Preference
                          </label>
                          <input
                            type="text"
                            name="batchPreference"
                            value={formData.batchPreference}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#D32F2F] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                            Training Center Location *
                          </label>
                          <input
                            type="text"
                            name="trainingLocation"
                            required
                            value={formData.trainingLocation}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#D32F2F] transition-colors"
                          />
                        </div>
                        <div>
                          <label className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                            Mode *
                          </label>
                          <select
                            name="mode"
                            required
                            value={formData.mode}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#D32F2F] transition-colors"
                          >
                            <option value="">Select Mode</option>
                            <option value="Offline">
                              Offline Classroom Node
                            </option>
                            <option value="Online">
                              Online Infrastructure
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* SECTION 5: BINARY DOCUMENT MANAGEMENT UPLOAD */}
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
                      <h3 className="text-xs font-black uppercase tracking-wider text-[#D32F2F] flex items-center gap-1.5 border-b border-slate-100 pb-2.5">
                        <Upload size={14} /> 5. Document Storage Allocation
                        Array
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {/* Passport upload slot box frame */}
                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                          <span className="text-[9px] font-black text-slate-500 block mb-1.5 uppercase">
                            Passport Photo *
                          </span>
                          <label className="cursor-pointer border border-dashed border-slate-300 hover:border-[#D32F2F] rounded-lg p-3 flex flex-col items-center justify-center bg-white transition-colors">
                            <Upload size={14} className="text-slate-400 mb-1" />
                            <span className="text-[10px] font-bold text-slate-600 truncate max-w-xs">
                              {files.passportPhoto
                                ? files.passportPhoto.name
                                : "Choose File"}
                            </span>
                            <input
                              type="file"
                              name="passportPhoto"
                              required
                              accept="image/*"
                              onChange={handleFileChange}
                              className="hidden"
                            />
                          </label>
                        </div>

                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                          <span className="text-[9px] font-black text-slate-500 block mb-1.5 uppercase">
                            Aadhaar Card File *
                          </span>
                          <label className="cursor-pointer border border-dashed border-slate-300 hover:border-[#D32F2F] rounded-lg p-3 flex flex-col items-center justify-center bg-white transition-colors">
                            <Upload size={14} className="text-slate-400 mb-1" />
                            <span className="text-[10px] font-bold text-slate-600 truncate max-w-xs">
                              {files.aadhaarCard
                                ? files.aadhaarCard.name
                                : "Choose File"}
                            </span>
                            <input
                              type="file"
                              name="aadhaarCard"
                              required
                              onChange={handleFileChange}
                              className="hidden"
                            />
                          </label>
                        </div>

                        <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-center">
                          <span className="text-[9px] font-black text-slate-500 block mb-1.5 uppercase">
                            Resume Tracking (Optional)
                          </span>
                          <label className="cursor-pointer border border-dashed border-slate-300 hover:border-[#D32F2F] rounded-lg p-3 flex flex-col items-center justify-center bg-white transition-colors">
                            <Upload size={14} className="text-slate-400 mb-1" />
                            <span className="text-[10px] font-bold text-slate-600 truncate max-w-xs">
                              {files.resume ? files.resume.name : "Choose File"}
                            </span>
                            <input
                              type="file"
                              name="resume"
                              onChange={handleFileChange}
                              className="hidden"
                            />
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* SECTION 7: DECLARATION & SECURED ADMINISTRATIVE PASS LOCKBOX */}
                    <div className="bg-white border-2 border-red-100 rounded-2xl p-6 shadow-sm space-y-4 relative overflow-hidden">
                      <div className="absolute top-0 right-6 bg-[#D32F2F] text-white font-mono text-[8px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-b">
                        Security Guardrail Active
                      </div>

                      <h3 className="text-xs font-black uppercase tracking-wider text-[#D32F2F] border-b border-slate-100 pb-2.5">
                        6. Student Attestation & Administrative Gate Node
                      </h3>

                      <div className="space-y-3">
                        <label className="flex items-start gap-2.5 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            name="declaration"
                            required
                            checked={formData.declaration}
                            onChange={handleInputChange}
                            className="mt-0.5 accent-[#D32F2F] h-3.5 w-3.5 rounded"
                          />
                          <span className="text-[11px] text-slate-600 font-bold leading-tight">
                            I attest that the dataset supplied above is fully
                            authentic.
                          </span>
                        </label>

                        <label className="flex items-start gap-2.5 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            name="terms"
                            required
                            checked={formData.terms}
                            onChange={handleInputChange}
                            className="mt-0.5 accent-[#D32F2F] h-3.5 w-3.5 rounded"
                          />
                          <span className="text-[11px] text-slate-600 font-bold leading-tight">
                            I completely accept all canonical JITM Skills
                            framework guidelines. *
                          </span>
                        </label>
                      </div>

                      {/* CRITICAL BLOCK ENTRY: THE ADMINISTRATIVE REQUIRED LOCK */}
                      <div>
                        <label className="text-[10px] font-black uppercase tracking-wider text-red-600 block mb-1">
                          Administrative Node Security Code *
                        </label>

                        <div className="relative">
                          <input
                            type={showAdminCode ? "text" : "password"}
                            name="adminCode"
                            required
                            autoComplete="new-password"
                            spellCheck="false"
                            value={formData.adminCode}
                            onChange={handleInputChange}
                            placeholder="Admin Key Required for Submission"
                            className="w-full bg-slate-50 border-2 border-red-100 text-red-600 rounded-lg px-3 py-2 pr-10 text-xs font-black tracking-widest focus:outline-none focus:border-[#D32F2F] transition-all"
                          />

                          <button
                            type="button"
                            onClick={() => setShowAdminCode(!showAdminCode)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-[#D32F2F]"
                          >
                            {showAdminCode ? (
                              <EyeOff size={16} />
                            ) : (
                              <Eye size={16} />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Submit Action Router Engine */}
                    <div>
                      <button
                        type="submit"
                        disabled={formStatus === "loading"}
                        className="w-full py-3 rounded-xl bg-[#D32F2F] hover:bg-slate-900 text-white text-xs font-black uppercase tracking-widest transition-all duration-200 shadow-md flex items-center justify-center gap-2"
                      >
                        {formStatus === "loading"
                          ? "Syncing Central Registry..."
                          : "Deploy & Generate I-Card Profile"}
                      </button>
                    </div>

                    {/* Error Signalling Feedback Unit */}
                    {formStatus === "error" && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2 text-red-600 text-[11px] font-black uppercase tracking-wide">
                        <AlertCircle size={14} />{" "}
                        <span>
                          Authorization Failed: Incorrect admin verification
                          hash key provided.
                        </span>
                      </div>
                    )}

                    {errorMessage && (
                      <div
                        style={{
                          color: "red",
                          marginTop: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        {errorMessage}
                      </div>
                    )}
                  </form>
                </div>
              </motion.div>
            ) : (
              /* ================= THE DIGITAL DYNAMIC STUDENT IDENTIFICATION CARD MATRIX ================= */
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-sm mx-auto space-y-6 text-center pt-4"
              >
                <div className="space-y-1">
                  <div className="mx-auto h-9 w-9 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center">
                    <CheckCircle2 size={18} />
                  </div>
                  <h2 className="text-lg font-black tracking-tight text-slate-900">
                    Identification Generated
                  </h2>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Record successfully injected into Express-MongoDB pipeline
                    cluster.
                  </p>
                </div>

                {/* Physical Shell of the Digital Student I-Card */}
                <div className="w-full bg-white border-2 border-slate-200 rounded-2xl p-5 shadow-xl text-left space-y-5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-[#D32F2F]" />

                  {/* Panel Branding Banner */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div>
                      <h3 className="text-base font-black tracking-tight text-slate-900">
                        JITM SKILLS
                      </h3>
                      <span className="text-[8px] font-black tracking-widest text-[#D32F2F] uppercase block">
                        Authorized Training Node
                      </span>
                    </div>
                    <span className="text-[8px] font-black uppercase text-emerald-600 bg-emerald-50 border border-emerald-100 px-1.5 py-0.5 rounded">
                      STUDENT
                    </span>
                  </div>

                  {/* Identity Layout Rows */}
                  <div className="grid grid-cols-12 gap-3 items-center">
                    {/* Photo Space Component Box for Sticky Image Insertion */}
                    <div className="col-span-4 aspect-[3/4] border-2 border-slate-200 bg-slate-50 rounded-lg overflow-hidden relative">
                      <img
                        src={generatedICard.photo}
                        alt="Identity Block"
                        className="w-full h-full"
                      />
                    </div>

                    {/* Core Demographics Fields */}
                    <div className="col-span-8 space-y-2 pl-1">
                      <div>
                        <span className="text-[7px] font-black text-slate-400 uppercase block tracking-wider">
                          Student Name
                        </span>
                        <p className="text-xs font-black text-slate-900 tracking-tight">
                          {generatedICard.fullName}
                        </p>
                      </div>
                      <div>
                        <span className="text-[7px] font-black text-slate-400 uppercase block tracking-wider">
                          Father's Name
                        </span>
                        <p className="text-[11px] font-bold text-slate-700">
                          {generatedICard.fatherName}
                        </p>
                      </div>
                      <div>
                        <span className="text-[7px] font-black text-slate-400 uppercase block tracking-wider">
                          Specialization Track
                        </span>
                        <p className="text-[11px] font-black text-[#D32F2F] tracking-tight">
                          {generatedICard.course}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Registry Metadata Core Matrix Table */}
                  <div className="grid grid-cols-2 gap-2 bg-slate-50 border border-slate-100 p-2.5 rounded-xl text-[11px] font-bold">
                    <div>
                      <span className="text-[7px] font-black text-slate-400 uppercase block flex items-center gap-0.5">
                        <IdCard size={9} /> Roll Number
                      </span>
                      <span className="text-slate-900 font-mono font-black">
                        {generatedICard.rollNumber}
                      </span>
                    </div>
                    <div>
                      <span className="text-[7px] font-black text-slate-400 uppercase block flex items-center gap-0.5">
                        <Calendar size={9} /> Admission Date
                      </span>
                      <span className="text-slate-800 font-mono font-black">
                        {generatedICard.admissionDate}
                      </span>
                    </div>
                  </div>

                  {/* Digital Verification signatures and seals footer panel */}
                  <div className="pt-3 border-t border-slate-100 grid grid-cols-3 gap-1 items-center text-center">
                    <div>
                      <div className="h-6 flex items-center justify-center text-slate-400 font-serif italic text-xs select-none">
                        {generatedICard.fullName.split(" ")[0]}
                      </div>
                      <span className="text-[7px] font-black text-slate-400 uppercase tracking-wider block border-t border-slate-100 pt-0.5">
                        Holder Sign
                      </span>
                    </div>

                    <div className="flex justify-center">
                      <QrCode size={30} className="text-slate-300" />
                    </div>

                    <div>
                      <div className="h-6 flex flex-col items-center justify-center select-none leading-none">
                        <span className="text-[8px] font-black tracking-tighter text-red-600/80 font-mono">
                          JITM AUTH
                        </span>
                        <span className="text-[6px] text-emerald-600 font-mono font-black scale-90">
                          VERIFIED
                        </span>
                      </div>
                      <span className="text-[7px] font-black text-slate-400 uppercase tracking-wider block border-t border-slate-100 pt-0.5">
                        Director Node
                      </span>
                    </div>
                  </div>
                </div>

                {/* Loopback controller switch reset anchor button */}
                <button
                  onClick={() => {
                    setFormStatus("idle");
                    setGeneratedICard(null);
                  }}
                  className="text-[11px] font-black text-slate-400 hover:text-slate-800 uppercase tracking-widest underline transition-colors block mx-auto"
                >
                  Incorporate Another Registry Entry
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {showExportModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-xl">
              <h3 className="text-lg font-bold text-slate-800 mb-4">
                Admin Verification
              </h3>

              <p className="text-sm text-slate-500 mb-4">
                Enter Admin Key to export student sheet.
              </p>

              <input
                type="password"
                value={exportAdminCode}
                onChange={(e) => setExportAdminCode(e.target.value)}
                placeholder="Enter Admin Key"
                className="w-full border border-slate-300 rounded-lg px-3 py-2"
              />

              <div className="flex justify-end gap-3 mt-5">
                <button
                  onClick={() => {
                    setShowExportModal(false);
                    setExportAdminCode("");
                  }}
                  className="px-4 py-2 rounded-lg bg-gray-200"
                >
                  Cancel
                </button>

                <button
                  onClick={exportStudentsExcel}
                  className="px-4 py-2 rounded-lg bg-emerald-600 text-white"
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
