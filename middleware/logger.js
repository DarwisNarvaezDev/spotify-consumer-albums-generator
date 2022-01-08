const logger = ( req, res, next ) => {

    const method = req.method
    const url = req.url
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today  = new Date();

    const seconds = today.getSeconds();
    const minutes = today.getMinutes();
    const hour = today.getHours();

    console.log(`[Spotify Consumer App][${today.toLocaleDateString("en-US", options)} - ${hour}:${minutes}:${seconds}] Request received with method: ${method}, url: ${url}`);

    next();

}

module.exports = logger;