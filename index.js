const express = require('express');
const app = express();

const {config } = require('./config/index');

const moviesApi = require('./routes/movies.js');

const { logErrors, errorHandler} = require('./utils/middleware/errorHandlers')


// body parser
app.use(express.json());
app.use(logErrors);
app.use(errorHandler);


moviesApi(app);




app.listen(config.port, function(){
    console.log(`Listening http://localhost:${config.port}`)
});