const Discord = require("discord.js");
const color = require("../config/colors.json");
const monnaie = require('../database/xpgroupe.json');
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    if(!message.member.roles.cache.has("702504401302192239")) return message.channel.send("**You can not use this command!**")

    var sortByProperty = function (property) {
        return function (x, y) {
            return ((x[property] === y[property]) ? 0 : ((x[property] > y[property]) ? 1 : -1));
        };
    };

    arrayName.sort(sortByProperty('monnaie'));
    console.log(arrayName);
}

module.exports.help = {
    name: "showxp"
}