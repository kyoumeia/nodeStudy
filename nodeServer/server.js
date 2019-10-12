const http = require('http');
const fs = require('fs');

var server = http.createServer(function (request, response) {
    let filePath;
    if (request.url === '/') {
        filePath = 'index.html'
    } else if (request.url === '/login') {
        filePath = 'login.html'
    } else if (request.url === 'register') {
        filePath = 'register.html'
    } else {
        filePath = 'error.html'
    }
    fs.readFile(filePath, function (error, data) {
        response.write('' + data);
        response.end();
    })
})
server.listen(8080, function () {
    console.log('server started at http://localhost:8080')
})