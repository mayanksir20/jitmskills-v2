const express = require("express");
const router = express.Router();

const websiteStatus = require("../config/websiteStatus");

// GET STATUS
router.get("/", (req, res) => {
  res.json({
    maintenanceMode: websiteStatus.getStatus(),
  });
});

// UPDATE STATUS
router.post("/", (req, res) => {
  const { maintenanceMode } = req.body;

  websiteStatus.setStatus(maintenanceMode);

  res.json({
    success: true,
    maintenanceMode,
  });
});

module.exports = router;