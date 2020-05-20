const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    message.delete()

    if(message.author.id != "320464641031536641") return message.channel.send("Vous n'avez pas la permissions.")

    try{
        await message.channel.send(" :gear: **Le bot est entrain de s'éteindre.**")
        process.exit()
    }catch(e) {
        message.channel.send(`ERROR: ${e.message}`)
    }
}

module.exports.help = {
    name: "shutdown"
}