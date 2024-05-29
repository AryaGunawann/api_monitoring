const TotalProduk = require("../models/totalProduk");
const Produk = require("../models/produk");

// Mendapatkan semua total produk
exports.getAllTotalProduk = async (req, res) => {
  try {
    const totalProduk = await TotalProduk.findAll();
    res.json(totalProduk);
  } catch (error) {
    console.error("Error fetching total produk:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateOrCreateTotalProduk = async () => {
  try {
    // Ambil semua produk dari database
    const allProduk = await Produk.findAll();

    // Kelompokkan produk berdasarkan nama
    const produkGroups = allProduk.reduce((groups, produk) => {
      if (!groups[produk.nama]) {
        groups[produk.nama] = 0;
      }
      groups[produk.nama] += produk.jumlah_total;
      return groups;
    }, {});

    // Simpan atau update TotalProduk berdasarkan data Produk
    for (const [nama, jumlah_total] of Object.entries(produkGroups)) {
      // Cari atau buat TotalProduk dengan nama produk yang sesuai
      let totalProduk = await TotalProduk.findOne({ where: { nama } });
      if (!totalProduk) {
        await TotalProduk.create({ nama, jumlah_total });
      } else {
        await totalProduk.update({ jumlah_total });
      }
    }
  } catch (error) {
    console.error("Error updating or creating total produk:", error);
    throw new Error("Internal Server Error");
  }
};
