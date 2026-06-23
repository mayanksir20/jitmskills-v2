// 

const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Generate JWT
const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
};

// User registration (Bina email ke sirf phone se bhi chalega)
exports.registerUser = async (req, res) => {
  const { name, email, phone, password } = req.body;
  try {
    // Check karein ki kam se kam ek contact method (email ya phone) diya ho
    if (!email && !phone) {
      return res.status(400).json({ message: 'Please provide either an Email or a Phone Number to register.' });
    }

    const queryConditions = [];
    if (email && email.trim() !== "") queryConditions.push({ email: email.toLowerCase().trim() });
    if (phone && phone.trim() !== "") queryConditions.push({ phone: phone.trim() });

    // Database check duplicate users ke liye
    if (queryConditions.length > 0) {
      const userExists = await User.findOne({ $or: queryConditions });
      if (userExists) {
        return res.status(400).json({ message: 'User with this email or phone already exists' });
      }
    }

    // Dynamic data object ready karein
    const userData = { name, password };
    if (email && email.trim() !== "") userData.email = email.toLowerCase().trim();
    if (phone && phone.trim() !== "") userData.phone = phone.trim();

    const user = await User.create(userData);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email || null,
      phone: user.phone || null,
      role: user.role,
      token: generateToken(user)
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// User login (Email ya Phone, kisi se bhi unique match karega)
exports.loginUser = async (req, res) => {
  const { email, password } = req.body; // Frontend se aane wali input data 'email' key me hi milegi
  try {
    if (!email) {
      return res.status(400).json({ message: 'Email or Phone number is required to login.' });
    }

    const formattedInput = email.trim();

    // Find user matching either field (email check dynamically handle lowerCase)
    const user = await User.findOne({
      $or: [
        { email: formattedInput.toLowerCase() },
        { phone: formattedInput }
      ]
    });

    // Safe check: User milne par hi password compare karein
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email || null,
        phone: user.phone || null,
        role: user.role,
        token: generateToken(user)
      });
    } else {
      res.status(401).json({ message: 'Invalid credentials. Please check your email/phone or password.' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update User Profile
exports.updateUserProfile = async (req, res) => {
  try {
    const { id, name, email, phone, password } = req.body;
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Fields update karein dynamically
    user.name = name || user.name;

    if (email !== undefined) user.email = email ? email.toLowerCase().trim() : null;
    if (phone !== undefined) user.phone = phone ? phone.trim() : null;

    // Agar password bheja hai tabhi change/hash karein
    if (password && password.trim() !== "") {
      user.password = password;
    }

    const updatedUser = await user.save(); // Pre-save hashing mechanism executes here

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email || null,
      phone: updatedUser.phone || null,
      role: updatedUser.role,
      token: generateToken(updatedUser), // FIXED: Pure object context ke saath token verify kiya
    });
  } catch (error) {
    res.status(500).json({ message: "Update Error: " + error.message });
  }
};