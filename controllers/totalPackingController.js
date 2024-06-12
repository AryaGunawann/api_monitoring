const TotalPacking = require("../models/totalPacking");
const Packing = require("../models/packing");

// Mendapatkan semua total packing
exports.getAllTotalPacking = async (req, res) => {
  try {
    const totalPacking = await TotalPacking.findAll();
    res.json(totalPacking);
  } catch (error) {
    console.error("Error fetching total packing:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateOrCreateTotalPacking = async () => {
  try {
    // Ambil semua packing dari database
    const allPacking = await Packing.findAll();

    // Kelompokkan packing berdasarkan nama produk
    const packingGroups = allPacking.reduce((groups, packing) => {
      const nama = packing.nama || "";
      const jumlah = packing.jumlah || 0;

      if (!groups[nama]) {
        groups[nama] = 0;
      }
      groups[nama] += jumlah;
      return groups;
    }, {});

    // Simpan atau update TotalPacking berdasarkan data Packing
    for (const [nama, jumlah_total] of Object.entries(packingGroups)) {
      // Cari atau buat TotalPacking dengan nama produk yang sesuai
      let totalPacking = await TotalPacking.findOne({ where: { nama } });
      if (!totalPacking) {
        await TotalPacking.create({ nama, jumlah_total });
      } else {
        await totalPacking.update({ jumlah_total });
      }
    }
  } catch (error) {
    console.error("Error updating or creating total packing:", error);
    throw new Error("Internal Server Error");
  }
};

// Mengurangi jumlah total packing
exports.decrementTotalPacking = async (req, res) => {
  const { nama, jumlah } = req.body;

  try {
    const totalPacking = await TotalPacking.findOne({ where: { nama } });

    if (totalPacking) {
      const updatedJumlahTotal = totalPacking.jumlah_total - jumlah;
      await totalPacking.update({ jumlah_total: updatedJumlahTotal });

      res.json({ message: "Total packing updated successfully" });
    } else {
      res.status(404).json({ error: "Total packing not found" });
    }
  } catch (error) {
    console.error("Error decrementing total packing:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
