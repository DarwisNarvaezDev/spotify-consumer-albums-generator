const request = require('request');
const requestAuthorization = require('../authorization/requestAuthorization');
const simpleConsoleLogger = require('../middleware/simpleConsoleLogger');

const getArtistAlbums = async(artist, res) => {

    const authOptions = await requestAuthorization();

    if( authOptions === undefined ){

        throw new Error('The Authorization info is empty.');

    }else{

        simpleConsoleLogger("Getting the data from API.");

        request.post(authOptions, function (error, response, body) {

            if (!error && response.statusCode === 200) {
    
                var token = body.access_token;
                var options = {
                    url: `https://api.spotify.com/v1/search?type=album&q=artist:${artist}`,
                    headers: {
                        'Authorization': 'Bearer ' + token
                    },
                    json: true
                };

                request.get(options, function (error, response, body) {

                    const albumsArray = body.albums.items;
                    const banzaDesiredArray = albumsArray.map( (album) => {
                        const [ images ] = album.images;
                        return {
                            name: album.name,
                            released: album.release_date,
                            tracks: album.total_tracks,
                            cover: images
                        }
                    });
                    if( banzaDesiredArray !== undefined ){
                        console.log(banzaDesiredArray);
                        res.status(200).json(banzaDesiredArray);
                    }else{
                        throw new Error("The data returned from the search is empty and cannot be shown.")
                    }

                });
            }

        });
        
    }
}

module.exports = getArtistAlbums;