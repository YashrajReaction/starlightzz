const Discord = module.require("discord.js");
const db = require("quick.db");
const { timeemoji, sucessemoji, total } = require("./../../emojis.json")
const ms = require("parse-ms");

module.exports = {
  name: "beg",
  aliases: ["begging"],
  description: "beggin for cash xd",
  run: async (client, message, args) => {
    let user = message.author;

    let timeout = 45000;
    let amount = Math.floor(Math.random() * 60)

    let beg = await db.fetch(`beg_${message.guild.id}_${user.id}`);

    if (beg !== null && timeout - (Date.now() - beg) > 0) {
    let time = ms(timeout - (Date.now() - beg));
  let timeEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`${timeemoji} You've already begged recently\nBeg again in ${time.seconds}s `);
    message.channel.send({embeds: [timeEmbed]})
  } else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setAuthor(`${user.username} begged`, `${user.displayAvatarURL()}`)
  .setColor("#FFFFFF")
  .setDescription(`${sucessemoji} You've begged and received ${amount} Cash`)
  .setFooter("imagine begging xd")
  .setTimestamp()
  message.channel.send({embeds: [moneyEmbed]})
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.set(`beg_${message.guild.id}_${user.id}`, Date.now())
  }
  },
};
