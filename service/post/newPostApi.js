const express = require("express");
const router = express.Router();
const { getPosts, newPost } = require("./newPostController");

router.route("/").get(getPosts);
router.route("/newpost").post(newPost);

module.exports = router;
