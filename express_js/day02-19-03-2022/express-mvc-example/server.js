const express = require('express');

const app = express();

const PORT = 3000;

const homeController = require('./controllers/home.controller');

const friendsRouter = require('./routes/friends.router');

// Making a middleware that logs requests and time taken by each request to process

app.use((req, res, next) => {
    const start = Date.now();
    next(); // will pass the request to the relevent endpoint or next middleware
    // Here will take actions
    // After communicating with relevat endpoint, the response will return to here
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);

});

// Our server don't know what json is
// Therefore, express.json is an express' built-in middleware that parses data in user request into an js object
app.use(express.json());

app.use('/friends', friendsRouter);

app.get('', homeController.home);

app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}...`);
});

