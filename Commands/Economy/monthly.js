const Discord = module.require("discord.js");
const db = require("quick.db");
const { crossemoji, sucessemoji, timeemoji } = require("./../../emojis.json")
const ms = require("parse-ms");

module.exports = {
  name: "monthly",
  aliases: ["monthlycash"],
  description: "Get monthly cash",
  run: async (client, message, args) => {
    
    let user = message.author;

  let timeout = 2628002880;
  let amount = Math.floor(Math.random() * 8000)

  let monthly = await db.fetch(`monthly_${message.guild.id}_${user.id}`);

  if (monthly !== null && timeout - (Date.now() - monthly) > 0) {
    let time = ms(timeout - (Date.now() - monthly));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`${timeemoji} You've already collected your monthly reward\nCollect it again in ${time.days}d ${time.hours}h ${time.minutes}m `);
    message.channel.send({embeds: [timeEmbed]})
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
    .setAuthor(`${user.username}'s Monthly `, `${user.displayAvatarURL()}`)
.setTimestamp()
  .setDescription(`${sucessemoji} You've collected your monthly reward of ${amount} Cash`);
  message.channel.send({embeds: [moneyEmbed]})
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`monthly_${message.guild.id}_${user.id}`, Date.now())
  }
  },
};
