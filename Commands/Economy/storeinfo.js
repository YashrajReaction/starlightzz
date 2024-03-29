const Discord = module.require("discord.js");
const db = require("quick.db");
const { sucessemoji, crossemoji, total } = require("./../../emojis.json")

module.exports = {
  name: "storeinfo",
  aliases: ["shopinfo"],
  description: "Information about Store/Shops",
  run: async (client, message, args) => {
    
    if (args[0] == 'bronze') {
    
      let embed = new Discord.MessageEmbed()
      .setDescription("**Bronze Rank**\n\nBenefits: Chance to get more Cash from robbing someone")
      .setColor("#FFFFFF")
      message.channel.send({embeds: [embed]})
    } else if(args[0] == 'nikes') {
      let embed = new Discord.MessageEmbed()
      .setDescription("**Fresh Nikes**\n\nBenefits: Chance to win Cash, roles on our Discord Server + More by leading the leaderboard")
      .setColor("#FFFFFF")
      message.channel.send({embeds: [embed]})
    } else if(args[0] == 'car') {
      let embed = new Discord.MessageEmbed()
      .setDescription("**Car**\n\nBenefits: Chance to win Cash, roles on our Discord Server + More by leading the leaderboard")
      .setColor("#FFFFFF")
      message.channel.send({embeds: [embed]})
  } else if(args[0] == 'mansion') {
    let embed = new Discord.MessageEmbed()
    .setDescription("**Mansion**\n\nBenefits: Chance to win Cash, roles on our Discord Server + More by leading the leaderboard")
    .setColor("#FFFFFF")
    message.channel.send({embeds: [embed]})
  }

  },
};
