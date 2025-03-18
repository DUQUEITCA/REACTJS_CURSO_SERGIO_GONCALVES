const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Servir archivos estáticos (como HTML)
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());

// Ruta principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/api/datos', (req, res) => {
    const { nombre, edad } = req.body;
    console.log(`Nombre: ${nombre}, Edad: ${edad}`);
    res.send(`Datos recibidos: Nombre - ${nombre}, Edad - ${edad}`);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
