const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const movies = require('./data/movies');

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(JSON.stringify(movies));
});

server.listen(5000, () => {
    console.log('The server is running.')
});
