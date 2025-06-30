const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function loftmenuCommand(sock, chatId, message) {
    const menuMessage = `
*LOFT MENU*

Bonyeza button chini kupata huduma 👇
    `;
    await sock.sendMessage(chatId, {
        text: menuMessage,
        buttons: [
            { buttonId: 'whatsapp_bot_course', buttonText: { displayText: "Whatsapp Bot Full Course 🤖" }, type: 1 }
        ],
        footer: "SMASH-V1 💥 | Powered by Loft"
    }, { quoted: message });
}