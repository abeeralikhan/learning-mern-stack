// Importing fs module to read and write data into the JSON file
const fs = require('fs');

// Importing createServer function from http module to create http servers
const { createServer } = require('http');

// Reading from JSON file
const file = './web-app/data.json'
const data = fs.readFileSync(file);

// Converting into JS object
const courses = JSON.parse(data);

// Creating a http server
const server = createServer();
const PORT = 3000;

server.on('request', (req, res) => {
    const items = req.url.split('/');
    if (req.method === 'GET' && items[1] === 'courses') {
        if (items.length === 3) {
            const courseIndex = Number(items[2]);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(courses[courseIndex]));
        } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(courses));
        }
    } else if (req.method === 'POST' && items[1] === 'courses') {
        req.on('data', (data) => {
            const course = data.toString();
            courses.push(JSON.parse(course));
            fs.writeFileSync(file, JSON.stringify(courses));
        });
    } else {
        res.statusCode = 404;
        res.end();
    } 
    
});

server.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
});






