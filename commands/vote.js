const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    message.delete()

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permission")

    let mChannel = message.mentions.channels.first()

    if(!mChannel) return message.channel.send("Mentionnez le salon")
    let messageToBot = args.slice(1).join(" ")
    if(!messageToBot) return message.channel.send("Merci de mettre le message")

    var embedSaying = new Discord.MessageEmbed()
    .setTitle("Un admin vous demande de voter !")
    .setColor("#cd3")
    .setDescription(`${messageToBot}`)
    .setFooter('EpiBot by MrBartou', 'https://image.noelshack.com/fichiers/2020/21/3/1589981162-epitech-logo-signature-noir.png');

    mChannel.send(embedSaying).then(async msg => {
        await msg.react("✅")
        await msg.react("➖")
        await msg.react("❌")
    })
}

module.exports.help = {
    name: "vote"
}