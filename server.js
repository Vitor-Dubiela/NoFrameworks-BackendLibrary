const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1>Hello World</h1>");
    res.end();
});

server.listen(5000, () => {
    console.log('The server is running.')
});
