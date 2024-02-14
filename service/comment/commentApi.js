const express = require("express");
const router = express.Router();
const {
  createComment,
  getComments,
  deleteComment,
} = require("./commentController");

router.route("/").get(getComments);
router.route("/").post(createComment);
router.route("/deletecomment").get(deleteComment);

module.exports = router;
