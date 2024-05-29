const express = require("express");
const router = express.Router();
const totalProdukController = require("../controllers/totalProdukController");

// Route untuk mendapatkan semua total produk
router.get("/", totalProdukController.getAllTotalProduk);

// Route untuk membuat total produk baru
router.post("/", totalProdukController.updateOrCreateTotalProduk);

module.exports = router;
