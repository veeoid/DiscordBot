const {Client, Events, GatewayIntentBits, Collection} = require('discord.js');
const {token} = require('./config.json');
const fs = require('fs');
const path = require('path')

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once(Events.ClientReady, (readyClient) => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);

});

client.commands = new Collection();

client.login(token);

