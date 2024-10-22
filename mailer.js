const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // mi dirección de correo
        pass: process.env.EMAIL_PASS, // mi contraseña de aplicación
    },
});

const sendEmail = async (name, email, message) => {
    const mailOptions = {
        from: process.env.EMAIL_USER, // dirección del remitente
        to: 'ixabeljusto@gmail.com', // el correo donde recibiré los mensajes
        subject: `Nuevo mensaje de contacto de ${name}`, // Asunto del correo
        text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`, // Cuerpo del correo
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Correo enviado exitosamente'); 
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        throw error; // Lanza el error para manejarlo en la ruta
    }
};

module.exports = { sendEmail };