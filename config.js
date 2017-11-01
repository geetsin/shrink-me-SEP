var config = {};
const port = process.env.PORT || 3000;
config.db = {};
config.webhost = port;

config.db.host = 'localhost';
config.db.name = 'shrink_me';

module.exports = config;
