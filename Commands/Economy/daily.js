const Discord = module.require("discord.js");
const db = require("quick.db");
const { crossemoji, sucessemoji, timeemoji } = require("./../../emojis.json")
const ms = require("parse-ms");

module.exports = {
  name: "daily",
  aliases: ["dayilycash"],
  description: "Get daily cash",
  run: async (client, message, args) => {
    
    let user = message.author;

  let timeout = 86400000;
  let amount = Math.floor(Math.random() * 900) + 100;

  let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`${timeemoji} You've already collected your daily reward\n\nCollect it again in ${time.hours}h ${time.minutes}m ${time.seconds}s `);
    message.channel.send({embeds: [timeEmbed]})
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`${sucessemoji} You've collected your daily reward of ${amount} Cash`);
  message.channel.send({embeds: [moneyEmbed]})
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`daily_${message.guild.id}_${user.id}`, Date.now())
  }
  },
};
