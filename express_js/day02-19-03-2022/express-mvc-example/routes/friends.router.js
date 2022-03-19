const express = require('express');

const friendsRouter = express.Router();

const friendsController = require('../controllers/friends.controller');


friendsRouter.get('/', friendsController.getFriends)
    .post('/', friendsController.addFriend)
    .get('/:friendId', friendsController.getFriend);

module.exports = friendsRouter;