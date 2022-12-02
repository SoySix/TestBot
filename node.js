const Discord = require('discord.js');
const config = require('')
require('colors')

const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ],
})

client.commands = new Discord.Collction();
client.aliases = new Discord.Collction();

function requerirhandlers(){
    ["commands", "events"].forEach (handler => {
        try{
            require(`./handlers/${handler}`)(client, Discord)
        } catch(e){
            console.warn(e)
        }
    })
}
requerirhandlers();

client.login(config.token)