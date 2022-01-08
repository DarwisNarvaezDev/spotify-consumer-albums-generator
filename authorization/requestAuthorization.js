const simpleConsoleLogger = require('../middleware/simpleConsoleLogger')

const requestAuthorization = async () => {

    simpleConsoleLogger("Retrieving authorization info for API.")

    //Environment variables
    const clientId = process.env['CLIENT_ID'];
    const clientSecret = process.env['CLIENT_SECRET'];

        try {
            const authOptions = {
                url: 'https://accounts.spotify.com/api/token',
                headers: {
                    'Authorization': 'Basic ' + (new Buffer(clientId + ':' + clientSecret).toString('base64'))
                },
                form: {
                    grant_type: 'client_credentials'
                },
                json: true
            };
    
            return authOptions;

        } catch (error) {
            throw new Error(error.toString());
        }


}

module.exports = requestAuthorization;