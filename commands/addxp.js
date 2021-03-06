const Discord = require("discord.js");
const color = require("../config/colors.json");
const monnaie = require('../database/xpgroupe.json');
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    if(!message.member.roles.cache.has("702504401302192239")) return message.channel.send("**You can not use this command!**")

    let userxp = args[0];
    let ajoutmonnaie = parseInt(args[1]);

    monnaie[userxp] = {
        monnaie: monnaie[userxp].monnaie + ajoutmonnaie
    };
    fs.writeFile('./database/xpgroupe.json', JSON.stringify(monnaie), err => {
        if (err) console.log(err);
    });

    let userMonnaieEmbed = new Discord.MessageEmbed()
        .setAuthor("-EpiScore-")
        .setColor(color.green_light)
        .addField("Autor", `${message.author} (ID: ${message.author.id})`)
        .addField("Add 💸", `${ajoutmonnaie} Point(s) !`)
        .addField("For", userxp)
        .setTimestamp()
	    .setFooter('EpiBot by MrBartou', 'https://image.noelshack.com/fichiers/2020/21/3/1589981162-epitech-logo-signature-noir.png');

    message.channel.send(userMonnaieEmbed);
}

module.exports.help = {
    name: "addxp"
}