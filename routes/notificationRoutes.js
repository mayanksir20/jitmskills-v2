const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

const {
  getNotifications,
  createNotification,
  deleteNotification,
  dismissNotification,
  clearAllNotifications,
} = require("../controllers/notificationController");

router.get("/", getNotifications);

router.post("/", createNotification);

router.delete("/:id", deleteNotification);

router.delete("/", clearAllNotifications);

router.post("/dismiss", protect, dismissNotification);

module.exports = router;