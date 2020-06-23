const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("**You can not use this command!**")

    let début = Date.now();

    await message.channel.send("Ping").then(async(m) => await m.edit(`Pong: ${Date.now() - début} ms`));
}
module.exports.help = {
    name: "ping"
}