const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;

const redis = require("redis");
const REDIS_URL = process.env.REDIS_URL || 6379;
const redisClient = redis.createClient(REDIS_URL);
console.log(redisClient);

express()
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("pages/index"))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
