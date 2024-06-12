const express = require("express");
const router = express.Router();
const shippingController = require("../controllers/shippingController");

router.get("/", shippingController.getShipping);
router.post("/", shippingController.addShipping);
router.get("/:id", shippingController.getShippingById);
router.put("/:id/status", shippingController.updateShippingStatus);
router.delete("/:id", shippingController.deleteShipping);

module.exports = router;
