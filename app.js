const express = require("express");
const app = express();
const db = require("./database");

// Menghubungkan ke database
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log("Error: " + err));

// Middlewares
app.use(express.json());

// Routes
app.use("/produk", require("./routes/produkRoutes"));
app.use("/material", require("./routes/materialRoutes"));
app.use("/riwayat", require("./routes/riwayatRoutes"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
