const Discord = require("discord.js");
const color = require("../config/colors.json");
const monnaie = require('../database/xp.json');

module.exports.run = async (bot, message, args) => {
    if (!monnaie[message.author.id]) {
        monnaie[message.author.id] = {
            monnaie: 0
        };
    }

    let userMonnaie = monnaie[message.author.id].monnaie;

    let userMonnaieEmbed = new Discord.MessageEmbed()
        .setAuthor("-EpiScore-")
        .setColor(color.blue_dark)
        .addField("Account 💰", `${message.author} (ID: ${message.author.id})`)
        .addField("My points", `${userMonnaie} Point(s) !`)
        .setTimestamp()
	    .setFooter('EpiBot by MrBartou', 'https://image.noelshack.com/fichiers/2020/21/3/1589981162-epitech-logo-signature-noir.png');

    message.channel.send(userMonnaieEmbed);
}

module.exports.help = {
    name: "myxp"
}