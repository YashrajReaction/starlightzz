const Discord = module.require("discord.js");
const db = require("quick.db");
const { sucessemoji, crossemoji, total } = require("./../../emojis.json")
const ms = require("parse-ms");

module.exports = {
  name: "work",
  aliases: ["working"],
  description: "Work hard and earn some Cash!",
  run: async (client, message, args) => {
    
    let user = message.author;
    let author = await db.fetch(`work_${message.guild.id}_${user.id}`)

    let timeout = 300000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${crossemoji} You have already worked recently\nTry again in ${time.minutes}m ${time.seconds}s `);
        message.channel.send({embeds: [timeEmbed]})
      } else {

        let replies = ['Programmer','Builder','Waiter','Busboy','Chief','Mechanic','Bot Developer']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 80) + 1;
        let embed1 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`${sucessemoji} You worked as a ${replies[result]} and earned ${amount} Cash`);
        message.channel.send({embeds: [embed1]})
        
        db.add(`money_${message.guild.id}_${user.id}`, amount)
        db.set(`work_${message.guild.id}_${user.id}`, Date.now())
    };
  },
};
