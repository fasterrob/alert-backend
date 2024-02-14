const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const env = dotenv.config().parsed;
const mongoose = require("./util/mongodb");
const multer = require("multer");

app.use(express.json());
app.use(cors());
mongoose();

app.get("/", (req, res) => {
  console.log("OK");
  res.sendStatus(200);
});

app.use("/auth", require("./service/auth/authApi"));
app.use("/post", require("./service/post/newPostApi"));
app.use("/comment", require("./service/comment/commentApi"));

const PORT = env.PORT;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
