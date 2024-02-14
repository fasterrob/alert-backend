const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    postId: {
      type: String,
      require: true,
    },
    userId: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    commentContent: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const comment = mongoose.model("comment", commentSchema);

module.exports = comment;
