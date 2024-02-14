const mongoose = require("mongoose");
const dotenv = require("dotenv");
const env = dotenv.config().parsed;

const uri = env.MONGOLINK;

const connectDb = () => {
  mongoose.connect(uri);
  const conn = mongoose.connection;
  conn.on("error", console.error.bind(console, "connection error: "));
  conn.once("open", function () {
    console.log("Connected Mongo DB successfully");
  });
};

module.exports = connectDb;
