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
      const nama = produk.nama || "";
      const jumlah_total = produk.jumlah_total || 0;

      if (!groups[nama]) {
        groups[nama] = 0;
      }
      groups[nama] += jumlah_total;
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

// Mengurangi jumlah total produk
exports.decrementTotalProduk = async (req, res) => {
  const { nama, jumlah } = req.body;

  try {
    const totalProduk = await TotalProduk.findOne({ where: { nama } });

    if (totalProduk) {
      const updatedJumlahTotal = totalProduk.jumlah_total - jumlah;
      await totalProduk.update({ jumlah_total: updatedJumlahTotal });

      res.json({ message: "Total produk updated successfully" });
    } else {
      res.status(404).json({ error: "Total produk not found" });
    }
  } catch (error) {
    console.error("Error decrementing total produk:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
