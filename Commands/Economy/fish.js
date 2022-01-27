const Discord = module.require("discord.js");
const db = require("quick.db");
const { sucessemoji, crossemoji, total } = require("./../../emojis.json")
const ms = require("parse-ms");

module.exports = {
  name: "fish",
  aliases: ["fishing", "usefishingrod", "f"],
  description: "Fishing",
  run: async (client, message, args) => {
    
    let user = message.author;
    let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setTitle("Required Fishing-Rod")
        .setDescription(`${crossemoji} You don't have fishingrod buy one from the shop use s!buy fishingrod`)
        let fishingrod = await db.fetch(`fishingrod_${message.guild.id}_${user.id}`)

        if (fishingrod < 1) return message.channel.send({embeds: [Embed2]})
    let author = await db.fetch(`fish_${message.guild.id}_${user.id}`)

    let rod = await db.fetch(`fishingrod_${message.guild.id}_${user.id}`)
    let rodusage = await db.fetch(`rodusage_${message.guild.id}_${user.id}`)
    
    if(rodusage) {
      if(rodusage >= 20) {
        await db.subtract(`fishingrod_${message.guild.id}_${user.id}`, 1)
        await db.subtract(`rodusage_${message.guild.id}_${user.id}`, 20)
    return message.reply("Uh Oh! Your fishing rod has broken! Go buy a new one!")
   }
    }
    let timeout = 60000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${crossemoji} You have already used your fishingrod recently\nTry again in ${time.seconds}s `);
        message.channel.send({embeds: [timeEmbed]})
      } else {

        let replies = 
   ["Yellow Fish :tropical_fish:", 
    "Fat Fish :blowfish:", 
    "Blue Fish :fish:",
    "Coconut :coconut:",
    "Dolphin :dolphin:",
    "Lobster :lobster:",
    "Shark :shark:",
    "Crab :crab:",
    "Squid :squid:",
    "Whale :whale2:",
    "Shrimp :shrimp:",
    "Octopus :octopus:",
    "Duck :duck:",
    "Diamond :gem:"];

        let result = Math.floor((Math.random() * replies.length));
        let quantity = Math.floor(Math.random() * 5)
        let amount = Math.floor(Math.random() * 500)
        let embed1 = new Discord.MessageEmbed()
        .setAuthor(`${user.username} Fishing`, `${user.displayAvatarURL()}`)
.setTimestamp()
        .setColor("#FFFFFF")
        .setDescription(`${sucessemoji} You cast out your line and brought back **${quantity} ${replies[result]}**, you sell them and earned ${amount} Cash`);
        message.channel.send({embeds: [embed1]})
        
        db.add(`money_${message.guild.id}_${user.id}`, amount)
        db.set(`fish_${message.guild.id}_${user.id}`, Date.now())
        db.add(`rodusage_${message.guild.id}_${user.id}`, 1)
    };
  },
};
