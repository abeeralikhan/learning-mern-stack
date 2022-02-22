const makeConnection = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pages = {
                '/users': [{
                    id: 1, username: 'abeeird'
                },
                {
                    id: 2, username: 'jahangir123'
                }],
                '/home': 'This is home page'
            };
            data = pages[url];
            if (data) resolve({status: 200, data});
            else reject({status: 404});
        }, 1000);
    });
};

makeConnection('/users').then((res) => {
    console.log(`STATUS: ${res.status} \nDATA: ${res.data}`);
}).catch((res) => {
    console.log(`STATUS: ${res.status}`);
});

