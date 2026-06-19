const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },

  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
}, { timestamps: true });

// Password hashing before saving (Modern Async Style)
userSchema.pre('save', async function () {
  // Agar password modify nahi hua hai, toh seedha return karein
  if (!this.isModified('password')) {
    return;
  }

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  } catch (error) {
    throw new Error(error); // Error aane par mongoose ise catch kar lega
  }
});

module.exports = mongoose.model('User', userSchema);