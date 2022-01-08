//Environment variable configuration
require('dotenv').config({path: __dirname + '/.env'});

//Imports of the tools used in the main API controller
const express = require('express');
const cors = require('./middleware/cors');
const logger = require('./middleware/logger');
const simpleConsoleLogger = require('./middleware/simpleConsoleLogger');
const getArtistAlbums = require('./data/getArtistAlbums');

//Initialization and injection of tools in the API context
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//Middlewares
app.use([logger, cors]);

// Endoint defined as requested
app.get('/api/v1/albums', async(req, res) => {

    const { q: artist } = req.query;

    if( artist !== undefined ){

        await getArtistAlbums(artist, res);

    }else{

        res.status(400).json({status: "Bad request", message: "Artist name not provided."});
        
    }

})

module.exports = app;