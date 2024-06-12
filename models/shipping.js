// models/shipping.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Shipping = sequelize.define(
  "Shipping",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jumlah: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Proses", // Default status ke "Proses"
    },
  },
  {
    tableName: "shippings",
    timestamps: true,
  }
);

module.exports = Shipping;
