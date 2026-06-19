const express = require("express");
const router = express.Router();

const {
  getNotifications,
  createNotification,
  deleteNotification,
  clearAllNotifications,
} = require("../controllers/notificationController");

router.get("/", getNotifications);

router.post("/", createNotification);

router.delete("/:id", deleteNotification);

router.delete("/", clearAllNotifications);

module.exports = router;