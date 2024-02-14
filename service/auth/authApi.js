const express = require("express");
const router = express.Router();
const { getUser, createUser, getUsers } = require("./authController");

router.route("/").post(getUser);
router.route("/register").post(createUser);

router.route("/alluser").get(getUsers);

module.exports = router;
