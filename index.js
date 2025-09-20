// index.js
const { Client, GatewayIntentBits, Collection } = require('discord.js');
const config = require('./config.json');

// Import userTracker and music modules
const userTracker = require('./userTracker');
const { runMusicBot } = require('./music');

// Create Discord client
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent
    ]
});

// Collections for commands (music commands later)
client.commands = new Collection();

// Ready event
client.once('ready', () => {
    console.log(`✅ Bot online as ${client.user.tag}`);

    // Set bot presence
    client.user.setPresence({
        activities: [{ name: 'all the music around the world', type: 2 }], // 2 = LISTENING
        status: 'online'
    });

    // Initialize user tracker
    userTracker(client, config);

    // Initialize music bot
    runMusicBot(client, config);
});

// Login
client.login(config.TOKEN);
