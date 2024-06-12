// models/packing.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Packing = sequelize.define(
  "Packing",
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
  },
  {
    tableName: "packings",
    timestamps: true,
  }
);

module.exports = Packing;
