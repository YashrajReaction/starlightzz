const Discord = require("discord.js");

module.exports = {
  name: "youtube2",
  description: "Get information about AnnieIzLive youtube channel",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    let embed = new Discord.MessageEmbed()
      .setTitle("Youtube:")
      .setColor("GREEN")
      .setDescription("<a:yt:932357661914198136> Youtube ➜ [AnnieIzLive Youtube Channel](https://youtube.com/channel/UCDh_z_n5_2jiQDVU7BTa-1A)")
      //.setImage("https://media.discordapp.net/attachments/792691782399557634/932489078379798559/ezgif.com-gif-maker.gif")
      .setFooter(`Requested By: ${message.author.username}`);
    message.channel.send({ embeds: [embed] });
  },
};
