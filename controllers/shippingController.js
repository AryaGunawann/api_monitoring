const Shipping = require("../models/shipping");
const TotalPacking = require("../models/totalPacking");

exports.addShipping = async (req, res) => {
  const { nama, jumlah } = req.body;

  try {
    const totalPacking = await TotalPacking.findOne({ where: { nama } });

    if (!totalPacking || totalPacking.jumlah_total < jumlah) {
      return res.status(400).json({ error: "Jumlah packing tidak mencukupi" });
    }

    totalPacking.jumlah_total -= jumlah;
    await totalPacking.save();

    const shipping = await Shipping.create({ nama, jumlah, status: "Proses" });

    res.status(201).json(shipping);
  } catch (error) {
    console.error("Error adding shipping:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getShipping = async (req, res) => {
  try {
    const shippings = await Shipping.findAll();
    res.status(200).json(shippings);
  } catch (error) {
    console.error("Error getting shippings:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Memperbarui status pengiriman
exports.updateShippingStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const shipping = await Shipping.findByPk(id);

    if (!shipping) {
      return res.status(404).json({ error: "Shipping not found" });
    }

    shipping.status = status;
    await shipping.save();

    res.json(shipping);
  } catch (error) {
    console.error("Error updating shipping status:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getShippingById = async (req, res) => {
  const { id } = req.params;

  try {
    const shipping = await Shipping.findByPk(id);

    if (!shipping) {
      return res.status(404).json({ error: "Shipping tidak ditemukan" });
    }

    res.status(200).json(shipping);
  } catch (error) {
    console.error("Error getting shipping by id:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deleteShipping = async (req, res) => {
  const { id } = req.params;

  try {
    const shipping = await Shipping.findByPk(id);

    if (!shipping) {
      return res.status(404).json({ error: "Shipping tidak ditemukan" });
    }

    await shipping.destroy();

    res.status(200).json({ message: "Shipping berhasil dihapus" });
  } catch (error) {
    console.error("Error deleting shipping:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
