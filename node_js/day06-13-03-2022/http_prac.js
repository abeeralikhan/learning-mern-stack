const { request } = require('https');

const response = request('https://www.facebook.com', (res) => {
    res.on('data', (chunk) => {
        console.log(`Data: ${chunk}`);
    });
    res.on('end', () => {
        console.log(`No more data to receive!`);
    });
});

response.end();

console.log(require.cache);
