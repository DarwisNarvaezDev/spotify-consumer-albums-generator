const app = require('./index');
const simpleConsoleLogger = require('./middleware/simpleConsoleLogger');

app.listen( 8081, () => {
    simpleConsoleLogger("Service up!");
})