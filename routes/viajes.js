const express = require('express');
const router = express.Router();

// Ejemplo de ruta para obtener todos los viajes
router.get('/', (req, res) => {
    // Aquí iría la lógica para obtener los viajes
    res.json({ message: 'Lista de viajes' });
});

module.exports = router;