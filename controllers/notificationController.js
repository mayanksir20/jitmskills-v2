const Notification = require("../models/Notification");

// Get all notifications
exports.getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.find()
      .sort({ createdAt: -1 });

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