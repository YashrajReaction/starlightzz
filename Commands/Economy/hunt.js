const Discord = module.require("discord.js");
const db = require("quick.db");
const { sucessemoji, crossemoji, total } = require("./../../emojis.json")
const ms = require("parse-ms");

module.exports = {
  name: "hunt",
  aliases: ["hunting", "usehuntingrifle", "h"],
  description: "Hunting",
  run: async (client, message, args) => {
    
    let user = message.author;
    let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setTitle("Required HuntingRifle")
        .setDescription(`${crossemoji} You don't have Huntingrifle buy one from the shop use s!buy huntingrifle`)
        let huntingrifle = await db.fetch(`huntingrifle_${message.guild.id}_${user.id}`)

        if (huntingrifle < 1) return message.channel.send({embeds: [Embed2]})
    let author = await db.fetch(`hunt_${message.guild.id}_${user.id}`)

    let rod = await db.fetch(`huntingrifle_${message.guild.id}_${user.id}`)
    let rodusage = await db.fetch(`rifleusage_${message.guild.id}_${user.id}`)
    
    if(rodusage) {
      if(rodusage >= 20) {
        await db.subtract(`huntingrifle_${message.guild.id}_${user.id}`, 1)
        await db.subtract(`rifleusage_${message.guild.id}_${user.id}`, 20)
    return message.reply("Uh Oh! Your Hunting rifle has broken! Go buy a new one!")
   }
    }
    let timeout = 60000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${crossemoji} You have already used your hunting-rifle recently\nTry again in ${time.seconds}s `);
        message.channel.send({embeds: [timeEmbed]})
      } else {

        let replies = 
   ["Pig 🐖", 
    "Lion 🦁", 
    "Cow 🐄",
    "Rabbit 🐇",
    "Fox 🦊",
    "Sheep 🐑",
    "Giraffe 🦒",
    "Crocodile 🐊",
    "Tiger 🐅",
    "Bull 🐂",
    "Camel 🐪",
    "Elephant 🐘",
    "Peacock 🦚",
    "kangaroo 🦘"];

        let result = Math.floor((Math.random() * replies.length));
        let quantity = Math.floor(Math.random() * 5)
        let amount = Math.floor(Math.random() * 700)
        let embed1 = new Discord.MessageEmbed()
        .setAuthor(`${user.username} Hunting`, `${user.displayAvatarURL()}`)
        .setTimestamp()
        .setColor("#FFFFFF")
        .setDescription(`${sucessemoji} You went hunting and brought back **${quantity} ${replies[result]}**, you sell them and earned ${amount} Cash`);
        message.channel.send({embeds: [embed1]})
        
        db.add(`money_${message.guild.id}_${user.id}`, amount)
        db.set(`hunt_${message.guild.id}_${user.id}`, Date.now())
        db.add(`rifleusage_${message.guild.id}_${user.id}`, 1)
    };
  },
};
