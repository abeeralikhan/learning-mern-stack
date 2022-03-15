const { createServer } = require('http');
const server = createServer();
const PORT = 3000;

const courses = [
    {
        id: 0,
        title: 'Operating Systems'
    },
    {
        id: 1,
        title: 'Object Oriented Software Engineering'
    },
    {
        id: 2,
        title: 'Introduction to Database Systems'
    },
    {
        id: 3,
        title: 'Economics'
    },
    {
        id: 4,
        title: 'Information Security'
    },
];

server.on('request', (req, res) => {
    const items = req.url.split('/');
    if (items[1] === 'showAll') {
        if (items.length === 3) {
            const courseIndex = Number(items[2]);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(courses[courseIndex]));
        }
        else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(courses))
        }
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}...`);
});

