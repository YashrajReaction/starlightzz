const Discord = module.require("discord.js");
const db = require("quick.db");
const { crossemoji, sucessemoji, timeemoji } = require("./../../emojis.json")
const ms = require("parse-ms");

module.exports = {
  name: "hourly",
  aliases: ["hourlycash"],
  description: "Get hourly cash",
  run: async (client, message, args) => {
    
    let user = message.author;

  let timeout = 3600000;
  let amount = Math.floor(Math.random() * 150)

  let hourly = await db.fetch(`hourly_${message.guild.id}_${user.id}`);

  if (hourly !== null && timeout - (Date.now() - hourly) > 0) {
    let time = ms(timeout - (Date.now() - hourly));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`${timeemoji} You've already collected your hourly reward\nCollect it again in ${time.minutes}m ${time.seconds}s `);
    message.channel.send({embeds: [timeEmbed]})
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
    .setAuthor(`${user.username}'s Hourly`, `${user.displayAvatarURL()}`)
.setTimestamp()
  .setDescription(`${sucessemoji} You've collected your hourly reward of ${amount} Cash`);
  message.channel.send({embeds: [moneyEmbed]})
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`hourly_${message.guild.id}_${user.id}`, Date.now())
  }
  },
};
