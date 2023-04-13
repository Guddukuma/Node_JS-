
const my_func = require("./funtion")

const avg = my_func(3,4,5);
console.log(avg);

// Over head funtion is all ready write in another file. And there are excute the code.

// http

const http= require("http");

const server = http.createServer((req,resp) => {
    resp.writeHead(200, {"Constent-type": "text/html"});
    resp.write("<h1> Hey this is my node js page </h1>");
    resp.write("<h1> Wow that is the one of the best page for me. </h1>");
    resp.write("<h2> My self Guddu Kumar. I belong from Bihar. </h2>");
    resp.write("<button> Click Me </button>");

});
server.listen(6867);