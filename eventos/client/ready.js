const mongose = require('mongose');
const config = require('../../config/config.json');
module.exports = client => {
    mongose.connect(config.mongodb)
}