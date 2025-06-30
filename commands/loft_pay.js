const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function payCommand(sock, chatId, message) {
    await sock.sendMessage(chatId, {
        text: "*PAYMENT MENU*\n\nSelect the amount you want to pay 👇\n\n*Pay to: 255778018545 (Loft)*",
        buttons: [
            { buttonId: 'pay_1', buttonText: { displayText: "$1" }, type: 1 },
            { buttonId: 'pay_2', buttonText: { displayText: "$2" }, type: 1 },
            { buttonId: 'pay_3', buttonText: { displayText: "$3" }, type: 1 },
            { buttonId: 'pay_4', buttonText: { displayText: "$4" }, type: 1 },
            { buttonId: 'pay_5', buttonText: { displayText: "$5" }, type: 1 }
        ],
        footer: "SMASH-V1 💥 | Pay to 255778018545"
    }, { quoted: message });
}

// Handle button replies
async function handlePayButton(sock, chatId, buttonId, message) {
    let amount = buttonId.replace('pay_', '');
    await sock.sendMessage(chatId, {
        text: `Please send $${amount} to 255778018545 (Loft) for your bot creation.`
    }, { quoted: message });
}

module.exports = { payCommand, handlePayButton };