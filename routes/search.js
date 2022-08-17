const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require('../util/path')

router.use(bodyParser.urlencoded({extended: false}));

router.get('/search', (req, res, next) => {
    // display search results
    res.sendFile(path.join(rootDir, 'views', 'search.html'))
});

router.post('/search', (req, res, next) => {
    // redirect to search
    res.sendFile(path.join(rootDir, 'views', 'search.html'))
});

module.exports = router;