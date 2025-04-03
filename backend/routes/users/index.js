const express = require("express");
const router = express.Router();

const registerRoutes = require("./register");
const loginRoutes = require("./login");
const profileRoutes = require("./profile");
const logoutRoutes = require("./logout");

router.use("/register", registerRoutes);
router.use("/login", loginRoutes);
router.use("/profile", profileRoutes);
router.use("/logout", logoutRoutes);

module.exports = router;
