const Discord = module.require("discord.js");
const db = require("quick.db");
const { sucessemoji, crossemoji, total } = require("./../../emojis.json")
const slotItems = ["<:Grape:618765748940177421>", "<:Watermelon:618765904318038027>", "<:Orange:618765805596835880>", "<:Apple:618765871862513695>", "<:7_:618765717499805706>", "<:Strawberry:618765828929617930>", "<:Cherry:618765778094784513>"];

module.exports = {
  name: "slots",
  aliases: [""],
  description: "Use you cash and earn some extra cash",
  run: async (client, message, args) => {
    
    let user = message.author;
    let moneydb = await db.fetch(`money_${message.guild.id}_${user.id}`)
    let money = parseInt(args[0]);
    let win = false;

    let moneymore = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`${crossemoji} You are betting more than you have`);

    let moneyhelp = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`${crossemoji} Specify an amount`);

    if (!money) return message.channel.send({embeds: [moneyhelp]});
    if (money > moneydb) return message.channel.send({embeds: [moneymore]});

    let number = []
    for (i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2]) { 
        money *= 9
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        money *= 2
        win = true;
    }
    if (win) {
        let slotsEmbed1 = new Discord.MessageEmbed()
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nYou won ${money} Cash`)
            .setColor("#FFFFFF")
        message.channel.send({embeds: [slotsEmbed1]})
        db.add(`money_${message.guild.id}_${user.id}`, money)
    } else {
        let slotsEmbed = new Discord.MessageEmbed()
            .setDescription(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\n\nYou lost ${money} Cash`)
            .setColor("#FFFFFF")
        message.channel.send({embeds: [slotsEmbed]})
        db.subtract(`money_${message.guild.id}_${user.id}`, money)
    }
  },
};
