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
      .setImage("https://media.discordapp.net/attachments/792691782399557634/932519645662019635/New_Project_17_ED5503E.gif")
      .setFooter(`Requested By: ${message.author.username}`);
    message.channel.send({embeds: [mainPage], components: [row]})
  },
};
