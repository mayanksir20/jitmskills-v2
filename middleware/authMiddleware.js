const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
    let token;

    // 1. Check karein ki Authorization Header standard format me hai ya nahi
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            // Header se Token alag karein
            token = req.headers.authorization.split(" ")[1];

            // JWT Token ko Verify karein
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Database se user nikal kar request object (req.user) me save karein (Password chor kar)
            req.user = await User.findById(decoded.id).select("-password");

            if (!req.user) {
                return res.status(401).json({ message: "User not found associated with this token" });
            }

            return next(); // Sab sahi hai, aage badhein
        } catch (err) {
            console.error("Token verification error:", err.message);
            return res.status(401).json({ message: "Not Authorized, Invalid or Expired Token" });
        }
    }

    // 2. Agar token mila hi nahi header me
    if (!token) {
        return res.status(401).json({ message: "Not Authorized, No Token Provided" });
    }
};

// Admin Only Role Access Middleware
const adminOnly = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        next();
    } else {
        return res.status(403).json({ message: "Access Denied: Admin privileges required" });
    }
};

module.exports = {
    protect,
    adminOnly,
};