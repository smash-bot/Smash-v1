const settings = require("../settings");
async function aliveCommand(sock, chatId, message) {
    try {
        const message1 = `**𝐒𝐌𝐀𝐒𝐇-𝐕𝟏* 💥 is Active!*\n\n` +
                       `*Version:* ${settings.version}\n` +
                       `*Status:* Online\n` +
                       `*Mode:* Public\n\n` +
                       `*🌟 Features:*\n` +
                       `• Group Management\n` +
                       `• Antilink Protection\n` +
                       `• Fun Commands\n` +
                       `• And more!\n\n` +
                       `Type *.menu* for full command list`;



  try {
    const message1 = `
• Antilink Protection
• Fun Commands
• And more!
Type *.menu* for full command list
`;

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

    // Send audio from kCatbox
    await sock.sendMessage(chatId, {
      audio: { url: 'https://files.catbox.moe/1ilyhr.mp3' },
      mimetype: 'audio/mpeg'
    }, { quoted: message });

  } catch (error) {
    console.error('Error in alive command:', error);
    await sock.sendMessage(chatId, { text: 'Bot is alive and running!' }, { quoted: message });
  }
};

module.exports = aliveCommand;
