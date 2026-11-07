/**
 * ==========================================================================
 * IDROGOTECH - Servidor Backend Principal (Node.js & Express)
 * Gestión de rutas, autenticación segura, base de datos y pasarela de pagos.
 * ==========================================================================
 */

const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para procesar JSON y archivos estáticos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// Rutas de API backend
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'IDROGOTECH Backend operativo y seguro.' });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor IDROGOTECH ejecutándose en http://localhost:${PORT}`);
});
