// controllers/packingController.js
const Packing = require("../models/packing");
const TotalProduk = require("../models/totalProduk");
const { updateOrCreateTotalPacking } = require("./totalPackingController");

exports.addPacking = async (req, res) => {
  const { nama, jumlah } = req.body;

  try {
    const totalProduk = await TotalProduk.findOne({ where: { nama } });

    if (!totalProduk || totalProduk.jumlah_total < jumlah) {
      return res.status(400).json({ error: "Jumlah produk tidak mencukupi" });
    }

    totalProduk.jumlah_total -= jumlah;
    await totalProduk.save();

    const packing = await Packing.create({ nama, jumlah });

    await updateOrCreateTotalPacking();

    res.status(201).json(packing);
  } catch (error) {
    console.error("Error adding packing:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getPacking = async (req, res) => {
  try {
    const packings = await Packing.findAll();
    res.status(200).json(packings);
  } catch (error) {
    console.error("Error getting packings:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getPackingById = async (req, res) => {
  const { id } = req.params;

  try {
    const packing = await Packing.findByPk(id);

    if (!packing) {
      return res.status(404).json({ error: "Packing tidak ditemukan" });
    }

    res.status(200).json(packing);
  } catch (error) {
    console.error("Error getting packing by id:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.deletePacking = async (req, res) => {
  const { id } = req.params;

  try {
    const packing = await Packing.findByPk(id);

    if (!packing) {
      return res.status(404).json({ error: "Packing tidak ditemukan" });
    }

    await packing.destroy();

    res.status(200).json({ message: "Packing berhasil dihapus" });
  } catch (error) {
    console.error("Error deleting packing:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
