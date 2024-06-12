const express = require("express");
const router = express.Router();
const totalPackingController = require("../controllers/totalPackingController");

// Mendapatkan semua total packing
router.get("/", totalPackingController.getAllTotalPacking);

router.post("/decrement", totalPackingController.decrementTotalPacking);

module.exports = router;
