const express = require("express");
const router = express.Router();

const usersRoutes = require("./users");
const recordsRoutes = require("./records");

router.use("/users", usersRoutes);
router.use("/records", recordsRoutes);

module.exports = router;
