const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function loftCommand(sock, chatId, message) {
    await sock.sendMessage(chatId, {
        text: "*SMASH-V1 BOT HELP MENU*\n\n1. .loft - Show this menu\n\nFor more support, choose an option below 👇",
        buttons: [
            { buttonId: 'chat_owner', buttonText: { displayText: "Chat with Loft 💬" }, type: 2, url: "https://wa.me/255778018545" },
            { buttonId: 'call_owner', buttonText: { displayText: "Call Loft 📞" }, type: 2, url: "tel:255778018545" }
        ],
        footer: "SMASH-V1 💥 | Powered by Loft"
    }, { quoted: message });
}

module.exports = loftCommand;