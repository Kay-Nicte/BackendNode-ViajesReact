const express = require('express');
const { sendEmail } = require('../mailer'); 
const router = express.Router();

router.post('/contact', async (req, res) => {
    const { name, email, message } = req.body;

    // Validación básica de datos
    if (!name || !email || !message) {
        return res.status(400).send('Todos los campos son obligatorios');
    }

    try {
        await sendEmail(name, email, message);
        res.status(200).send('Correo enviado correctamente');
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        res.status(500).send('Error al enviar el correo');
    }
});

module.exports = router;