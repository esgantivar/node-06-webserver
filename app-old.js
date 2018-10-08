const http = require('http')
http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    res.write(JSON.stringify({
        name: 'Sneyder Gantiva'
    }));
    res.end();
}).listen(8081);