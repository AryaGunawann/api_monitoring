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
app.use("/jabatan", require("./routes/jabatan"));
app.use("/employee", require("./routes/employee"));
app.use("/slipgaji", require("./routes/slipGaji"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
