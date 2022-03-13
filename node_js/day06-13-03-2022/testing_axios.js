const axios = require('axios');

axios.get('https://www.bing.com')
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })
    .then(() => {
        console.log('No more data to be received!');
    });