// Guardar en archivo plano (TXT)

// Carga los módulos del marco de desarrollo express
const express = require('express');
// Carga los módulos para acceder a directorios del proyecto
const path = require('path');
// Carga los módulos para accder al contenido del mensaje recibido
// desde la vista
const bodyParser = require('body-parser');
// Se incorpora módulo para guardar archivos del sistema
const fs = require('fs');


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
    // Mensaje de respuesta
    var mensaje = '';
    // Se hace un desglose de los datos recibidos desde la vista
    const {nombre, apellido, correo, telefono} = req.body;
    // Se muestra en consola los datos recibidos
    console.log(`Datos recibido: NOMBRE: ${nombre}, APELLIDO: ${apellido}, CORREO: ${correo}, TELÉFONO: ${telefono}`);
    // Se define registro para almacenar datos
    const registro = `${nombre};${apellido};${correo};${telefono};\n`;
    // Se almacenan los datos en el archivo
    fs.appendFile('datospersonales.txt', registro, (err)=>{
        // Se evalúa el resultado
        if (err){
            // Mensaje en consola
            console.log('Error: Falló al guardar de datos en el archivo datospersonales.txt',err);
            // Mensaje de error en el navegador
            mensaje = "<div class='alert alert-danger'><strong>ERROR:</strong>Falló al guardar de datos en el archivo datospersonales.txt</div>"
            return res.status(500).send(mensaje);
        }
        // Se genera respuesta informando el resultado en consola
        console.log(`Esta respuesta proviene desde el servidor: ${nombre}, APELLIDO: ${apellido}, CORREO: ${correo}, TELÉFONO: ${telefono}`);
        // Mensaje de éxito en el navegador
        mensaje = "<div class='alert alert-success'><strong>COMPLETADO:</strong>Los datos se almacenaron con éxito</div>"
        res.send(mensaje);
    })
});

// Se inicia el servidor
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`);
});

// Para levantar el servidor, se ejecuta el siguiente comando
// >node server.js



