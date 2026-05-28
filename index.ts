import { Client, GatewayIntentBits } from 'discord.js';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log('SilBot Online!');
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    // בדיקה חדשה בעברית כדי לוודא שזה התעדכן במאה אחוז
    if (message.content === '!פונג') {
        await message.reply('פינג! 🏓 הבוט מעודכן ומקצועי.');
    }
});

client.login(process.env.DISCORD_TOKEN);
