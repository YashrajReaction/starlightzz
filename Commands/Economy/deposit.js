const Discord = module.require("discord.js");
const db = require("quick.db");
const { sucessemoji, crossemoji, total } = require("./../../emojis.json")
const ms = require("parse-ms");

module.exports = {
  name: "deposit",
  aliases: ["dep"],
  description: "Deposit your cash to the bank",
  run: async (client, message, args) => {
    
    let user = message.author;

  let member = db.fetch(`money_${message.guild.id}_${user.id}`)
  let member2 = db.fetch(`bank_${message.guild.id}_${user.id}`)

  if (args[0] == 'all') {
    let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
    let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)

    let embedbank = new Discord.MessageEmbed()
    .setColor('#FFFFFF')
    .setDescription(`${crossemoji} You don't have any money to deposit`)

    if(money === 0) return message.channel.send({embeds: [embedbank]})

    db.add(`bank_${message.guild.id}_${user.id}`, money)
    db.subtract(`money_${message.guild.id}_${user.id}`, money)
    let embed5 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`${sucessemoji} You have deposited all your coins into your bank`);
  message.channel.send({embeds: [embed5]})
    
    } else {
  
  let embed2 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`${crossemoji} Specify an amount to deposit`);
  
  if (!args[0]) {
      return message.channel.send({embeds: [embed2]})
      .catch(err => console.log(err))
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`${crossemoji} You can't deposit negative money`);

  if (message.content.includes('-')) { 
      return message.channel.send({embeds: [embed3]})
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`${crossemoji} You don't have that much money`);

  if (member < args[0]) {
      return message.channel.send({embeds: [embed4]})
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`${sucessemoji} You have deposited ${args[0]} Cash into your bank`);

      message.channel.send({embeds: [embed5]})
  db.add(`bank_${message.guild.id}_${user.id}`, args[0])
  db.subtract(`money_${message.guild.id}_${user.id}`, args[0])
  }
  },
};
