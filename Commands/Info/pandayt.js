const Discord = require("discord.js");

module.exports = {
  name: "annie",
  description: "Get information about AnnieIzLive youtube channel",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
      .setTitle("AnnieIzLive's Youtube:")
      .setColor("GREEN")
      .setDescription("")
      .setFooter(`Requested By: ${message.author.username}`);
    message.channel.send({ embeds: [embed] });
  },
};
