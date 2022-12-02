const mongose = require('mongose');
const config = require('../../config/config.json');
module.exports = client => {
    mongose.connect(config.mongodb, {
        useNewUrlParser: true,
        useUniFiedTopology: true,
    }).then(() => {
        console.log(`Conectado a la base de datos`.green);
    }).catch((err) => {
        console.log(`Error al conectar con la base de datos!`.red);
        console.log(err)
    })
    console.log(`Conectado como ${client.user.tag}`.green);
}