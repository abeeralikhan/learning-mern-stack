const http = require('http');
const server = http.createServer();
const PORT = 3000

server.on('request', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({name: 'Abeer', age: 21}));
});

server.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}...`);
});