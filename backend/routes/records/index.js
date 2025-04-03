const express = require("express");
const router = express.Router();

const resultsRoutes = require("./results");
const saveRoutes = require("./save");
const runRoutes = require("./run");

router.use("/results", resultsRoutes);
router.use("/save", saveRoutes);
router.use("/run", runRoutes);

module.exports = router;
