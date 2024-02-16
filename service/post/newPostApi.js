const express = require("express");
const router = express.Router();
const { getPosts, newPost,getPostsById } = require("./newPostController");

const multer = require("multer");
const upload = multer({ dest: "images/" });

router.route("/").get(getPosts);
router.route("/postbyuserid").get(getPostsById);
router.route("/newpost").post(upload.single("image"), newPost);

module.exports = router;
