class Router {
    
    routes = {
        'GET': {
            '/':! null
        }
    };

    async get(urlPath, file) {
        this.routes['GET'][urlPath] = file; 
    }

    async run(req, res) {
        let reqUrl = req.url;
        let reqMethod = req.method;

        if (reqMethod in this.routes) {
            if (reqUrl in this.routes['GET']) {
                res.writeHead(200, {"Content-Type": "text/html"});
                res.end(JSON.stringify(this.routes[reqMethod][reqUrl]));
            } else {
                res.writeHead(404, {"Content-Type": "text/html"});
                res.end("<h1>The page was not found.</h1>");
            }
        } else {
            res.writeHead(405, {"Content-Type": "text/html"});
            res.end("<h1>The method is not allowed.</h1>");
        }
    }
}

module.exports = Router;