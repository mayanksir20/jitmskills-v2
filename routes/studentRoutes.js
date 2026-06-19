const express = require("express");
const multer = require("multer");
const Student = require("../models/Student");

const router = express.Router();

/* ==========================
   MULTER CONFIG
========================== */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(
      null,
      Date.now() + "-" + file.originalname.replace(/\s+/g, "-")
    );
  },
});

const upload = multer({ storage });

/* ==========================
   STUDENT REGISTRATION
========================== */
router.post(
  "/register",
  upload.fields([
    {
      name: "passportPhoto",
      maxCount: 1,
    },
    {
      name: "aadhaarCard",
      maxCount: 1,
    },
    {
      name: "resume",
      maxCount: 1,
    },
  ]),
  async (req, res) => {
    try {

      /* ==========================
         ADMIN CODE VALIDATION
      ========================== */
      if (req.body.adminCode !== process.env.ADMIN_CODE) {
        return res.status(401).json({
          success: false,
          message: "Invalid Admin Code",
        });
      }

      const rollNumber =
        "JITM" + Math.floor(10000 + Math.random() * 90000);

      const student = new Student({
        ...req.body,

        rollNumber,

        passportPhoto:
          req.files?.passportPhoto?.[0]?.filename || "",

        aadhaarCard:
          req.files?.aadhaarCard?.[0]?.filename || "",

        resume:
          req.files?.resume?.[0]?.filename || "",
      });

      await student.save();

      res.status(201).json({
        success: true,
        message: "Admission submitted successfully",
        student,
      });

    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
);

/* ==========================
   STUDENT data export excle
========================== */
/* ==========================
   STUDENT DATA EXPORT
========================== */
router.post("/export", async (req, res) => {
  try {

    /* ==========================
       ADMIN CODE VALIDATION
    ========================== */
    if (req.body.adminCode !== process.env.ADMIN_CODE) {
      return res.status(401).json({
        success: false,
        message: "Invalid Admin Code",
      });
    }

    /* ==========================
       FETCH STUDENT DATA
    ========================== */
    const students = await Student.find()
      .select(
        "rollNumber fullName mobile email courseName customCourse createdAt"
      )
      .sort({ createdAt: -1 });

    /* ==========================
       SEND DATA
    ========================== */
    res.status(200).json({
      success: true,
      students,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/* ==========================
   ALL STUDENTS
========================== */
router.get("/", async (req, res) => {
  try {
    const students = await Student.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      students,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/* ==========================
   SINGLE STUDENT
========================== */
router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Student not found",
      });
    }

    res.status(200).json({
      success: true,
      student,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/* ==========================
   VERIFY CERTIFICATE
========================== */
router.get("/verify/:rollNumber", async (req, res) => {
  try {
    const student = await Student.findOne({
      rollNumber: req.params.rollNumber,
    });

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "Certificate Not Found",
      });
    }

    res.status(200).json({
      success: true,
      student,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;