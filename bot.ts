import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log('SilBot Ready!');
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (message.content === '!ping') {
        await message.reply('פונג! 🏓');
    }
});

client.login(process.env.DISCORD_TOKEN);
