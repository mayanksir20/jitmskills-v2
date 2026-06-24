const Notification = require("../models/Notification");
const User = require("../models/User");
// Get all notifications
exports.getNotifications = async (req, res) => {
  try {
    let notifications;

    if (req.user) {
      const user = await User.findById(req.user._id);

      notifications = await Notification.find({
        _id: {
          $nin: user.dismissedNotifications,
        },
      }).sort({ createdAt: -1 });
    } else {
      notifications = await Notification.find().sort({
        createdAt: -1,
      });
    }

    res.json(notifications);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Add notification
exports.createNotification = async (req, res) => {
  try {
    const { title, message, link } = req.body;

    const notification = await Notification.create({
      title,
      message,
      link,
    });

    res.status(201).json(notification);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete notification
exports.deleteNotification = async (req, res) => {
  try {
    await Notification.findByIdAndDelete(req.params.id);

    res.json({
      message: "Notification Deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// dismiss Notification
exports.dismissNotification = async (req, res) => {
  try {
    const { notificationId } = req.body;

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (!user.dismissedNotifications.includes(notificationId)) {
      user.dismissedNotifications.push(notificationId);

      await user.save();
    }

    res.json({
      success: true,
      message: "Notification dismissed",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Clear all
exports.clearAllNotifications = async (req, res) => {
  try {
    await Notification.deleteMany({});

    res.json({
      message: "All Notifications Cleared",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};