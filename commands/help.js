const Discord = require("discord.js");
const color = require("../config/colors.json");

module.exports.run = async (bot, message, args) => {

    if(args[0] == "help") return message.channel.send(`Just do ${prefix}help instead`)

    if(args[0]) {
        let command = args[0];
        if(bot.commands.has(command)) {
        command = bot.commands.get(command)
        var SHembed = new Discord.MessageEmbed()
        .setColor(color.green_dark)
        .setAuthor(`EpiBot`, message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .setDescription(`The bot prefix is : \`!\`\n\n`)
        message.channel.send(SHembed);
    }}

    if(!args[0]) {
        message.delete()
        let embed = new Discord.MessageEmbed()
        .setAuthor(`Command Help !`, message.guild.iconURL)
        .setColor(color.green_dark)
        .setDescription(`${message.author.username} look your dm !`)

        let Sembed = new Discord.MessageEmbed()
        .setColor(color.green_dark)
        .setAuthor('EpiHelper', 'https://image.noelshack.com/fichiers/2020/21/3/1589981162-epitech-logo-signature-noir.png')
        .setThumbnail('https://image.noelshack.com/fichiers/2020/21/3/1589981162-epitech-logo-signature-noir.png')
        .setDescription(`These are the avaliable commands for the \`EpiBot\` !\nThe bot prefix is: \`!\` `)
        .addField("Commands for members :", "``help`` ``serverinfo`` ``userinfo`` ``ping`` ``uptime`` ``rps`` ``myxp``")
        .addField("Commands for EpiAmbassadeur :", "``addxp``")
        .addField("Commands for EpiAdmin :", "`Kick` `clear` `say`")
        .setTimestamp()
	    .setFooter('EpiBot by MrBartou', 'https://image.noelshack.com/fichiers/2020/21/3/1589981162-epitech-logo-signature-noir.png');
        message.author.send(Sembed)
    }
}

module.exports.help = {
    name: "help"
}