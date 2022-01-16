const Sulthan = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const GM = "."

const GN = "."

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

Sulthan.addCommand({pattern: 'Abhinav', fromMe: true, deleteCommand: true, desc: GM,}, (async (message, match) => {

    var r_text = new Array ();

    r_text[1] = "Abhinav 𝙸𝚜 𝙼𝚢 𝙾𝚠𝚗𝚎𝚛";

    var i = Math.floor(2*Math.random())

    await message.client.sendMessage(

        message.jid,(r_text[i]), MessageType.text);

    }));

    }

    if (Config.WORKTYPE == 'public') {

        Sulthan.addCommand({pattern: 'Abhinav', fromMe: false, deleteCommand: true, desc: GM,}, (async (message, match) => {

            var r_text = new Array ();

            r_text[1] = "Abhinav 𝙸𝚜 𝙼𝚢 𝙲𝚛𝚎𝚊𝚝𝚘𝚛🥰";

            var i = Math.floor(2*Math.random())

            await message.client.sendMessage(

                message.jid,(r_text[i]), MessageType.text);

            }));


}
