const Discord = require('discord.js');
const config = require('./config/config.json')
require('colors')//npm i colors@1.4.0

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