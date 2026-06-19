const express = require('express');
const router = express.Router();
const { registerUser, loginUser, updateUserProfile } = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/login', loginUser);

// Fixed: Ensure this is .put
router.put('/profile', updateUserProfile);

module.exports = router;