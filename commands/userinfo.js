const Discord = require("discord.js");
const color = require("../colors.json");

module.exports.run = async (bot, message, args) => {
    let zEmbed = new Discord.MessageEmbed()
    .setColor(color.cyan)
    .setTitle("User Info")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL)
    .addField("**Username**", `${message.author.username}`, true)
    .addField("**ID**", `${message.author.id}`)
    .addField("**Status**", `${message.author.presence.status}`, true)
    .setFooter(`EpiBot`, bot.user.displayAvatarURL);
    message.channel.send(zEmbed)
}

module.exports.help = {
    name: "userinfo"
}