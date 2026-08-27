const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
    try {
        let token;

        // Check Authorization header
        if (
            req.headers.authorization &&
            req.headers.authorization.startsWith("Bearer ")
        ) {
            token = req.headers.authorization.split(" ")[1];

            // Verify JWT
            const decoded = jwt.verify(
                token,
                process.env.JWT_SECRET
            );

            // Find user from token
            const user = await User.findById(decoded.id).select("-password");

            // IMPORTANT: Token valid but user doesn't exist
            if (!user) {
                return res.status(401).json({
                    message: "User no longer exists. Please login again."
                });
            }

            req.user = user;

            next();
        } else {
            return res.status(401).json({
                message: "Not Authorized, no token"
            });
        }
    } catch (err) {
        console.error("AUTH ERROR:", err.message);

        return res.status(401).json({
            message: "Invalid or expired token"
        });
    }
};

const adminOnly = (req, res, next) => {
    if (req.user && req.user.role === "admin") {
        next();
    } else {
        return res.status(403).json({
            message: "Admin Only"
        });
    }
};

module.exports = {
    protect,
    adminOnly,
};