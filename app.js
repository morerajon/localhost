//este es el entry point o archivo de llegada
const http= require ('http');
 // importo el modulo http


 const fs = require ('fs');
//const server = http.createServer((req,res)=>{
//    res.writeHead(200, {
//      'Content-Type':'text/plain'
 //   });
 
 //res.end('Hola Mundo')
//});//Creo un servidor estatico



//leeyendo archivos con filesystem


const server = http.createServer((req,res)=>{
   const file = fs.readFileSync(__dirname + '/index.html')
   
    res.writeHead(200, {
        'Content-Type':'text/html; charset=UTF-8'
    });
    res.end(file);
});
//llamamos a la fun server
server.listen(3000,()=> console.log('Servidor corriendo en puerto http://localhost:3000'));

