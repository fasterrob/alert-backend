const express = require("express");
const router = express.Router();
const {
  getPosts,
  newPost,
  getPostsById,
  removePost,
} = require("./newPostController");

const multer = require("multer");
const upload = multer({ dest: "images/" });

router.route("/").get(getPosts);
router.route("/postbyuserid").get(getPostsById);
router.route("/newpost").post(upload.single("image"), newPost);
router.route("/removepost").delete(removePost);

module.exports = router;
