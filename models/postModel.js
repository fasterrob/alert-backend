const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      require: true,
    },
    avatar: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    verify: {
      type: Boolean,
      require: true,
      default: false,
    },
    lat: {
      type: Number,
      require: true,
    },
    lng: {
      type: Number,
      require: true,
    },
    like: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

const newpost = mongoose.model("post", postSchema);

module.exports = newpost;
