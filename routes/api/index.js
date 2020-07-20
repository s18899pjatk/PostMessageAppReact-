const express = require("express");
const router = express.Router();
const postsRoute = require("./posts");
const jwtAuth = require("./jwtAuth");
const dashboard = require("./dashboard");

router.use("/posts", postsRoute);
router.use("/jwtAuth", jwtAuth);
router.use("/dashboard", dashboard);

module.exports = router;
