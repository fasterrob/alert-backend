const mongoose = require("mongoose");

const authSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
      unique: true
    },
    password: {
      type: String,
      require: true,
    },
    firstname: {
      type: String,
      require: true,
    },
    lastname: {
      type: String,
      require: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    },
  },
  { timestamps: true }
);

const authenticate = mongoose.model("auth", authSchema);

module.exports = authenticate;
