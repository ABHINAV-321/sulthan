/* Copyright (C) nijin-husni
Mwonu credits kalayalle
Maalutty-nijin-husni
*/

const sulthan = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Maalutty.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://i.ibb.co/xzbX021/20220103-205544.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `◄━⦁💝 sulthan💝⦁━►
*owner number abhinav* :https://wa.me/994408830761.
*github* : https://github.com/ABHINAV-321/sulthan.
*audio commands* :https://github.com/ABHINAV-321/media/tree/main/bgm.
*sticker commands* :https://github.com/ABHINAV-321/media/tree/main/stickers.
◄━sulthan⦁━►
■□ ~ 𝙰𝙱𝙷𝙸𝙽𝙰𝚅 ~■□ 
`}) 

