"use strict";

//este es el entry point o archivo de llegada
var http = require('http'); // importo el modulo http


var fs = require('fs'); //const server = http.createServer((req,res)=>{
//    res.writeHead(200, {
//      'Content-Type':'text/plain'
//   });
//res.end('Hola Mundo')
//});//Creo un servidor estatico
//leeyendo archivos con filesystem


var server = http.createServer(function (req, res) {
  var file = fs.readFileSync(__dirname + '/index.html');
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=UTF-8'
  });
  res.end(file);
}); //llamamos a la fun server

server.listen(3000, function () {
  return console.log('Servidor corriendo en puerto http://localhost:3000');
});