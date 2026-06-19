const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    fatherName: String,
    motherName: String,

    dob: String,
    gender: String,
    category: String,

    aadhaarNum: String,

    mobile: String,
    altMobile: String,
    email: String,

    address: String,
    state: String,
    district: String,
    pinCode: String,

    qualification: String,
    board: String,
    passingYear: String,
    percentage: String,

    courseName: String,
    customCourse: String,

    sectorTrade: String,
    batchPreference: String,
    trainingLocation: String,
    mode: String,

    passportPhoto: String,
    aadhaarCard: String,
    resume: String,

    rollNumber: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", studentSchema);