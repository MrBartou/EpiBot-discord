const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
const config = require("./config.json");
const monnaie = require('./database/xp.json');

require("./utils/eventHandler")(bot)

bot.commands = new Discord.Collection();

bot.login(config.token);

fs.readdir("./commands/", (err, files) => {
    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("Aucune commande trouver.")
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} Ok !`);
        bot.commands.set(props.help.name, props)
    })
})

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    let commandFile = bot.commands.get(command.slice(prefix.length));

    if(commandFile) commandFile.run(bot, message, args)

    if(!monnaie[message.author.id]) {
        monnaie[message.author.id] = {
            monnaie: 0
        };
    }

    let baseMonnaie = 0;
    let addMonnaie = 0;

    if (addMonnaie === baseMonnaie) {
        monnaie[message.author.id] = {
            monnaie: monnaie[message.author.id].monnaie
        };
        fs.writeFile('./database/xp.json', JSON.stringify(monnaie), err => {
            if (err) console.log(err);
        });
    }
});

bot.on('guildMemberAdd', member => {

    let newEmbed = new Discord.MessageEmbed()
    .setAuthor("-Nouveaux Membre-")
    .addField("**bienvenue sur le serveur Epi-Lounge ! :**", `${member.user.username}`)
    .addField("Nous sommes désormais :", `${member.guild.memberCount}`)
    .setColor('RANDOM')
    .setTimestamp()
    .setFooter('EpiBot by MrBartou', 'https://image.noelshack.com/fichiers/2020/21/3/1589981162-epitech-logo-signature-noir.png');
    member.guild.channels.cache.get("690942921318465618").send(newEmbed)

    let membre = member.guild.roles.cache.get("690633705881862235")
    member.roles.add(membre)
})

