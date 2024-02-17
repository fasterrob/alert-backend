const express = require("express");
const router = express.Router();
const { getUser, createUser, getUsers,removeUser } = require("./authController");

router.route("/").post(getUser);
router.route("/register").post(createUser);
router.route("/removeuser").delete(removeUser);

router.route("/alluser").get(getUsers);

module.exports = router;
