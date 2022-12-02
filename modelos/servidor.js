const mongose = require('mongose');

const serverChema = new mongose.Schema({
    guildID: String,
    prefijo: Stromg,
}) 

const model = mongose.model("ConfigServer", serverChema);

module.exports = model;