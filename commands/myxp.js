const Discord = require("discord.js");
const color = require("../config/colors.json");
const monnaie = require('../database/xp.json');
const monnaiegrp = require('../database/xpgroupe.json');

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

    if(message.member.roles.cache.has("714888059824636014")) {
        let groupe1Monnaie = monnaiegrp["equipe1"].monnaie;

        let userMonnaieEmbed = new Discord.MessageEmbed()
        .setAuthor("-EpiScore-")
        .setColor(color.blue_dark)
        .addField("Account 💰", "Equipe 1")
        .addField("My points", `${groupe1Monnaie} Point(s) !`)
        .setTimestamp()
	    .setFooter('EpiBot by MrBartou', 'https://image.noelshack.com/fichiers/2020/21/3/1589981162-epitech-logo-signature-noir.png');

    message.channel.send(userMonnaieEmbed);
    }

    if(message.member.roles.cache.has("714888155286863954")) {
        let groupe1Monnaie = monnaiegrp["equipe2"].monnaie;

        let userMonnaieEmbed = new Discord.MessageEmbed()
        .setAuthor("-EpiScore-")
        .setColor(color.blue_dark)
        .addField("Account 💰", "Equipe 2")
        .addField("My points", `${groupe1Monnaie} Point(s) !`)
        .setTimestamp()
	    .setFooter('EpiBot by MrBartou', 'https://image.noelshack.com/fichiers/2020/21/3/1589981162-epitech-logo-signature-noir.png');

    message.channel.send(userMonnaieEmbed);
    }

    if(message.member.roles.cache.has("714888202355343402")) {
        let groupe1Monnaie = monnaiegrp["equipe3"].monnaie;

        let userMonnaieEmbed = new Discord.MessageEmbed()
        .setAuthor("-EpiScore-")
        .setColor(color.blue_dark)
        .addField("Account 💰", "Equipe 3")
        .addField("My points", `${groupe1Monnaie} Point(s) !`)
        .setTimestamp()
	    .setFooter('EpiBot by MrBartou', 'https://image.noelshack.com/fichiers/2020/21/3/1589981162-epitech-logo-signature-noir.png');

    message.channel.send(userMonnaieEmbed);
    }

    if(message.member.roles.cache.has("714888248798871593")) {
        let groupe1Monnaie = monnaiegrp["equipe4"].monnaie;

        let userMonnaieEmbed = new Discord.MessageEmbed()
        .setAuthor("-EpiScore-")
        .setColor(color.blue_dark)
        .addField("Account 💰", "Equipe 4")
        .addField("My points", `${groupe1Monnaie} Point(s) !`)
        .setTimestamp()
	    .setFooter('EpiBot by MrBartou', 'https://image.noelshack.com/fichiers/2020/21/3/1589981162-epitech-logo-signature-noir.png');

    message.channel.send(userMonnaieEmbed);
    }

    if(message.member.roles.cache.has("714888202640687204")) {
        let groupe1Monnaie = monnaiegrp["equipe5"].monnaie;

        let userMonnaieEmbed = new Discord.MessageEmbed()
        .setAuthor("-EpiScore-")
        .setColor(color.blue_dark)
        .addField("Account 💰", "Equipe 5")
        .addField("My points", `${groupe1Monnaie} Point(s) !`)
        .setTimestamp()
	    .setFooter('EpiBot by MrBartou', 'https://image.noelshack.com/fichiers/2020/21/3/1589981162-epitech-logo-signature-noir.png');

    message.channel.send(userMonnaieEmbed);
    }
}

module.exports.help = {
    name: "myxp"
}