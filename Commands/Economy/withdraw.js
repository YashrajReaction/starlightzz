const Discord = module.require("discord.js");
const db = require("quick.db");
const { sucessemoji, crossemoji, total } = require("./../../emojis.json")

module.exports = {
  name: "withdraw",
  aliases: ["with"],
  description: "withdraw some cash from your bank",
  run: async (client, message, args) => {
    let user = message.author;

  let member = db.fetch(`money_${message.guild.id}_${user.id}`)
  let member2 = db.fetch(`bank_${message.guild.id}_${user.id}`)

  if (args[0] == 'all') {
    let money = await db.fetch(`bank_${message.guild.id}_${user.id}`)
    
    db.subtract(`bank_${message.guild.id}_${user.id}`, money)
    db.add(`money_${message.guild.id}_${user.id}`, money)
    let embed5 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`${sucessemoji} You have withdrawn all your coins from your bank`);
  message.channel.send({embeds: [embed5]})
  
  } else {

  let embed2 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`${crossemoji} Specify an amount to withdraw`);
  
  if (!args[0]) {
      return message.channel.send({embeds: [embed2]})
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`${crossemoji} You can't withdraw negative money`);

  if (message.content.includes('-')) { 
      return message.channel.send({embeds: [embed3]})
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`${crossemoji} You don't have that much money in the bank`);

  if (member2 < args[0]) {
      return message.channel.send({embeds: [embed4]})
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`${sucessemoji} You have withdrawn ${args[0]} coins from your bank`);

  message.channel.send({embeds: [embed5]})
  db.subtract(`bank_${message.guild.id}_${user.id}`, args[0])
  db.add(`money_${message.guild.id}_${user.id}`, args[0])
  }
  },
};
