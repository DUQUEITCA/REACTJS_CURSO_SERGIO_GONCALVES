// Carga los módulos del marco de desarrollo express
const express = require('express');
// Carga los módulos para acceder a directorios del proyecto
const path = require('path');
// Carga los módulos para accder al contenido del mensaje recibido
// desde la vista
const bodyParser = require('body-parser');

// Se crea instancia de la aplicación express
const app = express();
// Definir puerto por donde corre la aplicación
const PORT = 3000;

// Acceder a los archivos estáticos de la aplicación
app.use(express.static(path.join(__dirname)));
app.use(bodyParser.json());

// Rutas o urls, que ejecuta la aplicación.
// Pantalla inicial al cargar la aplicación
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});

// Recepción de los datos que se envían desde el formulario inicial
app.post('/api/procesarDatosPersonales', (req, res)=>{
    // Se hace un desglose de los datos recibidos desde la vista
    const {nombre, apellido, correo, telefono} = req.body;
    // Se muestra en consola los datos recibidos
    console.log(`Datos recibido: NOMBRE: ${nombre}, APELLIDO: ${apellido}, CORREO: ${correo}, TELÉFONO: ${telefono}`);
    // Se genera respuesta informando el resultado
    res.send(`Esta respuesta proviene desde el servidor: ${nombre}, APELLIDO: ${apellido}, CORREO: ${correo}, TELÉFONO: ${telefono}`);
});

// Se inicia el servidor
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});

// Para levantar el servidor, se ejecuta el siguiente comando
// >node server.js



