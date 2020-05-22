const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

    answered = true;
    cAnswer = "";
    userAnswer = "";

    number = 7
    var random = Math.floor(Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
        case 1: message.channel.send("Quel est le nom du directeur d'epitech Toulouse ?"); cAnswer = "Jerome"; break;
        case 2: message.channel.send("En quelle année a été créé Epitech ?"); cAnswer = "1999"; break;
        case 3: message.channel.send("Comment s'appellera ton meilleur ami l'année prochaine ?"); cAnswer = "Marvin"; break;
        case 4: message.channel.send("De quel groupe fait partie Epitech ?"); cAnswer = "Ionis"; break;
        case 5: message.channel.send("Combien d'école partage le bâtiment avec Epitech Toulouse ?"); cAnswer = "4"; break;
        case 6: message.channel.send("En combien d'années obtient-on le diplôme PGE d'Epitech ?"); cAnswer = "5"; break;
        case 7: message.channel.send("Comment s'appelle la nouvelle formation créée en 2020 avec Epitech ?"); cAnswer = "Epitech digital"; break;
    }
    answered = false;
    quizUser = message.author;

    const filter = m => m.author.id === message.author.id;
    message.channel.awaitMessages(filter, {max:1, time: 10000}).then(collected => {

    if (answered == false && message.author == quizUser) {
        userAnswer = collected.first().content;
        if (userAnswer == cAnswer) {
            message.reply("Bien joué ! :smile:");
        } else {
            message.reply("Aie, faut réviser ses classiques ! :(");
        }
        answered = true; cAnswer = ""; userAnswer = "";
    }})
}
module.exports.help = {
    name: "quiz"
}