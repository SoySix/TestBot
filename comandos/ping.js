module.exports = {
    name: "ping", 
    aliases: ["ms"],
    desc: "Test command ping",
    run: async (client, message, args, prefix) => {
        message.reply(`Pong!, el ping del bot es de ${client.ws.ping}ms`)
    }
}