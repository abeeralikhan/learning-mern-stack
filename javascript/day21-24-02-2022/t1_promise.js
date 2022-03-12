const promise = new Promise((resolve, reject) => {
    let value = 0;
    if (!value) resolve();
    else reject();
});

promise.then(() => {
    console.log('Request has been processed!');
}).then(() => {
    console.log('Now, this is the second request!');
}).then(() => {
    throw Error
    console.log('OMG! What\'s going on, this is the third request!');
}).catch(() => {
    console.log('Error! No more requests..HeHeHe!');
}).then(() => {
    console.log('What about the fourth request?');
});