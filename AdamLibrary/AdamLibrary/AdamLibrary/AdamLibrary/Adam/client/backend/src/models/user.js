const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define the User schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['adem'], required: true },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
});

// Password hashing middleware
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
      this.password = await bcrypt.hash(this.password, 10);
    }
    next();
  });

// Create and export the User model
module.exports = mongoose.model('User', userSchema);