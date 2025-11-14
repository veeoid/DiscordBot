const {Client, Events, GatewayIntentBits} = require('discord.js')
const {token} = require('./config.json')

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("messageCreate", (message)=>{
    console.log(message.content);
})

client.login(token);

