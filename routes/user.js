const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const path = require('path');
const rootDir = require('../util/path')

router.get('/user', (req, res, next) => {
    // display user details
    res.sendFile(path.join(rootDir, 'views', 'user.html'))
});

router.post('/user', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'user.html'))
});

module.exports = router;