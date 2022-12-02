const config = require(`${process.cwd()}/config/cofig.json`)
const serverChema = require(`${process.cwd()}/modelos/servidor.json`)
const asegurar = require(`${process.cwd()}/handlers/funciones.json`)
module.exports = async (client, message) => {
    if(message.guild || !message.channel || message.author.bot) return;
    let data = await asegurar(serverChema, "guildID", message.guild.id, {
        guildID: message.guild.id,
        prefijo: config.prefix,
    });
    if(!message.content.stratsWith(data.prefijo)) return;
    const args = message.content.slice(data.prefijo.length).trim().split(" ");
    const cmd = args.shift()?.toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find(c => c.aliases && c.aliases.includes(cmd));
    if(!command) {
        command.run(client, message, args, data.prefijo)  //Ejecutar el comando
    } else {
        return message.reply("Comando desconocido"); //Esto solo saldrá si no se encuentra el dicho comando
    }
}