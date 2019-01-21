require('dotenv').config({path: __dirname + '/sample.env'});

const restify = require('restify');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./routes');
const config = require('./config');

const server = restify.createServer();
router.applyRoutes(server);

const port = process.env.PORT; 

mongoose.connect(config.database, {useCreateIndex:true, useNewUrlParser: true});
mongoose.Promise = global.Promise;

server.use(restify.plugins.queryParser()); 
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));
server.use(morgan('dev'));

server.listen(port, () => {
    console.log(`listening on ${port}`);
});
