const Produk = require("../models/produk");

// Mendapatkan semua produk
const getAllProduk = async (req, res) => {
  try {
    const produk = await Produk.findAll({ include: "material_pendukung" });
    res.json(produk);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Mendapatkan produk berdasarkan ID
const getProdukById = async (req, res) => {
  try {
    const { id } = req.params;
    const produk = await Produk.findByPk(id);
    if (!produk) {
      return res.status(404).json({ message: "Produk not found" });
    }
    res.json(produk);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Membuat produk baru
const createProduk = async (req, res) => {
  try {
    const { nama, berat, jumlah_total, material_pendukung } = req.body;
    const produk = await Produk.create({
      nama,
      berat,
      jumlah_total,
      material_pendukung,
    });
    res.status(201).json(produk);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Memperbarui produk
const updateProduk = async (req, res) => {
  try {
    const { id } = req.params;
    const { nama, berat } = req.body;
    const produk = await Produk.findByPk(id);
    if (!produk) {
      return res.status(404).json({ message: "Produk not found" });
    }
    await produk.update({
      nama: nama || produk.nama,
      berat: berat || produk.berat,
    });
    res.json(produk);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Menghapus produk
const deleteProduk = async (req, res) => {
  try {
    const { id } = req.params;
    const produk = await Produk.findByPk(id);
    if (!produk) {
      return res.status(404).json({ message: "Produk not found" });
    }
    await produk.destroy();
    res.json({ message: "Produk deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Menambahkan jumlah produk
const tambahJumlah = async (req, res) => {
  try {
    const { id } = req.params;
    const { jumlah } = req.body;
    const produk = await Produk.findByPk(id);
    if (!produk) {
      return res.status(404).json({ message: "Produk not found" });
    }
    produk.jumlah_total += jumlah;
    await produk.save();
    res.json(produk);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// Mengurangi jumlah produk
const kurangiJumlah = async (req, res) => {
  try {
    const { id } = req.params;
    const { jumlah } = req.body;
    const produk = await Produk.findByPk(id);
    if (!produk) {
      return res.status(404).json({ message: "Produk not found" });
    }
    if (produk.jumlah_total < jumlah) {
      return res.status(400).json({ message: "Not enough products" });
    }
    produk.jumlah_total -= jumlah;
    await produk.save();
    res.json(produk);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  getAllProduk,
  getProdukById,
  createProduk,
  updateProduk,
  deleteProduk,
  tambahJumlah,
  kurangiJumlah,
};
