const chalk = require('chalk');
const debug = require('debug')('app');
require('dotenv').config();
const { app } = require('./app');

const port = process.env.PORT || 3000;

// Start up the server!
const startServer = async () => {
  app.listen(port, () => {
    debug(`Started server on => ${chalk.blue(`http://127.0.0.1:${process.env.PORT}`)}`);
  });
};

startServer();
