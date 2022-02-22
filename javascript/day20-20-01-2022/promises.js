const establsihConnection = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const rand = Math.random();
            if (rand < 0.5) resolve();
            else reject();
        }, 5000);
    });
};

establsihConnection().then(() => {
    console.log("Finally, the connection is successfull!");
}).catch(() => {
    console.log("Alas, the connection could not be established!")
});