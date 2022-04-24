const express = require('express');

const app = express();

function delayed(duration) {
    const startTime = Date.now()
    while (Date.now() - startTime < duration) {
        //event loop is blocked...
    }
}

app.get('/timer', (req, res) => {
    delayed(9000);
    res.send('Alas! Appologizez for delayed response');
});

app.get('/', (req, res) => {
    res.send('Improve me please!');
});

app.listen(3000);