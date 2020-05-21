const Discord = require("discord.js");
const color = require("../config/colors.json");

module.exports.run = async (bot, message, args) => {
    let kickedUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kickedUser) {
        return message.channel.send("**Not found.**")
    }
    let kickReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("You don't have permission !")
    }
    if(kickedUser.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("You don't kick this person")
    }
    let kickEmbed = new Discord.MessageEmbed()
    .setDescription("-Kick-")
    .setColor(color.red_light)
    .addField("User kicked", `${kickedUser} (ID: ${kickedUser.id})`)
    .addField("Autor of kick", `${message.author} (ID: ${message.author.id})`)
    .addField("Canal", message.channel)
    .addField("Raison", kickReason)

    let kickChannel = message.guild.channels.cache.find(kickChannel => kickChannel.name === "admins");
    if(!kickChannel) {
        return message.channel.send("Canal 'admins' not found. Please create it")
    }
    message.guild.member(kickedUser).kick(kickReason)
    kickChannel.send(kickEmbed)
}

module.exports.help = {
    name: "kick"
}