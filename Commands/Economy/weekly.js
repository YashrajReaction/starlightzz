const Discord = module.require("discord.js");
const db = require("quick.db");
const { sucessemoji, crossemoji, timeemoji } = require("./../../emojis.json")
const ms = require("parse-ms");

module.exports = {
  name: "weekly",
  aliases: ["weeklycash"],
  description: "Get weekly cash!",
  run: async (client, message, args) => {
    
    let user = message.author;
  let timeout = 604800000;
  let amount = Math.floor(Math.random() * 5000)

  let weekly = await db.fetch(`weekly_${message.guild.id}_${user.id}`);

  if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
    let time = ms(timeout - (Date.now() - weekly));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`${timeemoji} You have already collected your weekly reward\n\nCollect it again in ${time.days}d ${time.hours}h ${time.minutes}m ${time.seconds}s `);
    message.channel.send({embeds: [timeEmbed]})
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
    .setAuthor(`${user.username}'s Weekly `, `${user.displayAvatarURL()}`)
.setTimestamp()
  .setDescription(`${sucessemoji} You've collected your weekly reward of ${amount} Cash`);
  message.channel.send({embeds: [moneyEmbed]})
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`weekly_${message.guild.id}_${user.id}`, Date.now())

  }
  },
};
