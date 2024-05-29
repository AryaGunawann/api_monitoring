const { DataTypes } = require("sequelize");
const db = require("../database");

const TotalProduk = db.define("TotalProduk", {
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  jumlah_total: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

module.exports = TotalProduk;
