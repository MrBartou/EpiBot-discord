const Discord = require("discord.js");
const color = require("../config/colors.json");

module.exports.run = async (bot, message, args) => {
    let aEmbed = new Discord.MessageEmbed()
    .setColor(color.cyan)
    .setTitle("Server Info")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.guild.name} Info`, 'https://image.noelshack.com/fichiers/2020/21/3/1589981162-epitech-logo-signature-noir.png')
    .setThumbnail('https://image.noelshack.com/fichiers/2020/21/3/1589981162-epitech-logo-signature-noir.png')
    .addField("**Guild Name**", `${message.guild.name}`, true)
    .addField("**Guild Owner**", `${message.guild.owner}`, true)
    .addField("**Member Count**", `${message.guild.memberCount}`)
    .addField("**More Help ?**", "!help")
    .setTimestamp()
    .setFooter('EpiBot by MrBartou', 'https://image.noelshack.com/fichiers/2020/21/3/1589981162-epitech-logo-signature-noir.png');
    message.channel.send(aEmbed)
}

module.exports.help = {
    name: "serverinfo"
}