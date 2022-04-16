const { Client, Intents } = require('discord.js');
const { Token } = require('./config.json');

const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
})

client.on('ready', () => {
    console.log('The bot is now online!')
})

client.login(Token)