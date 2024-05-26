// Import model-model yang akan disinkronkan dengan database
const db = require("./database");
const Produk = require("./models/produk");
const Material = require("./models/material");
const Riwayat = require("./models/riwayat");

// Fungsi untuk menyinkronkan model-model dengan database
const syncModels = async () => {
  try {
    // Sinkronkan model-model dengan database
    await db.sync({ force: true }); // force: true akan menghapus tabel yang sudah ada jika ada perubahan pada model
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("An error occurred while synchronizing models:", error);
  } finally {
    // Tutup koneksi ke database setelah selesai
    await db.close();
    console.log("Database connection closed.");
  }
};

// Panggil fungsi untuk menyinkronkan model dengan database
syncModels();
