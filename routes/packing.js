// routes/packing.js
const express = require("express");
const router = express.Router();
const {
  getPacking,
  addPacking,
  getPackingById,
  deletePacking,
} = require("../controllers/packingController");

router.get("/", getPacking);
router.get("/:id", getPackingById);
router.delete("/:id", deletePacking);
router.post("/", addPacking);

module.exports = router;
