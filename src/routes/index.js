const express = require("express");
const router = express.Router();

const bookRoutes = require("../domains/bookshelf");

// Base name for each domain routes
router.use("/books", bookRoutes);

module.exports = router;
