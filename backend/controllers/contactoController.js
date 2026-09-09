/**
 * Controlador para la gestión de mensajes de contacto
 */

const enviarMensaje = async (req, res) => {
    try {
        const { nombre, empresa, correo, telefono, motivo, mensaje } = req.body;

        // Validación básica de campos requeridos
        if (!nombre || !correo || !mensaje) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Los campos nombre, correo y mensaje son obligatorios.'
            });
        }

        // Validación simple de formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(correo)) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Por favor ingresa un correo electrónico válido.'
            });
        }

        // Simulación de procesamiento / almacenamiento
        const nuevoContacto = {
            id: Date.now().toString(),
            nombre: nombre.trim(),
            empresa: empresa ? empresa.trim() : null,
            correo: correo.trim().toLowerCase(),
            telefono: telefono ? telefono.trim() : null,
            motivo: motivo || 'Consulta general',
            mensaje: mensaje.trim(),
            fecha: new Date().toISOString()
        };

        console.log(' Nuevo mensaje de contacto recibido:', nuevoContacto);

        return res.status(200).json({
            ok: true,
            mensaje: 'Mensaje recibido exitosamente. Nos pondremos en contacto contigo a la brevedad.',
            data: nuevoContacto
        });
    } catch (error) {
        console.error('Error al procesar el contacto:', error);
        return res.status(500).json({
            ok: false,
            mensaje: 'Ocurrió un error en el servidor. Por favor intenta más tarde.'
        });
    }
};

module.exports = {
    enviarMensaje
};
