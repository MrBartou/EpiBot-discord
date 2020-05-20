const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("**You can not use this command!**")

    let argsresult;
    let mChannel = message.mentions.channels.first()

    message.delete()
    if(mChannel) {
        argsresult = args.slice(1).join(" ")
        if(!argsresult) return message.channel.send("Merci de dire le message à envoyer.")
        mChannel.send(argsresult)
    } else {
        argsresult = args.join(" ")
        if(!argsresult) return message.channel.send("Merci de dire le message à envoyer.")
        message.channel.send(argsresult)
    }
}

module.exports.help = {
    name: "say"
}