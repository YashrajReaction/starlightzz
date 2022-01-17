const Discord = module.require("discord.js");
const db = require("quick.db");
const { crossemoji, sucessemoji, total } = require("./../../emojis.json")
const ms = require("parse-ms");

module.exports = {
  name: "pay",
  aliases: ["give"],
  description: "Pay some cash to other users!",
  run: async (client, message, args) => {
    
    let user = message.mentions.members.first() 

  let member = db.fetch(`money_${message.guild.id}_${message.author.id}`)

  let embed1 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`${crossemoji} Mention someone to pay`);

  if (!user) {
      return message.channel.send({embeds: [embed1]})
  }
  let embed2 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`${crossemoji} Specify an amount to pay`);
  
  if (!args[1]) {
      return message.channel.send({embeds: [embed2]})
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`${crossemoji} You can't pay someone negative money`);

  if (message.content.includes('-')) { 
      return message.channel.send({embeds: [embed3]})
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`${crossemoji} You don't have that much money`);

  if (member < args[1]) {
      return message.channel.send({embeds: [embed4]})
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`${sucessemoji} You have payed ${user.user.username} ${args[1]} Cash!`);

  message.channel.send({embeds: [embed5]})
  db.add(`money_${message.guild.id}_${user.id}`, args[1])
  db.subtract(`money_${message.guild.id}_${message.author.id}`, args[1])

  },
};
