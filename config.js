var config = {};
// const port = process.env.PORT || 3000;
config.db = {};
config.webhost = process.env.PORT || 'http://localhost:3000/';

// config.db.host = 'localhost';
// config.db.name = 'shrink_me';

config.db.host = 'localhost';
config.db.name = 'heroku_10tr397g';

module.exports = config;
