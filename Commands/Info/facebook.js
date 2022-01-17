const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
  name: "facebook",
  description: "Get information about AnnieIzLive youtube channel",
  botPerms: ["EMBED_LINKS"],
  run: async (client, message, args) => {
    const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("<:facebook:932521183247761429> Starlightz")
    .setStyle("LINK")
    .setURL(`https://www.facebook.com/Starlightz-107905138244863/`))
    
    
    let mainPage = new MessageEmbed()
      .setTitle("Starlightz's Facebook Page:")
      .setColor("GREEN")
      .setDescription("<:facebook:932521183247761429> Facebook ➜ [Starlightz Facebook Page](https://www.facebook.com/Starlightz-107905138244863/)")
      .setImage("https://media.discordapp.net/attachments/792691782399557634/932523397391466526/New_Project_18_3B2610E.gif")
      .setFooter(`Requested By: ${message.author.username}`);
    message.channel.send({embeds: [mainPage], components: [row]})
  },
};
