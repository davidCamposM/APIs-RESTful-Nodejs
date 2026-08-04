


// Se crea variable HTTP para hacer la conexion al servidor. 
const http = require('http');


// Variable que guarda el objeto servidor HTTP
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Word\n');
});


// El servidor se escuchará en el puerto 3000
server.listen(3001, () => {
    console.log("Server is running at http://localhost:3001/");

});