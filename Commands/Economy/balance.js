const Discord = module.require("discord.js");
const db = require("quick.db");
const { cashemoji, cashbank, total } = require("./../../emojis.json")
module.exports = {
  name: "balance",
  aliases: ["cash", "money", "bal"],
  description: "Get user balance",
  run: async (client, message, args) => {
    let user = message.mentions.members.first() || message.author;
let bal = db.fetch(`money_${message.guild.id}_${user.id}`)
if (bal === null) bal = 0;
let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;
let net = bal + bank;
    
let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`${user}'s Balance:\n\n**Cash:**\n${cashemoji}${bal}\n**Bank:**\n${cashbank}${bank}\n**Total:**\n${total}${net}`)
  .setTimestamp();
  message.channel.send({embeds: [moneyEmbed]})
  },
};
