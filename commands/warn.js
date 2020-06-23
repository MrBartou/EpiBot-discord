const Discord = require("discord.js")
const botconfig = require("../config/config.json");
const colours = require("../config/colors.json");
const fs = require("fs")
let warns = JSON.parse(fs.readFileSync("./database/warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Vous n'avez pas la permission.")
    if(!message.guild.me.hasPermission("ADMINISTRATOR")) return ("Merci de m'ajoutez la permission pour utilisez cette commande.")

    let member = message.mentions.members.first()
    if(!member) return message.channel.send("Merci de mentionner un utilisateur")
    let reason = args.slice(1).join(" ")
    if(!reason) return message.channel.send("Merci de dire la raison")
    if(!warns[member.id]) warns[member.id] = {
        warns: 0
    }
    warns[member.id].warns++;
    let warnlvl = warns[member.id].warns;

    fs.writeFileSync("./database/warnings.json", JSON.stringify(warns))

    let warnEmbed = new Discord.MessageEmbed()
    .setAuthor("-WARNING-")
    .setDescription(`Vous venez de recevoir un warn du serveur **${message.guild.name}** avec comme raison : **${reason}**. Vous avez actuellement ${warnlvl}`)
    .setColor(colours.red_dark)
    .setFooter('EpiBot by MrBartou', 'https://image.noelshack.com/fichiers/2020/21/3/1589981162-epitech-logo-signature-noir.png');

    let warnEmbed2 = new Discord.MessageEmbed()
    .setAuthor("-WARNING-")
    .addField(`L'utilisateur à bien été warn pour la raison`, reason)
    .setColor(colours.orange)
    .setFooter('EpiBot by MrBartou', 'https://image.noelshack.com/fichiers/2020/21/3/1589981162-epitech-logo-signature-noir.png');

    message.channel.send(warnEmbed2)

    message.channel.send(`${member} à maintenant ${warnlvl} warn.`)

    member.createDM().then(channel => {
        channel.send(warnEmbed)
    })
}


module.exports.help  = {
    name: "warn"
}