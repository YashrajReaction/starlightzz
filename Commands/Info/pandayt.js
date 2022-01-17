const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "panda",
  description: "Get information about AnnieIzLive youtube channel",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("<a:yt:932357661914198136> PandaIzLive")
    .setStyle("LINK")
    .setURL(`https://youtube.com/channel/UCguQBC6d05oi_AfTYwZup7Q`))
    
    
    let mainPage = new MessageEmbed()
      .setTitle("PandaIzLive's Youtube:")
      .setColor("GREEN")
      .setDescription("<a:yt:932357661914198136> Youtube ➜ [PandaIzLive Youtube Channel](https://youtube.com/channel/UCguQBC6d05oi_AfTYwZup7Q)")
      .setImage("https://media.discordapp.net/attachments/780854968823054348/932527829055324190/ezgif.com-gif-maker_3.gif")
      .setFooter(`Requested By: ${message.author.username}`);
    message.channel.send({embeds: [mainPage], components: [row]})
  },
};
