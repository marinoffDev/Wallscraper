const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const path = require('path');
const rootDir = require('../util/path')


router.post('/search', (req, res, next) => {
    // redirect to search
    res.sendFile(path.join(rootDir, 'views', 'search.html'))


    // API call
    // const exampleSearchTerm = 'audi';
    // const fetchWallpaperData = async () => {
    //     let callAPI = 'https://wallhaven.cc/api/v1/search?apikey=' + process.env.WALLHAVEN_TOKEN + '&q=' + exampleSearchTerm + '&sorting=relevance';
    //     let result = await fetch(callAPI);
    //     let json = await result.json();
    //     console.log(json);
    //     return json;
    // };

    // fetchWallpaperData();
});

module.exports = router;