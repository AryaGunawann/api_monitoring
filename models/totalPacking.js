const { DataTypes } = require("sequelize");
const db = require("../database");

const TotalPacking = db.define("TotalPacking", {
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Pastikan nama produk unik
  },
  jumlah_total: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0, // Jumlah total default 0
  },
});

module.exports = TotalPacking;
