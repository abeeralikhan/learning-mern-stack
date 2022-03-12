const http = require('http');
const urls = ['http://www.bing.com', 'http://www.google.com']
// First Way:
// OR, we can import using modern ECMAScript syntax
// const { request } = require('http');
// We will use object destructing when we know exactly what faction we have to import
// And, this way is more preferable 


// Note: We can't use 'https://....' protocol while using the http module
// For 'https' protocol, we need to import 'https' module
// and rest of the code will remain the same
const req = http.request(urls[0], (res) => {
    res.on('data', (chunk) => {
        console.log(`Data: ${chunk}`);
    });
    res.on('end', () => {
        console.log(`No more data from ${urls[0]}`);
    });
});

req.end();

// Second Way: Using get()
// We can request the same URL using the get() function 
// We use it when we don't send any data, we just receive or read it
// That's why we don't have to use the end() method while using get() function

const { get } = require('http');

get(urls[1], (res) => {
    res.on('data', (chunk) => {
        console.log(`Data: ${chunk}`);
    });
    res.on('end', () => {
        console.log(`No more data from ${urls[1]}`);
    });
});