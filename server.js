
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');
const studentRoutes = require('./routes/studentRoutes');
const notificationRoutes = require("./routes/notificationRoutes");
const path = require('path');
const nodemailer = require('nodemailer'); // <-- 1. Nodemailer import kiya
const websiteRoutes = require("./routes/websiteRoutes");
import { GoogleGenerativeAI } from "@google/generative-ai";


const multer = require("multer");

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
});

// =========================================================================
// COMMENT: AI Chatbot ke liye zaroori SDK ko import kiya hai
// =========================================================================
const { GoogleGenAI } = require('@google/genai');
// end
dotenv.config();
connectDB();

const app = express();


// CORS fix for your specific frontend URL
app.use(cors({
    origin: [
        "https://www.jitmskills.com",
        "https://jitmskills.com",
        "http://localhost:5173"
    ],
    credentials: true
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/auth', authRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/students', studentRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/website-status", websiteRoutes);

app.get('/api/test', (req, res) => {
    res.status(200).json({ status: "Live", message: "Backend is running" });
});


// =========================================================================
// ✉️ === START: EMAIL SMTP TRANSPORTER CONFIGURATION ===
// =========================================================================
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // true because port is 465
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});
// =========================================================================
// ✉️ === END: EMAIL SMTP TRANSPORTER CONFIGURATION ===
// =========================================================================


// =========================================================================
// 📝 === START: FRANCHISE FORM SUBMISSION ROUTE ===
// =========================================================================
app.post('/api/v1/send-lead', async (req, res) => {
    // 1. Destructuring me address aur pincode ko add kiya
    const { name, phone, email, landArea, selectedSector, address, pincode } = req.body;

    // Validation
    if (!name || !phone || !email) {
        return res.status(400).json({ status: 'error', message: 'Required fields are missing.' });
    }

    const mailOptions = {
        from: `"JITM Web Portal" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        replyTo: email,
        subject: `🔥 New Franchise Lead: ${selectedSector || 'General Inquiry'}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
                <h2 style="color: #D32F2F; text-align: center; border-bottom: 2px solid #D32F2F; padding-bottom: 10px;">New Franchise Partnership Application</h2>
                <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                    <tr style="background-color: #f9f9f9;">
                        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Full Name</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone Number</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
                    </tr>
                    <tr style="background-color: #f9f9f9;">
                        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email Address</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Land Area Specified</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${landArea || 'Not Provided'} Sq. Ft.</td>
                    </tr>
                    <tr style="background-color: #f9f9f9;">
                        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Sector Selected</td>
                        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; color: #1E88E5;">${selectedSector || 'N/A'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Proposed Address</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${address || 'Not Provided'}</td>
                    </tr>
                    <tr style="background-color: #f9f9f9;">
                        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Area Pincode</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${pincode || 'Not Provided'}</td>
                    </tr>
                </table>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ status: 'success', message: 'Lead email sent successfully!' });
    } catch (error) {
        console.error('Mail Error:', error);
        return res.status(500).json({ status: 'error', message: 'Failed to send mail.' });
    }
});
// =========================================================================
// 📝 === END: FRANCHISE FORM SUBMISSION ROUTE ===
// =========================================================================


// =========================================================================
// 📩 === START: GET IN TOUCH / CONTACT FORM SUBMISSION ROUTE ===
// =========================================================================
app.post('/api/v1/contact-inquiry', async (req, res) => {
    // Is form ki saari specific fields ko destructure kiya
    const { name, email, phone, city, state, message } = req.body;

    // Validation check
    if (!name || !email || !phone || !city || !state || !message) {
        return res.status(400).json({ status: 'error', message: 'All fields are required.' });
    }

    const mailOptions = {
        from: `"JITM Contact Desk" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO, // info@jitmskills.com
        replyTo: email,
        subject: `📩 New Website Inquiry from ${city}, ${state}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
                <h2 style="color: #0F172A; text-align: center; border-bottom: 2px solid #0F172A; padding-bottom: 10px;">New General Inquiry Received</h2>
                <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                    <tr style="background-color: #f9f9f9;">
                        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 30%;">Full Name</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email Address</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
                    </tr>
                    <tr style="background-color: #f9f9f9;">
                        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Contact Number</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">City</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${city}</td>
                    </tr>
                    <tr style="background-color: #f9f9f9;">
                        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">State</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${state}</td>
                    </tr>
                </table>
                <div style="margin-top: 20px; padding: 15px; background-color: #f1f5f9; border-radius: 8px;">
                    <strong style="color: #0F172A; display: block; margin-bottom: 8px;">Message / Requirement Description:</strong>
                    <p style="margin: 0; color: #334155; line-height: 1.5; white-space: pre-wrap;">${message}</p>
                </div>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ status: 'success', message: 'Inquiry email sent successfully!' });
    } catch (error) {
        console.error('Contact Mail Error:', error);
        return res.status(500).json({ status: 'error', message: 'Failed to route contact inquiry.' });
    }
});
// =========================================================================
// 📩 === END: GET IN TOUCH / CONTACT FORM SUBMISSION ROUTE ===
// =========================================================================


// =========================================================================
// 🎓 === START: STUDENT ENROLLMENT ROUTE ===
// =========================================================================
app.post('/api/v1/student-enrollment', async (req, res) => {
    // Enrollment form ki specific fields ko destructure kiya
    const { name, email, phone, location, programType, selectedCourse, message } = req.body;

    // Strict validation check
    if (!name || !email || !phone || !location || !programType || !selectedCourse) {
        return res.status(400).json({ status: 'error', message: 'Required fields are missing.' });
    }

    const mailOptions = {
        from: `"JITM Enrollment Desk" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO, // info@jitmskills.com
        replyTo: email,
        subject: `🎓 New Enrollment: ${selectedCourse} (${programType.toUpperCase()})`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
                <h2 style="color: #D32F2F; text-align: center; border-bottom: 2px solid #D32F2F; padding-bottom: 10px; margin-top: 0;">New Admission Inquiry</h2>
                <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                    <tr style="background-color: #f9f9f9;">
                        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; width: 35%;">Student Name</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email Address</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
                    </tr>
                    <tr style="background-color: #f9f9f9;">
                        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Contact Number</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${phone}</td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Location</td>
                        <td style="padding: 10px; border: 1px solid #ddd;">${location}</td>
                    </tr>
                    <tr style="background-color: #f9f9f9;">
                        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Program Stream</td>
                        <td style="padding: 10px; border: 1px solid #ddd;"><span style="background-color: ${programType === 'free' ? '#10b981' : '#3b82f6'}; color: white; padding: 2px 8px; border-radius: 4px; font-size: 11px; font-weight: bold; uppercase;">${programType.toUpperCase()}</span></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Applied Course</td>
                        <td style="padding: 10px; border: 1px solid #ddd; color: #D32F2F; font-weight: bold;">${selectedCourse}</td>
                    </tr>
                </table>
                <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #D32F2F;">
                    <strong style="color: #0F172A; display: block; margin-bottom: 8px;">Student Remark / Message:</strong>
                    <p style="margin: 0; color: #334155; line-height: 1.5; white-space: pre-wrap;">${message || 'No additional remarks provided.'}</p>
                </div>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ status: 'success', message: 'Enrollment application routed successfully!' });
    } catch (error) {
        console.error('Enrollment Mail Error:', error);
        return res.status(500).json({ status: 'error', message: 'Failed to route student application.' });
    }
});
// =========================================================================
// 🎓 === END: STUDENT ENROLLMENT ROUTE ===
// =========================================================================


// =========================================================================
// 🌐 === START: MAIN CORPORATE CONTACT PAGE ROUTE ===
// =========================================================================
app.post('/api/v1/corporate-contact', async (req, res) => {
    // Contact Us page ke body parameters ko destructure kiya
    const { name, email, phone, subject, message } = req.body;

    // Validation Check
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ status: 'error', message: 'Required fields are missing.' });
    }

    const mailOptions = {
        from: `"JITM Corporate Desk" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO, // info@jitmskills.com
        replyTo: email,
        subject: `🌐 [Corporate Contact]: ${subject}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 12px;">
                <h2 style="color: #0F172A; text-align: center; border-bottom: 2px solid #E2E8F0; padding-bottom: 10px; margin-top: 0; font-style: italic; uppercase">Main Website Contact Submission</h2>
                <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                    <tr style="background-color: #f8fafc;">
                        <td style="padding: 11px; border: 1px solid #e2e8f0; font-weight: bold; width: 30%; color: #475569;">Full Name</td>
                        <td style="padding: 11px; border: 1px solid #e2e8f0; color: #0F172A; font-weight: 500;">${name}</td>
                    </tr>
                    <tr>
                        <td style="padding: 11px; border: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Email Address</td>
                        <td style="padding: 11px; border: 1px solid #e2e8f0; color: #0F172A;"><a href="mailto:${email}">${email}</a></td>
                    </tr>
                    <tr style="background-color: #f8fafc;">
                        <td style="padding: 11px; border: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Contact Number</td>
                        <td style="padding: 11px; border: 1px solid #e2e8f0; color: #0F172A;">${phone || 'Not Provided'}</td>
                    </tr>
                    <tr>
                        <td style="padding: 11px; border: 1px solid #e2e8f0; font-weight: bold; color: #475569;">Subject Intent</td>
                        <td style="padding: 11px; border: 1px solid #e2e8f0; color: #E11D48; font-weight: bold;">${subject}</td>
                    </tr>
                </table>
                <div style="margin-top: 25px; padding: 15px; background-color: #fff1f2; border-radius: 8px; border-left: 4px solid #E11D48;">
                    <strong style="color: #0F172A; display: block; margin-bottom: 8px; font-size: 13px; text-transform: uppercase; tracking-wider">Core Context Message:</strong>
                    <p style="margin: 0; color: #334155; line-height: 1.6; white-space: pre-wrap; font-size: 14px;">${message}</p>
                </div>
            </div>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ status: 'success', message: 'Corporate contact inquiry sent successfully!' });
    } catch (error) {
        console.error('Corporate Contact Mail Error:', error);
        return res.status(500).json({ status: 'error', message: 'Failed to route corporate request.' });
    }
});
// =========================================================================
// 🌐 === END: MAIN CORPORATE CONTACT PAGE ROUTE ===
// =========================================================================

// =========================================================================
// 🎓 === START: INTERNSHIP APPLICATION WITH DOCUMENT UPLOAD ROUTE ===
// =========================================================================

app.post('/api/v1/internship-apply', upload.single('document'), async (req, res) => {
    const { domain, fullName, phoneNo, emailId } = req.body;
    const file = req.file;

    // Backend Core Validation
    if (!domain || !fullName || !phoneNo || !emailId) {
        return res.status(400).json({ status: 'error', message: 'Mandatory profile fields missing.' });
    }

    const mailOptions = {
        from: `"JITM Career Desk" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO, // info@jitmskills.com
        replyTo: emailId,
        subject: `🎓 [Internship Track]: ${domain} - ${fullName}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e2e8f0; padding: 25px; border-radius: 16px;">
                <h2 style="color: #D32F2F; text-align: center; border-bottom: 2px solid #F1F5F9; padding-bottom: 12px; margin-top: 0; font-style: italic;">New Internship Application</h2>
                <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
                    <tr style="background-color: #F8FAFC;">
                        <td style="padding: 12px; border: 1px solid #E2E8F0; font-weight: bold; width: 35%; color: #475569;">Selected Domain</td>
                        <td style="padding: 12px; border: 1px solid #E2E8F0; color: #D32F2F; font-weight: bold;">${domain}</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #E2E8F0; font-weight: bold; color: #475569;">Applicant Name</td>
                        <td style="padding: 12px; border: 1px solid #E2E8F0; color: #0F172A; font-weight: 600;">${fullName}</td>
                    </tr>
                    <tr style="background-color: #F8FAFC;">
                        <td style="padding: 12px; border: 1px solid #E2E8F0; font-weight: bold; color: #475569;">Phone Number</td>
                        <td style="padding: 12px; border: 1px solid #E2E8F0; color: #0F172A;">${phoneNo}</td>
                    </tr>
                    <tr>
                        <td style="padding: 12px; border: 1px solid #E2E8F0; font-weight: bold; color: #475569;">Email Identity</td>
                        <td style="padding: 12px; border: 1px solid #E2E8F0; color: #0F172A;"><a href="mailto:${emailId}">${emailId}</a></td>
                    </tr>
                    <tr style="background-color: #F8FAFC;">
                        <td style="padding: 12px; border: 1px solid #E2E8F0; font-weight: bold; color: #475569;">Delhi NCR Relocation</td>
                        <td style="padding: 12px; border: 1px solid #E2E8F0; color: #16A34A; font-weight: bold;">Agreed / Complied</td>
                    </tr>
                </table>
                ${file ? `<p style="margin-top: 20px; font-size: 12px; color: #64748B; text-align: center;">📎 <em>An asset dossier document (${file.originalname}) has been attached directly below.</em></p>` : ''}
            </div>
        `,
        // Buffer se file direct memory layer se email me attach ho jayegi
        attachments: file ? [{
            filename: file.originalname,
            content: file.buffer
        }] : []
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ status: 'success', message: 'Application submitted successfully.' });
    } catch (error) {
        console.error('Internship Route error:', error);
        return res.status(500).json({ status: 'error', message: 'Failed to stream dossier routing.' });
    }
});
// =========================================================================
// 🎓 === END: INTERNSHIP APPLICATION WITH DOCUMENT UPLOAD ROUTE ===
// =========================================================================


// Student Enrollment, Contact Inquiry,

app.post(
    "/api/students/register",
    upload.fields([
        { name: "passportPhoto", maxCount: 1 },
        { name: "aadhaarCard", maxCount: 1 },
        { name: "resume", maxCount: 1 },
    ]),
    async (req, res) => {
        try {
            const {
                fullName,
                fatherName,
                motherName,
                dob,
                gender,
                category,
                aadhaarNum,
                mobile,
                altMobile,
                email,
                address,
                state,
                district,
                pinCode,
                qualification,
                board,
                passingYear,
                percentage,
                courseName,
                customCourse,
                sectorTrade,
                batchPreference,
                trainingLocation,
                mode,
            } = req.body;

            const passportPhoto = req.files?.passportPhoto?.[0];
            const aadhaarCard = req.files?.aadhaarCard?.[0];
            const resume = req.files?.resume?.[0];

            await transporter.sendMail({
                from: `"JITM Student Registration" <${process.env.EMAIL_USER}>`,
                to: "info@jitmskills.com",
                replyTo: email,
                subject: `New Student Registration - ${fullName}`,

                html: `
          <h2>New Student Registration</h2>

          <p><b>Name:</b> ${fullName}</p>
          <p><b>Father:</b> ${fatherName}</p>
          <p><b>Mother:</b> ${motherName}</p>
          <p><b>DOB:</b> ${dob}</p>
          <p><b>Gender:</b> ${gender}</p>
          <p><b>Category:</b> ${category}</p>
          <p><b>Aadhaar:</b> ${aadhaarNum}</p>
          <p><b>Mobile:</b> ${mobile}</p>
          <p><b>Alt Mobile:</b> ${altMobile}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Address:</b> ${address}</p>
          <p><b>State:</b> ${state}</p>
          <p><b>District:</b> ${district}</p>
          <p><b>Pin Code:</b> ${pinCode}</p>
          <p><b>Qualification:</b> ${qualification}</p>
          <p><b>Board:</b> ${board}</p>
          <p><b>Passing Year:</b> ${passingYear}</p>
          <p><b>Percentage:</b> ${percentage}</p>
          <p><b>Course:</b> ${courseName === "Others"
                        ? customCourse
                        : courseName
                    }</p>
          <p><b>Sector Trade:</b> ${sectorTrade}</p>
          <p><b>Batch Preference:</b> ${batchPreference}</p>
          <p><b>Training Location:</b> ${trainingLocation}</p>
          <p><b>Mode:</b> ${mode}</p>
        `,

                attachments: [
                    ...(passportPhoto
                        ? [{
                            filename: passportPhoto.originalname,
                            content: passportPhoto.buffer,
                        }]
                        : []),

                    ...(aadhaarCard
                        ? [{
                            filename: aadhaarCard.originalname,
                            content: aadhaarCard.buffer,
                        }]
                        : []),

                    ...(resume
                        ? [{
                            filename: resume.originalname,
                            content: resume.buffer,
                        }]
                        : []),
                ],
            });

            res.status(200).json({
                success: true,
                message: "Registration Submitted Successfully",
            });
        } catch (error) {
            console.error("Student Registration Error:", error);

            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
);

// end

// =========================================================================
// 💡 FUTURE FORMS TEMPLATE: Agar koi naya form banana ho (e.g., Contact Form, Admission Form)
// toh aap niche diye gye format me naya route add kar sakte hain:
// =========================================================================
/*
app.post('/api/v1/contact-form', async (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: `"JITM Contact Desk" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO, // Ya koi specific email
        subject: `📩 New Website Message from ${name}`,
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Message:</strong> ${message}</p>`
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ status: 'success', message: 'Message sent!' });
    } catch (error) {
        return res.status(500).json({ status: 'error', message: 'Failed' });
    }
});
*/
// =========================================================================


// =========================================================================
// 🤖 === START: AI CHATBOT CODE ===
// =========================================================================
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/api/chat", async (req, res) => {
  const { message, websiteData } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message field is required" });
  }

  try {
    console.log("CHAT API HIT");
    console.log("API KEY EXISTS:", !!process.env.GEMINI_API_KEY);

    const prompt = `
You are the official AI Assistant of JITM Skills Pvt. Ltd.

IMPORTANT RULES:
- Always answer in English.
- Use WEBSITE DATA first.
- If not available, use general knowledge.
- If unsure, say you don't have enough information.
- Do not hallucinate.

WEBSITE DATA:
${JSON.stringify(websiteData)}

USER QUESTION:
${message}
`;

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({
      reply: text || "No response received",
    });
  } catch (error) {
    console.error("FULL GEMINI ERROR:", error);

    res.status(500).json({
      reply: "AI server error. Please try again later.",
    });
  }
});
// =========================================================================
// 🤖 === END: AI CHATBOT CODE ===
// =========================================================================


const PORT = process.env.PORT || 5001; // Port 5001 fallback
app.listen(PORT, () => {
    console.log(`🚀 Server started on port ${PORT}`);
});