const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const movies = require('./data/movies');
const Router = require('./router.js');

let router = new Router();

const server = http.createServer((req, res) => {
    router.get('/', movies);

    router.run(req, res);
});

server.listen(5000, () => {
    console.log('The server is running.')
});
