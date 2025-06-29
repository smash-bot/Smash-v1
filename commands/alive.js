const settings = require("../settings");
async function aliveCommand(sock, chatId, message) {
    try {
const message1 =
  "```
  "╔═══════════════════╗\n" +
  "║   ＳＭＡＳＨ-Ｖ１  💀  ║\n" +
  "╚═══════════════════╝\n" +
  "   STATUS: [ ONLINE ]\n" +
  "   MODE:   [ PUBLIC ]\n" +
  "   VERSION: " + settings.version + "\n" +
  "═════════════════════\n" +
  "⚡ FEATURES ⚡\n" +
  "-  Group Management\n" +
  "-  Antilink Protection\n" +
  "-  Fun Commands\n" +
  "-  And more!\n" +
  "═════════════════════\n" +
  "Type *.menu* for full command list\n" +
  "```";

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

    // Send audio from Catbox
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
