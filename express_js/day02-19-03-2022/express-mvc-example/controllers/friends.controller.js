const friendsModel = require('../models/friends.model');

function getFriends(req, res) {
    res.status(200).json(friendsModel);
}

function getFriend(req, res) {
    const friendId = req.params.friendId;
    const friend = friendsModel[friendId];
    if (friend) res.status(200).json(friend);
    else res.status(404).json({error: 'Friend doesn\'t exist!'});
}

function addFriend(req, res) {
    const friendId = req.body.friendId;

    if (!friendId) {
        return res.status(400).json({
            error: 'Missing friend ID!'
        });
    }
    
    friendsModel[friendId] = {
        name: req.body.name,
        address: req.body.address,
        phone: req.body.phone
    }

    res.status(200).json(friendsModel[friendId]);
}

module.exports = {
    getFriend,
    getFriends,
    addFriend
};