const Discord = require("discord.js")
let object = ["Pierre 👊" , "Ciseaux ✌️", "Papier ✋"]
let calcul = Math.floor((Math.random() * object.length))

module.exports.run = async (bot, message, args) => {

    if(!args[0]) return message.channel.send("Choisissez entre ``pierre`` ``papier`` ``ciseaux``")

    var RPSEMBED = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor("-Pierre, Papier, Ciseaux-")
    .addField("**Vous avez sélectionné :**", `${args[0]}`)
    .addField("**Le bot à sélectionné : **", `${object[calcul]}`)
    .setTimestamp()
    .setFooter('EpiBot by MrBartou', 'https://image.noelshack.com/fichiers/2020/21/3/1589981162-epitech-logo-signature-noir.png');

    message.channel.send(RPSEMBED)
}
module.exports.help = {
    name: "rps"
}