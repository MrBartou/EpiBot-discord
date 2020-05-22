const Discord = require("discord.js")

module.exports = bot => {
    console.log(`(EpiBot): Online`);

    let statuses = [
        "!help for commands",
        "Welcome on E-lounge"
    ]

    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, {type: "PLAYING"})
    }, 5000)
}