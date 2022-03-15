const { createServer } = require('http');
const server = createServer();
const PORT = 3000;

server.on('request', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('Hello Abeer!');
});

server.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}...`);
});

