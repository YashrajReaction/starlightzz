const Discord = module.require("discord.js");
const db = require("quick.db");
const { sucessemoji, crossemoji, total } = require("./../../emojis.json")

module.exports = {
  name: "storeitems",
  aliases: ["shopitems"],
  description: "Available store items",
  run: async (client, message, args) => {
    
    let embed = new Discord.MessageEmbed()
    .setDescription("**VIP Ranks**\n\nBronze: 3500 Coins [s!buy bronze]\n\n**Lifestyle Items**\n\nFresh Nikes: 600 [s!buy nikes]\nCar: 800 [s!buy car]\nMansion: 1200 [s!buy mansion]")
    .setColor("#FFFFFF")
    message.channel.send({embeds: [embed]})

  },
};
