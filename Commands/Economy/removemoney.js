const Discord = module.require("discord.js");
const db = require("quick.db");
const { sucessemoji, cashbank, total } = require("./../../emojis.json")

module.exports = {
  name: "removemoney",
  aliases: ["rmcash"],
  description: "Remove some cash (owner only)",
  run: async (client, message, args) => {
    
    let ownerID = '618463472165978132'
  if(message.author.id !== ownerID) return;

  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    db.subtract(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`${sucessemoji} Removed ${args[1]} Cash\n\nNew Balance: ${bal}`);
    message.channel.send({embeds: [moneyEmbed]})
  },
};
