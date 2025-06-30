const settings = require("../settings");
async function aliveCommand(sock, chatId, message) {
    try {
        const message1 = `
╔═══════════════════╗
║   SMASH-V1  💀    ║
╚═══════════════════╝
STATUS: [ ONLINE ]
MODE:   [ PUBLIC ]
VERSION: ${settings.version}
═════════════════════
⚡ FEATURES ⚡
- Group Management
- Antilink Protection
- Fun Commands
- And more!
═════════════════════
Type *.menu* for full command list
`;

        // Send text message
        await sock.sendMessage(chatId, {
            text: message1,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363398106360290@newsletter',
                    newsletterName: 'Smash',
                    serverMessageId: -1
                }
            }
        }, { quoted: message });

        // Send image
        await sock.sendMessage(chatId, {
            image: { url: 'https://files.catbox.moe/v2r8dg.jpg' },
            caption: '> 💔The pain of loving you is like a dark cloud, 😓always hanging over me, never allowing me to see the sunshine 😔'
        }, { quoted: message });

        // Send audio
        await sock.sendMessage(chatId, {
            audio: { url:'https://files.catbox.moe/s7hcy1.m4a' },
            mimetype: 'audio/mpeg'
        }, { quoted: message });

    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'Bot is alive and running!' }, { quoted: message });
    }
};

module.exports = aliveCommand;