const express = require('express');
const router = express.Router();
const { registerUser, loginUser, updateUserProfile } = require('../controllers/authController');

// 💡 Fixed/Added: Protect middleware import kiya user authentication check karne ke liye
const { protect } = require('../middleware/authMiddleware');

// Public Routes (Isme koi bhi access kar sakta hai)
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected Route (Sirf logged-in user hi apna profile update kar payega)
// 💡 Fixed: 'protect' middleware ko bich me pass kiya hai taaki req.user secure ho sake
router.put('/profile', protect, updateUserProfile);

module.exports = router;