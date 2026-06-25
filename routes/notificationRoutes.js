const express = require("express");
const router = express.Router();
const Notification = require("../models/Notification");
const User = require("../models/User");
const { protect } = require("../middleware/authMiddleware");

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


router.get("/", async (req, res) => {
  const notifications = await Notification.find()
    .sort({ createdAt: -1 });

  res.json(notifications);
});


router.get("/user", protect, async (req, res) => {
  try {
    console.log("USER:", req.user);

    const user = await User.findById(req.user._id);

    console.log(
      "DISMISSED:",
      user.dismissedNotifications
    );

    const notifications = await Notification.find({
      _id: {
        $nin: user.dismissedNotifications || [],
      },
    }).sort({ createdAt: -1 });

    console.log(
      "FOUND:",
      notifications.length
    );

    res.json(notifications);
  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).json({
      message: error.message,
    });
  }
});


router.post("/dismiss", protect, async (req, res) => {
  try {
    const { notificationId } =
      req.body;

    await User.findByIdAndUpdate(req.user._id, {
      $addToSet: {
        dismissedNotifications:
          notificationId,
      },
    }
    );

    res.json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
);

module.exports = router;