const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function loftquotesCommand(sock, chatId, message) {
    await sock.sendMessage(chatId, {
        text: "*QUOTES MENU*\n\nChagua aina ya quote unayotaka 👇",
        buttons: [
            { buttonId: 'love_quotes', buttonText: { displayText: "Love Quotes 💖" }, type: 1 },
            { buttonId: 'sad_quotes', buttonText: { displayText: "Sad Story Quotes 😢" }, type: 1 }
        ],
        footer: "SMASH-V1 💥 | Powered by Loft"
    }, { quoted: message });
}

// Handle button replies
async function handleQuotesButton(sock, chatId, buttonId, message) {
    if (buttonId === 'love_quotes') {
        await sock.sendMessage(chatId, {
            text: "Love Quote: 'You are the reason I believe in love.' 💖"
        }, { quoted: message });
    } else if (buttonId === 'sad_quotes') {
        await sock.sendMessage(chatId, {
            text: "Sad Story Quote: 'Sometimes, the hardest part is letting go.' 😢"
        }, { quoted: message });
    }
}

module.exports = { loftquotesCommand, handleQuotesButton };