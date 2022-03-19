function home(req, res) {
    res.status(200).send('Welcome to my express site!');
}

module.exports = {
    home
};