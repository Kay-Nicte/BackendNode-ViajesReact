const express = require("express");
const cors = require("cors");
require("dotenv").config();
const contactRoutes = require("./routes/contact");
const viajesRoutes = require("./routes/viajes");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

// Conectar a MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Conectado a MongoDB"))
  .catch(err => console.error("Error al conectar a MongoDB:", err));

// Middleware
app.use(cors());
app.use(express.json()); // Para poder recibir JSON en el body de las solicitudes

// Ruta de bienvenida
app.get("/", (req, res) => {
  res.send("¡Bienvenido a la API de viajes-react!");
});

// Rutas
app.use("/api", contactRoutes); 
app.use("/api/viajes", viajesRoutes); // Rutas para viajes

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});