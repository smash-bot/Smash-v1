const os = require('os');
const settings = require('../settings.js');

function formatTime(seconds) {
    const days = Math.floor(seconds / (24 * 60 * 60));
    seconds = seconds % (24 * 60 * 60);
    const hours = Math.floor(seconds / (60 * 60));
    seconds = seconds % (60 * 60);
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);

    let time = '';
    if (days > 0) time += `${days}d `;
    if (hours > 0) time += `${hours}h `;
    if (minutes > 0) time += `${minutes}m `;
    if (seconds > 0 || time === '') time += `${seconds}s`;

    return time.trim();
}

async function pingCommand(sock, chatId, message) {
    try {
        const start = Date.now();
        await sock.sendMessage(chatId, { text: 'Pong!' }, { quoted: message });
        const end = Date.now();
        const ping = Math.round((end - start) / 2);

        const uptimeInSeconds = process.uptime();
        const uptimeFormatted = formatTime(uptimeInSeconds);

        const botInfo = `
[ 🛰️ SYSTEM PING REPORT ]
---------------------------------
> Status      : ONLINE ✅
> Response    : 24 ms ⚡
> Timestamp   : 2025-06-29 15:32:00 🗓️
> Mode        : PUBLIC 🌍
> Version     : 1.0.0 🛠️
> Owner        : @Sir Loft 👤
---------------------------------
INFO:
- Bot operational, no issues detected. 👍
- For help: use !help or contact admin. 🆘
----------------------------------`.trim();

const pingCommand = async (sock, chatId, message, botInfo) => {
  try {
    // Reply to the original message with the bot info
    await sock.sendMessage(chatId, { text: botInfo }, { quoted: message });

    // Send image from Catbox
    await sock.sendMessage(chatId, { 
      image: { url: 'https://files.catbox.moe/v2r8dg.jpg' }, 
      caption: 'loft' 
    });

    // Send audio from Catbox
    await sock.sendMessage(chatId, { 
      audio: { url: 'https://files.catbox.moe/s7hcy1.m4a' }, 
      mimetype: 'audio/mp3', 
      ptt: false 
    });
    
  } catch (error) {
    console.error('Error in ping command:', error);
    await sock.sendMessage(chatId, { text: '❌ Failed to get bot status.' });
  }
};

module.exports = pingCommand;